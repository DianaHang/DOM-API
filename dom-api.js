/**
 * DOM API:
 * Para obtener elementos por ID: document.getElementById(ID string)
 * 
 */

const div1 = document.getElementById("div-1");
console.log(div1);
//getElementById: Para imprimir un elemento en específico, de acuerdo a su ID.

const divCollection = document.getElementsByTagName("div");
//getElementsByTagName: Para hacer un arreglo con todos los elementos que encuentre en HTML con la etiqueta mencionada, en este caso "div".
console.log(divCollection);

const p1 = document.getElementById("parrafo-1");
const usernameInputs = document.getElementsByName("username");
//getElementsByName: me da nombres y colecciones de elementos por clase, pero para obtener los datos hay que buscarlo por índice en su arreglo.
const usernameInput = usernameInputs[0];

console.log(p1, usernameInput);

//Events
usernameInput.addEventListener ("input", (event) =>   { console.log(event.target.value);
  p1.innerText = event.target.value;
});


// addEventListener: Para agregar una escucha para cualquier tipo de evento que yo le diga, y que haga una funcionalidad. Se ocupan dos parámetrros: Primero el tipo de evento que va a escuchar o sea el ID del elemento y luego una función flecha que será mostrar el evento.

//event.target.value: Muestra valor por valor ingresado en el elemento, como en un input muestra letra por letra lo que escribió el usuario.

//p1.innerText = event.target.value: Sirve para escribir en otro elemento el texto que ingresó el usuario y evaluar cada tecla que usó.