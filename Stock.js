//funcion para verificar el stock de un produto
function stock(product,cantidad){
    //declaramos un objeto con un inventario de productos
    let inventario ={"laptop":5,"mouse":10,"teclado":0}
   return new Promise((resolve,reject)=>{
    //simulacion de busqueda
    console.log("Espere, verificando producto..");
    setTimeout(() => {
        //busqueda en mi mini base de datos
        if(inventario[product] >= cantidad){
            resolve("Stock disponible, procediendo con la compra");
        }else {
            reject("Stock insufiente, compra rechazada")
        }

    }, 3000);
   })
}
//pasamos datos esticos
stock("laptop",6)
.then((message)=>console.log(message))
.catch(console.error);