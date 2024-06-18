import Image from 'next/image'

import { Container } from '@/components/home/Container'
import { SectionHeading } from '@/components/home/SectionHeading'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'


export function Accelerator({ accelerator }) {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: isInView ? 1 : 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5
      }
    }
  };
  
  const item = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: isInView ? 0 : 100,
      opacity: isInView ? 1 : 0,
      transition: {
        ease: "easeInOut",
        duration: 1,
      }
    }
  };

  return (
    <section
      ref={ref}
      id="accelerator"
      aria-labelledby="accelerator-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="accelerator-title">
          {accelerator.fields.lead}
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          {accelerator.fields.title}
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          {accelerator.fields.subtitle}
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <motion.ol
          role="list"
          // className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
          className={'grid grid-cols-1 gap-x-0 gap-y-10 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-10'}
          // variants={container}
          initial="hidden"
          animate="visible"
        >
         {/* {accelerator.fields.cards.map((resource) => (
            <motion.li
              key={resource.fields.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
              variants={item}
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <img src={resource.fields.image.fields.file.url} />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.fields.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.fields.subtitle}
                </p>
              </div>
            </motion.li>
          ))}*/}

          {accelerator.fields.cards.map((resource) => (
              <motion.li
                  key={resource.fields.title}
                  // className="relative grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
                  className="md:aspect-[1/1] sm:aspect-video aspect-[1/1]"
                  variants={item}
              >
                <div className="relative h-full w-full shadow-lg rounded-md overflow-hidden">
                  <img src={resource.fields.image.fields.file.url} className={'absolute top-0 left-0 z-[1] h-full w-full object-cover rounded-md'} />
                  <div className={'p-4 absolute top-0 left-0 z-[3] h-full w-full text-white flex flex-col justify-end items-start'}>
                    <h3 className="text-[56px] md:text-[56px] lg:text-[30px] font-medium tracking-tight leading-tight">
                      {resource.fields.title}
                    </h3>
                    <p className="mt-2 text-[20px] lg:text-[17px]">
                      {resource.fields.subtitle}
                    </p>
                  </div>
                  <div className={'absolute top-0 left-0 w-full h-full z-[2] bg-gradient-to-t from-black to-vm-transparent opacity-[75%]'}></div>
                </div>

              </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  )
}
