# Diagrama E-R

En la imagen contenida en esta carpeta se presenta el diagrama de entidad-relación referente a la problemática presentada en el punto 3 de la sección **Lógica**. 
Se desean obtener los siguientes puntos:

 - **Monto por producto**: La tabla ProductoCompra registra la relacion entre la compra y los productos involucrados, esta tabla guarda el precio del producto al momento de realizar la compra (debido a que el precio puede variar en el futuro).
 - **Monto total de la compra**: Se puede calcular a travez de la relacion entre la compra y los productos involucrados. Utilizando la tabla ProductoCompra, se pueden obtener todos los productos de una compra y calcular el monto total, a su vez el valor total de la compra tambien esta presente en la tabla Compra.
 - **Monto del despacho:** Se obtiene directamente desde la tabla despacho.
 - **Fecha compra**: Se obtiene directamente desde la tabla compra.
 - **Productos involucrados**:  Se obtiene desde la tabla ProductoCompra, al tener la id de una compra uno puede realizar la búsqueda de cada producto involucrado.
 - **Cliente asociado a compra**: Se obtiene directamente desde la tabla compra.