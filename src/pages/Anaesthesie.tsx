import { Navbar1 } from '@/components/ui/navbar-1';
import StickyFooter from '@/components/ui/footer';
import { motion } from 'motion/react';

export default function Anaesthesie() {
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
              Anästhesie bei GutAufgewacht
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-4"
            >
              Anästhesiologie auf Universitätsniveau im ambulanten und belegoperativen Bereich
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 sm:w-24 h-1 bg-brand mx-auto rounded-full"
            />
          </div>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16 mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
              Gut aufwachen - kein Zufall, sondern Konzept
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                Wer sich einer Operation unterziehen muss, hat viele Gedanken - und die meisten drehen sich nicht um den Schnitt, sondern um das Davor und Danach: Werde ich gut schlafen? Werde ich mit Übelkeit aufwachen? Bekomme ich genügend Schmerzmittel? Wird jemand gut auf mich aufpassen?
              </p>
              <p>
                Die üBAG GutAufgewacht hat genau diese Fragen in den Mittelpunkt ihrer Arbeit gestellt. Der Name ist Programm: Ein gutes Aufwachen nach einer Narkose ist kein Glück, sondern das Ergebnis sorgfältiger Planung, wissenschaftlicher Kompetenz und echter Zuwendung.
              </p>
            </div>
          </motion.div>

          {/* Universitäres Know-how */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16 mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
              Universitäres Know-how im belegoperativen Alltag
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                Die Anästhesistinnen und Anästhesisten von GutAufgewacht sind sämtlich am Universitätsklinikum Gießen und Marburg (UKGM) ausgebildet und klinisch tätig - einer der modernsten anästhesiologischen Abteilungen Deutschlands. Was das bedeutet: Jede Narkose, die im Rahmen der Belegarzttätigkeit durchgeführt wird - ob in der Medical Center Clinic Marburg (MCCM), im KAV-Krankenhaus Ehringshausen oder an anderen Kooperationsstandorten - wird nach denselben Qualitätsstandards geplant und durchgeführt wie an einem Haus der Maximalversorgung.
              </p>
              <p>
                Federführend ist <span className="font-semibold text-gray-900">Prof. Dr. med. Leopold H. J. Eberhart</span>, einer der renommiertesten deutschen Forscher auf dem Gebiet der postoperativen Übelkeit und des Erbrechens (PONV). Mit über 7.700 Zitierungen und nahezu 200 Publikationen gehört er zu den deutschlandweit führenden Experten für ein angenehmes Aufwachen nach Narkosen. Dieses Wissen fließt direkt in die klinische Praxis der üBAG ein.
              </p>
            </div>
          </motion.div>

          {/* Patientenstimmen */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16 mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
              Was Patienten tatsächlich erleben
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed mb-8">
              <p>
                Die Medical Center Clinic Marburg (MCCM), an der GutAufgewacht als Belegarzt-Anästhesie-Team tätig ist, wird auf Google mit <span className="font-semibold text-gray-900">5,0 von 5 Sternen</span> (28 Bewertungen) bewertet - ein Wert, der in der Medizin außergewöhnlich ist. Dabei wird die Anästhesie von Patienten immer wieder ausdrücklich hervorgehoben:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                'Von der Anmeldung, Wartebereich und Umkleide über die pflegerische Versorgung und Anästhesie war alles zu 100 perfekt. Die Anästhesistin war hervorragend; sie hatte ein sehr ruhiges Auftreten und war in allem äußerst sorgfältig. Alle waren sehr freundlich, was mir ein großes Gefühl von Sicherheit gab.',
                'Das gesamte Personal aus Anmeldung, Anästhesie und der Station war außerordentlich freundlich und hat meinen Aufenthalt so angenehm wie möglich gestaltet.',
                'Meine Angst wurde bemerkt und mit einfühlsamen und beruhigenden Worten und Taten begegnet.',
              ].map((quote, i) => (
                <div key={i} className="bg-brand-50 rounded-xl p-5 border-l-4 border-brand flex flex-col gap-3">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic">„{quote}"</p>
                  <span className="text-xs text-brand font-medium">- Google-Rezension zur MCCM</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed">
              Was diese Bewertungen vereint: Es geht nie nur um technische Kompetenz. Patienten spüren, ob jemand wirklich da ist - aufmerksam, ruhig, zugewandt. Genau das ist der Anspruch von GutAufgewacht.
            </p>
          </motion.div>

          {/* Qualitätsversprechen */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16 mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-brand">
              Unser Qualitätsversprechen in der Anästhesie
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Kein unnötiges Aufwachen mit Übelkeit.',
                  body: 'PONV - postoperative Übelkeit und Erbrechen - ist für Patienten oft belastender als der Schmerz selbst. Durch konsequente Risikoerfassung und eine individuell abgestimmte, multimodale Prophylaxe nach aktuellem Forschungsstand wird dieses Risiko bei GutAufgewacht systematisch minimiert.',
                },
                {
                  title: 'Kein Einschlafen ohne Vorbereitung.',
                  body: 'Jede Narkose beginnt mit einem echten Gespräch. Im Prämedikationsgespräch werden Vorerkrankungen, Medikamente, frühere Narkoseerfahrungen und individuelle Bedenken sorgfältig berücksichtigt. Patienten, die Ängste mitbringen, werden ernst genommen - nicht abgewimmelt.',
                },
                {
                  title: 'Kein Aufwachen ohne Schmerzkontrolle.',
                  body: 'Modernes perioperatives Schmerzmanagement ist integrativer Bestandteil jeder Narkose. Ziel ist es, dass Patienten nicht mit Schmerzen aufwachen, sondern mit dem Gefühl: Es ist gut gegangen.',
                },
                {
                  title: 'Maximale Sicherheit durch Universitätsstandard.',
                  body: 'Die verwendeten Narkosegeräte und -protokolle entsprechen den Anforderungen einer Universitätsklinik. Modernste Gerätetechnik ermöglicht einen reduzierten und präzise kontrollierten Einsatz von Narkosemitteln - für eine schonendere, sicherere Narkose.',
                },
              ].map(({ title, body }) => (
                <div key={title} className="bg-gray-50 rounded-xl p-5 sm:p-6 border-l-4 border-brand">
                  <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">{title}</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Informationsvideo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16 mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
              Informationsvideo
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              Erfahren Sie mehr über unsere Arbeit und was ein gutes Aufwachen nach einer Narkose ausmacht.
            </p>
            <div className="relative w-full rounded-xl overflow-hidden shadow-md" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/PzAvP6YEH_U"
                title="GutAufgewacht Informationsvideo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Standorte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
              GutAufgewacht - wo wir tätig sind
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              Die üBAG GutAufgewacht erbringt anästhesiologische Leistungen derzeit an der Medical Center Clinic Marburg (MCCM) sowie im Kaiserin-Auguste-Victoria-Krankenhaus (KAV) in Ehringshausen. Beide Häuser stehen für eine hochwertige operative Versorgung in einem modernen, patientenorientierten Umfeld.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-brand-50 rounded-xl p-5 border border-brand/20">
                <h3 className="font-bold text-gray-900 mb-1 text-base sm:text-lg">Medical Center Clinic Marburg (MCCM)</h3>
                <p className="text-sm text-gray-600">Marburg</p>
              </div>
              <div className="bg-brand-50 rounded-xl p-5 border border-brand/20">
                <h3 className="font-bold text-gray-900 mb-1 text-base sm:text-lg">KAV-Krankenhaus Ehringshausen</h3>
                <p className="text-sm text-gray-600">Kaiserin-Auguste-Victoria-Krankenhaus, Ehringshausen</p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <StickyFooter />
    </div>
  );
}
