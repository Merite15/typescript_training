let message: string = "Hello, World!";
// create a new heading 1 element
let heading = document.createElement("h1");

heading.textContent = message;
// add the heading the document
document.body.appendChild(heading);

let counter: number;

counter = 1;

// table
let names: string[];

names = ["John", "Jane", "Peter", "David", "Mary"];

// Pour spécifier un type pour un objet, vous utilisez l'annotation de type d'objet. Par exemple:
let person: {
  name: string;
  age: number;
};

person = {
  name: "John",
  age: 25,
};

// L'exemple suivant montre une annotation de fonction avec une annotation de type de paramètre et une annotation de type de retour : 
let greeting : (name: string) => string;

greeting = function (name: string) {
    return `Hi ${name}`;
};

// inference de type
let state = 'hello'

// interpolation de chaîne
let firstName: string = `John`;
let title: string = `Web Developer`;
let profile: string = `I'm ${firstName}. 
I'm a ${title}`;
