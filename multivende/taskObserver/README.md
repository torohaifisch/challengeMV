## Getting Started

Instalar dependencias con npm:

```bash
npm install
```

ejecutar el siguiente comando desde esta carpeta para levantar la base de datos:


```bash

docker  compose  up  -d

```

Correr migraciones y seeds de la base de datos:

```bash

npx prisma migrate dev
npx prisma db seed
```


correr servidor en development:

```bash
npm run dev
```

Este repositorio contiene el archivo .env solo para facilitar la ejecución del proyecto por ustedes, ya que no debería incluirse en el repo.
