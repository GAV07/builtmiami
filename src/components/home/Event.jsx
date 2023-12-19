import Image from 'next/image'

import { Container } from '@/components/home/Container'
import { SectionHeading } from '@/components/home/SectionHeading'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'


export function Event({ event }) {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })


  const getCountdown = ()=>{

    const eventDate = new Date(event.fields.date);
    const timeRemaining =  eventDate - new Date();

    let countdown = {};
    if (timeRemaining > 0) {
      countdown = {
        Days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((timeRemaining / 1000 / 60) % 60),
        Seconds: Math.floor((timeRemaining / 1000) % 60),
      };
    }
    return countdown;
  }

  const [countdown, setCountdown] = useState(getCountdown());

  const [eventDate, setEventDate] = useState({});

  useEffect(()=>{

    const date = new Date(event.fields.date);

    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();

    setEventDate({
      year: year,
      month: month,
      day: day
    });

  }, [])

  useEffect(() => {
    setTimeout(() => {
      setCountdown(getCountdown())
    }, 1000);
  });

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
      className="w-full mx-auto flex flex-col md:justify-between justify-center items-center gap-y-10  scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >


      <Container>
        <p className="text-5xl font-semibold tracking-tight text-gray-900">
          {event.fields.subtitle}
        </p>
        <p className="text-xl leading-7 text-gray-600">
          {event.fields.title}
        </p>
        <p className="text-sm leading-7 text-gray-600 flex justify-start items-center gap-x-3">
          <span>{ eventDate.month }</span>
          <span>{ eventDate.day }</span>
          <span>{ eventDate.year }</span>
        </p>
      </Container>

      <Container className={'flex gap-x-10'}>
        {
          Object.entries(countdown).map(([unit, value]) => {

            return (
                <h3 key={unit} className="mt-4 text-lg tracking-tight text-slate-900 flex flex-col justify-start items-center gap-y-6">
                  <span className={'text-[#3F47FF] text-[70px] font-bold'}>{value}</span>
                  <span>{unit}</span>
                </h3>)
          })
        }
      </Container>

    </section>
  )
}
