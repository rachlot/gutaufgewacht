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
    ]
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
    ]
  }
];

export function TeamSection() {
  return (
    <section id="team" className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-gray-900 mb-6">
          Unsere Anästhesisten
        </h2>
        <div className="w-24 h-1 bg-brand mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-8 md:p-10">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="w-16 h-1 bg-brand rounded-full mb-4"></div>
                <p className="text-lg text-brand font-medium">
                  {member.role}
                </p>
              </div>
              <ul className="space-y-3">
                {member.qualifications.map((qual, idx) => (
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
        <p className="text-xl md:text-2xl font-serif italic text-gray-800 text-center leading-relaxed">
          „Wir sind als Anästhesisten stolz, mit einem so exzellenten Team an Operateuren zusammenarbeiten zu dürfen und bieten unseren gemeinsamen Patienten ein höchstes Maß an Komfort bei gleichzeitig maximaler Sicherheit."
        </p>
      </div>
    </section>
  );
}
