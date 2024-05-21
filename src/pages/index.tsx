import Layout from '@/components/Layout'
import Image from 'next/image'
import logo from '../../public/assets/white-favicon.png'

export default function Home() {
  return (
    <Layout title="home">
      <div
        className="flex h-[400px] justify-center items-center relative"
        style={{
          backgroundImage: `url(/assets/hero.jpeg)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundBlendMode: 'darken',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          alt="directive"
          className="z-10 opacity-90 m-0"
          src={logo}
          width={250}
        />
      </div>
    </Layout>
  )
}
