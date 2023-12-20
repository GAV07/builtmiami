import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Client } from '@/lib/contentful'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

// Integrated homepage sections
import { CTA } from '@/components/home/CTA'
import { NavBar } from '@/components/home/NavBar'
import { Accelerator } from '@/components/home/Accelerator'
import { ZerotoOne } from '@/components/home/ZerotoOne'
import { BuilderSummer } from '@/components/home/BuilderSummer'
import { Hero } from '@/components/home/Hero'
import { Mission } from '@/components/home/Mission'
import social from '@/images/social.jpeg'
import { Program } from '@/components/home/Program'
import avatarImage1 from '@/images/primer/avatars/avatar-1.png'
import avatarImage2 from '@/images/primer/avatars/avatar-2.png'
import Stats from "@/components/Stats";
import {DemoDay} from "@/components/home/DemoDay";
import {Event} from "@/components/home/Event";



export async function getStaticProps() {
  
  const home = await Client.getEntry('12EXM10vwyqdjNJYxHoq6X', {include : 3})

  return {
    props: {
      home : home,
      hero : home.fields.hero,
      stats : home.fields.stats,
      mission : home.fields.mission,
      summer : home.fields.builderSummer,
      sprint : home.fields.zeroToOne,
      accelerator : home.fields.accelerator,
      event : home.fields.event,
      demoDay : home.fields.demoDay,
      action : home.fields.ctaSection,
    },
  }
}

export default function Home({ mission, hero, summer, sprint, accelerator, demoDay, event, action, stats }) {

    return (
    <>
      <Head>
        <title>
          Built in Miami - The Miami Startup Initiative
        </title>
        <meta
          name="description"
          content="The Built in Miami Startup Series is a year-long initiative to support early stage entrepreneurs in Miami."
        />
        <meta property="og:title" content="Built in Miami" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.builtmiami.com" />
        <meta property="og:image" content={social} />
        <meta property="fb:app_id" content="built_in_miami" />
        <meta name="twitter:card" content="built_in_miami"/>
        <meta name="twitter:site" content="@builtinmiami"/>
        <meta property="og:site_name" content="Built in Miami"/>
        <meta name="twitter:image:alt" content="builders_in_miami"/>
      </Head>
      <Hero hero={hero} />
      {/*<Stats stats={stats} />*/}
      {/*<Mission mission={mission} />*/}
      <Event event={event} />
      {/* <NavBar /> */}
      <ZerotoOne sprint={sprint} />
      <BuilderSummer summer={summer} />
      {/*<Accelerator accelerator={accelerator}/>*/}
      <DemoDay demoDay={demoDay}/>
      <CTA action={action}/>
      {/* <Program /> */}
    </>
  )
}


