interface Manufacturer {
  name: string
  nameEn?: string
  url: string
}

const egr = { name: 'EGR', url: 'https://egrcn.com/en/' }
const shantui = { name: 'Shantui', url: 'https://www.shantui.com/' }

export const equipmentManufacturers: Partial<Record<string, Manufacturer>> = {
  '/images/equipment/cs-1000.png': { name: 'Atlas Copco', url: 'https://www.atlascopco.com/' },
  '/images/equipment/boylesC6.png': {
    name: 'Epiroc',
    url: 'https://www.epiroc.com/en-us/products/drill-rigs/exploration-drill-rigs/core-drilling-rigs/boyles-c6',
  },
  '/images/equipment/egr800.png': egr,
  '/images/equipment/epc300.png': egr,
  '/images/equipment/urb-110.png': {
    name: 'Стройдормаш',
    nameEn: 'Stroydormash',
    url: 'https://sdm-zavod.ru/product/geologicheskie-burovye-mashiny/urb-110/',
  },
  '/images/equipment/urb2d3.png': {
    name: 'МОЗБТ',
    nameEn: 'MOZBT',
    url: 'https://www.mozbt.com/burovye-ustanovki/modelnyj-ryad-urb/burovaya-ustanovka-urb-2-d3',
  },
  '/images/equipment/rs-90.png': {
    name: 'Алмазгеобур',
    nameEn: 'Almazgeobur',
    url: 'https://almazgeobur.ru/products/main/exploration/rs-90',
  },
  '/images/equipment/s-15.png': {
    name: 'DBC Makina',
    url: 'https://www.dbcmakina.com/Products/DrillRigs/S-15',
  },
  '/images/equipment/forwardC6.jpg': { name: 'Forward', url: 'https://www.forwardrill.com/' },
  '/images/equipment/Christensen-CS14.png': { name: 'Atlas Copco', url: 'https://www.atlascopco.com/' },
  '/images/equipment/bulldril-1200.png': { name: 'Barkom Group', url: 'https://www.barkomltd.com/en/' },
  '/images/equipment/st-20.png': { name: 'Soilmec', url: 'https://www.soilmec.co.uk/equipment/mini-piling/st-range/' },
  '/images/equipment/christensen-ct20.png': {
    name: 'Epiroc',
    url: 'https://www.epiroc.com/ru-kz/products/drill-rigs/exploration-drill-rigs/core-drilling-rigs/christensen-ct20',
  },
  '/images/equipment/pbu-1200.png': {
    name: 'Алтайгеомаш',
    nameEn: 'Altaygeomash',
    url: 'https://innovaltai.ru/products/detail.php?ID=321',
  },
  '/images/equipment/minimag.png': { name: 'Geodevice', url: 'https://geodevice.uz/main/magnetometers/minimag/' },
  '/images/equipment/cikl8.png': {
    name: 'ЦИКЛ',
    nameEn: 'CYKL',
    url: 'https://tsikl-geo.com/ru/',
  },
  '/images/equipment/nord.png': {
    name: 'Северо-Запад',
    nameEn: 'Severo-Zapad',
    url: 'https://nord-mt.com/rus',
  },
  '/images/equipment/vp1000.jpg': { name: 'АСТРА', nameEn: 'ASTRA', url: 'https://astrageotool.ru/' },
  '/images/equipment/tomography.png': { name: 'Geodevice', url: 'https://geodevice.uz/main/electric/units/' },
  '/images/equipment/ingeo-logging-kit.webp': {
    name: 'Ингео-Сервис',
    nameEn: 'Ingeo-Service',
    url: 'https://ingeo-servis.ru/catalog/pribory-dlya-issledovaniya-rudnyh-skvazhin-1748424974239',
  },
  '/images/equipment/mircoscope.png': {
    name: 'OPTO-EDU',
    url: 'https://www.cnoec.com/quality-1893836-metal-polarizing-microscopes-laboratory-binocular-microscope-rohs-a15-1017',
  },
  '/images/equipment/trimble-r12i.png': {
    name: 'Trimble',
    url: 'https://geospatial.trimble.com/en/products/hardware/trimble-r12i/',
  },
  '/images/equipment/south-galaxy-g1.png': {
    name: 'SOUTH',
    url: 'https://southinstrument.com/product/details/pro_tid/3/id/10.html',
  },
  '/images/equipment/south-galaxy-g9.png': {
    name: 'SOUTH',
    url: 'https://www.southinstrument.com/product/details/pro_tid/3.html/id/233.html',
  },
  '/images/equipment/dji.png': { name: 'DJI', url: 'https://enterprise.dji.com/' },
  '/images/equipment/trekol.png': {
    name: 'ТРЭКОЛ',
    nameEn: 'TREKOL',
    url: 'https://www.trecol.ru/catalog/car/vnedorozhnoe-transportnoe-sredstvo-snegobolotokhod-trekol-sever/',
  },
  '/images/equipment/vodovozka.png': {
    name: 'SHACMAN (шасси)',
    nameEn: 'SHACMAN (chassis)',
    url: 'https://www.shacman.com/',
  },
  '/images/equipment/bulldozer.png': shantui,
  '/images/equipment/excavator.jpg': shantui,
  '/images/equipment/pogruzchik.jpg': shantui,
  '/images/equipment/vahtovka.png': {
    name: 'УРАЛ (шасси)',
    nameEn: 'URAL (chassis)',
    url: 'https://uralaz.ru/',
  },
}
