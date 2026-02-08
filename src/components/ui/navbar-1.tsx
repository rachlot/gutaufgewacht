import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-0 left-0 right-0 z-[1000] flex justify-center w-full py-3 sm:py-4 md:py-6 px-3 sm:px-4 pointer-events-none">
      <div className="flex items-center justify-between px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-white rounded-full shadow-lg w-full max-w-4xl relative pointer-events-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo_mccm_final.png" alt="Medical Center Clinic Marburg" className="h-8 sm:h-10 md:h-12 w-auto" />
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center justify-center space-x-8 flex-1">
          {[
            { name: "Leistungen", href: "#leistungen" },
            { name: "Team", href: "#team" },
            { name: "Kontakt", href: "#kontakt" }
          ].map((item) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <a href={item.href} className="text-sm text-gray-900 hover:text-brand transition-colors font-medium relative pb-1 border-b-2 border-transparent hover:border-brand">
                {item.name}
              </a>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <a
            href="tel:+4964218070-10"
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-brand rounded-full hover:bg-brand-700 transition-colors"
          >
            Termin vereinbaren
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button className="md:hidden flex items-center p-2" onClick={toggleMenu} whileTap={{ scale: 0.9 }}>
          <Menu className="h-6 w-6 sm:h-7 sm:w-7 text-gray-900" />
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-[1010] pt-20 sm:pt-24 px-6 sm:px-8 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-4 sm:top-6 right-4 sm:right-6 p-3"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-7 w-7 sm:h-8 sm:w-8 text-gray-900" />
            </motion.button>
            <div className="flex flex-col space-y-8 sm:space-y-10">
              {[
                { name: "Leistungen", href: "#leistungen" },
                { name: "Team", href: "#team" },
                { name: "Kontakt", href: "#kontakt" }
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <a href={item.href} className="text-lg sm:text-xl text-gray-900 font-medium py-2 block" onClick={toggleMenu}>
                    {item.name}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-8 sm:pt-10"
              >
                <a
                  href="tel:+4964218070-10"
                  className="inline-flex items-center justify-center w-full px-6 py-4 text-base sm:text-lg font-medium text-white bg-brand rounded-full hover:bg-brand-700 transition-colors"
                  onClick={toggleMenu}
                >
                  Termin vereinbaren
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Navbar1 };
