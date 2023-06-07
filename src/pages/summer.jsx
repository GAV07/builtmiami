import { Client } from '../lib/contentful'
import { Hero } from '../components/summer/Hero'
import { Timeline } from '@/components/summer/Timeline'
import { Logos } from '@/components/summer/Logos'
import { Location } from '@/components/summer/Location'
import { Curriculum } from '@/components/summer/Curriculum'
import { Goal } from '@/components/summer/Goal'


export async function getStaticProps() {
  
  const summer = await Client.getEntry('7drU6ZMOn7OvIZBhlcgnCG', {include : 3})
  
  return {
    props: {
      hero: summer.fields.hero,
      goal: summer.fields.goal,
      curriculum: summer.fields.curriculum,
      timeline: summer.fields.timeline,
      location: summer.fields.location,
      cta: summer.fields.cta,
    },
  }
}

export default function Summer({ hero, goal, curriculum, timeline, location, cta}) {

  return (
    <div className="bg-white">


      <main className="isolate">
        {/* Hero section */}
        <Hero hero={hero} />


        {/* Goal section */}
        <Goal goal={goal} />

        {/* Program section */}
        <Location location={location} />

        {/* Content section */}
        <Curriculum curriculum={curriculum} />

        {/* Timeline section */}
        <Timeline timeline={timeline} />

        {/* Logo cloud */}
        <Logos cta={cta} />
        
      </main>
    </div>
  )
}