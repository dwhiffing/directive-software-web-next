import kebabCase from 'lodash/kebabCase'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Layout from './Layout'
import capitalize from 'lodash/capitalize'

export const ProjectList = (props: { items: Project[]; category: string }) => (
  <Layout title={capitalize(props.category)}>
    <div className="flex-1 flex flex-wrap justify-center gap-4">
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
      className={`relative flex flex-col bg-gray-200`}
      href={`/${props.category}/${slug}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="test"
        width={400}
        height={300}
        className="object-cover w-[400px] aspect-[20/15]"
        style={{
          imageRendering: props.project.pixelArt ? 'pixelated' : 'auto',
        }}
        src={`/assets/images/${slug}.png`}
      />

      <div className="z-10 px-3 py-2 flex justify-between text-left bg-[#222]">
        <span className="text-white">{label}</span>
        <span className="text-white">{description}</span>
      </div>
    </Link>
  )
}
