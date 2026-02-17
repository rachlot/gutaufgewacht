import { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';

const teamMembers = [
  {
    name: "Prof. Dr. med. Leopold Eberhart",
    role: "Facharzt für Anästhesiologie seit 2001",
    image: "/img_9408.jpg",
    qualifications: [
      "Zusatzbezeichnungen: Schmerztherapie, spezielle Intensivmedizin, Notfallmedizin",
      "Rund 15 Jahre stellvertretender Klinikdirektor an der Marburger Universitätsklinik",
      "Prüfer für Anästhesiologie und Intensivmedizin bei der Landesärztekammer Hessen",
      "Leitet seit Juli 2022 die Medical Center Clinic Marburg"
    ],
    detailedInfo: "Prof. Dr. med. Leopold Eberhart ist ein erfahrener Anästhesist mit über 20 Jahren Expertise. Seine umfassende Erfahrung in Lehre, Forschung und klinischer Praxis macht ihn zu einem führenden Experten auf seinem Gebiet. Er legt besonderen Wert auf patientenorientierte Versorgung und modernste Anästhesieverfahren."
  },
  {
    name: "Prof. Dr. med. Astrid Morin",
    role: "Fachärztin für Anästhesiologie seit 2001",
    image: "/img_9412.jpg",
    qualifications: [
      "Zusatzweiterbildung: Intensivmedizin, Schmerztherapie, Notfallmedizin, Palliativmedizin",
      "Klinische und wissenschaftliche Schwerpunkte: postoperative Schmerztherapie",
      "Spezialisiert auf Optimierung der postoperativen Phase",
      "Fokus auf Vermeidung von Übelkeit, Kältezittern und Schmerzen"
    ],
    detailedInfo: "Prof. Dr. med. Astrid Morin ist eine führende Expertin für postoperative Schmerztherapie. Ihre Forschung und klinische Arbeit konzentrieren sich darauf, den Heilungsprozess der Patienten zu optimieren und postoperative Beschwerden zu minimieren. Sie kombiniert modernste medizinische Erkenntnisse mit einer einfühlsamen, patientenzentrierten Betreuung."
  }
];

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  return (
    <section id="team" className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-sans font-semibold text-gray-900 mb-6">
          Unsere Anästhesisten
        </h2>
        <div className="w-24 h-1 bg-brand mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer group"
            onClick={() => setSelectedMember(index)}
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <div className="bg-white/90 px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                  <span className="text-brand font-semibold">Mehr erfahren</span>
                  <ChevronRight className="w-5 h-5 text-brand" />
                </div>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-sans font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="w-16 h-1 bg-brand rounded-full mb-4"></div>
                <p className="text-lg text-brand font-medium">
                  {member.role}
                </p>
              </div>
              <ul className="space-y-3">
                {member.qualifications.slice(0, 3).map((qual, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-brand flex-shrink-0 mt-2"></span>
                    <span>{qual}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-brand-50 p-8 md:p-12 rounded-3xl border-l-4 border-brand">
        <p className="text-xl md:text-2xl font-sans italic text-gray-800 text-center leading-relaxed">
          „Wir sind als Anästhesisten stolz, mit einem so exzellenten Team an Operateuren zusammenarbeiten zu dürfen und bieten unseren gemeinsamen Patienten ein höchstes Maß an Komfort bei gleichzeitig maximaler Sicherheit."
        </p>
      </div>

      {selectedMember !== null && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-3xl">
              <h3 className="text-2xl md:text-3xl font-sans font-semibold text-gray-900">
                {teamMembers[selectedMember].name}
              </h3>
              <button
                onClick={() => setSelectedMember(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="p-8">
              <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-8">
                <img
                  src={teamMembers[selectedMember].image}
                  alt={teamMembers[selectedMember].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mb-8">
                <p className="text-lg text-brand font-medium mb-4">
                  {teamMembers[selectedMember].role}
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  {teamMembers[selectedMember].detailedInfo}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-sans font-semibold text-gray-900 mb-4">Qualifikationen & Erfahrung</h4>
                <ul className="space-y-4">
                  {teamMembers[selectedMember].qualifications.map((qual, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-brand flex-shrink-0 mt-2"></span>
                      <span>{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
