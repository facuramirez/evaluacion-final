//* ====== EJERCICIO 10 ======

//* Crear 2 (dos) clases con las siguientes características:

//* CLASE 1:
//* a) nombre de la clase: Persona
//* b) parámetros: un objeto con los siguientes atributos: nombre, edad, profesion
//* b) I- los valores por defecto deben ser los siguientes:
//*    nombre: 'Sin nombre'
//*    edad: null
//*    profesion: null
//* c) atributos: ninguno puede ser accesible directamente desde fuera de la clase
//* d) crear los respectivos métodos getters para todos los atributos
//* e) crear 1 método setter para poder modificar la profesión con las siguientes caracterísitcas y/o restricciones:
//* e) I- Si el valor recibido como argumento no es una cadena de texto, retornar "Parámetro inválido, por favor inserte una cadena de texto"
//* e) II- Si la persona ya contaba con una profesion asignada, retornar "Esta persona ya tiene una profesion asignada"
//* e) III- Para los restantes casos, setear la profesión.
//* f) crear 1 método llamado "quienSoy" que retorne un string diciendo "Soy NNN, tengo EEE años y mi profesión es PPP". En caso de no contar con una profesión
//* ...retornar el siguiente string "Soy NNN, tengo EEE años"
//* NNN es el nombre de la persona
//* EEE es la edad de la persona
//* PPP es la profesión de la persona

//* CLASE 2:
//* a) nombre de la clase: Alumno
//* b) debe heredar de la clase Persona
//* c) parámetros: un objeto con los siguientes atributos: nombre, edad, profesion, catedra, nivel
//* d) atributos: ninguno puede ser accesible directamente desde fuera de la clase
//* e) crear los respectivos métodos getters para todos los atributos
//* f) crear 2 métodos setters para poder modificar tanto la catedra como el nivel.
//* f) I- restricciones del método para modificar la catedra:
//*     Si el valor recibido como argumento no es una cadena de texto, retornar "Parámetro inválido, por favor inserte una cadena de texto"
//*     Debe tener una longitud mínimo de 5 caracteres, de lo contrario retornar "La catedrá a asignar debe tener al menos 5 caracteres"
//*     En caso de cumplir con lo anterior, setear la catedra
//* f) II- restricciones del método para modificar el nivel:
//*     Si el valor recibido como argumento no es un número, retornar "Parámetro inválido, por favor inserte un número"
//*     El nivel se debe encontrar en el rango de 1 a 5, caso contrario retornar "Rango inválido"
//*     En caso de cumplir con lo anterior, setear el nivel
