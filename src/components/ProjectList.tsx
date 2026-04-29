import capitalize from 'lodash/capitalize'
import kebabCase from 'lodash/kebabCase'
import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

export const ProjectList = (props: {
  items: Project[]
  category: string
  featured?: string[]
}) => {
  const featuredTitles = props.featured ?? []
  const featured = featuredTitles
    .map((title) => props.items.find((p) => p.title === title))
    .filter((p): p is Project => p != null)
  const rest = props.items

  return (
    <Layout title={capitalize(props.category)}>
      {featured.length > 0 && (
        <div className="w-full mb-16">
          <h2 className="text-black text-3xl font-semibold my-0 px-2 leading-none">Featured</h2>
          <div className="flex flex-wrap gap-4">
            {featured.map((project, index) => (
              <ProjectListItem
                key={index}
                project={project}
                category={props.category}
              />
            ))}
          </div>
        </div>
      )}
      <div className="w-full">
        {featured.length > 0 && rest.length > 0 && (
          <h2 className="text-black text-3xl font-semibold my-0 px-2 leading-none">All</h2>
        )}
        <div className="flex-1 flex flex-wrap gap-4">
          {rest.map((project, index) => (
            <ProjectListItem
              key={index}
              project={project}
              category={props.category}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

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
