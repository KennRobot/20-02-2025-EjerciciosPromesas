//se declara la función weather con un parametro city
function  weather(city){
//se declara la variable weather con un objeto que contiene 3 ciudades con su respectiva información simulando una pequeña base de datos
let weather = {
	"CDMX": {"description": "Soleado", "temperature": 20},
	"Guadalajara": {"description": "Nublado", "temperature": 30},
	"Monterrey": {"description": "Lluvioso", "temperature": 15}
}
//se retorna una promesa con un resolve y un reject
return new Promise((resolve,reject)=>{
    //se imprime un mensaje en consola para decirle al usuario que se está buscando información de la ciudad que ingresó
    console.log("Buscando información de la ciudad de "+city)
   //se simula una petición a una base de datos con un setTimeout
    setTimeout(() =>{
        //se valida si la ciudad que ingresó el usuario se encuentra en la base de datos
        if(weather[city]){
            //se retorna un mensaje con la información de la ciudad que ingresó el usuario
            resolve("El clima en la ciudad de "+city+" es de "+weather[city].temperature+" °C, el cielo está "+ weather[city].description)
        }else{
            //se retorna un mensaje si la ciudad que ingresó el usuario no se encuentra en la base de datos
            reject("No se encontró información para la ciudad de "+city)
        }
    },2000)
})
}
//se llama a la función weather con la ciudad de "CDMX" y se encadenan los métodos then y catch
weather("CDMX")
.then((message) => console.log(message))
.catch(console.error);