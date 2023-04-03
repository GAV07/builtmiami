import Image from 'next/image'

import { Container } from '@/components/home/Container'
import { SectionHeading } from '@/components/home/SectionHeading'
import duotoneImage from '@/images/primer/screencasts/duotone.svg'
import gridsImage from '@/images/primer/screencasts/grids.svg'
import setupImage from '@/images/primer/screencasts/setup.svg'
import strokesImage from '@/images/primer/screencasts/strokes.svg'

const videos = [
  {
    title: 'Getting started with Figma',
    description:
      'Get familiar with the Figma UI, the different tools it offers, and the most important features.',
    image: setupImage,
    runtime: { minutes: 16, seconds: 54 },
  },
  {
    title: 'Setting up your artboard',
    description:
      'Learn how to create a new artboard and configure your grid and rulers for designing icons.',
    image: gridsImage,
    runtime: { minutes: 9, seconds: 12 },
  },
  {
    title: 'Designing your first icon',
    description:
      'Using basic shapes and boolean operations, learn how to design your own notification icon from scratch.',
    image: strokesImage,
    runtime: { minutes: 23, seconds: 25 },
  },
  {
    title: 'Advanced design techniques',
    description:
      'Learn the techniques you need to know to adapt your original icon to a modern duotone style.',
    image: duotoneImage,
    runtime: { minutes: 28, seconds: 44 },
  },
]

function PlayIcon(props) {
  return (
    <svg
      aria-hidden="true"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z" />
      <circle cx="8" cy="8" r="6.25" fill="none" />
    </svg>
  )
}

export function ZerotoOne({ sprint }) {
  return (
    <section
      id="zero-to-one"
      aria-labelledby="zero-to-one-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="zero-to-one-title">
          Zero to one Sprint
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          {sprint.fields.title}
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          {sprint.fields.subtitle}
        </p>
        <a src="#" className="text-blue-500">Apply Now <span aria-hidden="true">&rarr;</span></a>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 gap-y-10 gap-x-8 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4"
        >
          {sprint.fields.cards.map((card) => (
            <li key={card.fields.title} className="[counter-increment:card]">
              <div>
                <div className="flex overflow-hidden rounded shadow-sm">
                  <img 
                    src={card.fields.image.fields.file.url}
                    
                  />
                </div>
              </div>
              <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(card,decimal-leading-zero)]">
                {card.fields.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{card.fields.subtitle}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
