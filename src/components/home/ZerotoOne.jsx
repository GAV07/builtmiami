import Image from 'next/image'

import { Container } from '@/components/home/Container'
import { SectionHeading } from '@/components/home/SectionHeading'


export function ZerotoOne({ sprint }) {
  return (
    <section
      id="zero"
      aria-labelledby="zero-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="zero-title">
          Zero to One Sprint
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          {sprint.fields.title}
        </p>
        <p className="my-4 text-lg tracking-tight text-slate-700">
          {sprint.fields.subtitle}
        </p>
        {sprint.fields.buttons.map((button) => (
          <a 
            src={button.fields.url}
            target="_blank" 
            className="rounded-md bg-indigo-50 px-3 py-2 text-md font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
          >
            {button.fields.text}<span aria-hidden="true"> &rarr;</span>
          </a>
        ))}
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