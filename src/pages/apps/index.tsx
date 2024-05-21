import { ProjectList } from '../../components/ProjectList'
import { data } from '../../data/apps'

export default function Apps() {
  return <ProjectList category="apps" items={data} />
}
