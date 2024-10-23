// 1.Obtener y mostrar usuarios utilizando la API de JSONPlaceholder
// En este ejercicio utilizaremos la API de https://jsonplaceholder.typicode.com/users. Leyendo su documentación, deberás hacer lo siguiente:
// Imprimir por consola la lista (array) de usuarios.
axios.get("https://jsonplaceholder.typicode.com/users")  
 .then((res) => console.log(res.data))      
 .catch((err) => console.error(err));

// Imprimir por consola solo el nombre de los usuarios.
axios.get("https://jsonplaceholder.typicode.com/users")  
 .then((res) => res.data.forEach(element => {
  console.log(element.name)
 }))      
 .catch((err) => console.error(err));


// Crear una variable global llamada "users" y, al hacer la solicitud utilizando Axios, rellenarla con la respuesta de la API(el array). Este proceso debe realizarse fuera de cualquier función.

// Nota: Después de realizar el console.log de la variable "users", es normal que aparezca vacía debido a que JavaScript no es bloqueante y el console.log se ejecuta antes de que la variable sea llenada con la información de la solicitud.
// // archivo JS

// // variable global
let users = []

// // petición axios (aquí hago la petición y dentro relleno la variable creada anteriormente)
axios.get("https://jsonplaceholder.typicode.com/users")  
 .then((res) => res.data.forEach(element => {
  users.push(element)
 }))      
 .catch((err) => console.error(err));
 

// Crear una función llamada "showUsers" que muestre por consola la variable global "users" que has creado.
const showUsers = () => {
  console.log(users);

}
// Crea un botón que cuando lo cliques ejecute la función que habías creado
const btn = document.getElementById("btn")
btn.addEventListener("click", showUsers)

// Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM (en el HTML).
const showUsersDOM = () => {
  users.forEach(element => {  
    document.querySelector("#content").innerHTML += element.name + "<br>"
   })

}
const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", showUsersDOM)

// 1. Quiero un perrito, pero no se que raza escoger, ¿me ayudas?

// En este ejercicio utilizaremos la API de https://dog.ceo/dog-api/. Leyendo su documentación, deberás hacer lo siguiente:
// Imprimir por consola la lista de razas de todos los perros.
let breedList = []
axios.get("https://dog.ceo/api/breeds/list/all")  
.then((res) => {
  console.log(res.data.message)
  for (const breed in res.data.message) {
    if (Object.prototype.hasOwnProperty.call(res.data.message, breed)) {
      breedList.push(breed)
      
    }
  }
  breedList.forEach(element => {  
    document.querySelector("#content2").innerHTML += element + ", "
   })
})
.catch((err) => console.error(err));


// Imprimir por consola la url imagen random de una raza.
axios.get("https://dog.ceo/api/breeds/image/random")  
.then((res) => {
  console.log(res.data.message)
  document.querySelector("#content3").innerHTML = `<img src=${res.data.message}>`

})
.catch((err) => console.error(err));

// Imprimir por consola todas las imágenes de una raza concreta.
axios.get("https://dog.ceo/api/breed/hound/images")  
.then((res) => {
  console.log(res.data.message)
  document.querySelector("#content4").innerHTML = `<img src=${res.data.message[0]}>`
  //La suguiente parte muestra todas las imagenes de todas las razas
  // res.data.message.forEach(ele => {  
  //   document.querySelector("#content4").innerHTML += `<img src=${ele}>`
  //   console.log(ele)
  //  })
  
})
.catch((err) => console.error(err));

// Recuerda que para estos ejercicios deberás utilizar Axios. Al haber conseguido que se imprima por consola, el siguiente paso será que se muestren en pantalla con las herramientas que nos ofrece el árbol DOM.
