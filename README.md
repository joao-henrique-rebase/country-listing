### README.md

# Projeto Países do Globo

O objetivo deste projeto é ensinar conceitos básicos de React, introduzir GraphQL com Apollo Client e implementar filtros utilizando Hooks e variáveis de estado.

## Parte 1: Configuração Inicial

### Desafio 1: Configuração do Ambiente de Desenvolvimento
1. Instale o Node.js e npm (ou Yarn) na sua máquina.
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
2. Configure o Apollo Client no seu projeto criando `Provider`. Siga a documentação: https://www.apollographql.com/docs/react/get-started
3. Envolva o componente principal com o `Provider` configurado.

## Parte 2: Consumo de Dados com GraphQL

### Desafio 1: Criar o Componente de Listagem de Países
1. Crie um componente `CountryList`.
2. No componente `CountryList`, faça uma query para buscar a lista de países usando o hook `useQuery` do Apollo Client.
3. Renderize os dados em uma lista. Atente-se a inserir um `Loading` enquanto os dados não retornam da API.
4. Infos:
URL: https://countries.trevorblades.com/graphql
```graphql
query {
  countries {
    emoji
    name
    capital
    languages {
      name
    }
  }
}
```
5. Dados a serem retornados: bandeira, nome do país, capital e idioma falado.

### Desafio 2: Estilizando a Listagem
1. Adicione uma estilização básica à listagem para melhorar a apresentação.
2. Utilize CSS ou uma biblioteca de estilo como `styled-components` - (Precisa ser instalada: https://styled-components.com/)

## Parte 3: Implementação de Filtros

### Desafio 1: Criar o Campo de Filtro por Nome e Capital
1. Adicione dois campos de input acima da listagem para permitir que o usuário filtre os países pelo nome ou capital.
2. Utilize o hook `useState` para armazenar o valor do filtro.
3. Filtre a lista de países exibida com base no valor digitado nos campos de input.

## Parte 4: Adicionar Testes em Cypress

### Desafio 1: Configuração e Testes Básicos
1. Instale o Cypress no projeto utilizando npm ou yarn:
```bash
npm install cypress --save-dev
```
2. Siga a documentação: https://docs.cypress.io/guides/getting-started/installing-cypress
   
### Desafio 2: Criação de Testes para a Listagem de Países
1. Implemente um teste para verificar se a lista de países é carregada corretamente. 

### Desafio 3: Testes de Filtro de Países e Capitais
1. Crie um teste para verificar a funcionalidade de filtro de países e de capitais.
2. O teste deve digitar um nome de país e a capital no campo de filtro e verificar se a listagem exibe corretamente os resultados filtrados.

## Parte 5: Melhorias e Refatoração - Bônus

### Desafio 1: Implementar um filtro de Idiomas
1. Criar um campo de dropdown (`select/options`) listando todos os idiomas possíveis do retorno da API (sem duplicações) e usá-lo como mais um campo de filtro para a listagem.
2. Criar um teste para o filtro por idioma.

### Desafio 2: Refatoração do Código
1. Separe o componente `CountryList` em componentes menores, por exemplo, crie um componente separado para o filtro `CountryFilter` e um para a linha da listagem `CountryRow`.

### Desafio 3: Padronização do Projeto
1. Extraia todos os componentes criados para uma pasta `Components` e um arquivo `index` na raiz da pasta que exporta todos os componentes criados facilitando a importação dos mesmos.
2. Crie uma pasta de `queries` para extrair a constante da query utilizada.
3. Componentes como `App` e `ApolloProvider` podem estar em uma pasta `main`.
4. Folhas de estilo podem estar dentro de uma pasta `assets`/`styles`, dentro de `assets`, podemos colocar outras melhorias como imagens e fontes, por exemplo.

### Desafio 4: Melhoria na Interface de Usuário
1. Melhore a interface visual adicionando um cabeçalho com o título da aplicação e uma breve descrição, podendo ser componentes.
2. Adicione um rodapé com informações adicionais, como o seu nome, a data de criação do projeto ou links para as redes sociais ou GitHub.

![Interface do projeto](printsc.png)
