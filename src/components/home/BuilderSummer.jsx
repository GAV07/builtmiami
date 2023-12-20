import {Container} from '@/components/home/Container'
import {SectionHeading} from '@/components/home/SectionHeading'


export function BuilderSummer({summer}) {
    return (
        /*<section
          id="builders"
          aria-labelledby="builders-title"
          className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
        >
          <Container>
            <SectionHeading number="2" id="builders-title">
              P2P
            </SectionHeading>
            <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
              {summer.fields.title}
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              {summer.fields.subtitle}
            </p>
            <div className="mx-auto mt-8 max-w-full px-1">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                {summer.fields.groups.map((item) => (
                  <div key={item.fields.title}>
                      <div className="flex items-center text-sm font-semibold leading-6 text-indigo-600">
                        <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                          <circle cx={2} cy={2} r={2} fill="currentColor" />
                        </svg>
                        {item.fields.lead}
                        <div
                          className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                          aria-hidden="true"
                          />
                      </div>
                    <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.fields.title}</p>
                    <p className="mt-1 text-base leading-7 text-gray-600">{item.fields.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>*/
        <section
            id="builders"
            aria-labelledby="builders-title"
            className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
        >
            <Container>
                <SectionHeading number="2" id="builders-title">
                    P2P
                </SectionHeading>
                <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
                    {summer.fields.title}
                </p>
                <p className="mt-4 text-lg tracking-tight text-slate-700">
                    {summer.fields.subtitle}
                </p>
                <div className="mx-auto mt-8 max-w-full px-1">
                    <div
                        // className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                        className="mx-auto grid grid-cols-1 gap-8">
                        {summer.fields.groups.map((item, index) => (
                            <div key={item.fields.title} className={'flex justify-center items-start gap-x-10'}>
                                <div className="basis-[20%] flex items-center text-sm font-semibold leading-6 text-indigo-600">
                                    <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none bg-red-200" aria-hidden="true">
                                        <circle cx={2} cy={2} r={2} fill="currentColor"/>
                                    </svg>

                                    {item.fields.lead}
                                    {/*<div
                                        className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                                        aria-hidden="true"
                                    />*/}
                                </div>
                                <div className={'basis-[90%] order-solid border-b-2 border-gray-300 pb-6'}>
                                    <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.fields.title}</p>
                                    <p className="mt-1 text-base leading-7 text-gray-600">{item.fields.subtitle}</p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
