import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Allgemeinanästhesie",
    description: "Vollnarkose mit modernsten Medikamenten und Überwachungstechnik für maximale Sicherheit während Ihrer Operation.",
    features: ["TIVA-Verfahren", "Narkosetiefenmessung", "Moderne Beatmung"]
  },
  {
    title: "Regionalanästhesie",
    description: "Teilnarkose für gezielte Schmerzausschaltung bei gleichzeitigem Bewusstsein oder leichter Sedierung.",
    features: ["Spinalanästhesie", "Periduralanästhesie", "Nervenblockaden"]
  },
  {
    title: "Schmerztherapie",
    description: "Individuelle postoperative Schmerzbehandlung für einen komfortablen Heilungsverlauf.",
    features: ["Multimodale Therapie", "Patientenkontrollierte Analgesie", "Regionale Verfahren"]
  },
  {
    title: "Postoperative Überwachung",
    description: "Professionelle Betreuung im Aufwachraum mit erweiterter Überwachung bei Bedarf.",
    features: ["24h Überwachung", "Qualifiziertes Personal", "Moderne Bettenstation"]
  },
  {
    title: "Präoperative Aufklärung",
    description: "Ausführliche Beratung und Vorbereitung für einen sicheren und entspannten Eingriff.",
    features: ["Individuelle Beratung", "Risikoeinschätzung", "Verfahrenswahl"]
  },
  {
    title: "Kinderanästhesie",
    description: "Einfühlsame und kindgerechte Betreuung für unsere jüngsten Patienten.",
    features: ["Spezielle Expertise", "Kinderfreundlich", "Elternbegleitung"]
  }
];

export function ServicesSection() {
  return (
    <section id="leistungen" className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-gray-900 mb-6">
          Unsere Leistungen
        </h2>
        <div className="w-24 h-1 bg-brand mx-auto rounded-full mb-6"></div>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Moderne Anästhesieverfahren für höchste Sicherheit und maximalen Komfort
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand/20 flex flex-col"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4 group-hover:text-brand transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-2 text-brand font-medium group-hover:gap-4 transition-all duration-300">
              Mehr erfahren
              <ArrowRight className="w-4 h-4" />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
