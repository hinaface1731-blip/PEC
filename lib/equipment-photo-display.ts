interface PhotoDisplay {
  whiteBackdrop?: boolean
  openFrame?: boolean
  bottomCrop?: number
}

const openFrame = { whiteBackdrop: true, openFrame: true }

export const equipmentPhotoDisplay: Partial<Record<string, PhotoDisplay>> = {
  '/images/equipment/boylesC6.png': openFrame,
  '/images/equipment/egr800.png': openFrame,
  '/images/equipment/epc300.png': openFrame,
  '/images/equipment/forwardC6.jpg': openFrame,
  '/images/equipment/Christensen-CS14.png': openFrame,
  '/images/equipment/christensen-ct20.png': openFrame,
  '/images/equipment/vp1000.jpg': { whiteBackdrop: true },
  '/images/equipment/ingeo-logging-kit.webp': { whiteBackdrop: true },
  '/images/equipment/igt-43-kit.webp': { whiteBackdrop: true },
  '/images/equipment/vodovozka.png': { whiteBackdrop: true },
  '/images/equipment/bulldozer.png': { whiteBackdrop: true },
  '/images/equipment/excavator.jpg': { whiteBackdrop: true },
  '/images/equipment/pogruzchik.jpg': { whiteBackdrop: true },
  '/images/equipment/vahtovka.png': { whiteBackdrop: true },
  '/images/equipment/zolotinka-lab.webp': { bottomCrop: 592 / 629 },
}

function makeBackdropTransparent({ data, width, height }: ImageData, clearFrameOpenings = false) {
  const pixelCount = width * height
  const visited = new Uint8Array(pixelCount)
  const queue = new Uint32Array(pixelCount)
  let start = 0
  let end = 0

  function visit(pixel: number) {
    if (visited[pixel]) return
    visited[pixel] = 1

    const index = pixel * 4
    const darkest = Math.min(data[index], data[index + 1], data[index + 2])
    const lightest = Math.max(data[index], data[index + 1], data[index + 2])
    if (darkest >= 217 && lightest - darkest <= 18) queue[end++] = pixel
  }

  // Limit removal to the backdrop that is connected to the edges of the image.
  for (let x = 0; x < width; x++) {
    visit(x)
    visit((height - 1) * width + x)
  }
  for (let y = 1; y < height - 1; y++) {
    visit(y * width)
    visit(y * width + width - 1)
  }

  function traceBackdrop() {
    while (start < end) {
      const pixel = queue[start++]
      const x = pixel % width
      if (x > 0) visit(pixel - 1)
      if (x < width - 1) visit(pixel + 1)
      if (pixel >= width) visit(pixel - width)
      if (pixel < pixelCount - width) visit(pixel + width)
    }
  }

  traceBackdrop()

  if (clearFrameOpenings) {
    const isWhite = (pixel: number) => {
      const index = pixel * 4
      return Math.min(data[index], data[index + 1], data[index + 2]) >= 250
    }
    // Bright patches two pixels from their edges can also be backdrop inside a rig's frame.
    for (let y = 2; y < height - 2; y++) {
      for (let x = 2; x < width - 2; x++) {
        const pixel = y * width + x
        if (!visited[pixel] && isWhite(pixel) && isWhite(pixel - 2) && isWhite(pixel + 2)
          && isWhite(pixel - 2 * width) && isWhite(pixel + 2 * width)) {
          visit(pixel)
        }
      }
    }
    traceBackdrop()
  }

  for (let i = 0; i < end; i++) {
    const pixel = queue[i]
    const index = pixel * 4
    const darkest = Math.min(data[index], data[index + 1], data[index + 2])
    const opacity = 255 - darkest
    if (opacity <= 13) {
      data[index + 3] = 0
    } else {
      // Preserve faint shadows without keeping their original white matte.
      for (let channel = 0; channel < 3; channel++) {
        data[index + channel] = ((data[index + channel] - darkest) * 255) / opacity
      }
      data[index + 3] = data[index + 3] * opacity / 255
    }
  }
}

export function drawEquipmentPhoto(canvas: HTMLCanvasElement, image: HTMLImageElement, display: PhotoDisplay) {
  const context = canvas.getContext('2d', { willReadFrequently: display.whiteBackdrop })
  if (!context || !image.naturalWidth || !image.naturalHeight) return false

  const sourceHeight = Math.round(image.naturalHeight * (display.bottomCrop ?? 1))
  const scale = Math.min(1, 800 / Math.max(image.naturalWidth, sourceHeight))
  canvas.width = Math.max(1, Math.round(image.naturalWidth * scale))
  canvas.height = Math.max(1, Math.round(sourceHeight * scale))
  context.drawImage(image, 0, 0, canvas.width, Math.max(1, Math.round(image.naturalHeight * scale)))

  if (display.whiteBackdrop) {
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height)
    makeBackdropTransparent(pixels, display.openFrame)
    context.putImageData(pixels, 0, 0)
  }

  return true
}
