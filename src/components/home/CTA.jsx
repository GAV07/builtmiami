import { useRef } from "react"
import { motion, useInView } from "framer-motion"


export function CTA({ action }) {

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
    hidden: { opacity: 0, y: 200 },
    visible: {
      
      y: isInView ? 0 : 200,
      opacity: isInView ? 1 : 0,
      transition: {
        ease: "easeInOut",
        duration: 1,
      }
    }
  };

  return (
    <div ref={ref} className="overflow-hidden bg-zinc-50 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{action.fields.title}</h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              {action.fields.subtitle}
            </p>
            <div className="flex flex-col gap-2 mt-10 lg:flex-row">
              {action.fields.buttons.map((button, i) => (
                <a
                rel="noreferrer"
                key={button.fields.text}
                href={button.fields.url}
                target="_blank"
                className="w-fit rounded-md bg-[#3f47ff] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#3F47FF] last:bg-[#9229e5] last:hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3F47FF] lg:mr-2"
              >
                {button.fields.text}
              </a>
              ))}
            </div>
          </div>
          <motion.div 
            className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={item} className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src={action.fields.photos[0].fields.file.url}
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </motion.div>
            <motion.div variants={item} className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  src={action.fields.photos[1].fields.file.url}
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  src={action.fields.photos[2].fields.file.url}
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src={action.fields.photos[3].fields.file.url}
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
