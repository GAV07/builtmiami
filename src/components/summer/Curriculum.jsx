
export function Curriculum({ curriculum }) {
    return(
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full lg:max-w-lg lg:flex-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {curriculum.fields.title}
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              {curriculum.fields.subtitle}
            </p>
            <img
              src={curriculum.fields.image.fields.file.url}
              alt=""
              className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
            />
          </div>
          <div className="w-full lg:max-w-xl lg:flex-wrap">
            <ul className="-my-8 divide-y divide-gray-100">
              {curriculum.fields.sessions.map((session, i) => (
                <li key={i} className="py-8">
                  <dl className="relative flex flex-wrap gap-x-3">
                    <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                      {/* <a href={opening.href}> */}
                        {session.fields.title}
                        <span className="absolute inset-0" aria-hidden="true" />
                      {/* </a> */}
                    </dd>
                    <dt className="sr-only">Description</dt>
                    <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">{session.fields.subtitle}</dd>
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
}