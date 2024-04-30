//En caso que no funcione getElementBy podemos seleccionarlo con document.querySelector(.siclase) y document.querySelector(#siusoel ID). En este caso sería document.querySelector(".card-container")
const CARDS_CONTAINER = document.getElementById("card-container");
const USER = {
    id: 1,
    userName: "User Name",
    desc: "Sobre mí",
    age: 24,
    //Nuevo objeto anidado y a su vez va a ser un array
    fav_music: {
        music: ["Rap", "R&B", "Rock", "Hip-Hop","Indie rock"],
    },

};

//Crear tarjeta, esta función sirve para hacer un request dato por dato y de ahí no se tienen que configurar las aplicaciones desde el HTML sino que se sacan desde la base de datos.
const CARD = document.createElement("div");
const NAME_SECTION = document.createElement("h3");
const DECS_SECTION = document.createElement("p");
const AGE_SECTION = document.createElement("p");
const MUSIC_SECTION = document.createElement("div");

//Lista 
    //Llama una función de tipo callback y regresa un array con los resultados, por cada libro voy a tener un elemento ul. 
    const musiclist = USER.fav_music.music.map(e => {
        //Coloca cada elemento en una ul y lo repite por cada item
        const item = document.createElement("ul");
        item.textContent = e;
        return item;
    });
console.log(musiclist);
//Crear tarjeta
//TextContent e inner text son intercambiables. Nos sirven para extraer infortmación de nuestras constantes en la parte de arriba.
NAME_SECTION.textContent = USER.userName;
DECS_SECTION.textContent = USER.desc;
AGE_SECTION.textContent = USER.age;
//Lo que tengo en booklist es no es un nodo, es un arreglo. Es por ello que necesitamos los puntitos. Muestra todos los elementos con append. appendChild manda la operación sólo 1 vez, append lo hace con varios.
MUSIC_SECTION.append(...musiclist);

//Push agarra nuestra colección de array y lo agrega hasta el final. Append hace lo mismo pero en nodos.
CARD.append(NAME_SECTION, DECS_SECTION, AGE_SECTION, MUSIC_SECTION);

//Inyectar tarjeta en el container
CARDS_CONTAINER.appendChild(CARD);