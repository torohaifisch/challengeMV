
## Instancia RabbitMq

  

Para correr la instancia de rabbit mq es necesario tener instalado previamente docker y docker compose.

  

ejecutar el siguiente comando desde esta carpeta:

  

```bash

docker  compose  up  -d

```

 1. Entrar desde el navegador a [http://localhost:15672](http://localhost:15672)
 2. Hacer login con **user**: guest, **password**: guest
 3. importar las definiciones contenidas en el archivo **rabbit_config.json**