import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Sou um profissional com experiência em análise de dados, focado na
      organização, filtragem e visualização de informações para apoiar a tomada
      de decisões estratégicas. Atualmente estou me especializando como
      desenvolvedor full stack em Python, com um grande interesse na área de
      front-end. Minha paixão pela criatividade me leva a desenvolver projetos
      que combinam funcionalidade e design.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Luan-Macedo&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Luan-Macedo&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
