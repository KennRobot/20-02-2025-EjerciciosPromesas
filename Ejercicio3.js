//Ejercicio 3: Verificación de Stock en una Tienda
let inventario = {"laptop":5, "mouse":10, "teclado": 0};

function verificacionStock(product,stock){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           if (product in inventario && inventario[product] >= stock){ 
                resolve("Stock disponible, procediendo con la compra");
           }else{
                reject("Stock insuficiente");
           }
        },2000)
    })
}

verificacionStock("teclado",1)
.then((message)=>console.log(message))
.catch((error)=>console.log(error));