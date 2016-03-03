# Práctica OOP en JS

![Resultado](http://files.catbox.moe/utpomf.png)

Este repositorio aloja la práctica de conversión de tipos, realizada con html, css y javascript, usando POO y haciendo uso de la herencia en javascript.

- Primero se realizó la clase **Medida**, que recibe un valor y un tipo opcional.

- A continuación, se creó la clase **Temperatura** que hereda de Medida, y por lo tanto llama a su constructor.

- Se crearon las clases **Fahrenheit**, **Celsius**, y **Kelvin**. Todas heredan de Temperatura, por lo que llaman a su constructor y además cada una implementa los **métodos de conversión** a las otras temperaturas.

- En la función convertir, se hizo uso de **XRegExp**. Para poder usarlo hubo que añadir el fichero *xregexp.js* en el repositorio y cargarlo en el HTML.

- Una vez se cazaba la temperatura a convertir, se pasaba un swith donde se creaba el objeto (Fahrenheit, Celsius, Kelvin) correspondiente, y atendiendo al tipo a convertir cada objeto llama a sus funciones.


**Repositorio GitHuB**

* [Repositorio trabajado](https://github.com/alu0100816761/object-oriented-programming-in-js-alexisnatalie)

**Página de la práctica**

* [Web](http://ull-esit-gradoii-pl.github.io/object-oriented-programming-in-js-alexisnatalie/)

**Página de los autores**

* [Alexis Daniel Fuentes Pérez](http://alu0100816761.github.io/)
* [Natalie Dajakaj](http://alu0100818369.github.io/)

**Campus Virtual**

* [Procesadores de Lenguajes](https://campusvirtual.ull.es/1516/course/view.php?id=178)
