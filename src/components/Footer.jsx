import Link from 'next/link'
import Image from 'next/image'
import shrimp from '@/images/logos/shrimp.png'
import venture from '@/images/logos/venture.svg'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col content-center justify-center gap-6 sm:flex-row">
              <div className="flex items-center gap-6 text-sm font-medium">
                <NavLink href="https://www.theshrimpsociety.com/">
                  <Image
                    src={shrimp}
                    alt=""
                    sizes="(max-width: 200px) 2rem, 2rem"
                    className="max-w-[10vw] rounded-1xl object-cover dark:bg-zinc-800"
                  />
                </NavLink>
                <NavLink href="https://www.venturemia.org/">
                  <Image
                    src={venture}
                    alt=""
                    sizes="(max-width: 200px) 2rem, 2rem"
                    className="max-w-[10vw] rounded-1xl object-cover dark:bg-zinc-800"
                  />
                </NavLink>
              </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
