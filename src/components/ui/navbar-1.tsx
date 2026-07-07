import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { name: "Leistungen", href: "/leistungen" },
  { name: "Team", href: "/team" },
  { name: "Karriere", href: "/karriere" },
  { name: "Kontakt", href: "/kontakt" },
];

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-[1000] flex justify-center w-full py-3 sm:py-4 md:py-6 px-3 sm:px-4 pointer-events-none">
        <div className="flex items-center justify-between px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-white rounded-full shadow-lg w-full max-w-4xl relative pointer-events-auto">
          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0">
            <img
              src="/Logo_gutaufgewacht_neu.jpg"
              alt="GutAufgewacht MVZ Marburg"
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-8 flex-1">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href={item.href}
                  className="text-sm text-gray-900 hover:text-brand transition-colors font-medium relative pb-1 border-b-2 border-transparent hover:border-brand"
                >
                  {item.name}
                </a>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.div
            className="hidden md:block flex-shrink-0"
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

          {/* Mobile Hamburger */}
          <motion.button
            className="md:hidden flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(true)}
            whileTap={{ scale: 0.9 }}
            aria-label="Menü öffnen"
          >
            <Menu className="h-6 w-6 text-gray-900" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay - outside pointer-events-none container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[2000] md:hidden pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Drawer */}
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white flex flex-col shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <a href="/" onClick={closeMenu}>
                  <img
                    src="/Logo_gutaufgewacht_neu.jpg"
                    alt="GutAufgewacht MVZ Marburg"
                    className="h-9 w-auto"
                  />
                </a>
                <motion.button
                  onClick={closeMenu}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Menü schließen"
                >
                  <X className="h-6 w-6 text-gray-700" />
                </motion.button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col px-4 py-6 flex-1 gap-1">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1, duration: 0.3 }}
                    className="flex items-center px-4 py-4 text-lg font-medium text-gray-800 rounded-xl hover:bg-brand-50 hover:text-brand transition-colors"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>

              {/* Bottom CTA */}
              <motion.div
                className="px-6 py-6 border-t border-gray-100"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
              >
                <a
                  href="tel:+4964218070-10"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-semibold text-white bg-brand rounded-2xl hover:bg-brand-700 transition-colors shadow-md"
                >
                  <Phone className="h-5 w-5" />
                  Termin vereinbaren
                </a>
                <p className="text-center text-xs text-gray-400 mt-3">+49 6421 8070-10</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export { Navbar1 };
