# Criprografia de Júlio César

## Sobre

Este projeto é o primeiro desafio para aprovação do AceleraDev React by Codenation que consiste em receber um texto de uma API, criptografar utilizando a **criptografia de Júlio César** e criptografar novamente utilizando **sha1**. O resultado devia ser salvo em um arquivo com o nome **answer.json** e enviado a outra API como _multipart/form-data_.

Para saber mais sobre a **criptografia de Júlio César** [clique aqui](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar).

## Design

Para o desenvolvimento foi escolhida a linguagem javascript junto a algumas bibliotecas bem conhecidas como _axios_ e _js-sha1_. Sobre a organização do código, temos uma função principal (arquivo `src/app.js`), o programa propriamente dito; e as camadas de **helpers** (responsáveis por fornecer funçoes específicas para o funcionamento do programa) e **services** (responsáveis pelas chamadas à API).

## Setup

Para rodar o projeto tenha Yarn instalado em sua máquina e siga os passos abaixo.

1. Após o download, execute no diretório do projeto o comando

```
$ yarn install
```

2. Execute:

```
$ cp .env.example .env
```

Edite o arquivo `.env` adicionando um token válido. Esse token é o ID de usuário na plataforma da Codenation

3. Para rodar o projeto execute

```
$ yarn start
```

## Autor

Desenvolvido por Agnaldo Burgo Junior - 2020
