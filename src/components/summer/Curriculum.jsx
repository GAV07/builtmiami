
const jobOpenings = [
    {
      id: 1,
      role: 'Full-time designer',
      href: '#',
      description:
        'Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.',
      salary: '$75,000 USD',
      location: 'San Francisco, CA',
    },
    {
      id: 2,
      role: 'Laravel developer',
      href: '#',
      description:
        'Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.',
      salary: '$125,000 USD',
      location: 'San Francisco, CA',
    },
    {
      id: 3,
      role: 'React Native developer',
      href: '#',
      description:
        'Veniam ipsam nisi quas architecto eos non voluptatem in nemo. Est occaecati nihil omnis delectus illum est.',
      salary: '$105,000 USD',
      location: 'San Francisco, CA',
    },
  ]

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
          <div className="w-full lg:max-w-xl lg:flex-auto">
            <h3 className="sr-only">Job openings</h3>
            <ul className="-my-8 divide-y divide-gray-100">
              {curriculum.fields.sessions.map((session, i) => (
                <li key={i} className="py-8">
                  <dl className="relative flex flex-wrap gap-x-3">
                    <dt className="sr-only">Role</dt>
                    <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                      {/* <a href={opening.href}> */}
                        {session.fields.title}
                        <span className="absolute inset-0" aria-hidden="true" />
                      {/* </a> */}
                    </dd>
                    <dt className="sr-only">Description</dt>
                    <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">{session.fields.subtitle}</dd>
                    {/* <dt className="sr-only">Salary</dt>
                    <dd className="mt-4 text-base font-semibold leading-7 text-gray-900">{opening.salary}</dd>
                    <dt className="sr-only">Location</dt>
                    <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                      <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
                        <circle cx={1} cy={1} r={1} />
                      </svg>
                      {opening.location}
                    </dd> */}
                  </dl>
                </li>
              ))}
            </ul>
            {/* <div className="mt-8 flex border-t border-gray-100 pt-8">
              <a href="#" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                View all openings <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    )
}