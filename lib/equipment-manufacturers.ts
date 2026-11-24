interface Manufacturer {
  name: string
  nameEn?: string
  url: string
}

const shantui = { name: 'Shantui', url: 'https://www.shantui.com/' }

export const equipmentManufacturers: Partial<Record<string, Manufacturer>> = {
  '/images/equipment/cs-1000.png': { name: 'Atlas Copco', url: 'https://www.atlascopco.com/' },
  '/images/equipment/boylesC6.png': {
    name: 'Epiroc',
    url: 'https://www.epiroc.com/en-us/products/drill-rigs/exploration-drill-rigs/core-drilling-rigs/boyles-c6',
  },
  '/images/equipment/egr-ep800g.webp': {
    name: 'EGR',
    url: 'https://egrdrill.net/h-pd-13.html?recommendFromPid=0&fromMid=323',
  },
  '/images/equipment/epc300.png': { name: 'EGR', url: 'https://www.egrcn.com/h-pd-9.html?fromMid=326&recommendFromPid=0' },
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
  '/images/equipment/forwardC6.jpg': {
    name: 'Forward',
    url: 'https://www.forwardrill.com/',
  },
  '/images/equipment/Christensen-CS14.png': {
    name: 'Atlas Copco',
    url: 'https://www.atlascopco.com/',
  },
  '/images/equipment/bulldril-1200.png': { name: 'Barkom Group', url: 'https://www.barkomltd.com/en/' },
  '/images/equipment/christensen-ct20.png': {
    name: 'Epiroc',
    url: 'https://www.epiroc.com/en-ua/products/drill-rigs/exploration-drill-rigs/core-drilling-rigs/christensen-ct20',
  },
  '/images/equipment/pbu-1200.png': {
    name: 'Алтайгеомаш',
    nameEn: 'Altaygeomash',
    url: 'https://innovaltai.ru/products/detail.php?ID=321',
  },
  '/images/equipment/minimag.png': { name: 'Geodevice', url: 'https://geodevice.uz/main/magnetometers/minimag/' },
  '/images/equipment/cikl8.png': {
    name: 'Северо-Запад',
    nameEn: 'Severo-Zapad',
    url: 'https://nw-geo.ru/cycle-8',
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
    url: 'https://www.optoedu.com/A15.1017-T',
  },
  '/images/equipment/trimble-r12i.png': {
    name: 'Trimble',
    url: 'https://geospatial.trimble.com/en/products/hardware/trimble-r12i/',
  },
  '/images/equipment/south-galaxy-g1-plus.webp': {
    name: 'SOUTH',
    url: 'https://www.southinstrument.com/product/details/pro_tid/3/id/11.html',
  },
  '/images/equipment/south-galaxy-g9.png': {
    name: 'SOUTH',
    url: 'https://www.southinstrument.com/product/details/pro_tid/3/id/233.html',
  },
  '/images/equipment/prince-i35xr.webp': {
    name: 'PrinCe',
    url: 'https://prin.ru/gnss/prince/priemnik_prince_i35xr/',
  },
  '/images/equipment/prince-ibase.webp': {
    name: 'PrinCe',
    url: 'https://prin.ru/gnss/prince/prince_ibase9/',
  },
  '/images/equipment/south-h6.webp': {
    name: 'SOUTH',
    url: 'https://southinstrument.com/product/details/pro_tid/1/id/267.html',
  },
  '/images/equipment/prince-dl8.webp': {
    name: 'PrinCe',
    url: 'https://prin.ru/modems/prince/dl8/modem_radio_35w_prince_dl8/',
  },
  '/images/equipment/rgk-dl50.webp': {
    name: 'RGK',
    url: 'https://www.rgk-tools.com/ru/catalog/lazernye-dalnomery/dl50/',
  },
  '/images/equipment/dji-mavic-4-pro.webp': {
    name: 'DJI',
    url: 'https://www.dji.com/mavic-4-pro',
  },
  '/images/equipment/dji-matrice-4e.webp': {
    name: 'DJI',
    url: 'https://enterprise.dji.com/matrice-4-series',
  },
  '/images/equipment/trekol.png': {
    name: 'ТРЭКОЛ',
    nameEn: 'TREKOL',
    url: 'https://www.trecol.ru/catalog/car/vnedorozhnoe-transportnoe-sredstvo-snegobolotokhod-trekol-sever/',
  },
  '/images/equipment/vezdehod.png': {
    name: 'СЕВЕР',
    nameEn: 'SEVER',
    url: 'https://severtrucks.ru/models/sever-eger/',
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
