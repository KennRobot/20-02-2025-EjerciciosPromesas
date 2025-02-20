# 20-02-2025-EjerciciosPromesas
Repositorio de ejercicios de promesas de la clase del dia 20 de febrero de 2025


Ejercicio 1:
    Crea una función descargarArchivo(tamaño) que devuelva una promesa. Si el tamaño es menor o igual a 50MB, la promesa se resuelve con "Descarga completada". Si el tamaño es mayor a 50MB, la promesa se rechaza        con "El archivo es demasiado grande".
    Se creó una promesa con la estructura proporcionada por el docente, en este caso solo recibía el parámetro del tamaño del archivo. Se testeó con el .then y .catch para comprobar las condiciones.

Ejercicio 2:

Ejercicio 3:
    Verificación de Stock en una Tienda.
    Se creo una promesa que reciba dos paramentos y las compare con los datos de un objeto para determinar si el producto existe y si tiene stock disponible.                       
Ejercicio 4:

Ejercicio 5:
    Se creó una promesa que recibía dos parámetros, el usuario y la contraseña para hacer un login. En el resolve de la promesa hay un objeto que muestra los datos solicitados en salida, mismo caso en el reject.
    Se piden datos diferentes en la salida, es decir, en el caso de que sean correctas las credenciales, muestra el usuario y un mensaje de éxito. En el caso de ser incorrectas, muestra un mensaje de errory un código

Ejercicio 6:
    Verificación de Saldo Bancario
        Se creo un objeto con los datos de una cuenta bancaria(nombre y saldo) y se mandaban a una promesa que recibio la informacion de la cuenta y el monto que se se quiere retirar y mostrar un mensaje detallado de la informacion de la cuenta y las transaccion que se realizo.                     
Ejercicio 7:
Clima
El objetivo es buscar una ciudad con el uso de una función y de promesas, para posteriormente buscarla en una mini base de datos de nuestra elección con los campos de ciudad, descripción del clima, temperatura. Se debe de mandar a la función que recibe un dato tipo string que es la ciudad y realiza la busqueda correspondient, si la busqueda es exitosa nos devuelve la información que corresponde a la ciudad, si no nos dice que la ciudad no es correcta o no se encuentra registrada en la base de datos
