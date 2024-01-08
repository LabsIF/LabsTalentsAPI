A API foi construída em NodeJS e ExpressJS utilizando TDD para garantir a qualidade do código. Ela permite o controle de acesso de usuários, com funcionalidades de cadastro, exclusão, atualização e busca de usuários.

## Aviso

Cada alteração deve ser documentada, incluindo as rotas, com detalhes sobre os parâmetros esperados e o formato de retorno. É importante registrar variáveis de ambiente, novos pacotes adicionados e possíveis problemas futuros relacionados ao debug do projeto, entre outros.

## Tecnologias utilizadas

- NodeJS
- ExpressJS
- SequelizeJS
- PostgreSQL
- TypeScript

**IMPORTANTE**: Certifique-se de ter instalada a versão estável mais recente do Node e NPM corretamente para instalar as dependências necessárias e executar o projeto, verifique se o tsconfig.json esta correto.

Dentro do projeto, crie um arquivo `.env` e adicione as variáveis de ambiente. Use o arquivo `.envexample` como referência.


Certifique-se de criar um banco de dados com o nome "LabsTalents" usando o PostgreSQL.

## Instalação

1. Clone este repositório.
2. Na raiz do projeto, instale as dependências: `npm install`.
3. Inicie a aplicação em desenvolvimento: `npm run dev`.
4. Gere o build da aplicação: `npm run build`.
5. Inicie a aplicação build: `npm run start` \ ` npm run start:dev `.

