
<h1 align="center">Delivery API</h1>

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

<p align="center">
  <a href="#projeto">Projeto</a> &nbsp;|&nbsp;
  <a href="#funcionalidades">Funcionalidades</a> &nbsp;|&nbsp;
  <a href="#requisitos">Pré-requisitos</a> &nbsp;|&nbsp;
  <a href="#servidor">Rodando o servidor</a> &nbsp;|&nbsp;
  <a href="#tecnologias">Tecnologias</a>
</p> 

<h2 id="projeto">💻 Projeto</h2>

Uma API para uma aplicação de entregas fictícia chamada RocketLog.
<br>

Projeto desenvolvido para colocar em prática os conceitos de Node.js Rest API, com a implementação de recursos e funcionalidades essenciais que são amplamente utilizados no mercado,
seguindo as boas práticas de desenvolvimento. <br>

Este projeto conta com os seguintes recursos:
- [Docker](https://www.docker.com/) Compose para executar o banco de dados [PostgreSQL](https://www.postgresql.org/);
- [Prisma ORM](https://www.prisma.io/orm) para interação com banco de dados;
- Validação de dados por esquema com [Zod](https://zod.dev/);
- Autenticação e autorização de usuário com [JSON Web Tokens](https://www.jwt.io/introduction#what-is-json-web-token);
- Testes automatizados com [Jest](https://jestjs.io/) e Supertest.


<br>
<h2 id="funcionalidades">🚀 Funcionalidades</h2>

- Cadastro de produtos
- Cadastro e autenticação de usuário
- Gerenciamento de entregas por status

<br>
<h2 id="requisitos">⚙️ Pré-requisitos</h2>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: 
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/)<br>
Você também vai precisar de um editor de código, este projeto foi criado utilizando o [VSCode](https://code.visualstudio.com/).<br>
Para os testes da API foi utilizado o [Insomnia](https://insomnia.rest/). Acesse o arquivo com as requisições de teste [aqui](./Requests-Insomnia.yaml).

<br>
<h2 id="requisitos">⚙️ Rodando o Back End (servidor)</h2>

```bash
# Clone este repositório
$ git clone <https://github.com/rafaelfidelisss/RocketLog-DeliveryAPI>

# Acesse a pasta do projeto no terminal/cmd
$ cd RocketLog-DeliveryAPI

# Instale as dependências
$ npm install

# Defina a porta do servidor em .env PORT

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```


<br>
<h2 id="requisitos"> 🛠 Tecnologias</h2>


As seguintes tecnologias foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/) com [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma ORM](https://www.prisma.io/orm)
- [Docker](https://www.docker.com/)

