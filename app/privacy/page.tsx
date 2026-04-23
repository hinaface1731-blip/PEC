'use client'

import { Shield, Lock, Database, UserCheck, FileText, Globe, Mail, Phone, MapPin } from 'lucide-react'
import { FadeIn } from '@/components/fade-in'
import { useLanguage } from '@/components/language-provider'
import Link from 'next/link'
import { PageLayout } from '@/components/page-layout'

export default function PrivacyPage() {
  const { t } = useLanguage()

  return (
    <PageLayout>
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-card to-background overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <FadeIn>
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm flex-wrap">
                  <Link href="/" className="hover:text-primary transition-colors">
                    {t('Главная', 'Home')}
                  </Link>
                  <span>/</span>
                  <span className="text-foreground">
                    {t('Политика конфиденциальности', 'Privacy Policy')}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-orange-500" />
                  </div>
                  <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                    {t('Политика конфиденциальности', 'Privacy Policy')}
                  </h1>
                </div>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t(
                    'Мы ценим ваше доверие и обязуемся защищать вашу личную информацию. Ознакомьтесь с нашими принципами сбора, использования и защиты данных.',
                    'We value your trust and are committed to protecting your personal information. Review our principles of data collection, use, and protection.'
                  )}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <div className="space-y-12">
                {/* 1. Общие положения */}
                <div className="card-enhanced p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-orange-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {t('1. Общие положения', '1. General Provisions')}
                    </h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground pl-4">
                    <p>
                      {t(
                        'Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые ООО «Полярная Экспедиционная Компания» (далее — Оператор).',
                        'This personal data processing policy is compiled in accordance with the requirements of Federal Law No. 152-FZ dated July 27, 2006 "On Personal Data" and defines the procedure for processing personal data and measures to ensure the security of personal data taken by Polar Expedition Company LLC (hereinafter referred to as the Operator).'
                      )}
                    </p>
                    <p>
                      {t(
                        'Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.',
                        'The Operator places its most important goal and condition for carrying out its activities the observance of human and civil rights and freedoms when processing their personal data, including the protection of the rights to privacy, personal and family secrets.'
                      )}
                    </p>
                  </div>
                </div>

                {/* 2. Какие данные мы собираем */}
                <div className="card-enhanced p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Database className="w-6 h-6 text-orange-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {t('2. Какие данные мы собираем', '2. What Data We Collect')}
                    </h2>
                  </div>
                  <div className="pl-4">
                    <p className="text-muted-foreground mb-4">
                      {t(
                        'Оператор может обрабатывать следующие персональные данные пользователя:',
                        'The Operator may process the following personal data of the user:'
                      )}
                    </p>
                    <ul className="space-y-2 text-muted-foreground pl-6">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        <span>{t('Фамилия, имя, отчество', 'Last name, first name, patronymic')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        <span>{t('Номер телефона', 'Phone number')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        <span>{t('Адрес электронной почты', 'Email address')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        <span>{t('Название организации', 'Organization name')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        <span>{t('IP-адрес, данные о браузере, время доступа', 'IP address, browser data, access time')}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 3. Цели обработки данных */}
                <div className="card-enhanced p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <UserCheck className="w-6 h-6 text-orange-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {t('3. Цели обработки данных', '3. Purposes of Data Processing')}
                    </h2>
                  </div>
                  <div className="pl-4">
                    <p className="text-muted-foreground mb-4">
                      {t(
                        'Оператор обрабатывает персональные данные пользователя в следующих целях:',
                        'The Operator processes the user\'s personal data for the following purposes:'
                      )}
                    </p>
                    <ul className="space-y-2 text-muted-foreground pl-6">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        <span>{t('Предоставление доступа пользователю к сервисам и информации сайта', 'Providing user access to site services and information')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        <span>{t('Обработка заявок и запросов пользователя', 'Processing user requests and inquiries')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        <span>{t('Направление коммерческих предложений и информации об услугах', 'Sending commercial offers and information about services')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        <span>{t('Улучшение качества работы сайта', 'Improving the quality of the site')}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 4. Правовые основания обработки */}
                <div className="card-enhanced p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Lock className="w-6 h-6 text-orange-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {t('4. Правовые основания обработки', '4. Legal Basis for Processing')}
                    </h2>
                  </div>
                  <div className="pl-4">
                    <p className="text-muted-foreground">
                      {t(
                        'Оператор обрабатывает персональные данные пользователя только в случае их заполнения и отправки пользователем через формы, расположенные на сайте. Заполняя соответствующие формы и отправляя свои персональные данные Оператору, пользователь выражает свое согласие с данной политикой.',
                        'The Operator processes the user\'s personal data only if they are filled out and sent by the user through forms located on the site. By filling out the relevant forms and sending their personal data to the Operator, the user expresses their consent to this policy.'
                      )}
                    </p>
                  </div>
                </div>

                {/* 5. Контактная информация */}
                <div className="card-enhanced p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-orange-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {t('5. Контактная информация', '5. Contact Information')}
                    </h2>
                  </div>
                  <div className="pl-4 space-y-4">
                    <p className="text-muted-foreground">
                      {t(
                        'Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору:',
                        'The user can obtain any clarifications on issues related to the processing of their personal data by contacting the Operator:'
                      )}
                    </p>
                    <div className="flex flex-col gap-3">
                      <a href="mailto:info@polar-ec.ru" className="flex items-center gap-3 text-orange-500 hover:text-orange-600 transition-colors">
                        <Mail className="w-5 h-5" />
                        <span>info@polar-ec.ru</span>
                      </a>
                      <a href="tel:+73912051584" className="flex items-center gap-3 text-orange-500 hover:text-orange-600 transition-colors">
                        <Phone className="w-5 h-5" />
                        <span>+7 (391) 205-15-84</span>
                      </a>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="w-5 h-5 text-orange-500" />
                        <span>{t('г. Красноярск, ул. Ленина, 84', 'Krasnoyarsk, 84 Lenina St.')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. Заключительные положения */}
                <div className="card-enhanced p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-orange-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {t('6. Заключительные положения', '6. Final Provisions')}
                    </h2>
                  </div>
                  <div className="pl-4 space-y-4">
                    <p className="text-muted-foreground">
                      {t(
                        'Оператор вправе вносить изменения в настоящую политику конфиденциальности без согласия пользователя.',
                        'The Operator has the right to make changes to this privacy policy without the user\'s consent.'
                      )}
                    </p>
                    <p className="text-muted-foreground">
                      {t(
                        'Новая политика конфиденциальности вступает в силу с момента ее размещения на сайте, если иное не предусмотрено новой редакцией политики.',
                        'The new privacy policy comes into force from the moment it is posted on the site, unless otherwise provided by the new version of the policy.'
                      )}
                    </p>
                    <p className="text-sm text-muted-foreground/70 pt-4 border-t border-border">
                      {t(
                        'Дата последнего обновления: 17 апреля 2026 г.',
                        'Last updated: April 17, 2026'
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}