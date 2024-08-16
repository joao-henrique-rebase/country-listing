### README.md

# Projeto Paises da Globo

O objetivo deste projeto é ensinar conceitos básicos de React, introduzir GraphQL com Apollo Client e implementar filtros no lado do cliente utilizando Hooks e variaves de estado. 
Através deste projeto, você aprenderá a configurar um projeto React, consumir uma API GraphQL, renderizar dados em uma lista e criar funcionalidades de filtro.

## Parte 1: Configuração Inicial

### Desafio 1: Configuração do Ambiente de Desenvolvimento
1. Depencicas o Node.js e npm (ou Yarn) na sua maquina.
2. Crie uma nova aplicação React utilizando o `create-react-app`.
```bash
npx create-react-app countries-globe
```
3. Execute a aplicação para garantir que tudo está funcionando.
```bash
npm start
```

### Desafio 2: Instalação e Configuração do Apollo Client
1. Instale a biblioteca Apollo Client e GraphQL.
   ```bash
   npm install @apollo/client graphql
   ```
2. Configure o Apollo Client no seu projeto criando `Provider`. Siga a DOC: https://www.apollographql.com/docs/react/get-started
3. Envolva o componente principal com o `Provider` configurado.

## Parte 2: Consumo de Dados com GraphQL

### Desafio 1: Criar o Componente de Listagem de Países
1. Crie um componente `CountryList`.
2. No componente `CountryList`, faça uma query para buscar a lista de países usando o hook `useQuery` do Apollo Client.
3. Renderize os dados em uma tabela. Se atente a inserir um Loading emquanto os dados não retoram da API.
4. Infos:
URL: https://countries.trevorblades.com/graphql
```graphql
query {
  countries {
    name
    emoji
    capital
    languages {
      
    }
  }
}
```
5. Daddos a serem retornado, bandeira, nome do pais, capital e idioma falado.

### Desafio 2: Estilizando a Tabela
1. Adicione uma estilização básica à listagem para melhorar a apresentação.
2. Utilize CSS ou uma biblioteca de estilo como `styled-components` - (Precisa ser instalada: https://styled-components.com/)

## Parte 3: Implementação de Filtros

### Desafio 1: Criar o Campo de Filtro por Nome e Capital
1. Adicione dois campos de input acima da tabela para permitir que o usuário filtre os países pelo nome ou capitais.
2. Utilize o hook `useState` para armazenar o valor do filtro.
3. Filtre a lista de países exibida na tabela com base no valor digitado nos campos de input.

## Parte 4: Adicionar Tests em Cypress

### Desafio 1: Configuração e Testes Básicos
1. Instale o Cypress no projeto utilizando npm ou yarn:
```bash
npm install cypress --save-dev
```
2. Siga a DOC: https://docs.cypress.io/guides/getting-started/installing-cypress
   
### Desafio 2: Criação de Testes para a Listagem de Países:
1. Implemente um teste para verificar se a lista de países é carregada corretamente na tabela. 

### Desafio 3: Testes de Filtro de Países e Capitais:
1. Crie um teste para verificar a funcionalidade de filtro de países e de capitais.
2. O teste deve digitar um nome de país e da capital no campo de filtro e verificar se a listagem exibe corretamente os resultados filtrados.

## Parte 5: Melhorias e Refatoração - Bonus

### Desafio 1: Refatoração do Código
1. Separe o componente `CountryList` em componentes menores, por exemplo, crie um componente separado para o filtro `CountryFilter` e um para a linha da listagem `CountryRow`.

### Desafio 2: Padronização do Projeto
1. Extraia dos os componentes criados para uma pasta `Components` e um arquivo `index` na raiz da pasta que exporta todos os componentes criados facilitando a importação dos mesmos.
2. Crie uma pasta de `queries` para extrairmos a contante da query utilizada.
3. Components como `App` e `ApolloProvider`, podem estar em uma pasta `main`.
4. Folhas de estilos podem estar dentro de uma pasta `assets`/`styles`, dentro de `assets`, podemos colocar outras melhorias como imagens e fontes por exemplo.

### Desafio 3: Melhoria na Interface de Usuário
1. Melhore a interface visual adicionando um cabeçalho com o título da aplicação e uma breve descrição, podem ser componentes.
2. Adicione um rodapé com informações adicionais, como o seu nome, a data de criação do projeto, ou links para as redes sociais ou GitHub.
