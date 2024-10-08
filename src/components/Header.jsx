import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import pill from  '@/images/logos/vm_pill.png'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  // { name: 'Home', href: '/' },
  // { name: 'Builder Summer', href: '/summer' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  
  const list = {
    visible: {
      opacity: 1, 
      x: 0,
      transition: {
        duration: 1,
        staggerChildren: .3,
        delayChildren: 0.2
      }
    },
    hidden: { opacity: 0, x: -100},
  }
  
  const item = {
    visible: { 
      opacity: 1, 
      y: 0, 
    },
    hidden: { opacity: 0, y: -100 },
  }
  
  const phrases = [
    {id: 1, words: "A Startup Legacy", color: "#ff4500"},
    {id: 2, words: "An Amazing Team", color: "#ffd700"},
    {id: 3, words: "A Market Plan", color: "#ff69b4"},
    {id: 4, words: "A Prototype", color: "#00ced1"},
    {id: 5, words: "A Community", color: "#7fff00"},
    {id: 6, words: "A New Brand", color: "#ff6347"},
    {id: 7, words: "A Great Idea", color: "#ff00ff"},
    {id: 8, words: "A Tech Hub", color: "#00ff00"},
    {id: 9, words: "A Bold Vision", color: "#ffa500"},
    {id: 10, words: "A Strong Team", color: "#00bfff"},
    {id: 11, words: "A Fresh Start", color: "#ff1493"},
    {id: 12, words: "A Bright Future", color: "#ff8c00"},
    {id: 13, words: "A Clear Path", color: "#adff2f"},
    {id: 14, words: "A Solid Plan", color: "#00fa9a"},
    {id: 15, words: "A Winning Idea", color: "#ff4500"}
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % phrases.length);
      if (currentIndex === phrases.length - 1) {
        setCurrentIndex(0);
      }
    }, 3000); // change the interval time as needed
    setIntervalId(id);
    return () => clearInterval(id);
  }, [currentIndex, phrases]);

  return (
    <header className="absolute w-full z-10 bg-gradient-to-b from-black to-transparent">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-2" aria-label="Global">
        <div className="hidden lg:block flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Venture Miami - Built in Miami</span>
            <Image className="h-auto w-[15vw]" src={pill} alt="" width={500} height={500} />
          </Link>
        </div>
        <div className="w-60 flex justify-left">
          <p className="text-lg font-bold tracking-tight text-white">
            Build
            <AnimatePresence mode="wait">
                <motion.span 
                  key={phrases[currentIndex].id}
                  initial={{ opacity: 0, y: "200%", color: phrases[currentIndex].color }}
                  animate={{ opacity: 1, y: 0, color: phrases[currentIndex].color, transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 } }}
                  exit={{ opacity: 0, y: "200%", transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 } }}
                  >
                    {" " + phrases[currentIndex].words + " "}
                </motion.span>
            </AnimatePresence>
          </p>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          {/* <a href="https://airtable.com/shrkjM30IAb9HP0he" className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900">
            Stay in the Loop 
          </a> */}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-8 w-auto"
                src={pill}
                alt=""
                width={500}
                height={500}
              />
            </a>
            <a
              href="https://airtable.com/appwL7Iku8HiHU87A/pag9921njt7sgXG0L/form"
              className="ml-auto rounded-md bg-[#3F47FF] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#3F47FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3F47FF]"
            >
              Apply Now
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="https://airtable.com/shrkjM30IAb9HP0he"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Stay in the Loop
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
