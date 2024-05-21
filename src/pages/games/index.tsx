import { ProjectList } from '../../components/ProjectList'
import { data } from '../../data/games'

export default function Games() {
  return <ProjectList category="games" items={data} />
}
