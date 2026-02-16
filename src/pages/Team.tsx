import { Navbar1 } from '@/components/ui/navbar-1';
import StickyFooter from '@/components/ui/footer';
import { motion } from 'motion/react';

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar1 />

      <main className="pt-20 sm:pt-24 md:pt-28">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <motion.div
            className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
              <div className="lg:w-1/3">
                <div className="sticky top-28">
                  <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                    <img
                      src="/img_9408.jpg"
                      alt="Prof. Dr. med. Leopold Eberhart"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Professor Dr. med. Leopold Eberhart, M.A.
                    </h2>
                    <div className="space-y-2 text-sm sm:text-base text-gray-700">
                      <p><span className="font-semibold">Geburtsjahr:</span> 1967</p>
                      <p><span className="font-semibold">Geburtsort:</span> Schwabmünchen</p>
                      <p><span className="font-semibold">Familienstand:</span> verheiratet mit Prof. Dr. med. Astrid Morin, 2 Kinder</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3 space-y-8">
                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Ausbildung
                  </h3>
                  <div className="space-y-4">
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">
                        04/2004 – 11/2006
                      </div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Masterstudium „Management von Gesundheits- und Sozialeinrichtungen" an den Universitäten Kaiserslautern und Witten-Herdecke, Abschluss zum Master of Arts (M.A.)
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">
                        06/1995
                      </div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        3. Staatsexamen mit Gesamtnote „sehr gut"
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">
                        02/1995
                      </div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Promotion zum Dr. med. bei Prof. Dr. Wulf Seeling zum Thema „Katheterepiduralanästhesie bei Koloneingriffen"
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">
                        10/1988 – 04/1994
                      </div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Studium der Humanmedizin an der Universität Ulm
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">
                        05/1986
                      </div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Abitur am Gymnasium Wertingen
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Beruflicher Werdegang
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-brand-50 p-4 sm:p-6 rounded-xl border-l-4 border-brand">
                      <h4 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">Medical Center Clinic Marburg</h4>
                      <div className="space-y-3 text-sm sm:text-base text-gray-700">
                        <div className="block">
                          <div className="font-semibold mb-1">seit 07/2022</div>
                          <div>Ärztlicher Leiter der Medical Center Clinic Marburg</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-50 p-4 sm:p-6 rounded-xl border-l-4 border-brand">
                      <h4 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">Philipps-Universität Marburg</h4>
                      <div className="space-y-3 text-sm sm:text-base text-gray-700">
                        <div className="block">
                          <div className="font-semibold mb-1">09/2007</div>
                          <div>Ernennung zum apl-Professor</div>
                        </div>
                        <div className="block">
                          <div className="font-semibold mb-1">03/2006</div>
                          <div>Ruf auf die Professur „Klinische und epidemiologische Outcomeforschung in der Anästhesiologie"</div>
                        </div>
                        <div className="block">
                          <div className="font-semibold mb-1">seit 07/2005</div>
                          <div>Stellvertretender Direktor der Klinik</div>
                        </div>
                        <div className="block">
                          <div className="font-semibold mb-1">05/2003</div>
                          <div>Habilitation für das Fach Anästhesiologie zum Thema „Strategien zur Minimierung von Übelkeit und Erbrechen in der postoperativen Phase"</div>
                        </div>
                        <div className="block">
                          <div className="font-semibold mb-1">seit 09/2001</div>
                          <div>Wissenschaftlicher Mitarbeiter (Oberarzt) an der Klinik für Anästhesie und Intensivtherapie</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-50 p-4 sm:p-6 rounded-xl border-l-4 border-brand">
                      <h4 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">Universität Ulm</h4>
                      <div className="space-y-3 text-sm sm:text-base text-gray-700">
                        <div className="block">
                          <div className="font-semibold mb-1">11/1999</div>
                          <div>Facharzt für Anästhesiologie</div>
                        </div>
                        <div className="block">
                          <div className="font-semibold mb-1">01/1997 – 08/2001</div>
                          <div>Wissenschaftlicher Mitarbeiter (Assistenzarzt) an der Klinik für Anästhesiologie und Intensivmedizin</div>
                        </div>
                        <div className="block">
                          <div className="font-semibold mb-1">07/1995 – 12/1996</div>
                          <div>Arzt im Praktikum</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Zusatzqualifikationen
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700">Notfallmedizin (2000)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700">Spezielle anästhesiologische Intensivmedizin (2003)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700">Spezielle Schmerztherapie (2004)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700">Master of Arts (M.A.) Management (2006)</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Weitere Tätigkeiten
                  </h3>
                  <div className="space-y-4">
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">
                        seit 01/2022
                      </div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Gründung der KV-übergreifenden Berufsausübungsgemeinschaft „GutAufgewacht"
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">
                        seit 12/2020
                      </div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Prüfungsvorsitzender bei der Landesärztekammer Hessen
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">
                        seit 02/2005
                      </div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Prüfer für Facharztprüfungen „Anästhesiologie" und „spezielle anästhesiologische Intensivmedizin" bei der Landesärztekammer Hessen
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">
                        seit 04/2002
                      </div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Mitglied im Arbeitskreis „Qualitätsmanagement und Ökonomie" der DGAI/BDA, Arbeitsgruppenleiter des Projekts „Evaluierter Fragebogen Anästhesie (EFA)"
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Wissenschaftliche Arbeit
                  </h3>
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-xl text-sm sm:text-base text-gray-700">
                    <p>
                      <span className="font-semibold text-gray-900">286 wissenschaftliche Publikationen</span> (Stand 04/2021), davon 149 als Erst- oder Letztautor zu klinischen Themen aus dem Bereich der patientenzentrierten Forschung. Forschungsschwerpunkte: Postoperative Schmerztherapie, Vermeidung von postoperativer Übelkeit und Erbrechen, Optimierung der postoperativen Phase.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <StickyFooter />
    </div>
  );
}
