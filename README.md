## Installation

Deps:

```bash
npm i express dotenv cors express-validator @prisma/client
```

Dev deps:

```bash
npm i --save-dev typescript @types/node @types/express @types/dotenv @types/cors
npm i --save-dev prisma esbuild-register nodemon
```

Database:

```bash
npx prisma init --datasource-provider sqlite
```

Activer les changements de schema.prisma

```bash
npx prisma db push
```
