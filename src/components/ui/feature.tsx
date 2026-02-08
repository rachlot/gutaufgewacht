import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Syringe, Activity, Heart, ClipboardCheck } from "lucide-react"

function IVAnimation() {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev === 0 ? 100 : 0))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full relative">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-2 border-brand-200 rounded-full"></div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: position === 100 ? 360 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <Syringe className="w-10 h-10 text-brand" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-brand rounded-full -ml-1 -mt-1"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </div>
  )
}

function PlexusAnimation() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 3)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-32 h-32">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border-2 border-teal-600 rounded-full"
            animate={{
              scale: active === i ? 1.2 : 1,
              opacity: active === i ? 1 : 0.3,
            }}
            transition={{ duration: 0.5 }}
            style={{
              transform: `translate(${i * 8}px, ${i * 8}px)`,
            }}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <Activity className="w-10 h-10 text-teal-600" />
        </div>
      </div>
    </div>
  )
}

function SpinalAnimation() {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setHeight((prev) => (prev === 0 ? 100 : 0))
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center gap-2">
        <Heart className="w-10 h-10 text-green-600" />
        <div className="w-1 h-16 bg-green-200 rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-green-600"
            animate={{ height: `${height}%` }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
        <div className="w-3 h-3 bg-green-600 rounded-full" />
      </div>
    </div>
  )
}

function TIVAAnimation() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 20))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <ClipboardCheck className="w-12 h-12 text-amber-600" />
      <div className="flex gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-8 bg-amber-600 rounded-full"
            animate={{
              scaleY: progress > i * 20 ? 1 : 0.3,
              opacity: progress > i * 20 ? 1 : 0.3,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section id="leistungen" className="bg-background px-4 sm:px-6 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Leistungen</h2>
          <div className="w-20 sm:w-24 h-1 bg-brand mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-gray-600 mt-4 sm:mt-6 max-w-3xl mx-auto">
            Wir bieten unseren Patienten alle üblichen Formen der Narkose an, angefangen bei besonders gut verträglicher Allgemeinanästhesie bis hin zu spezialisierten Regionalanästhesien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <motion.div
            className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 min-h-[280px] flex flex-col hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex-1">
              <IVAnimation />
            </div>
            <div className="mt-4 sm:mt-6">
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Intravenöse Regionalanästhesie</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Gut geeignet für kleinere Operationen an den Fingern oder dem Karpaltunnel</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 min-h-[280px] flex flex-col hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex-1">
              <PlexusAnimation />
            </div>
            <div className="mt-4 sm:mt-6">
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Axilläre Plexusanästhesie</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Für aufwändigere Handoperationen wie z.B. einer Dupuytren'schen Kontraktur-OP</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 min-h-[280px] flex flex-col hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex-1">
              <SpinalAnimation />
            </div>
            <div className="mt-4 sm:mt-6">
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Spinalanästhesie</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Für Operationen der unteren Extremität oder proktologische Eingriffe</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 min-h-[280px] flex flex-col hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex-1">
              <TIVAAnimation />
            </div>
            <div className="mt-4 sm:mt-6">
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">TIVA</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Total intravenöse Anästhesie - besonders gut verträglich und angenehm</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
