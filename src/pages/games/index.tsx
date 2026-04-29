import { ProjectList } from '../../components/ProjectList'
import { data, featured } from '../../data/games'

export default function Games() {
  return <ProjectList category="games" items={data} featured={featured} />
}
