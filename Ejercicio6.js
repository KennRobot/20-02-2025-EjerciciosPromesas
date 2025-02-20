//Ejercicio 6: Verificación de Saldo Bancario
let cuentas = [{kennby:{saldo:1000,nombre:"kennny"}}, {esteban:{saldo:500,nombre:"esteban"}}];

function verificarSaldo(cuenta,monto){
    return new Promise((resolve,reject)=>{ 
        setTimeout(()=>{ 
            if (cuenta.saldo >= monto){ 
                resolve(cuenta.nombre + ", " + "saldo restante: "+ (cuenta.saldo - monto) + ". Transaccion aprobada"); 
            }else{ 
                reject("Fondos insuficientes: "+ cuenta.saldo + ",Error 402"); 
            } 
      
        },2000) 
    })
}

verificarSaldo(cuentas[1].esteban,300)
.then((message)=>console.log(message))
.catch((error)=>console.log(error));