import Image from 'next/image'

import {Container} from '@/components/home/Container'
import {SectionHeading} from '@/components/home/SectionHeading'
import {motion, useInView} from 'framer-motion'
import {useRef} from 'react'


export function DemoDay({demoDay}) {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})

    const container = {
        hidden: {opacity: 1},
        visible: {
            opacity: isInView ? 1 : 0,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.5
            }
        }
    };

    const item = {
        hidden: {y: 100, opacity: 0},
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
            <Container size="sm" className={'flex flex-col gap-y-4'}>

                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{demoDay.fields.title}</h2>
                <p className="text-lg tracking-tight text-gray-700">
                    {demoDay.fields.subtitle}
                </p>
            </Container>
            <Container size="lg" className="mt-16 lg:w-[60%] w-full mx-auto">

                <div
                    key={demoDay.fields.title}
                    className="md:aspect-[1/1] sm:aspect-video aspect-[1/1]"
                    variants={item}
                >
                        <img src={demoDay.fields.image.fields.file.url}
                             className={'h-full w-full object-cover rounded-md'}/>

                </div>
            </Container>
        </section>
    )
}
