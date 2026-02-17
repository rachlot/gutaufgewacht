import { Hero } from '@/components/ui/animated-hero';
import { Navbar1 } from '@/components/ui/navbar-1';
import StickyFooter from '@/components/ui/footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ServicesSection } from '@/components/ui/services-section';
import { TeamSection } from '@/components/ui/team-section';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F6F3' }}>
      <Navbar1 />

      <main className="pt-20 sm:pt-24 md:pt-28">
        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-8 sm:py-12">
          <Hero />
        </section>

        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
          <div className="bg-white rounded-3xl shadow-sm p-8 sm:p-12 md:p-16 lg:p-20 border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-sans font-semibold text-gray-900 mb-6">
                Erstklassige Anästhesie
              </h2>
              <div className="w-24 h-1 bg-brand mx-auto rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Die KV-übergreifende Berufsausübungsgemeinschaft <span className="font-semibold text-brand">GutAufgewacht</span> wird geleitet von Prof. Dr. Leopold Eberhart und Prof. Dr. Astrid Morin. Beide Anästhesisten sind seit über 20 Jahren Fachärzte für Anästhesie und verfügen über die Zusatzweiterbildung Intensivmedizin, Schmerztherapie, Notfallmedizin und Palliativmedizin.
              </p>

              <p>
                Klinische und wissenschaftliche Schwerpunkte sind die postoperative Schmerztherapie nach großen Gelenkchirurgie sowie die Optimierung der postoperativen Phase durch Vermeidung von Übelkeit, Kältezittern und Schmerzen. Die Anästhesie ist zertifiziert mit dem Qualitätssiegel „GutAufgewacht". Die MCCM verfügt über eine hochwertige Ausstattung mit modernen Beatmungsgeräten, Videolaryngoskopie und Narkosetiefenmessung und ermöglicht zudem im Bedarfsfall auch eine verlängerte postoperative Überwachung über eine angeschlossene Bettenstation.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
              <img src="/st_may23_akrinor-02_op_0171_web.jpg" alt="OP-Saal mit modernster Ausstattung" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
              <img src="/st_may23_akrinor-04_sectio_0101_web.jpg" alt="Anästhesist während der Operation" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
              <img src="/st_may23_akrinor-06_klinik_0015_web.jpg" alt="Aufwachraum mit postoperativer Überwachung" className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        <ServicesSection />

        <TeamSection />

        <section id="faq" className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-sans font-semibold text-gray-900 mb-6">
              Häufig gestellte Fragen
            </h2>
            <div className="w-24 h-1 bg-brand mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm p-8 sm:p-12 md:p-16 lg:p-20 border border-gray-100">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border-b border-gray-200 pb-4">
                <AccordionTrigger className="text-lg sm:text-xl text-gray-900 hover:text-brand transition-colors">
                  Was ist der Unterschied zwischen einer Vollnarkose und einer Teilnarkose?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed pt-4">
                  Bei einer Vollnarkose (Allgemeinanästhesie) werden Sie vollständig schlafen und sind schmerzfrei. Bei einer Teilnarkose (Regionalanästhesie) wird nur ein bestimmter Körperbereich betäubt, während Sie bei Bewusstsein bleiben oder leicht sediert werden können. Beide Verfahren sind sicher und die Wahl hängt von der Art des Eingriffs und Ihren individuellen Bedürfnissen ab.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-200 pb-4">
                <AccordionTrigger className="text-lg sm:text-xl text-gray-900 hover:text-brand transition-colors">
                  Wie lange vor der Operation darf ich nichts essen und trinken?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed pt-4">
                  In der Regel sollten Sie mindestens 6 Stunden vor der Operation nichts mehr essen und 2 Stunden vor der Operation nichts mehr trinken. Klares Wasser ist bis 2 Stunden vor dem Eingriff erlaubt. Diese Nüchternheitszeiten sind wichtig für Ihre Sicherheit während der Narkose. Genaue Anweisungen erhalten Sie bei Ihrem Aufklärungsgespräch.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-200 pb-4">
                <AccordionTrigger className="text-lg sm:text-xl text-gray-900 hover:text-brand transition-colors">
                  Was ist TIVA und warum ist diese Narkoseform besonders verträglich?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed pt-4">
                  TIVA steht für Total Intravenöse Anästhesie. Dabei werden alle Narkosemedikamente über die Vene verabreicht, anstatt über Narkosegase. Diese Methode ist besonders verträglich, da sie zu weniger Übelkeit nach der Operation führt und ein angenehmes Aufwachen ermöglicht. Sie ist besonders für Patienten geeignet, die zu postoperativer Übelkeit neigen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-gray-200 pb-4">
                <AccordionTrigger className="text-lg sm:text-xl text-gray-900 hover:text-brand transition-colors">
                  Wie wird postoperative Übelkeit verhindert?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed pt-4">
                  Die Vermeidung von postoperativer Übelkeit ist einer unserer Schwerpunkte. Wir setzen moderne Medikamente zur Prophylaxe ein, nutzen bevorzugt die TIVA-Methode und passen die Schmerztherapie individuell an. Sollten Sie zu Übelkeit neigen, informieren Sie uns bitte beim Aufklärungsgespräch, damit wir entsprechende Vorsorgemaßnahmen treffen können.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-gray-200 pb-4">
                <AccordionTrigger className="text-lg sm:text-xl text-gray-900 hover:text-brand transition-colors">
                  Welche Risiken gibt es bei einer Narkose?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed pt-4">
                  Moderne Narkoseverfahren sind sehr sicher. Dank fortschrittlicher Überwachungstechnik und hochqualifizierten Fachärzten sind ernsthafte Komplikationen extrem selten. Leichte Nebenwirkungen wie Heiserkeit, Übelkeit oder Müdigkeit können auftreten, klingen aber meist schnell ab. Im Aufklärungsgespräch besprechen wir ausführlich alle Risiken und gehen auf Ihre persönliche Situation ein.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-b border-gray-200 pb-4">
                <AccordionTrigger className="text-lg sm:text-xl text-gray-900 hover:text-brand transition-colors">
                  Wie lange dauert es, bis die Narkose vollständig abklingt?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed pt-4">
                  Die meisten Patienten sind innerhalb weniger Stunden nach der Operation wach und ansprechbar. Die vollständige Erholung und das Abklingen aller Nachwirkungen kann jedoch 24 Stunden oder länger dauern. Deshalb ist es wichtig, dass Sie am Tag der Operation nicht Auto fahren und sich von einer Begleitperson abholen lassen. Wir überwachen Sie sorgfältig im Aufwachraum, bis Sie sicher entlassen werden können.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="pb-4">
                <AccordionTrigger className="text-lg sm:text-xl text-gray-900 hover:text-brand transition-colors">
                  Kann ich meine regulären Medikamente am OP-Tag einnehmen?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed pt-4">
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
