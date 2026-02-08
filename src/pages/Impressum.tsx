import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-brand hover:text-brand/80 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Zurück zur Startseite
        </Link>

        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Impressum</h1>
          <div className="w-20 sm:w-24 h-1 bg-brand mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Diensteanbieter</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                KV-übergreifende Berufsausübungsgemeinschaft "GutAufgewacht"<br />
                Ziegelstr. 13<br />
                35037 Marburg
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Kontaktmöglichkeiten</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                E-Mail-Adresse: <a href="mailto:info@gutaufgewacht.de" className="text-brand hover:underline">info@gutaufgewacht.de</a><br />
                Telefon: <a href="tel:+496421953403" className="text-brand hover:underline">06421 953403</a><br />
                Fax: 06421 4809223
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Vertretungsberechtigte Personen</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                Vertretungsberechtigt: Prof. Dr. Leopold Eberhart, MA
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Aufsichtsbehörde</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                Aufsichtsbehörde: Ärztekammer Hessen<br />
                Website: <a href="https://www.laekh.de/" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">https://www.laekh.de/</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Berufsbezeichnung</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                Gesetzliche Berufsbezeichnung: Arzt/ Ärztin.<br />
                Land in dem die Berufsbezeichnung verliehen wurde: Deutschland.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Kammer</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                Kammer (oder vergleichbare berufsrechtlicher Organisation): Landesärztekammer Hessen<br />
                Website und Kontakt der Kammer: <a href="https://www.laekh.de/" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">https://www.laekh.de/</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Haftungs- und Schutzrechtshinweise</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  <span className="font-semibold">Links auf fremde Webseiten:</span> Die Inhalte fremder Webseiten, auf die wir direkt oder indirekt verweisen, liegen außerhalb unseres Verantwortungsbereiches und wir machen sie uns nicht zu Eigen. Für alle Inhalte und Nachteile, die aus der Nutzung der in den verlinkten Webseiten aufrufbaren Informationen entstehen, übernehmen wir keine Verantwortung.
                </p>
                <p>
                  <span className="font-semibold">Urheberrechte und Markenrechte:</span> Alle auf dieser Website dargestellten Inhalte, wie Texte, Fotografien, Grafiken, Marken und Warenzeichen sind durch die jeweiligen Schutzrechte (Urheberrechte, Markenrechte) geschützt. Die Verwendung, Vervielfältigung usw. unterliegen unseren Rechten oder den Rechten der jeweiligen Urheber bzw. Rechteinhaber.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
