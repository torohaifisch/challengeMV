## Multivende

 ### Sobre el repositorio
Esta carpeta contiene las API y la instancia de rabbitMq utilizadas para dar solución al challenge. Cada carpeta tiene un readme el cual indica las instrucciones para levantar cada proyecto.

### Sobre las API

 - **TaskProcessor**: Realiza el procesamiento masivo de datos. Recibe un excel en formato xlsx con una gran cantidad de datos la cual se dividen en batches de 1000 registros. Se envia inicialmente un evento a taskObserver notificando la inicializacion de una tarea de procesamiento (**task**). Se hacen requests asincronicamente al endpoint de multivende para actualizar los datos, esperando el resultado de cada operación. Dependiendo de este resultado se envian eventos a la api taskObserver para mantener registro de cada batch procesado dentro del **task**.
 - **TaskObserver**:  Recibe eventos enviados por **TaskProcessor**, relacionados con la creación de una tarea o la actualización de esta. Esta API contiene una base de datos la cual tiene registros de las tareas completas y en curso siendo procesadas por **TaskProcessor**. La base de datos registra una tarea, el numero total de batches de la tarea, el batch actual siendo procesado y el estado de completitud de la tarea en general. La idea de esto es poder mantener un registro de los estados de todos los **task** siendo procesados para así poder enviar mediante websockets al front el estado de las tareas relacionadas al usuario que la ejecutó.

### Archivos

El archivo 100k.xlsx contiene 100.000 registros a subir a la plataforma multivende

## A tener en cuenta

Esta parte del challenge no esta completa por lo cual solo la api taskObserver y el rabbit mq funcionan. Encontre que no estaba muy claras las instrucciones del challenge en esta seccion para poder hacer la integracion de una manera mas facil.

El archivo tampoco funciona ya que al subirlo a la plataforma multivende indica que hay una columna mala pero no indica cual de todas es, este archivo fue generado desde python utilizando como base el descargado desde su misma plataforma.

Debido al tiempo, no pude realizar una implementación de taskProcessor.
