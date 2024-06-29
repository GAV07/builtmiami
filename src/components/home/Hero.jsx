import { useState, useEffect } from "react"
import { Container } from "./Container"


export function Hero({ hero }) {

  return (
    <div className="bg-white">
      <main>
      <div className="absolute min-w-[100vw]">
                 <video autoPlay muted loop className="">
                    <source src="/videos/test.webm" type="video/webm" />
                    <source src="/vidoes/test.mp4" type="video/mp4" />
                  </video>
                </div>
        <div className="relative isolate">
          {/* <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
          </svg> */}
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto mt-[20vh] max-w-7xl px-6 pb-32 pt-12 lg:pt-0 lg:px-8 ">
              <div className="mx-auto max-w-6xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="max-w-xl lg:shrink-0 xl:max-w-2xl">
                  
                  {/* <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none pb-4">
                    {hero.fields.subtitle}
                  </p> */}
                  {/* application section */}
                  {/* <div className="mx-auto mt-2 max-w-2xl border-t-2 border-black-100 py-8">
                    <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16  lg:grid-cols-3">
                      {hero.fields.phases.map((phase) => (
                        <div key={phase.fields.title} className="flex-col justify-between border-r-2 border-black-100 last:border-none">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">{phase.fields.title}</h3>
                            <p className="mt-2 text-base text-gray-500">{phase.fields.subtitle}</p>
                          </div>
                          {phase.fields.buttons.map((button, i) => (
                              <a key={i} href={button.fields.url} className="">
                                <p className="text-[#3f47ff] font-bold">{button.fields.text}</p>
                              </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div> */}
                  {/* <div className="mt-10 flex flex-col items-left gap-x-6">
                    <p className="mb-4 text-sm">Zero to One Sprint Applications Open!</p>
                    {hero.fields.buttons.map((button) => (
                      <a
                        rel="noreferrer"
                        key={button.fields.text}
                        href={button.fields.url}
                        target="_blank"
                        className="w-fit rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        {button.fields.text}
                      </a>
                    ))}
                  </div> */}
                </div>
                {/* <motion.div 
                  className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
                  variants={list}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div 
                    className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
                    variants={item}
                  >
                    <div className="relative">
                      <img
                        src={hero.fields.photos[0].fields.file.url}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </motion.div>
                  <motion.div 
                    className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36"
                    variants={item}
                  >
                    <div className="relative">
                      <img
                        src={hero.fields.photos[1].fields.file.url}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src={hero.fields.photos[2].fields.file.url}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </motion.div>
                  <motion.div 
                    className="w-44 flex-none space-y-8 pt-32 sm:pt-0"
                    variants={item}
                  >
                    <div className="relative">
                      <img
                        src={hero.fields.photos[3].fields.file.url}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src={hero.fields.photos[4].fields.file.url}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </motion.div>
                </motion.div> */}
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
