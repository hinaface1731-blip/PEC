// types/yandex-maps-v3.d.ts
declare global {
  interface Window {
    ymaps3: {
      YMap: any
      YMapDefaultSchemeLayer: any
      YMapDefaultMarker: any
      YMapZoomControl: any
      YMapGeolocationControl: any
      YMapDefaultFeaturesLayer: any
      YMapListener: any
      ready: () => Promise<void>
    }
  }
}

export {}