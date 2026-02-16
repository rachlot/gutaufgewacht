import { Navbar1 } from '@/components/ui/navbar-1';
import StickyFooter from '@/components/ui/footer';
import { motion } from 'motion/react';

export default function Karriere() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar1 />

      <main className="pt-20 sm:pt-24 md:pt-28">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="text-center mb-8 sm:mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
            >
              Karriere
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 sm:w-24 h-1 bg-brand mx-auto rounded-full"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16 mb-8"
          >
            <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-base sm:text-lg text-center">
                Werden Sie Teil unseres Teams und gestalten Sie mit uns die Zukunft der Anästhesiologie in Marburg.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Medizinische Fachangestellte (MFA)
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-base text-gray-700">
                  Wir suchen engagierte Medizinische Fachangestellte, die unser Team im OP und in der postoperativen Überwachung verstärken möchten.
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Das bieten wir:</h4>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                    <li className="flex items-start">
                      <span className="text-brand mr-2">•</span>
                      <span>Arbeiten in einem hochmodernen Umfeld</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand mr-2">•</span>
                      <span>Zusammenarbeit mit erfahrenen Fachärzten</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand mr-2">•</span>
                      <span>Attraktive Arbeitsbedingungen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand mr-2">•</span>
                      <span>Fort- und Weiterbildungsmöglichkeiten</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Werkstudenten
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-base text-gray-700">
                  Sie studieren Medizin oder einen verwandten Studiengang und möchten praktische Erfahrungen in der Anästhesiologie sammeln?
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Das bieten wir:</h4>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                    <li className="flex items-start">
                      <span className="text-brand mr-2">•</span>
                      <span>Einblicke in die moderne Anästhesiologie</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand mr-2">•</span>
                      <span>Flexible Arbeitszeiten passend zum Studium</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand mr-2">•</span>
                      <span>Mentoring durch erfahrene Professoren</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand mr-2">•</span>
                      <span>Praxisnahe Lernerfahrung</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16 mt-8"
          >
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Interesse geweckt?</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Melden Sie sich gerne bei uns! Wir freuen uns darauf, Sie kennenzulernen und Ihnen mehr über die Möglichkeiten in unserem Team zu erzählen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:info@gutaufgewacht.de"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-brand rounded-full hover:bg-brand-700 transition-colors shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  E-Mail senden
                </a>
                <a
                  href="tel:+4964218070-10"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-brand bg-brand-50 rounded-full hover:bg-brand-100 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Anrufen
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <StickyFooter />
    </div>
  );
}
