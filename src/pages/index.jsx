import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Client } from '@/lib/contentful'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'


// Integrated homepage sections
import { Author } from '@/components/home/Author'
import { FreeChapters } from '@/components/home/FreeChapters'
import { NavBar } from '@/components/home/NavBar'
import { Program } from '@/components/home/Program'
import { Accelerator } from '@/components/home/Accelerator'
import { ZerotoOne } from '@/components/home/ZerotoOne'
import { BuildersSummer } from '@/components/home/BuildersSummer'
import { Testimonial } from '@/components/home/Testimonial'
import { Testimonials } from '@/components/home/Testimonials'
import avatarImage1 from '@/images/primer/avatars/avatar-1.png'
import avatarImage2 from '@/images/primer/avatars/avatar-2.png'



export async function getStaticProps() {
  
  const home = await Client.getEntries('')

  return {
    props: {
      
    },
  }
}


function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Built in Miami - Miami's Startup Initiative
        </title>
        <meta
          name="description"
          content="The Built in Miami Innovation Series is a year-long initiative to support early stage entrepreneurs in Miami."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software designer, founder, and amateur astronaut.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Spencer, a software designer and entrepreneur based in New York
            City. I’m the founder and CEO of Planetaria, where we develop
            technologies that empower regular people to explore space on their
            own terms.
          </p>
        </div>
      </Container>
      <Photos />
      {/* <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container> */}
      <NavBar />
      <ZerotoOne />
      <BuildersSummer />
      {/* <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Gerardo Stark',
          role: 'Creator of Pandemicons',
          image: avatarImage2,
        }}
      >
        <p>
          “I’ve tried to create my own icons in the past but quickly got
          frustrated and gave up. Now I sell my own custom icon sets online.”
        </p>
      </Testimonial> */}
      <Accelerator />
      <Program />
      <FreeChapters />
      {/* <Author /> */}
    </>
  )
}


