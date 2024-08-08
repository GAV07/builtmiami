import Image from 'next/image'

export default function Logos({logos}) {
    return (
      <div className="bg-gray-900 py-10 sm:py-12">
        <h1 className="text-white text-center text-6xl font-bold mb-10">Event Sponsors</h1>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
            {logos.map((logo, i) => (
                <div className="bg-slate-50 p-8 sm:p-10">
                    <Image
                        alt="Logo"
                        src={logo.fields.image.fields.file.url}
                        width={158}
                        height={48}
                        className="max-h-12 w-full object-contain"
                    />
                </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  