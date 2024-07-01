import { useState, useEffect } from "react"
import { Container } from "./Container"
import { motion, AnimatePresence } from "framer-motion"


export function Hero({ hero }) {

  return (
    <div className="bg-white relative">
      <div className="relative overflow-hidden">
        <video autoPlay muted loop className="min-w-full min-h-full">
          <source src="/videos/bim.webm" type="video/webm" />
          <source src="/videos/bim.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 bottom-32 flex items-center justify-center">
          {/* <motion.div className=""
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ delay: 0.5, duration: 0.5, repeat: Infinity }}
          >
            <a
              href="https://airtable.com/appwL7Iku8HiHU87A/shrEX73O6jtofCoRv"
              className="rounded-md bg-[#3F47FF] text-lg text-white px-6 py-4 font-semibold text-white shadow-sm hover:bg-white hover:text-[#3F47FF]"
            >
              Join the Season 3 Waitlist 🚀
            </a>
          </motion.div> */}
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
                href="https://airtable.com/appwL7Iku8HiHU87A/shrEX73O6jtofCoRv"
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
