import kebabCase from 'lodash/kebabCase'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Layout from './Layout'
import capitalize from 'lodash/capitalize'

export const ProjectList = (props: { items: Project[]; category: string }) => (
  <Layout title={capitalize(props.category)}>
    <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {props.items.map((project, index) => (
        <ProjectListItem
          key={index}
          project={project}
          category={props.category}
        />
      ))}
    </div>
  </Layout>
)

const ProjectListItem = (props: { category: string; project: Project }) => {
  const label = props.project.title
  const description = props.project.year
  const slug = kebabCase(props.project.title).toLowerCase()

  return (
    <Link
      className={`relative justify-end aspect-[20/15] flex flex-col flex-1 bg-gray-200`}
      href={`/${props.category}/${slug}`}
    >
      <Image
        alt="test"
        layout="fill"
        className="object-cover"
        src={`/assets/images/${slug}.png`}
      />

      <div className="z-10 relative px-3 py-2 flex justify-between text-left bg-black bg-opacity-70">
        <span className="text-white">{label}</span>
        <span className="text-white">{description}</span>
      </div>
    </Link>
  )
}
