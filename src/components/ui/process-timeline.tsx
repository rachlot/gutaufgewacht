import { ClipboardList, Sparkles, Activity, HeartPulse } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Persönliches Vorgespräch",
    description: "Ausführliche Anamnese und Besprechung Ihrer individuellen Bedürfnisse und Vorerkrankungen"
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Individuelle Planung",
    description: "Wahl des optimalen Narkoseverfahrens abgestimmt auf Ihren Eingriff und Ihre Gesundheit"
  },
  {
    number: "03",
    icon: Activity,
    title: "Durchführung mit modernen Verfahren",
    description: "Einsatz modernster Technik und Medikamente für maximale Sicherheit und Komfort"
  },
  {
    number: "04",
    icon: HeartPulse,
    title: "Postoperative Betreuung",
    description: "Sorgfältige Überwachung und Schmerztherapie für ein optimales Aufwachen"
  }
];

export function ProcessTimeline() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24 bg-gradient-to-b from-white to-brand-50/20">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-gray-900 mb-6">
          Was Sie bei uns erwartet
        </h2>
        <div className="w-24 h-1 bg-brand mx-auto rounded-full"></div>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-200 via-brand to-brand-200 -translate-y-1/2"></div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="lg:hidden absolute left-8 top-20 bottom-0 w-0.5 bg-brand-200"></div>

                <div className="relative bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand/30 h-full">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center">
                      <div className="relative z-10 w-20 h-20 rounded-full bg-brand flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <span className="text-5xl font-serif font-bold text-brand-100 lg:absolute lg:top-4 lg:right-4">
                        {step.number}
                      </span>
                    </div>

                    <div className="lg:text-center">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
