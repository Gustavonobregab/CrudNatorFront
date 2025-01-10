# CrudNator - A Rede Social para Programadores

CrudNator é uma aplicação web full-stack construída com Next.js, Axios e Tailwind CSS, projetada para conectar programadores em busca de colaboração em projetos. A plataforma permite que usuários postem seus projetos, tanto frontend quanto backend, e busquem por outros desenvolvedores com habilidades complementares.

## Tecnologias Utilizadas
### Front-end:
 - Next.js: Framework React para aplicações web com renderização do lado do servidor (SSR) e geração de páginas estáticas (SSG).
 - React: Biblioteca JavaScript para construção de interfaces de usuário.
 - Tailwind CSS: Framework CSS para design responsivo e customizado.
 - Axios: Biblioteca para fazer requisições HTTP.
 - Context API: Mecanismo do React para gerenciar estado global.
### Back-end:
(por vir)
### Funcionalidades
 - Cadastro e Login: Permitir que usuários se cadastrem e façam login na plataforma.
 - Perfil: Cada usuário terá um perfil onde poderá personalizar suas informações, adicionar projetos aos quais está trabalhando ou procurando colaboradores, e listar suas habilidades.
 - Postagem de Projetos: Os usuários poderão criar posts detalhando seus projetos, incluindo tecnologias utilizadas, descrição do projeto, e se estão buscando colaboradores.
 - Busca de Projetos: Um sistema de busca robusto que permita filtrar projetos por tecnologia, nível de experiência, e outras tags relevantes.
 - Feed: Um feed personalizado com os projetos mais recentes e relevantes para cada usuário.
### Estrutura do Projeto
 - components: Contém os componentes reutilizáveis da aplicação.
 - pages: Contém as páginas da aplicação (Home, Perfil, Projetos, etc.).
 - api: Contém as rotas para as requisições HTTP para o backend.
 - context: Contém o contexto para gerenciar o estado global da aplicação (usuário autenticado, preferências, etc.).
## Instalação e Execução
 ### Clone o repositório:


- `git clone https://github.com/seu-usuario/CrudNator.git`
### Instale as dependências:


 - `cd CrudNatorFront`
 - `npm install`
### Inicie o desenvolvimento:

 - `npm run dev`

## Licença
MIT License.
## Próximos Passos
 - Implementação do backend: Configurar o backend para lidar com as requisições da aplicação frontend e armazenar os dados dos usuários e projetos.
 - Design da interface: Refinar o design da interface com base nos princípios de UX/UI.
 - Testes: Implementar testes unitários e de integração para garantir a qualidade do código.
 - Deploy: Configurar o deploy da aplicação em um ambiente de produção.