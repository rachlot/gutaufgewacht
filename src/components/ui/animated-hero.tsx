import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["sicher", "komfortabel", "professionell", "vertrauensvoll", "exzellent"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full bg-gradient-to-br from-brand-50/30 via-white to-brand-50/20 rounded-3xl overflow-hidden">
      <div className="container mx-auto">
        <div className="flex gap-8 md:gap-12 py-16 sm:py-24 lg:py-40 items-center justify-center flex-col px-6 sm:px-8">
          <div className="flex gap-6 md:gap-8 flex-col items-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl tracking-tight text-center font-serif leading-[1.1]">
              <span className="text-gray-900">Anästhesie, die</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center pb-2 pt-1 md:pb-4 md:pt-2">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-serif font-semibold text-brand"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="text-gray-900">ist</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-600 max-w-3xl text-center font-light">
              Individuelle Betreuung vor, während und nach Ihrem Eingriff
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <a href="#leistungen" className="w-full sm:w-auto">
              <Button size="lg" className="gap-3 rounded-xl bg-brand hover:bg-brand-700 text-white w-full px-8 py-6 text-base transition-all duration-200 hover:shadow-lg">
                Leistungen <MoveRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="/kontakt" className="w-full sm:w-auto">
              <Button size="lg" className="gap-3 rounded-xl w-full px-8 py-6 text-base border-2 border-gray-300 hover:border-brand transition-all duration-200" variant="outline">
                Kontakt <Phone className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
