<div id="top"></div>
<center>

<style>
  @font-face {
      font-family: 'Manrope', sans-serif;
      src: url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
    }
</style>

  <h1 style="
  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-family: $font-family;
  font-size: 50px;
  line-height: 75px;
  font-weight: 800;
  "> T e m p l a t e  -  W e b p a c k  -  5</h1>
</center>

<br />
<div align="center">
  <a href="https://github.com/ferch01992/template_webpack_5/blob/master/README.md">
    <img src="https://raw.githubusercontent.com/MicaelliMedeiros/micaellimedeiros/master/image/computer-illustration.png" alt="Logo"  min-width="400px" max-width="400px" width="400px" height="300px">
  </a>
  <h3 align="center">Template webpack 5</h3>
  <p align="center">
    Una impresionante plantilla para impulsar sus proyectos!
    <br />
    <a href="https://github.com/ferch01992/template_webpack_5/blob/master/README.md"><strong>Explore los documentos »</strong></a>
    <br />
  </p>
</div>

<details>
  <summary style="color:#0078D4;font-size:20px">C O N T E N I  D O</summary>
  <ol>
    <li>
          <a href="#pre-requisitos">Pre-requisitos</a>
      <ul>
        <li><a href="#software-previo-y-requerido">Software previo y requerido</a></li>
        <li><a href="#plugins-previos-y-requeridos-para-vscode">Plugins previos y requeridos para VsCode</a></li>
      </ul>
    </li>
    <li>
      <a href="#librerias-generales-del-proyecto">Librerias generales del proyecto</a>
    </li>
    <li>
      <a href="#instalacion-de-dependencias">Instalacion de dependencias</a>
    </li>
    <li>
      <a href="#configuración-de-eslint-y-prettier-en-vscode">Configuración de Eslint y Prettier en VSCode</a>
    </li>
    <li>
      <a href="#ejecución-del-proyecto-en-modo-desarrollo">Ejecución del proyecto en modo desarrollo</a>
    </li>
     <li>
          <a href="#estandar-general-de-desarrollo">Estandar general de desarrollo</a>
      <ul>
        <li><a href="#nombre-y-extenciones-de-archivos">Nombre y extenciones de archivos</a></li>
        <li><a href="#nombre-de-variables">Nombre de variables</a></li>
        <li><a href="#funciones-sin-eventos">Funciones sin eventos</a></li>
        <li><a href="#funciones-con-eventos">Funciones con eventos</a></li>
        <li><a href="#idemtación">Idemtación</a></li>
        <li><a href="#importación-y-exportación-de-componente">Importación y Exportación de componente</a></li>
        <li><a href="#store">Store</a></li>
      </ul>
    </li>


  </ol>
</details>
<br/>

## __Pre-requisitos__
________________________________________________________________________________

### __Software previo y requerido__


