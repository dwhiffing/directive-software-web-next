import React from 'react'
import { useRouter } from 'next/router'
import logo from '../../public/assets/type-logo.png'
import Image from 'next/image'
import Link from 'next/link'

const Layout = (props: any) => {
  const { children, title } = props
  const router = useRouter()
  // const siteDescription = get(site, 'siteMetadata.description')
  // const siteTitle = get(site, 'siteMetadata.title')

  return (
    <main className={`flex flex-col min-h-screen max-w-6xl mx-auto bg-white`}>
      {/* <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${siteTitle}${title ? ` | ${title}` : ''}`}
        /> */}
      <div className="flex flex-col flex-1 justify-between">
        <div>
          <header className="w-full py-10 flex items-center justify-between flex-col sm:flex-row mx-auto">
            <div className="flex-3">
              <Image alt="logo" height={50} src={logo} className="mb-0" />
            </div>
            <nav className="flex-1 max-w-[400px] flex justify-between uppercase">
              <Link className="text-black text-sm" href="/">
                Home
              </Link>
              <Link className="text-black text-sm" href="/apps/">
                Apps
              </Link>
              <Link className="text-black text-sm" href="/games/">
                Games
              </Link>
              <Link className="text-black text-sm" href="/resume/">
                Resume
              </Link>
              <Link className="text-black text-sm" href="/contact/">
                Contact
              </Link>
            </nav>
          </header>
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
