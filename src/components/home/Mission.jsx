import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { MARKS, BLOCKS } from '@contentful/rich-text-types';




const stats = [
    { label: 'Transactions every 24 hours', value: '44 million' },
    { label: 'Assets under holding', value: '$119 trillion' },
    { label: 'New users annually', value: '46,000' },
  ]

const renderOptions = {
  renderText: text => {
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
};

export function Mission({ mission }) {
    return(
        <div className="mx-auto max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto mt-20 max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{mission.fields.title}</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-600">
                  {mission.fields.subtitle}
                </p>
                <div className="mt-10 max-w-2xl text-base leading-7 text-gray-700">
                  {documentToReactComponents(mission.fields.body, renderOptions)}
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {mission.fields.callouts.map((stat) => (
                    <div key={stat.fields.text} className="flex flex-col-reverse gap-y-4">
                      <dt className="text-base leading-7 text-gray-600">{stat.fields.description}</dt>
                      <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.fields.text}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
    )
}