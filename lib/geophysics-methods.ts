export type GeophysicsCopy = readonly [ru: string, en: string]
export type GeophysicsMethod = 'electrical' | 'magnetic' | 'logging' | 'software'

type Method = {
  title: GeophysicsCopy
  summary: GeophysicsCopy
  image: string
  imageAlt: GeophysicsCopy
  techniques: { name: GeophysicsCopy; detail: GeophysicsCopy }[]
  delivery: GeophysicsCopy[]
  note: GeophysicsCopy
}

export const geophysicsPath = '/services/geophysics'

export const geophysicsMethods: Record<GeophysicsMethod, Method> = {
  electrical: {
    title: ['Электроразведка', 'Electrical and electromagnetic surveys'],
    summary: [
      'Измеряем электрический и электромагнитный отклик пород. По этим данным строим разрезы сопротивления и поляризуемости и выделяем зоны для дальнейшей проверки.',
      'We measure the electrical and electromagnetic response of rocks to build resistivity and chargeability sections and identify targets for follow-up.',
    ],
    image: '/images/geofiz_project.jpg',
    imageAlt: ['Геофизик с измерительной аппаратурой в поле', 'Geophysicist with measuring equipment in the field'],
    techniques: [
      { name: ['АМТЗ · аудиомагнитотеллурическое зондирование', 'AMT · audio-magnetotellurics'], detail: ['Используем естественные вариации электромагнитного поля для построения модели удельного электрического сопротивления.', 'We use natural variations in the electromagnetic field to build a resistivity model.'] },
      { name: ['ЗСБ · зондирование становлением поля', 'TEM · transient electromagnetics'], detail: ['Регистрируем затухание вторичного поля после выключения тока в передающей петле. По кривым спада оцениваем распределение проводимости.', 'We record the decay of the secondary field after the transmitter loop is switched off and use the decay curves to estimate subsurface conductivity.'] },
      { name: ['ВП · вызванная поляризация', 'IP · induced polarization'], detail: ['Измеряем отклик, связанный со способностью пород накапливать и отдавать заряд. Сопоставляем поляризуемость с сопротивлением и геологией.', 'We measure the response associated with the ability of rocks to store and release charge, then interpret chargeability alongside resistivity and geology.'] },
      { name: ['Электротомография и ВЭЗ', 'Electrical resistivity tomography and VES'], detail: ['Строим разрезы сопротивления по серии измерений с разными положениями электродов. Вертикальное зондирование применяем для оценки изменения сопротивления с глубиной в точке.', 'We build resistivity sections from measurements at multiple electrode configurations. Vertical electrical sounding estimates how resistivity varies with depth at a station.'] },
    ],
    delivery: [
      ['Координаты точек, исходные измерения и материалы контроля качества', 'Station coordinates, raw measurements, and quality control records'],
      ['Разрезы сопротивления или поляризуемости по применённым методам', 'Resistivity or chargeability sections for the methods used'],
      ['Интерпретация аномалий и рекомендации по их проверке', 'Anomaly interpretation and recommendations for follow-up'],
    ],
    note: ['Аномалия показывает изменение физических свойств. Её геологическую природу уточняют по картированию, опробованию или скважинам.', 'An anomaly indicates a change in physical properties. Mapping, sampling, or drilling helps establish its geological cause.'],
  },
  magnetic: {
    title: ['Магниторазведка', 'Magnetic surveys'],
    summary: [
      'Выполняем наземные и аэромагнитные съёмки с БПЛА. По картам магнитного поля прослеживаем контакты пород и структуры, выделяем локальные аномалии.',
      'We conduct ground and drone magnetic surveys. Magnetic field maps help trace rock contacts and structures and identify local anomalies.',
    ],
    image: '/images/magnetic-hero.jpg',
    imageAlt: ['Беспилотник с подвесной измерительной аппаратурой', 'Drone with suspended survey equipment'],
    techniques: [
      { name: ['Наземная магнитная съёмка', 'Ground magnetic surveys'], detail: ['Измеряем магнитное поле по сети профилей. При подготовке данных учитываем временные вариации поля и проверяем увязку наблюдений.', 'We measure the magnetic field along survey lines, account for temporal variations and check consistency between lines.'] },
      { name: ['Аэромагнитная съёмка с БПЛА', 'Drone magnetic surveys'], detail: ['Планируем маршруты и высоту съёмки с учётом рельефа, разрешения и ограничений полётов. По данным можно прослеживать аномалии там, где наземные профили трудно проложить.', 'We plan flight lines and survey height around terrain, resolution requirements and flight restrictions. The data can trace anomalies where ground lines are difficult to lay out.'] },
      { name: ['Магнитные градиенты и интерпретация', 'Magnetic gradients and interpretation'], detail: ['Анализируем форму и градиенты аномалий, чтобы уточнять границы источников. Сверяем интерпретацию с геологией и другими геофизическими данными.', 'We examine anomaly shape and gradients to refine source boundaries and check the interpretation against geology and other geophysical data.'] },
    ],
    delivery: [
      ['Файлы наблюдений с координатами и сведения о поправках', 'Georeferenced measurements and a record of corrections'],
      ['Карты магнитного поля, аномалий и согласованных трансформаций', 'Maps of the magnetic field, anomalies, and agreed transformations'],
      ['Интерпретационные планы и материалы для проверки аномалий', 'Interpretive maps and material for anomaly follow-up'],
    ],
    note: ['Повышение высоты измерений обычно сглаживает мелкие детали. Высоту и шаг профилей выбирают с учётом размеров цели, рельефа и допустимых условий съёмки.', 'Increasing sensor height generally smooths small features. Survey height and line spacing depend on target size, terrain, and operating constraints.'],
  },
  logging: {
    title: ['Каротаж скважин', 'Borehole geophysical logging'],
    summary: [
      'Измеряем физические свойства пород вдоль ствола скважины и определяем её траекторию. Сопоставляем кривые с буровыми данными и документацией керна.',
      'We measure rock properties along the borehole and determine its trajectory. Logs are correlated with drilling records and core descriptions.',
    ],
    image: '/images/equipment/ingeo-logging-kit.webp',
    imageAlt: ['Комплект оборудования для каротажа', 'Borehole logging equipment kit'],
    techniques: [
      { name: ['Электрический каротаж · КС, ПС, ВП', 'Electrical logging · resistivity, SP, IP'], detail: ['Измеряем кажущееся сопротивление, естественную разность потенциалов и отклик вызванной поляризации по согласованному комплексу.', 'Depending on the agreed suite, we measure apparent resistivity, spontaneous potential and induced polarization response.'] },
      { name: ['Гамма-каротаж, ГГК и акустика', 'Gamma, gamma–gamma and acoustic logging'], detail: ['ГК регистрирует естественное гамма-излучение, ГГК используют для оценки плотности по калиброванным данным, акустический каротаж характеризует распространение волн в породе.', 'Gamma logging records natural radioactivity, gamma–gamma logging uses calibrated measurements to estimate density, and acoustic logging characterizes wave propagation.'] },
      { name: ['Кавернометрия и инклинометрия', 'Caliper and deviation surveys'], detail: ['Кавернометрия показывает изменение диаметра ствола, инклинометрия — зенитный угол и азимут для расчёта траектории.', 'Caliper logs measure changes in borehole diameter. Deviation surveys record inclination and azimuth to calculate the trajectory.'] },
      { name: ['Магнитная восприимчивость', 'Magnetic susceptibility'], detail: ['Измеряем проявление магнитных свойств по стволу и сопоставляем кривую с литологией и результатами наземной съёмки.', 'We measure magnetic susceptibility along the borehole and compare the log with lithology and surface survey results.'] },
    ],
    delivery: [
      ['Цифровые кривые и каротажные диаграммы с привязкой по глубине', 'Digital logs and plots referenced to borehole depth'],
      ['Таблица инклинометрии при выполнении измерений', 'Deviation survey table where measured'],
      ['Увязка с буровыми данными и описание интервалов по заданию', 'Correlation with drilling records and interval descriptions as specified'],
    ],
    note: ['Состав комплекса зависит от диаметра, обсадки, состояния ствола и задачи. Доступность скважины для зонда проверяется перед работами.', 'The logging suite depends on borehole diameter, casing, condition, and objectives. Tool access is checked before logging.'],
  },
  software: {
    title: ['Обработка геофизических данных', 'Geophysical data processing'],
    summary: [
      'Проверяем полевые измерения, вносим поправки, строим карты и разрезы. Результаты интерпретации увязываем с геологией и данными скважин.',
      'We check field measurements, apply corrections, and produce maps and sections. Interpretations are integrated with geology and borehole data.',
    ],
    image: '/images/work-stage-illustrations/analysis.webp',
    imageAlt: ['Модель геологического разреза и его цифровое представление', 'Geological section model and its digital representation'],
    techniques: [
      { name: ['Подготовка и контроль качества', 'Preparation and quality control'], detail: ['Проверяем координаты, единицы, полноту и повторяемость измерений. Фиксируем исключённые данные и принятые поправки.', 'We check coordinates, units, completeness and repeatability, and document exclusions and corrections.'] },
      { name: ['Обработка полей и построение карт', 'Field processing and mapping'], detail: ['По выбранному методу выполняем увязку профилей, фильтрацию и построение карт с согласованной сеткой и системой координат.', 'Depending on the method, we level survey lines, filter the data, and produce maps in the agreed grid and coordinate system.'] },
      { name: ['Инверсия и интерпретация', 'Inversion and interpretation'], detail: ['Используем 2D- или 3D-инверсию, когда это оправдано данными. Сопоставляем модели с независимыми наблюдениями и описываем ограничения.', 'We use 2D or 3D inversion where the data support it, compare models with independent observations, and document limitations.'] },
    ],
    delivery: [
      ['Исходные и обработанные наборы данных в согласованных форматах', 'Raw and processed datasets in agreed formats'],
      ['Карты, профили, разрезы и модели, предусмотренные заданием', 'Maps, profiles, sections, and models specified by the brief'],
      ['Отчёт с описанием обработки, интерпретацией и ограничениями', 'Report documenting processing, interpretation, and limitations'],
    ],
    note: ['Разные модели могут объяснять одни и те же измерения. Сопоставление с геологией и скважинами помогает проверить интерпретацию.', 'Different models can explain the same measurements. Comparison with geology and well data helps test the interpretation.'],
  },
}

export const geophysicsMethodIds = Object.keys(geophysicsMethods) as GeophysicsMethod[]
