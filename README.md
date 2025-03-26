# Todo List - Backend

Questo è il backend dell'applicazione Todo List. È stato sviluppato utilizzando [NestJS](https://nestjs.com/) e [TypeORM](https://typeorm.io/) con un database SQLite.

## Descrizione del progetto

Il backend espone una semplice API REST che consente di:

- Recuperare l'elenco dei task
- Creare un nuovo task
- Modificare lo stato (completato/non completato) di un task
- Eliminare un task

I dati vengono salvati all'interno di un database SQLite generato automaticamente all'avvio dell'applicazione.

## Tecnologie utilizzate

- NestJS
- TypeORM
- SQLite
- TypeScript

## Requisiti

- Node.js (versione LTS consigliata)
- NPM
- NestJS CLI installata globalmente:
  ```bash
  npm install -g @nestjs/cli
