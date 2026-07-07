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
    <div className="w-full bg-gradient-to-b from-brand-50 to-white rounded-2xl md:rounded-3xl">
      <div className="container mx-auto">
        <div className="flex gap-6 md:gap-8 py-12 sm:py-16 lg:py-32 items-center justify-center flex-col px-4 sm:px-6">
          <div className="flex gap-3 md:gap-4 flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-regular">
              <span className="text-gray-900">Anästhesie, die</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center pb-2 pt-1 md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-brand"
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

            <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-gray-600 max-w-2xl text-center px-2">
              Die KV-übergreifende Berufsausübungsgemeinschaft GutAufgewacht bietet erstklassige Anästhesie mit höchster Sicherheit und maximalem Komfort für unsere Patienten.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a href="tel:+496421953403" className="w-full sm:w-auto">
              <Button size="lg" className="gap-4 rounded-2xl bg-brand hover:bg-brand-700 text-white w-full">
                Termin vereinbaren <Phone className="w-4 h-4" />
              </Button>
            </a>
            <a href="#leistungen" className="w-full sm:w-auto">
              <Button size="lg" className="gap-4 rounded-2xl w-full" variant="outline">
                Mehr erfahren <MoveRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
