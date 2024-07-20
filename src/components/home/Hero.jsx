import { useState, useEffect } from "react"
import { Container } from "./Container"
import { motion, AnimatePresence } from "framer-motion"


export function Hero({ hero }) {

  return (
    <div className="bg-white relative h-[100vh]">
      <div className="relative overflow-hidden h-[100vh]">
        <video 
          src="/videos/short_bim.mp4"
          type="video/mp4"
          autoPlay 
          playsInline 
          muted 
          loop 
          className="hidden md:block min-w-full min-h-full object-cover"
        >
        </video>
        <video 
          src="/videos/short_bim_mobile.mp4"
          type="video/mp4"
          autoPlay 
          playsInline 
          muted 
          loop 
          className="md:hidden min-w-full min-h-full"
        >
        </video>
        <div className="absolute inset-x-0 bottom-32 flex items-center justify-center object-cover">
          <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-lg bg-[#3F47FF]"
                animate={{
                  scaleY: [1, 2, 4, 2, 1],
                  opacity: [0.5, 0.3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-lg bg-[#3F47FF]"
                animate={{
                  scaleY: [1, 1.5, 3, 1.5, 1],
                  opacity: [0.3, 0.1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
              <motion.a
                href="https://airtable.com/appwL7Iku8HiHU87A/paggeR4365csfnPNy/form"
                className="relative bg-[#3F47FF] text-white px-6 py-4 rounded-lg font-semibold shadow-sm hover:bg-white hover:text-[#3F47FF]"
                animate={{
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                Join the Season 3 Waitlist 🚀
              </motion.a>
            </div>
          </div>
      </div>
    </div>
  )
}
