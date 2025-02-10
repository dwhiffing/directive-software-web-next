import React, { ReactNode } from 'react'
import logo from '../../public/assets/type-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

const Layout = ({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) => {
  return (
    <main
      className={`flex flex-col min-h-screen max-w-[1264px] px-4 mx-auto bg-white`}
    >
      <Head>
        <title>Directive Software | {title}</title>
        <meta name="description" content="Directive Software" />
        <meta name="author" content="Daniel Whiffing" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://directive.software" />
        <meta property="og:title" content={`Directive Software | ${title}`} />
        <meta property="og:description" content="Directive Software" />
        <meta
          property="og:image"
          content="https://directive.software/meta.png"
        />
      </Head>

      <div className="flex flex-col flex-1 justify-between">
        <div>
          <Header />

          {children}
        </div>

        <footer className="flex py-6 uppercase tracking-widest text-xs text-gray-500">
          © DIRECTIVE SOFTWARE | {new Date().getFullYear()}
        </footer>
      </div>
    </main>
  )
}

export default Layout

function Header() {
  return (
    <header className="w-full py-10 flex items-center justify-between flex-col gap-8 sm:flex-row mx-auto">
      <div className="flex-3">
        <Link className="text-black text-sm" href="/games/">
          <Image alt="logo" height={50} src={logo} className="mb-0" />
        </Link>
      </div>
      <nav className="flex-1 justify-end flex gap-6 uppercase">
        <Link className="text-black text-sm" href="/games/">
          Games
        </Link>
        <Link className="text-black text-sm" href="/apps/">
          Apps
        </Link>
        <Link className="text-black text-sm" href="/resume/">
          Resume
        </Link>
        <Link className="text-black text-sm" href="/contact/">
          Contact
        </Link>
      </nav>
    </header>
  )
}
