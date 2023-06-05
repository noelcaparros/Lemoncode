// --------------------------------------------------1. Array operations-------------------------------------------------------
// 1. Array operations
// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

console.log("-----------------1. Array operations--------------------");

const head = (array) => {
  const [first] = array;
  return first;
};

console.log("1. Array operations (Head): ", head([1, 2, 3, 4])); // 1

// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = (array) => {
  const [, ...rest] = array;
  return rest;
};

console.log("1. Array operations (Tail): ", tail([1, 2, 3, 4])); // [2,3,4]

// Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (array) => {
  const [last] = array.slice(-1);
  return last;
};

console.log("1. Array operations (Last): ", last([1, 2, 3, 4])); // 4

// --------------------------------------------------2. Concat-------------------------------------------------------
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

console.log("-----------------------2. Concat------------------------");

const concat = (a, b) => {
  return [...a, ...b];
};

console.log("2. Concat: ", concat([1, 2, 3, 4], [5, 6, 7, 8])); // [1,2,3,4,5,6,7,8]

// Opcional
// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).

const concatMultiple = (...arrays) => {
  return arrays.reduce((acc, array) => [...acc, ...array], []);
};

console.log(
  "2. Concat (multiple)",
  concatMultiple([1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12])
); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// --------------------------------------------------3. Clone Merge-------------------------------------------------------
// Clone
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
console.log("-----------------------3. Clone Merge------------------------");

function clone(source) {
  return { ...source };
}

const source = {
  name: "Maria",
  age: 31,
};

console.log("3. Clone: ", clone(source));

// Merge
// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source,
// y en caso de propiedades con el mismo nombre, source sobreescribe a target.

// Por ejemplo, dados estos 2 objetos:

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
// el resultado de mezclar a sobre b sería: {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}

function merge(source, target) {
  const clonedSource = clone(source);
  const clonedTarget = clone(target);
  return Object.assign(clonedTarget, clonedSource);
}

console.log("3. Merge: ", merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
// TIP: Puedes usar la función "clone" del apartado A.

// --------------------------------------------------4. Read Books-------------------------------------------------------
// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro.
// Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false
// TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
console.log("-------------------------4. Read Books--------------------------");

function isBookRead(books, titleToSearch) {
  const book = books.find((book) => book.title === titleToSearch);
  return book ? book.isRead : false;
}
// Ejemplo
const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log("4. Read Books (1):", isBookRead(books, "Devastación")); // true
console.log(
  "4. Read Books (2):",
  isBookRead(books, "Canción de hielo y fuego")
); // false
console.log(
  "4. Read Books (3):",
  isBookRead(books, "Los Pilares de la Tierra")
); // false
// Opcional
// Utiliza Typescript para añadir los tipos adecuados.

// -------------------------------------------------- 5. Slot Machine-------------------------------------------------------
// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda.
// Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.

// Cuando se llame al método play el número de monedas se debe incrementar de forma automática
// y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas.
// El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:

// "Congratulations!!!. You won <número de monedas> coins!!";
// y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:

console.log(
  "-------------------------5. Slot Machine--------------------------"
);

class SlothMachine {
  constructor() {
    this.coins = 0;
  }

  play() {
    this.coins++;
    const random1 = Boolean(Math.round(Math.random()));
    const random2 = Boolean(Math.round(Math.random()));
    const random3 = Boolean(Math.round(Math.random()));
    if (random1 && random2 && random3) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
    } else {
      console.log("Good luck next time!!");
    }
  }
}

const machine1 = new SlothMachine();
console.log("5. Slot Machine:");
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
