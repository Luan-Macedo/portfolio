import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao, Lista } from './styles'

const Projeto = () => (
  <Lista>
    <li>
      <Card>
        <Titulo>Lista de Contatos</Titulo>
        <Paragrafo tipo="secundario">
          Uma lista de contatos com React, com sistema de
          adicionar/editar/excluir contatos e com um sistema de busca pelo nome.
        </Paragrafo>
        <LinkBotao
          href="https://github.com/Luan-Macedo/setup-react"
          target="_blank"
        >
          Visualizar
        </LinkBotao>
      </Card>
    </li>
    <li>
      <Card>
        <Titulo>Lista de tarefas</Titulo>
        <Paragrafo tipo="secundario">
          Uma lista de tarefas feita usando o framework VueJs, com um sistema de
          cadastrar e filtrar tarefas.
        </Paragrafo>
        <LinkBotao
          href="https://github.com/Luan-Macedo/todo-vue"
          target="_blank"
        >
          Visualizar
        </LinkBotao>
      </Card>
    </li>
    <li>
      <Card>
        <Titulo>LandingPage Filme</Titulo>
        <Paragrafo tipo="secundario">
          Uma LandingPage responsiva com intuito de apresentar uma
          empresa/produto.
        </Paragrafo>
        <LinkBotao
          href="https://github.com/Luan-Macedo/projeto_landingpage"
          target="_blank"
        >
          Visualizar
        </LinkBotao>
      </Card>
    </li>
    <li>
      <Card>
        <Titulo>Clone Disney+</Titulo>
        <Paragrafo tipo="secundario">Um clone do site Disney+.</Paragrafo>
        <LinkBotao
          href="https://github.com/Luan-Macedo/clone_disneyplus"
          target="_blank"
        >
          Visualizar
        </LinkBotao>
      </Card>
    </li>
    <li>
      <Card>
        <Titulo>LandingPage Evento</Titulo>
        <Paragrafo tipo="secundario">
          Uma LandingPage responsiva com intuito de divulgar um evento, com uma
          contagem regressiva.
        </Paragrafo>
        <LinkBotao
          href="https://github.com/Luan-Macedo/setup-react"
          target="_blank"
        >
          Visualizar
        </LinkBotao>
      </Card>
    </li>
    <li>
      <Card>
        <Titulo>Sorteador</Titulo>
        <Paragrafo tipo="secundario">
          Um sorteador de número usando o Grunt.
        </Paragrafo>
        <LinkBotao
          href="https://vercel.com/luanmacedos-projects/sorteador-grunt-luan-k2fb"
          target="_blank"
        >
          Visualizar
        </LinkBotao>
      </Card>
    </li>
  </Lista>
)

export default Projeto
