# Práctica 4 - Networking (Tema 3, Nodejs The Right Way)

### Integración continua con Travis
En este link se accede directamente al estado de travis -> [![Build Status](https://travis-ci.org/ULL-ESIT-DSI-1819/p4-t2-networking-alu0100785050)](https://travis-ci.org/ULL-ESIT-DSI-1819/p4-t2-networking-alu0100785050)

## Conexiones con Sockets 

Los servicios de red existen para hacer dos cosas: conectar dos puntos y transmitir información a través de ellos. En este capítulo aprenderemos a crear sockets usando Node.js.

### Uniendo un servidor a un Puerto TCP

Las conexiones con sockets TCP consisten en dos puntos finales. Uno de ellos se une a un puerto numerado mientras que el otro se conecta a un puerto. Es muy parecido a un sistema de telefonía. En nodejs la unión y conexión son proporcionadas por el módulo **net**. 

### Escribiendo datos en un socket

Comenzaremos creando un directorio llamado **networking** donde guardaremos el código con el que vamos a trabajar. En este directorio crearemos nuestro primer código ***net-watcher.js***:

![netwatcher](img/1.1.png)

En la parte de arriba del código llamamos a los módulos de núcleo de Node.js, *fs* y *net*. El nombre del documento a vigilar será el tercer argumento en process.argv. 

Fijándonos en la función callback dada a *createServer*, hace tres cosas:

1. Reporta que la conexión se ha establecido.
2. Empieza a escuchar por si se producen cambios en el documento establecido.
3. Escucha hasta que se haya realizado el cierre de la conexión.

Finalmente, se le pasa una función callback al final a *server.listen*, Node.js invoca a esta función después de que el puerto 60300 se haya unido y esté listo para recibir conexiones.

### Conectando a un servidor TCP con Netcat

Para ejecutar y probar el programa anterior, necesitamos tres terminales: una para el servidor, una para el cliente y otra para realizar cambios en el documento establecido.

En la primera terminal, usamos el comando *watch* para 'touch' el documento elegido, con un intervalo de un segundo:

![watch](img/1.png)

Con esto ejecutándose, en otra terminal, ejecutaremos el programa net-watcher, especificando qué fichero vamos a controlar:

![nw](img/2.png)

El programa crea un servicio escuchando en el puerto TCP 60300. Para conectarnos, usaremos netcat, un programa de sockets. Abriremos otra terminal y usaremos el comando **nc**:

![nc](img/3.png)

En la terminal del programa net-watcher, veremos como se realiza la conexión, y si pulsamos control+C la terminaremos.

![cone](img/4.png)

### Escuchando en Sockets Unix

