import { Hero } from '@/components/ui/animated-hero';
import { Navbar1 } from '@/components/ui/navbar-1';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import StickyFooter from '@/components/ui/footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FeaturesSection } from '@/components/ui/feature';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar1 />

      <main className="pt-20 sm:pt-24 md:pt-28">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
          <Hero />
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Die Anästhesie der MCCM stellt sich vor</h2>
              <div className="w-20 sm:w-24 h-1 bg-brand mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base">
                Im Gespräch mit den beiden verantwortlichen Anästhesisten an der MCCM stellen sich Prof. Dr. Leopold Eberhart und Frau Prof. Dr. Astrid Morin gemeinsam vor und erläutern ihre Aufgaben im gesamten Behandlungsprozess und als ärztliche Leitung der Klinik. Beide sind seit 2001 Fachärzte für Anästhesie und haben im Rahmen ihrer umfassende Ausbildung an mehreren großen deutschen Universitätskliniken und Spezial-Schwerpunktkliniken auch noch die Zusatzbezeichnungen Notfallmedizin, spezielle Intensivmedizin, Schmerztherapie und Palliativmedizin erworben.
              </p>

              <p className="text-sm sm:text-base">
                Auf die Bitte hin, in ganz wenigen Worten zusammenzufassen, was ihre Rolle innerhalb der MCCM ist ergreift Eberhart das Wort und bringt es folgendermaßen auf den Punkt: „Wir Anästhesisten sorgen mit unserem Team dafür, dass es Ihnen nach der Operation körperlich und seelisch gut geht und Sie schnellstmöglich hinterher richtig gut geht" und ergänzt „viele Patienten sind überrascht, wie schnell sie wieder fit sind nach der Narkose". Darüber hinaus sind sie noch für die Vertretung des leitenden OP-Koordinators und für erwachsen". Gerade das erfülle die beiden Professoren immer wieder aufs Neue mit Freude. Denn, so bestätige beide Anästhesisten gleichermaßen, es sei ja schließlich ihr Job, einen guten Rahmen zu bestätigen, dass die Anordnungen für Patientensicherheit kompromisslos Komfort für bestätigen, dass eine Operation gut verlaufen ist. „Das sind und auch unsere Mühen", bestätigt Morin, „ständiger Ansporn immer noch besser werden", betont Morin. Dementsprechend sind Vorbeugung und Aufrechterhaltung Denkliniken. Aufrechterhaltung von der ein jeder sicheren Rahmenbedingungen für eine Grundsätzen ein großes Anliegen und ergänzen, „dass alle Patienten sofort nach dem Eingriff essen und trinken dürften und niemand folglich Hunger oder Durst haben muss", ergänzen sie „...kaffee und Aufnahmen der Verkokung der Patientenversorgung und eine entsprechende Ausstattung der besonderen „gibt", betont Morin und fügt dem hinzu Eberhart und ergänzt schmunzelnd „und für die Kinder ein Eis hinterher". Tatsächlich gehören ein großes Aufwachraum, eine entsprechende Pflegestation unter der Ausstattung des Anästhesien wie hochmoderne Beatmungsgeräte, ein hochwertiges Videolaryngoskop oder eine Narkosetiefenmessung zur Ausstattung der Narkose.
              </p>

              <p className="text-sm sm:text-base">
                Genau das bringt unser Konzept zum Ausdruck: keine Kompromisse bei der Sicherheit und ein großes Augenmerk auf das Wohlühlen unserer Patienten fasst Prof. Morin zusammen. Beide Narkoseärzte arbeiten eng mit einer speziell geschulten Zusammenarbeit mit dem pflegerischen Personal im Betreiben des OP-Zentrums und ihnen als Ärzten. Unsere Wünsche – und die waren durchaus anspruchsvoll – wurden bis ins kleinste Detail umgesetzt. Diskussion-bei, Das ist jetzt in vielen Jahren Klinikalltag eine ganz neue Erfahrung. Wir sind hier extrem gut aufgestellt und können es in jeder Hinsicht mit dem, was wir aus großen deutschen Kliniken kennen, aufnehmen.
              </p>

              <p className="text-sm sm:text-base">
                Auf ihre bisherige ärztliche Tätigkeit angesprochen verweisen die beiden auf Tätigkeitsschwerpunkte an der Universität Ulm, dem Rehabilitationskrankenhaus in Ulm und dem dortigen Bundeswehrkrankenhaus sowie später gemeinsam an der Universitätsklinik Marburg. In Ulm waren Eberhart als Facharzt, Oberarzt und als stellvertretender Klinikdirektor. Beide Professoren haben viel geforscht und vieles neue publiziert beziehungsweise patentieren lassen. Beide Professoren haben über Themen wie Patientensicherheit, das Vermeidung von Übelkeit und Erbrechen in der postoperativen Phase, Schmerzmanagement und die Optimierung, der frühen Mobilisierung von Patienten geforscht.
              </p>

              <p className="text-sm sm:text-base">
                „Das sind alles Themen, die uns nicht nur akademisch weitergebracht haben, sondern unsere klinische Praxis beeinflussen bis heute", halten die beiden fest und wir es ein freuen Austausch mit vielen anderen Kollegen in europäischen Kliniken waren" betont Eberhart und Morin ergänzt: „So konnten wir immer gegenseitig beeinflussen, die Sorgfalt im Umgang mit den Patienten erhöhen und so letztlich die Qualität unserer neuen Aufgabe bei der MCCM so fortsetzen".
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <img src="/st_may23_akrinor-02_op_0171_web.jpg" alt="OP-Saal mit modernster Ausstattung" className="w-full h-auto object-contain" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <img src="/st_may23_akrinor-04_sectio_0101_web.jpg" alt="Anästhesist während der Operation" className="w-full h-auto object-contain" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <img src="/st_may23_akrinor-06_klinik_0015_web.jpg" alt="Aufwachraum mit postoperativer Überwachung" className="w-full h-auto object-contain" />
            </div>
          </div>
        </section>

        <FeaturesSection />

        <section id="team" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Unsere Anästhesisten</h2>
            <div className="w-20 sm:w-24 h-1 bg-brand mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-2 sm:p-4 md:p-8">
            <AnimatedTestimonials
              autoplay={true}
              testimonials={[
                {
                  name: "Prof. Dr. med. Leopold Eberhart",
                  designation: "Facharzt für Anästhesiologie seit 2001",
                  src: "/img_9408.jpg",
                  quote: "Rund 15 Jahre stellvertretender Klinikdirektor an der Marburger Universitätsklinik. Zusatzbezeichnungen: Schmerztherapie, spezielle Intensivmedizin, Notfallmedizin. Prüfer für Anästhesiologie und Intensivmedizin bei der Landesärztekammer Hessen. Leitet seit Juli 2022 die Medical Center Clinic Marburg."
                },
                {
                  name: "Prof. Dr. med. Astrid Morin",
                  designation: "Fachärztin für Anästhesiologie seit 2001",
                  src: "/img_9412.jpg",
                  quote: "Zusatzweiterbildung: Intensivmedizin, Schmerztherapie, Notfallmedizin, Palliativmedizin. Klinische und wissenschaftliche Schwerpunkte sind die postoperative Schmerztherapie sowie die Optimierung der postoperativen Phase durch Vermeidung von Übelkeit, Kältezittern und Schmerzen."
                }
              ]}
            />
          </div>
        </section>

        <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Häufig gestellte Fragen</h2>
            <div className="w-20 sm:w-24 h-1 bg-brand mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base sm:text-lg text-gray-900">
                  Was ist der Unterschied zwischen einer Vollnarkose und einer Teilnarkose?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Bei einer Vollnarkose (Allgemeinanästhesie) werden Sie vollständig schlafen und sind schmerzfrei. Bei einer Teilnarkose (Regionalanästhesie) wird nur ein bestimmter Körperbereich betäubt, während Sie bei Bewusstsein bleiben oder leicht sediert werden können. Beide Verfahren sind sicher und die Wahl hängt von der Art des Eingriffs und Ihren individuellen Bedürfnissen ab.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base sm:text-lg text-gray-900">
                  Wie lange vor der Operation darf ich nichts essen und trinken?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  In der Regel sollten Sie mindestens 6 Stunden vor der Operation nichts mehr essen und 2 Stunden vor der Operation nichts mehr trinken. Klares Wasser ist bis 2 Stunden vor dem Eingriff erlaubt. Diese Nüchternheitszeiten sind wichtig für Ihre Sicherheit während der Narkose. Genaue Anweisungen erhalten Sie bei Ihrem Aufklärungsgespräch.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-base sm:text-lg text-gray-900">
                  Was ist TIVA und warum ist diese Narkoseform besonders verträglich?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  TIVA steht für Total Intravenöse Anästhesie. Dabei werden alle Narkosemedikamente über die Vene verabreicht, anstatt über Narkosegase. Diese Methode ist besonders verträglich, da sie zu weniger Übelkeit nach der Operation führt und ein angenehmes Aufwachen ermöglicht. Sie ist besonders für Patienten geeignet, die zu postoperativer Übelkeit neigen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-base sm:text-lg text-gray-900">
                  Wie wird postoperative Übelkeit verhindert?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Die Vermeidung von postoperativer Übelkeit ist einer unserer Schwerpunkte. Wir setzen moderne Medikamente zur Prophylaxe ein, nutzen bevorzugt die TIVA-Methode und passen die Schmerztherapie individuell an. Sollten Sie zu Übelkeit neigen, informieren Sie uns bitte beim Aufklärungsgespräch, damit wir entsprechende Vorsorgemaßnahmen treffen können.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-base sm:text-lg text-gray-900">
                  Welche Risiken gibt es bei einer Narkose?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Moderne Narkoseverfahren sind sehr sicher. Dank fortschrittlicher Überwachungstechnik und hochqualifizierten Fachärzten sind ernsthafte Komplikationen extrem selten. Leichte Nebenwirkungen wie Heiserkeit, Übelkeit oder Müdigkeit können auftreten, klingen aber meist schnell ab. Im Aufklärungsgespräch besprechen wir ausführlich alle Risiken und gehen auf Ihre persönliche Situation ein.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-base sm:text-lg text-gray-900">
                  Wie lange dauert es, bis die Narkose vollständig abklingt?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Die meisten Patienten sind innerhalb weniger Stunden nach der Operation wach und ansprechbar. Die vollständige Erholung und das Abklingen aller Nachwirkungen kann jedoch 24 Stunden oder länger dauern. Deshalb ist es wichtig, dass Sie am Tag der Operation nicht Auto fahren und sich von einer Begleitperson abholen lassen. Wir überwachen Sie sorgfältig im Aufwachraum, bis Sie sicher entlassen werden können.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-base sm:text-lg text-gray-900">
                  Kann ich meine regulären Medikamente am OP-Tag einnehmen?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Das hängt von den jeweiligen Medikamenten ab. Einige Medikamente sollten Sie wie gewohnt einnehmen, andere müssen pausiert werden. Besonders wichtig ist dies bei blutverdünnenden Medikamenten, Diabetesmedikamenten und bestimmten Herzmedikamenten. Bringen Sie bitte eine aktuelle Medikamentenliste zum Aufklärungsgespräch mit. Wir besprechen dann genau, welche Medikamente Sie wann einnehmen sollen.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <StickyFooter />
    </div>
  );
}
