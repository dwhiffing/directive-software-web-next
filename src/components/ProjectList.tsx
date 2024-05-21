import kebabCase from 'lodash/kebabCase'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

export function ProjectList({
  items = [],
  category,
}: {
  items: any[]
  category: string
}) {
  return (
    <Layout title="Apps">
      <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((project, index) => {
          const slug = kebabCase(project.title).toLowerCase()
          return (
            <ProjectListItem
              key={index}
              label={project.title}
              description={project.year}
              href={`/${category}/${slug}`}
              imageSrc={`/assets/images/${slug}.png`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export function ProjectListItem({ label, description, href, imageSrc }: any) {
  return (
    <Link
      className={`relative justify-end aspect-[20/13] flex flex-col flex-1 bg-gray-200`}
      href={href}
    >
      <Image alt="test" layout="fill" className="object-cover" src={imageSrc} />

      <div className="z-10 relative px-3 py-2 flex justify-between text-left bg-black bg-opacity-70">
        <span className="text-white">{label}</span>
        <span className="text-white">{description}</span>
      </div>
    </Link>
  )
}
