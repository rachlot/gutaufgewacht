import { Navbar1 } from '@/components/ui/navbar-1';
import StickyFooter from '@/components/ui/footer';

export default function Kontakt() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar1 />

      <main className="pt-20 sm:pt-24 md:pt-28">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kontakt</h2>
            <div className="w-20 sm:w-24 h-1 bg-brand mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Kontaktinformationen</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">Adresse</p>
                    <p className="text-base text-gray-900">Ziegelstraße 13</p>
                    <p className="text-base text-gray-900">35037 Marburg</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">Telefon</p>
                    <a href="tel:+4964218070-10" className="text-base text-brand hover:text-brand-700 transition-colors">
                      +49 6421 8070-10
                    </a>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">E-Mail</p>
                    <a href="mailto:info@gutaufgewacht.de" className="text-base text-brand hover:text-brand-700 transition-colors">
                      info@gutaufgewacht.de
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Patienteninformation</h3>
                <p className="text-base text-gray-700 mb-6">
                  Laden Sie hier unsere Patienteninformation zum Thema PONV (postoperative Übelkeit und Erbrechen) herunter. Diese Information erklärt, wie wir aktiv daran arbeiten, Ihre postoperative Erholung so angenehm wie möglich zu gestalten.
                </p>
                <a
                  href="/Patienteninformation_neu.pdf"
                  download
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-brand rounded-full hover:bg-brand-700 transition-colors shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Patienteninformation herunterladen
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <StickyFooter />
    </div>
  );
}
