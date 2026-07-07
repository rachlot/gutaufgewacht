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
            className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
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
                Genau das bringt unser Konzept zum Ausdruck: keine Kompromisse bei der Sicherheit und ein großes Augenmerk auf das Wohlühlen unserer Patienten fasst Prof. Morin zusammen. Beide Narkoseärzte arbeiten eng mit einer speziell geschulten Zusammenarbeit mit dem pflegerischen Personal im Betreiben des OP-Zentrums und ihnen als Ärzten. Unsere Wünsche - und die waren durchaus anspruchsvoll - wurden bis ins kleinste Detail umgesetzt. Diskussion-bei, Das ist jetzt in vielen Jahren Klinikalltag eine ganz neue Erfahrung. Wir sind hier extrem gut aufgestellt und können es in jeder Hinsicht mit dem, was wir aus großen deutschen Kliniken kennen, aufnehmen.
              </p>

              <p className="text-sm sm:text-base">
                Auf ihre bisherige ärztliche Tätigkeit angesprochen verweisen die beiden auf Tätigkeitsschwerpunkte an der Universität Ulm, dem Rehabilitationskrankenhaus in Ulm und dem dortigen Bundeswehrkrankenhaus sowie später gemeinsam an der Universitätsklinik Marburg. In Ulm waren Eberhart als Facharzt, Oberarzt und als stellvertretender Klinikdirektor. Beide Professoren haben viel geforscht und vieles neue publiziert beziehungsweise patentieren lassen. Beide Professoren haben über Themen wie Patientensicherheit, das Vermeidung von Übelkeit und Erbrechen in der postoperativen Phase, Schmerzmanagement und die Optimierung, der frühen Mobilisierung von Patienten geforscht.
              </p>

              <p className="text-sm sm:text-base">
                „Das sind alles Themen, die uns nicht nur akademisch weitergebracht haben, sondern unsere klinische Praxis beeinflussen bis heute", halten die beiden fest und wir es ein freuen Austausch mit vielen anderen Kollegen in europäischen Kliniken waren" betont Eberhart und Morin ergänzt: „So konnten wir immer gegenseitig beeinflussen, die Sorgfalt im Umgang mit den Patienten erhöhen und so letztlich die Qualität unserer neuen Aufgabe bei der MCCM so fortsetzen".
              </p>
            </div>
          </motion.div>
        </section>

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
                      alt="Prof. Dr. med. Leopold H. J. Eberhart"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Prof. Dr. med. Leopold H. J. Eberhart, MA
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="inline-block bg-brand-50 text-brand text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-brand/20">Facharzt für Anästhesiologie</span>
                      <span className="inline-block bg-brand-50 text-brand text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-brand/20">Intensivmedizin</span>
                      <span className="inline-block bg-brand-50 text-brand text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-brand/20">Notfallmedizin</span>
                      <span className="inline-block bg-brand-50 text-brand text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-brand/20">Spezielle Schmerztherapie</span>
                    </div>
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
                    Klinisches Profil
                  </h3>
                  <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                    <p>
                      Prof. Dr. med. Leopold Eberhart ist Oberarzt an der Klinik für Anästhesiologie und Intensivtherapie am Universitätsklinikum Gießen und Marburg (UKGM) am Standort Marburg, wo er die Schwerpunkte Notfallmedizin, Intensivmedizin und Spezielle Schmerztherapie verantwortet. Sein Spezialgebiet in der klinischen und wissenschaftlichen Arbeit ist die perioperative Patientensicherheit - mit einem besonderen Fokus auf das, was Patienten nach einer Narkose oft am meisten beschäftigt: dass sie gut aufwachen.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Ausbildung
                  </h3>
                  <div className="space-y-4">
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">04/2004 - 11/2006</div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Masterstudium „Management von Gesundheits- und Sozialeinrichtungen" an den Universitäten Kaiserslautern und Witten-Herdecke, Abschluss zum Master of Arts (M.A.)
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">06/1995</div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        3. Staatsexamen mit Gesamtnote „sehr gut"
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">02/1995</div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Promotion zum Dr. med. bei Prof. Dr. Wulf Seeling zum Thema „Katheterepiduralanästhesie bei Koloneingriffen"
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">10/1988 - 04/1994</div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Studium der Humanmedizin an der Universität Ulm
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">05/1986</div>
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
                      <h4 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">Philipps-Universität Marburg / UKGM</h4>
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
                          <div className="font-semibold mb-1">01/1997 - 08/2001</div>
                          <div>Wissenschaftlicher Mitarbeiter (Assistenzarzt) an der Klinik für Anästhesiologie und Intensivmedizin</div>
                        </div>
                        <div className="block">
                          <div className="font-semibold mb-1">07/1995 - 12/1996</div>
                          <div>Arzt im Praktikum</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Wissenschaftliche Expertise
                  </h3>
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-xl text-sm sm:text-base text-gray-700 leading-relaxed space-y-3">
                    <p>
                      Mit <span className="font-semibold text-gray-900">199 wissenschaftlichen Publikationen</span> und über <span className="font-semibold text-gray-900">7.700 Zitierungen</span> gehört Prof. Eberhart zu den meistzitierten deutschen Anästhesiologen auf seinem Gebiet. Sein Forschungsschwerpunkt ist PONV - postoperative Übelkeit und Erbrechen - ein Problem, das bei 20 bis 30 Prozent der Patienten nach balancierten Anästhesien mit längerer Dauer auftritt.
                    </p>
                    <p>
                      Gemeinsam mit Peter Kranke gab er das Standardwerk „Übelkeit und Erbrechen in der perioperativen Phase (PONV): Risikoeinschätzung, Vermeidung und Therapie in der klinischen Praxis" heraus - sowie das Buch „Fast-Track-Anästhesie".
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Zusatzqualifikationen
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Notfallmedizin (2000)',
                      'Spezielle anästhesiologische Intensivmedizin (2003)',
                      'Spezielle Schmerztherapie (2004)',
                      'Master of Arts (M.A.) Management (2006)',
                    ].map((q) => (
                      <div key={q} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-gray-700">{q}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Weitere Tätigkeiten
                  </h3>
                  <div className="space-y-4">
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">seit 01/2022</div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Gründung der KV-übergreifenden Berufsausübungsgemeinschaft „GutAufgewacht"
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">seit 12/2020</div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Prüfungsvorsitzender bei der Landesärztekammer Hessen
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">seit 02/2005</div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Prüfer für Facharztprüfungen „Anästhesiologie" und „spezielle anästhesiologische Intensivmedizin" bei der Landesärztekammer Hessen
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">seit 04/2002</div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Mitglied im Arbeitskreis „Qualitätsmanagement und Ökonomie" der DGAI/BDA, Arbeitsgruppenleiter des Projekts „Evaluierter Fragebogen Anästhesie (EFA)"
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Haltung und Engagement
                  </h3>
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-xl text-sm sm:text-base text-gray-700 leading-relaxed">
                    <p>
                      Prof. Eberhart engagiert sich nicht nur fachlich, sondern auch für die Arbeitsbedingungen im Krankenhaus. Als Kandidat für den Aufsichtsrat der Rhön Klinikum AG unter dem Motto „Mut &amp; Rückgrat" setzte er sich für Transparenz, faire Arbeitsbedingungen und die Würde aller Berufsgruppen im Krankenhaus ein - ein Arzt, der Haltung zeigt, auch wenn es unbequem wird.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <motion.div
            className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
              <div className="lg:w-1/3">
                <div className="sticky top-28">
                  <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Lena Bastian
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="inline-block bg-brand-50 text-brand text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-brand/20">Anästhesietechnische Assistentin</span>
                      <span className="inline-block bg-brand-50 text-brand text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-brand/20">Teamleitung</span>
                      <span className="inline-block bg-brand-50 text-brand text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-brand/20">Geräte- und Materialwirtschaft</span>
                      <span className="inline-block bg-brand-50 text-brand text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-brand/20">Ausbildung</span>
                    </div>
                    <div className="space-y-2 text-sm sm:text-base text-gray-700">
                      <p><span className="font-semibold">Geb.:</span> 29.10.2001, Marburg</p>
                      <p><span className="font-semibold">Sprachen:</span> Deutsch, Englisch, Spanisch, Französisch</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3 space-y-8">
                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Von Marburg in den OP - ein gerader Weg mit Tiefgang
                  </h3>
                  <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                    <p>
                      Lena Bastian, geboren 2001 in Marburg, hat früh gewusst, wohin sie will. Schon während ihrer Schulzeit an der Freiherr-vom-Stein Europaschule in Gladenbach absolvierte sie ein Orientierungspraktikum am Universitätsklinikum Gießen - ein erster Blick in den klinischen Alltag, der offensichtlich überzeugt hat. 2019 begann sie ihre Ausbildung zur Anästhesietechnischen Assistentin (ATA) an der DRK-Schwesternschaft Marburg, die sie 2022 erfolgreich abschloss.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Ausbildung
                  </h3>
                  <div className="space-y-4">
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">2019 - 2022</div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Ausbildung zur Anästhesietechnischen Assistentin (ATA), DRK-Schwesternschaft Marburg
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">Schulzeit</div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Freiherr-vom-Stein Europaschule Gladenbach · Orientierungspraktikum am Universitätsklinikum Gießen
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
                      <h4 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">GutAufgewacht - üBAG</h4>
                      <div className="space-y-3 text-sm sm:text-base text-gray-700">
                        <div className="block">
                          <div className="font-semibold mb-1">ab 2025</div>
                          <div>Teamleitung Assistenz · Ausbildung studentischer Hilfskräfte · Geräte- und Materialwirtschaft</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-50 p-4 sm:p-6 rounded-xl border-l-4 border-brand">
                      <h4 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">Freiberufliche Belegarztanästhesie</h4>
                      <div className="space-y-3 text-sm sm:text-base text-gray-700">
                        <div className="block">
                          <div className="font-semibold mb-1">Juli 2024 - 2025</div>
                          <div>Praxis Dr. Patzak (Bad Nauheim) · Praxis Hasenecker &amp; Girg (Butzbach) · Chirurgisches Zentrum Herborn</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-50 p-4 sm:p-6 rounded-xl border-l-4 border-brand">
                      <h4 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">Lichtfeld - Ambulante Spezialbereiche</h4>
                      <div className="space-y-3 text-sm sm:text-base text-gray-700">
                        <div className="block">
                          <div className="font-semibold mb-1">August - November 2024</div>
                          <div>Kinderwunschzentrum Wiesbaden · St. Josefskrankenhaus Heidelberg</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-50 p-4 sm:p-6 rounded-xl border-l-4 border-brand">
                      <h4 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">Universitätsklinikum Gießen und Marburg (UKGM), Standort Marburg</h4>
                      <div className="space-y-3 text-sm sm:text-base text-gray-700">
                        <div className="block">
                          <div className="font-semibold mb-1">August 2022 - Juli 2024</div>
                          <div>Anästhesieteam im Zentral-OP - alle operativen Fachgebiete</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Fachgebiete im Zentral-OP (UKGM)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Gynäkologie und Kreißsaal',
                      'Pädiatrie',
                      'Kardiochirurgie',
                      'Neurochirurgie',
                      'Unfallchirurgie und Orthopädie',
                      'Viszeral-, Thorax- und Gefäßchirurgie',
                      'Urologie',
                      'HNO, Augenheilkunde, MKG',
                    ].map((fach) => (
                      <div key={fach} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-gray-700">{fach}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Aufgaben bei GutAufgewacht
                  </h3>
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-xl text-sm sm:text-base text-gray-700 leading-relaxed">
                    <p>
                      In der üBAG GutAufgewacht übernimmt Lena Bastian eine Rolle, die über die klassische ATA-Tätigkeit weit hinausgeht. Sie leitet das Assistenzteam, gibt studentischen Hilfskräften eine strukturierte Einarbeitung und trägt Verantwortung für die Geräte- und Materialwirtschaft - also dafür, dass das technische Rückgrat jeder Narkose zuverlässig funktioniert: gewartetes Gerät, vollständiges Material, klare Abläufe.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Engagement und Persönliches
                  </h3>
                  <div className="space-y-4">
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">Oktober 2023 - Januar 2024</div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Humanitäres Hilfsprojekt in Guinea - Mitarbeit in einem regionalen Krankenhaus (Liebe in Aktion e.V.)
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">seit Oktober 2021</div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Ehrenamtliches Engagement in der Ecclesia Kirche Gießen
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">2014 - 2021</div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Ehrenamtliche Tätigkeit in einer evangelisch-freikirchlichen Kirchengemeinde
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <motion.div
            className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
              <div className="lg:w-1/3">
                <div className="sticky top-28">
                  <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Dr. med. Nicolas Schmitt
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="inline-block bg-brand-50 text-brand text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-brand/20">Facharzt für Anästhesiologie</span>
                      <span className="inline-block bg-brand-50 text-brand text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-brand/20">Notfallmedizin</span>
                      <span className="inline-block bg-brand-50 text-brand text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-brand/20">Dozent Regionalanästhesie</span>
                      <span className="inline-block bg-brand-50 text-brand text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-brand/20">Atemwegsmanagement</span>
                    </div>
                    <div className="space-y-2 text-sm sm:text-base text-gray-700">
                      <p><span className="font-semibold">Geb.:</span> 12.12.1987, Gießen</p>
                      <p><span className="font-semibold">Promotion:</span> magna cum laude, 2021</p>
                      <p><span className="font-semibold">Facharzt Anästhesiologie:</span> seit Februar 2021</p>
                      <p><span className="font-semibold">Zusatzbezeichnung Notfallmedizin:</span> seit Dezember 2017</p>
                      <p><span className="font-semibold">Bei GutAufgewacht:</span> seit Oktober 2025</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3 space-y-8">
                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Ein junger Facharzt mit ungewöhnlichem Horizont
                  </h3>
                  <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                    <p>
                      Dr. med. Nicolas Schmitt, geboren 1987 in Gießen, gehört zur jüngeren Generation der üBAG GutAufgewacht - und bringt dennoch bereits eine Breite an Erfahrungen mit, die weit über das Fachliche hinausgeht. Sein Weg in die Medizin begann nicht mit dem Studium, sondern mit einem freiwilligen sozialen Jahr in einer Wohneinrichtung für Menschen mit geistiger Behinderung - der Tobias Community in Temple, New Hampshire, USA. Ein Jahr im direkten Umgang mit Menschen, die auf dauernde Unterstützung angewiesen sind, schult eine Form von Zugewandtheit und Geduld, die im Medizinstudium nicht gelehrt wird.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Ausbildung
                  </h3>
                  <div className="space-y-4">
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">2008 - 2015</div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Studium der Humanmedizin, Universität Hamburg und Philipps-Universität Marburg
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">2013</div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Famulatur im Emergency Department, St. Vincent's University Hospital, Dublin, Irland · Schwerpunktcurriculum Klinische Immunologie und Infektiologie, Marburg
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">PJ - 1. Tertial</div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Anästhesie, Universitätsklinikum Marburg
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">Disputation 31.08.2021</div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Promotion zum Dr. med., Philipps-Universität Marburg, magna cum laude - „Auswirkungen eines nicht-medikamentösen Gewichtsreduktionsprogramms bei Schlaganfallpatienten auf Post-Stroke Depression, Lebensqualität und Demenz"
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
                      <h4 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">GutAufgewacht - üBAG</h4>
                      <div className="space-y-3 text-sm sm:text-base text-gray-700">
                        <div className="block">
                          <div className="font-semibold mb-1">seit Oktober 2025</div>
                          <div>Niedergelassener Facharzt in der KV-übergreifenden Berufsausübungsgemeinschaft GutAufgewacht, Marburg</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-50 p-4 sm:p-6 rounded-xl border-l-4 border-brand">
                      <h4 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">Universitätsklinikum Marburg (UKGM)</h4>
                      <div className="space-y-3 text-sm sm:text-base text-gray-700">
                        <div className="block">
                          <div className="font-semibold mb-1">Oktober 2015 - September 2020</div>
                          <div>Facharztausbildung, Klinik für Anästhesie und Intensivtherapie unter Prof. Dr. Hinnerk Wulf</div>
                        </div>
                        <div className="block">
                          <div className="font-semibold mb-1">Februar 2021</div>
                          <div>Facharztbezeichnung Anästhesiologie</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-50 p-4 sm:p-6 rounded-xl border-l-4 border-brand">
                      <h4 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">Notarzt &amp; Intensivtransport - Rettungsdienst Mittelhessen</h4>
                      <div className="space-y-3 text-sm sm:text-base text-gray-700">
                        <div className="block">
                          <div className="font-semibold mb-1">seit Dezember 2017</div>
                          <div>Freiberuflicher Notarzt im Rettungsdienst Mittelhessen (NEF)</div>
                        </div>
                        <div className="block">
                          <div className="font-semibold mb-1">seit Dezember 2019</div>
                          <div>Intensivtransport Marburg und Gießen</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Lehrtätigkeit
                  </h3>
                  <div className="space-y-4">
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">seit 2016</div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Dozent für das Wahlpflichtfach „Regionalanästhesie und postoperative Schmerztherapie", Klinik für Anästhesiologie und Intensivtherapie, UKGM
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">seit 2021</div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Dozent für das Wahlpflichtfach „Atemwegsmanagement", UKGM
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Schwerpunkt Regionalanästhesie
                  </h3>
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-xl text-sm sm:text-base text-gray-700 leading-relaxed">
                    <p>
                      Ultraschallgeführte Nervenblockaden ermöglichen es, bestimmte Eingriffe ohne Vollnarkose oder mit deutlich reduziertem Narkosemitteleinsatz durchzuführen - weniger Nebenwirkungen, schnellere Erholung, weniger postoperative Übelkeit. Wer Medizinstudierende darin unterrichtet, beherrscht diese Techniken nicht nur handwerklich, sondern versteht sie konzeptionell. Genau das ist der Anspruch von GutAufgewacht.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Zusatzqualifikationen
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Notfallmedizin (Dezember 2017)',
                      'Facharzt Anästhesiologie (Februar 2021)',
                      'Dozent Regionalanästhesie & Schmerztherapie (seit 2016)',
                      'Dozent Atemwegsmanagement (seit 2021)',
                    ].map((q) => (
                      <div key={q} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-gray-700">{q}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <motion.div
            className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
              <div className="lg:w-1/3">
                <div className="sticky top-28">
                  <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Dr. med. Steffen Dietz
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="inline-block bg-brand-50 text-brand text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-brand/20">Facharzt für Anästhesiologie</span>
                      <span className="inline-block bg-brand-50 text-brand text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-brand/20">Fachkunde Notfallmedizin</span>
                      <span className="inline-block bg-brand-50 text-brand text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-brand/20">Notarzt und Intensivtransport</span>
                    </div>
                    <div className="space-y-2 text-sm sm:text-base text-gray-700">
                      <p><span className="font-semibold">Geb.:</span> 09.06.1970</p>
                      <p><span className="font-semibold">Facharzt Anästhesiologie:</span> seit 15.03.2006</p>
                      <p><span className="font-semibold">Fachkunde Notfallmedizin:</span> seit 09.01.2007</p>
                      <p><span className="font-semibold">Bei GutAufgewacht:</span> seit 2022</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3 space-y-8">
                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Ein Arzt, der seinen Beruf von Grund auf kennt
                  </h3>
                  <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                    <p>
                      Dr. med. Steffen Dietz hat seinen Weg in die Medizin früh und konsequent gewählt. Schon während des Zivildienstes sammelte er erste praktische Erfahrungen - zunächst als Krankenpflegehelfer in der Geriatrie des Diakoniekrankenhauses Bethanien in Heidelberg, anschließend als OP-Pflegehelfer an der Ruprecht-Karls-Universität Heidelberg. Wer das Krankenhaus von der Pike auf kennt - als Pflegender, bevor er Arzt wird - bringt eine Bodenhaftung mit, die man später nicht mehr lernen kann.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Ausbildung
                  </h3>
                  <div className="space-y-4">
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">Zivildienst</div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Krankenpflegehelfer, Geriatrie, Diakoniekrankenhaus Bethanien Heidelberg · OP-Pflegehelfer, Ruprecht-Karls-Universität Heidelberg
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">1991 - 1998</div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Studium der Humanmedizin, Philipps-Universität Marburg - Gesamturteil gut (2,16)
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">Promotion</div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Philipps-Universität Marburg, summa cum laude
                      </div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">Famulatur</div>
                      <div className="text-gray-700 text-sm sm:text-base">
                        Sewa Kendra Leprosy Station, Kathmandu, Nepal
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
                      <h4 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">GutAufgewacht - üBAG</h4>
                      <div className="space-y-3 text-sm sm:text-base text-gray-700">
                        <div className="block">
                          <div className="font-semibold mb-1">seit 2022</div>
                          <div>Kooperation mit der üBAG GutAufgewacht</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-50 p-4 sm:p-6 rounded-xl border-l-4 border-brand">
                      <h4 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">Universitätsklinikum Gießen und Marburg (UKGM)</h4>
                      <div className="space-y-3 text-sm sm:text-base text-gray-700">
                        <div className="block">
                          <div className="font-semibold mb-1">seit 2000</div>
                          <div>Wissenschaftlicher Angestellter, später Wissenschaftlicher Mitarbeiter</div>
                        </div>
                        <div className="block">
                          <div className="font-semibold mb-1">15.03.2006</div>
                          <div>Facharztanerkennung Anästhesiologie</div>
                        </div>
                        <div className="block">
                          <div className="font-semibold mb-1">09.01.2007</div>
                          <div>Fachkunde Notfallmedizin</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-50 p-4 sm:p-6 rounded-xl border-l-4 border-brand">
                      <h4 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">Notarzt &amp; Intensivtransport - DRK Mittelhessen</h4>
                      <div className="space-y-3 text-sm sm:text-base text-gray-700">
                        <div className="block">
                          <div className="font-semibold mb-1">seit 29.05.2006</div>
                          <div>Notarzt, DRK Mittelhessen</div>
                        </div>
                        <div className="block">
                          <div className="font-semibold mb-1">seit 17.02.2016</div>
                          <div>Intensivtransport, DRK Mittelhessen</div>
                        </div>
                        <div className="block">
                          <div className="font-semibold mb-1">seit 2017</div>
                          <div>Hessische Erstaufnahmeeinrichtung Gießen und Neustadt</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Klinisches Profil
                  </h3>
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-xl text-sm sm:text-base text-gray-700 leading-relaxed">
                    <p>
                      Dr. Dietz verfügt über ein Profil, das in der belegoperativen Anästhesie selten so vollständig zusammenkommt: die wissenschaftliche Ausbildung und klinische Erfahrung eines großen Universitätsklinikums, die Handlungskompetenz eines erfahrenen Notarztes und eine menschliche Reife, die sich aus einem Berufsleben speist, das immer die ganze Bandbreite medizinischer Realität eingeschlossen hat - von der Geriatrie in Heidelberg über die Leprastation in Nepal bis zum Intensivtransport in Mittelhessen.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Zusatzqualifikationen
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Facharzt Anästhesiologie (März 2006)',
                      'Fachkunde Notfallmedizin (Januar 2007)',
                      'Notarzt DRK Mittelhessen (seit 2006)',
                      'Intensivtransport DRK Mittelhessen (seit 2016)',
                    ].map((q) => (
                      <div key={q} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-gray-700">{q}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Peace Atem */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <motion.div
            className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
              <div className="lg:w-1/3">
                <div className="sticky top-28">
                  <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Peace Atem
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="inline-block bg-brand-50 text-brand text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-brand/20">Anästhesieassistenz</span>
                      <span className="inline-block bg-brand-50 text-brand text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-brand/20">Medizinische Absolventin</span>
                      <span className="inline-block bg-brand-50 text-brand text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-brand/20">Vier Sprachen</span>
                      <span className="inline-block bg-brand-50 text-brand text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-brand/20">Drei Kontinente</span>
                    </div>
                    <div className="space-y-2 text-sm sm:text-base text-gray-700">
                      <p><span className="font-semibold">Geb.:</span> 09.11.1995, Bamenda, Kamerun</p>
                      <p><span className="font-semibold">In Deutschland seit:</span> April 2022</p>
                      <p><span className="font-semibold">Sprachen:</span> Deutsch, Englisch, Französisch, Russisch</p>
                      <p><span className="font-semibold">Tätigkeit:</span> Anästhesieassistenz bei GutAufgewacht</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3 space-y-8">
                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Eine Ärztin, die ihren Weg neu erfindet
                  </h3>
                  <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                    <p>
                      Peace Atem bringt in die üBAG GutAufgewacht eine Biografie mit, die in ihrer Dichte und ihrem Mut unvergleichlich ist. Sie ist ausgebildete Ärztin - Abschluss an der renommierten Danylo Halytsky Nationalen Medizinischen Universität in Lwiw, Ukraine - und hat zusätzlich drei Jahre postgraduierte klinische Ausbildung in Gynäkologie und Geburtshilfe an der Nationalen Universität Uzhhorod absolviert. Dann brach der Krieg aus, und sie musste fliehen.
                    </p>
                    <p>
                      Seit April 2022 lebt Peace Atem in Deutschland. Was sie seitdem geleistet hat, beschreibt eine Biografie beispielhafter Energie des unbeirrbaren Weitermachens: Sprache gelernt, Prüfungen abgelegt, im Krankenhaus und in der Praxis gearbeitet - immer mit dem Ziel, in der Medizin zu bleiben.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Medizinische Ausbildung auf drei Kontinenten
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-brand-50 p-4 sm:p-6 rounded-xl border-l-4 border-brand">
                      <h4 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">Studium &amp; Approbation</h4>
                      <div className="space-y-3 text-sm sm:text-base text-gray-700">
                        <div className="block">
                          <div className="font-semibold mb-1">2014 - 2018</div>
                          <div>Danylo Halytsky Nationale Medizinische Universität, Lwiw, Ukraine - Abschluss: Doctor of Medicine</div>
                        </div>
                        <div className="block">
                          <div className="font-semibold mb-1">Klinische Praktika</div>
                          <div>Dr. H. Gordon Robert Hospital, Shillong, Nordostindien · Klinische Ausbildungsabschnitte in Kamerun</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-50 p-4 sm:p-6 rounded-xl border-l-4 border-brand">
                      <h4 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">Facharztausbildung Gynäkologie &amp; Geburtshilfe</h4>
                      <div className="space-y-3 text-sm sm:text-base text-gray-700">
                        <div className="block">
                          <div className="font-semibold mb-1">2019 - 2022</div>
                          <div>Klinische Residenz, Nationale Universität Uzhhorod, Ukraine - Zertifikat UZ Nr. 00143, Ukrainische Ärztekammer</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Deutschland: Neustart mit Konsequenz
                  </h3>
                  <div className="space-y-4">
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">2022 - 2023</div>
                      <div className="text-gray-700 text-sm sm:text-base">Pflegehelferin, Haus am Park Alten- und Pflegeheim · BAMF-Integrationskurs B1</div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">Dezember 2023</div>
                      <div className="text-gray-700 text-sm sm:text-base">Deutsch-Test für den Beruf B2 - Gesamtergebnis 220,5 / 240 Punkten, Prädikat: Prüfungsziel sehr gut erfüllt</div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">2024</div>
                      <div className="text-gray-700 text-sm sm:text-base">Spezialberufssprachkurs für Akademische Heilberufe C1, Freiburg International Academy · Hospitationen: Hausarztpraxis Dr. med. Erdmuth Faber und Praxis Baalbaki-Bedenbender, Fronhausen</div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">21. September 2024</div>
                      <div className="text-gray-700 text-sm sm:text-base">Ärztliche Fachsprachprüfung der Landesärztekammer Hessen: <span className="font-semibold text-gray-900">bestanden</span></div>
                    </div>
                    <div className="block">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">seit Februar 2025</div>
                      <div className="text-gray-700 text-sm sm:text-base">Vorbereitung auf die Kenntnisprüfung (Freiburg International Academy) - Weg zur deutschen Approbation</div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Vier Sprachen - ein Gewinn für Patienten
                  </h3>
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-xl text-sm sm:text-base text-gray-700 leading-relaxed">
                    <p>
                      Peace Atem spricht Deutsch, Englisch, Französisch und Russisch. Im Umfeld der Anästhesie, in der Patienten vor einem Eingriff nicht selten verstärkte Angst erleben, ist diese sprachliche Kompetenz weit mehr als ein Lebenslaufmerkmal. Wer als Ärztin in Kamerun, Indien und der Ukraine studiert und gearbeitet hat, weiß, was es bedeutet, wenn Patienten Angst haben, wenn sie nicht alles verstehen, wenn sie sich fremd fühlen. Diese Erfahrung macht Peace Atem zu einer Anästhesieassistenz, die nicht nur Handgriffe kennt, sondern Menschen liest.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand">
                    Engagement über den Beruf hinaus
                  </h3>
                  <div className="block">
                    <div className="text-brand font-semibold text-sm sm:text-base mb-1">Februar 2021</div>
                    <div className="text-gray-700 text-sm sm:text-base">
                      Ehrenamtliche medizinische Ausbilderin, Mount Zion School of Nursing, Bamenda - Seminare zu Frauengesundheit und Familienplanung für Krankenpflegeschülerinnen und -schüler
                    </div>
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
