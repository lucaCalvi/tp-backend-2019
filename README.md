# TP Backend 2019

TP Backend
1 - Enunciado
1.1 - Desarrollo

Desarrollar un backend utilizando una API REST o GraphQL y un frontend parcial con las siguientes caracterísitcas:

    El backend debe ser programado en JavaScript con NodeJS.
    Debe utilizar un framework/middleware. Se dará soporte sobre Express pero podrán utilizarse alternativas si así se prefiere.
    La persistencia debe realizarse utilizando un ODM/ORM con una base de datos acorde a la tecnología que se utilice.
    El frontend debe realizarse con un framework como Angular u otro seleccionado, html 5 y para CSS debe usarse un preprocessador o framework.
    El tema y alcance del trabajo debe ser propuesto por los alumnos y aprobado por los docentes de la cátedra (o utilizar el del año 2017)

1.2 - Funcionalidad
1.2.1 - Backend por API REST o GraphQL

    Debe permitir realizar uno o más ABMC por API. Los mismos dependen de la dificultad del trabajo propuesto y cantidad de integrantes. Los mismos deben ser acordados con los docentes.
    Al menos 1 listado, filtrado o no, por API ,el mismo debe listar al menos uno de los elementos creados en los ABMC y se recomienda que el listado incluya datos de al menos dos elementos o hacer dos listados.
    Presentar un detalle por API de alguno de los elementos en un listado, al solicitar el mismo utilizando un ID u otro identificador obtenido de un elemento del listado, deberán devolverse más datos sobre el mismo.
    
1.2.2 - Frontend

    El frontend al menos deberá permitir invocar a la API y mostrar los resultados de uno de los listados y el detalle del mismo.
    El resto de la funcionalidad puede utilizarse mediante una herramienta similar a postman, restclient, curl o wget.

1.3 - Planificación y documentación
1.3.1 - Entregas

El equipo deberá definir el alcance del trabajo práctico con el equipo docente. Indicando los criterios de aceptación.

Las mismas podrán volverse a pactar con los profesores enviando las correcciones a la misma indicando, causas, acciones correctivas que se tomarán.

1.3.2 - Reuniones de avance

A su vez deberán hacer reuniones periódicas para planificar las acciones a realizar y los responsables entre una reunión y otra. La periodicidad la definirán los miembros del equipo.

En la misma deberán indicar: fecha de la reunión, asistentes y por cada asistente:

    Tareas completadas desde la última reunión
    Blockers
    Tareas a realizar hasta la próxima reunión
    A su vez si no se alcanzó lo planificado en la reunión anterior las acciones correctivas que se tomarán.

2 - Criterio de correccion
2.1 - Sitio

    Diseño adecuado de la API REST.
    Diseño del modelo de datos adecuado.
    Usabilidad del sitio: debe ser fácil de usar, elegante y no tener contenido oculto o difícil de acceder
    Diseño adecuado de la interfaz: uso apropiado de los tags html y de los estilos, ya sea utilizando un FW CSS o un preprocesador.
    Calidad del código: uso adecuado de las características del FW y de la API.
    Completitud de los requerimientos.

2.2 - Planificación

    Progreso en las capacidades para planificar adecuadamente y tomar acciones correctivas.
    Adecuación de las entregas con tiempos y acciones.

2.3 - Repositorio

    El desarrollo deberá realizarse en una plataforma de git gratuita. Se recomienda GitHub o GitLab.
    Se evaluará el uso de git: Frecuencia y responsables de los commits, uso de branches y merge.

3 - Notificación Inicial
    
    Para crear el proyecto deberá crear un fork de este repositorio.
    Editar el readme.md para incluir al menos:
    
    * legajo, apellido y nombre de los integrantes.
    * Enunciado del TP indicando el alcance (cada uno de los requerimientos a que caso de uso o user story se corresponde).
    * Se sugiere incluir una imagen con un borrador del modelo de dominio.
    
    Enviar mail a los profesores con la URL del repositorio para validar el alcance. Esperar la autorización para el enunciado. Una vez hecho esto puede comenzar el desarrollo del mismo.
    
4 - Entrega final

    La entrega final deberá hacerse enviando por email a los profesores la URL del repositorio de git. La fecha límite de entrega es dos días antes del cierre de regularidades, la misma debe incluir el código del trabajo y una defensa del mismo la cual debe haber sido pactada con anterioridad según la disponibilidad de los docente.

    El archivo readme.md deberá ser modificado y deberá agregarse al final el tema y enunciado del trabajo práctico y alcance pactado con el docente, el trabajo, año de cursado e integrantes (legajo, nombre y apellido).
    
5 - Información TP

    Integrantes: 42740 - Babaglio, Luciano
                 42713 - Calvigioni, Luca
    
    Enunciado:
    Sistema de asignación de tareas
    Desarrollo de un sistema que permita a los docentes un seguimiento más efectivo de sus alumnos mediante la asignación y control de       tareas. A su vez, los alumnos podrán hacer uso del mismo para revisar sus asignaciones pendientes como para coordinar trabajos           grupales con sus pares.
    Las funcionalidades del sistema se basaran en 2 tipos de usuarios no excluyentes: Asignadores y asignados.
    Funcionalidades de asignadores:
    -Agregar contacto: Cada contacto contará con un identificador, correo electrónico y etiqueta (opcional).
    -Categorizar contacto: mediante un sistema de etiquetas se permitirá el filtrar la lista de contacto.
    -Instanciar una tarea: Cada tarea contará con identificador, descripción, fecha de inicio, fecha de fin, fecha límite, lugar             (opcional) y estado.
    -Asignar una tarea: Cada tarea podrá ser asignada a uno o más contactos, individualmente o por etiqueta respectivamente.
    -Chequear estado de tarea: Un asignador podrá ver quienes y en qué momento completaron una determinada tarea.
    -Marcar tarea como completada.
    -Notificar correcciones pendientes.
    Funcionalidades de asignados:
    -Revisar tareas pendientes: generar lista de tareas a la que el usuario ha sido asignado y no completo
    -Revisar tareas concluidas: lista de tareas completadas por el usuario
    -Enviar tarea para revisión: se permitirá el envío de parte del asignado al asignador para su revisión.
    -Recibir notificación de corrección o notificación de aprobación.
