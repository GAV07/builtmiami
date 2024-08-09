'use client'

import { useState } from 'react'
import Judges from '@/components/demo/Judges'
import Hero from '@/components/demo/Hero'
import Logos from '@/components/demo/Logos'
import Founders from '@/components/demo/Founders'
import { CTA } from '@/components/home/CTA'
import Image from 'next/image'
import { Client } from '@/lib/contentful'


export async function getStaticProps() {
  
  const home = await Client.getEntry('12EXM10vwyqdjNJYxHoq6X', {include : 3})
  const demo = await Client.getEntry('Hv4hSPFXx5KxDibfzR5c9', {include : 3})

  return {
    props: {
      demo: demo,
      logos: demo.fields.logos,
      judges: demo.fields.judges,
      founders: demo.fields.founders,
      action : home.fields.ctaSection,
    },
  }
}


export default function Demo({ demo, logos, judges, founders, action }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  console.log(demo)

  return (
    <div className="bg-gray-900">

      <main className="relative isolate">
        {/* Background */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          />
        </div>

        {/* Header section */}
        <Hero image={demo.fields.heroImage.fields.file.url}/>

        {/* Logos section */}
        <Logos logos={logos}/>

        {/* Image section */}
        <div className="xl:mx-auto xl:max-w-7xl xl:px-8">
          <Image
            alt=""
            src={demo.fields.middleImage.fields.file.url}
            className="aspect-[9/4] w-full object-cover xl:rounded-3xl"
            width={500}
            height={500}
          />
        </div>

        {/* Founders section */}
        <Founders founders={founders}/>

        {/* Judges section */}
        <Judges judges={judges}/>

        {/* CTA section */}
        <CTA action={action} />

      </main>
    </div>
  )
}