|      Software    |              Versión               |       Documentación     |
|------------------|------------------------------------|-------------------------|
| Node.js          |<img src ="https://img.shields.io/badge/v12.x >= v16.x-blue">| [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)|
| Git              |<img src ="https://img.shields.io/badge/latest-brightgreen"> | [![Git](https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)|
| VsCode           |<img src ="https://img.shields.io/badge/latest-brightgreen"> | [![VsCode](https://img.shields.io/badge/Visual_studio_code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com/)|

<p align="right"><a href="#top">volver arriba 🔼</a></p>

________________________________________________________________________________

### __Plugins previos y requeridos para VsCode__

#### __*Pligins:*__
  * __EditorConfig for VS Code__ [Documentación](https://editorconfig.org/)
  * __Error lens__ [Documentación](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens/)
  * __ESLint__ [Documentación](https://eslint.org/)
  * __Prettier - Code formatter__ [Documentación](https://prettier.io/)
  * __Stylelint__ [Documentación](https://stylelint.io/)

__NOTA:__ En caso de utilizar otro editor de código como
__*[Subliem text](https://www.sublimetext.com/)*__ ó
__*[Vim](https://www.vim.org/), etc.*__ revisar la documentación de los plugin
para realizar la instalacion de manera correcta en su editor.

<p align="right"><a href="#top">volver arriba 🔼</a></p>

_______________________________________________________________________________

## __Librerias generales del proyecto:__

|      Libreria   |              Versión               |       Documentación     |
|------------------|------------------------------------|-------------------------|
| React            |<img src ="https://img.shields.io/badge/v17.0.2-blue"> | [![Git](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://es.reactjs.org/)|
| Redux            |<img src ="https://img.shields.io/badge/v4.1.2-blue"> | [![Redux](https://img.shields.io/badge/Redux-7B42BC?style=for-the-badge&logo=redux&logoColor=white)](https://es.redux.js.org/)|
| Webpack          |<img src ="https://img.shields.io/badge/v5.59.0-blue"> | [![Redux](https://img.shields.io/badge/Webpack-0081CB?style=for-the-badge&logo=webpack&logoColor=white)](https://webpack.js.org/)|
| Babel            |<img src ="https://img.shields.io/badge/v7.15.8-blue"> | [![Redux](https://img.shields.io/badge/Babel-FFAD19?style=for-the-badge&logo=Babel&logoColor=white)](https://babeljs.io/)|
| Material UI      |<img src ="https://img.shields.io/badge/v5.4.1-blue"> | [![Redux](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)](https://mui.com/)|
| Sass             |<img src ="https://img.shields.io/badge/v5.4.1-blue"> | [![Redux](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)|


<p align="right"><a href="#top">volver arriba 🔼</a></p>

________________________________________________________________________________

## __Instalación de dependencias__

> Ejecutar el siguiente comando para instalar las dependecias del proyecto.
```sh
npm i ó npm install
```
<p align="right"><a href="#top">volver arriba 🔼</a></p>

________________________________________________________________________________

## __Configuración de Eslint y Prettier en VSCode__

> Colocar el siguiente código en el archivo `settings.json` de VSCode.
```json
{
  "css.validate"               : false,
  "less.validate"              : false,
  "scss.validate"              : false,
  "stylelint.validate"         : ["css", "scss"],
  "editor.defaultFormatter"    : "esbenp.prettier-vscode",
  "prettier.jsxBracketSameLine": false,
  "editor.formatOnSave"        : true,
  "[javascript]"               : {
    "editor.defaultFormatter" : "esbenp.prettier-vscode",
    "editor.formatOnSave"     : true
  },
  "editor.codeActionsOnSave"   : {
    "source.fixAll.stylelint" : true
  }
}
```
__NOTA:__ En caso de utilizar otro editor de código como
__*[Subliem text](https://www.sublimetext.com/)*__ ó
__*[Vim](https://www.vim.org/), etc.*__ revisar la documentación de __*[ESLint](https://eslint.org/)*__ y __*[Prettier](https://prettier.io/)__

<p align="right"><a href="#top">volver arriba 🔼</a></p>

________________________________________________________________________________

## __Ejecución del proyecto en modo desarrollo__

> Ejecutar el siguiente comando en tu terminal.
```sh
npm run dev
```
URL de compilción: [![localhost](https://img.shields.io/badge/127.0.0.1:8080-blue)](http://127.0.0.1:8080)

<p align="right"><a href="#top">volver arriba 🔼</a></p>

________________________________________________________________________________

## __Estandar general de desarrollo__

________________________________________________________________________________

### __Nombre y extenciones de archivos__

> Nombre del archivo : El nombre será acorde al contenido del archivo o clase del componente, y será en __*CamelCase*__, como se muestra en el siguiente ejemplo.

```sh
nameFileExample.js
```
> Tipos de extensiones :

```sh
.jsx ,   .js ,  .scss
```
> Si el contenido del archivo es JSX, la extensión será __.jsx__

> Si el contenido del archivo es JS la extensión será __.js__

> Si el contenido del archivo son estilos la extensión será __.scss__

<p align="right"><a href="#top">volver arriba 🔼</a></p>

________________________________________________________________________________

### __Nombre de variables__

> El nombre de la variable será escrito con CamelCase, como se muestra en el siguiente ejemplo :

```js
let nombreVariable = ";
```
> En caso de que la variable sea una constante será escrita con letras mayúsculas separada por guiones bajos, como se muestra en el ejemplo.

```js
const NOMBRE_VARIABLE = null;
```
<p align="right"><a href="#top">volver arriba 🔼</a></p>

________________________________________________________________________________

### __Funciones sin eventos__

> Las funciones sin eventos serán llamadas acorde a la acción o funcionalidad que realizará la misma y será nombrada con __*CamelCase*__, como se muestra en el ejemplo.

```js
nombreFuncion( ) {
  console.log( " Hola Template Webpack 5 " )
}
```
<p align="right"><a href="#top">volver arriba 🔼</a></p>

________________________________________________________________________________

### __Funciones con eventos__

> Ejemplo de eventos.
  * onClick
  * onChange
  * etc...

> Las funciones con eventos propios de los componentes, tendrán al inicio la palabra handler y serán llamadas acorde a la acción o funcionalidad que realizará la misma y será nombrada con CamelCase, como se muestra en el ejemplo.
```js
handlerNombreFuncion( ) {
    console.log( " Hola Suscribe " )
}
```
<p align="right"><a href="#top">volver arriba 🔼</a></p>

________________________________________________________________________________

### __Idemtación__

> La indentación del cada uno de los archivos será acorde al archivo de configuración [.editorconfig](https://editorconfig.org/), en el cual se encuentran las configuraciones de los archivos de acuerdo a su extensiones.

<p align="right"><a href="#top">volver arriba 🔼</a></p>

________________________________________________________________________________

### __Importación y Exportación de componente__

> Los componentes serán exportados e importados, con el mismo nombre de su clase, ademas sera importado con rutas relativas como se muestra en el ejemplo.

```js
export default NameComponent.

import NameComponent from ‘./ruta/ruta’
```
<p align="right"><a href="#top">volver arriba 🔼</a></p>

________________________________________________________________________________

### __Store__

> El store tendrá las siguientes características.
  * Un máximo de tres niveles.
  * Claves escritas __*CamelCase*__.
  * No utilizar arreglos.

```js
const INITIAL_STATE = {
	claveA : {
			clave : { ... }
	},
	claveB : {
		claveBUno  : { ... },
		claveBDos  : { ... },
		claveBTres : {
			claveBTresA : { ... },
			claveBtresB : { ... },
			claveBtresC : { ... }
		}
	},
	claveC : { ... },
	claveD : { ... },
	claveE : { ... },
	...
}
```
<p align="right"><a href="#top">volver arriba 🔼</a></p>
