import kebabCase from 'lodash/kebabCase'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from './Layout'

export const ProjectView = ({ label, data = [], backUri }: any) => {
  const router = useRouter()

  const index = data.findIndex(
    (p: any) => kebabCase(p.title).toLowerCase() === router.query.slug,
  )

  const project = data[index]

  const nextIndex = index + 1 >= data.length ? 0 : index + 1
  const prevIndex = index - 1 < 0 ? data.length - 1 : index - 1

  if (!project) {
    return null
  }

  return (
    <Layout>
      <div>
        <div className="flex mb-8 items-center justify-between">
          <div className="flex-1">
            <Link
              href={`${backUri}/${kebabCase(
                data[prevIndex].title,
              ).toLowerCase()}`}
            >
              {data[prevIndex].title}
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <h6>
              <Link href={backUri}>{label}</Link> / {project.title}
            </h6>
          </div>
          <div className="flex-1 flex justify-end">
            <Link
              href={`${backUri}/${kebabCase(
                data[nextIndex].title,
              ).toLowerCase()}`}
            >
              {data[nextIndex].title}
            </Link>
          </div>
        </div>

        <div className="my-2 flex flex-col gap-4 sm:flex-row items-center">
          <a
            className="relative w-[500px] aspect-[20/12]"
            href={project.website}
            target="_new"
          >
            <Image
              alt={project.label}
              layout="fill"
              className="object-cover"
              src={`/assets/images/${kebabCase(
                project.title,
              ).toLowerCase()}.png`}
            />
          </a>

          <div className="my-4">
            <p className="mb-0">{project.description}</p>
            {project.website && (
              <a href={project.website} target="_new">
                {project.website}
              </a>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
