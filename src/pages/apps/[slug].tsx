import { data } from '../../data/apps'
import { ProjectView } from '@/components/ProjectView'

export default function Apps() {
  return <ProjectView label="Apps" backUri="/apps" data={data} />
}
