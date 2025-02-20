//Crea una función descargarArchivo(tamaño) 
//que devuelva una promesa.
//Si el tamaño es menor o igual a 50MB,
//la promesa se resuelve con "Descarga completada".
//Si el tamaño es mayor a 50MB, la promesa 
//se rechaza con "El archivo es demasiado grande".

function downloadFile(size){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if (size <= 50){
            resolve("Descarga completada");
        } else {
            reject("El archivo es demasiado grande")
        }
    },3000)
    })
}

downloadFile(50) //Descarga completada
    .then(message => console.log(message))
    .catch((error)=>console.log(error));

downloadFile(90) //El archivo es demasiado grande
    .then(message => console.log(message))
    .catch((error)=>console.log(error));