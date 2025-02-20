//se crea una funcion llamada procesarPago con un parametro monto
function procesarPago(monto){
//se retorna una promesa con un resolve y un reject
    return new Promise((resolve, reject) => {
        //se imprime un mensaje en consola para decirle al usuario que se está procesando el pago
        console.log("Procesando pago...")
        //se simula un pago con un setTimeout
        setTimeout(() => {
            if(monto > 0){
                //se retorna un mensaje si el pago fue exitoso
                resolve("Pago exitoso, cargo por $" + monto+" pesos, gracias por su compra")
            }else{
                reject("Error: Monto inválido")
            }
        }, 5000);
    });
}
//simulamos un pago de 1 pesote
procesarPago(1)
.then((message)=> console.log(message))
.catch(console.error);