# Repositorio Educativo: Api Node JS🌱

¡Bienvenida/o! Este repositorio es una plantilla para crear una aplicación back. Esta aplicación ha sido realizada como ejemplo para que los estudiantes de la **Universidad** entiendan como se comunincan las aplicaciones front y back end. Las principales tecnologías que utilizamos son:

- [NodeJS](https://nodejs.org/es) Para ejecutar javascript del lado del servidor.
- [Express](https://expressjs.com/) Framework que proporciona un conjunto solido de características para desarrollo de aplicacion web.
- [Sequelize](https://sequelize.org/): ORM (Object Relational Mapping) que permite manipular bases de datos SQL.
- [Sqllite] (https://www.sqlite.org/): Motor para crear base de datos ligeras, compatible con el estándar SQL92

Para crear un proyecto siguiendo esta plantilla, lo único que tenés que hacer es clickear en el botón que dice **Use this template** de arriba a la derecha en la pagina de GitHub. ¡Y no te olvides de cambiarle el nombre en el package.json!

## :point_up: Prerrequisitos - para instalar antes de empezar

Vas a necesitar un IDE o al menos un editor de texto que coloree la sintaxis. Recomendamos utilizar Visual Studio Code - que se lleva muy bien con proyectos JavaScript - enriquecido con los siguientes plugins:

- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

ℹ️ Este proyecto fue creado usando el siguiente comando

```Bash
npm init
```

, y luego se fueron instalando las distintas dependencias.

```Bash
npm i express sequelize sqlite3 cors joi
npm i -D sequelize-cli nodemon
```

## :ballot_box_with_check: Configuración inicial del proyecto

Asumiendo que ya configuraste todos los prerrequisitos, esté es el comando que deberías ejecutar la primera vez que trabajes en el proyecto:

```shell
# Instala las dependencias Node del proyecto.
npm install
```

Luego vas a tener que ejecutar la aplicación con el siguiente comando:

```shell
# Arranca la aplicación.
npm run dev
```

## :file_folder: Estructura de directorios

Breve descripción de qué se puede encontrar en cada uno de los directorios del proyecto:

```shell
├── data                   #  donde se guardarán los archivos de la base de datos sqlLite
└── src
    ├── config             # Opciones de configuraciones de base de datos
    └── controllers        # handler que los endpoint expuetos
    └── middlewares        # interceptores entre las rutas y los controllers
    └── models             # modelos de estructura de la base de datos
    └── routes             # endpoint expuestos por la aplicacion
    └── schemas            # validador de datos recibidos
```

## Uso

Te recomendamos usar el pluging [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav) ó [Postman](https://www.postman.com/) ó [Insomnia](https://insomnia.rest/) para poder cosumir los enpoints que expone la aplicacion. También te dejamos los CURLs por si queres usar la consola o importarlos a cliente REST que eligas de los recomendos.

## CURLs

### Recuperar todas las series

```Bash
curl --location --request GET 'localhost:4000/series'
```

### Recuperar una Serie por id, (reemplazar id por el número de serie a recuperar)

```Bash
curl --location --request GET 'localhost:4000/series/id'
```

### Registrar una serie

```Bash
curl --location --request POST 'localhost:4000/series' \
--header 'Content-Type: application/json' \
--data-raw '{
"nombre": "Game of Thrones",
"plataforma": "Disney",
"temporadas": 8,
"disponible": true
}
'
```

### Borrar una Serie por id, (reemplazar id por el número de serie a borrar)

```Bash
curl --location --request DELETE 'localhost:4000/series/id'
```

### Modificar datos de una Serie por id (reemplazar id por el número de serie a borrar) y los datos que se desean modificar

```Bash
curl --location --request PUT 'localhost:4000/series/id' \
--header 'Content-Type: application/json' \
--data-raw '{
"nombre": "Juego de Tronos",
"plataforma": "Disney",
"temporadas": 9,
"disponible": false
}'
```
