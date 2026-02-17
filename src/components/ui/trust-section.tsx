import { Award, Heart, Shield, Stethoscope, UserCheck, Zap } from "lucide-react";

const qualifications = [
  {
    icon: Stethoscope,
    title: "Fachärzte für Anästhesiologie",
    description: "Umfassende Expertise und langjährige Erfahrung"
  },
  {
    icon: Heart,
    title: "Intensivmedizin",
    description: "Spezialisierte Versorgung kritischer Patienten"
  },
  {
    icon: Shield,
    title: "Schmerztherapie",
    description: "Moderne Verfahren für maximalen Komfort"
  },
  {
    icon: Zap,
    title: "Notfallmedizin",
    description: "Schnelle und kompetente Reaktion"
  },
  {
    icon: Award,
    title: "Zertifiziert",
    description: "Qualitätssiegel \"GutAufgewacht\""
  },
  {
    icon: UserCheck,
    title: "Langjährige Erfahrung",
    description: "Über 20 Jahre klinische Expertise"
  }
];

export function TrustSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-gray-900 mb-6">
          Kompetenz und Erfahrung
        </h2>
        <div className="w-24 h-1 bg-brand mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {qualifications.map((qual, index) => {
          const Icon = qual.icon;
          return (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-brand/20"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-brand" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {qual.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {qual.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
