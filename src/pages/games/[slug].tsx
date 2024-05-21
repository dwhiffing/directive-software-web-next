import { data } from '../../data/games'
import { ProjectView } from '@/components/ProjectView'

export default function Apps() {
  return <ProjectView label="Games" backUri="/games" data={data} />
}
