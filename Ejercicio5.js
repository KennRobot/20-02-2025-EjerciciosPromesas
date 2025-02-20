function login (username,password){
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
           if(username==="admin" && password ==="1234"){
            resolve(
                answer = {
                    role: "Administrador",
                    message: "Inicio de sesión exitoso"
                }
            );
           }else{
            reject(
                answer = {
                    message: "Credenciales incorrectas",
                    code: "Código 401"
                }
            );
           } 
        },3000);
    })
}

login ("admin","1234")
    .then(message => console.log(message))
    .catch((error)=>console.log(error));

login ("paco","1234")
    .then(message => console.log(message))
    .catch((error)=>console.log(error));