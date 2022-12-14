let message: string = "Hello, World!";

let heading = document.createElement("h1");

heading.textContent = message;

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
let greeting: (name: string) => string;

greeting = function (name: string) {
  return `Hi ${name}`;
};

// inference de type
let state = "hello";

// interpolation de chaîne
let firstName: string = `John`;
let title: string = `Web Developer`;
let profile: string = `I'm ${firstName}. 
I'm a ${title}`;

// Type boolean
let pending: boolean;

pending = true;

// Type object
let employee: object;

employee = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};

console.log(employee);

// Type vide
let vacant: {};

// Type tuple
let skill: [string, number];

skill = ["Programming", 5];

console.log(skill);

let color: [number, number, number] = [255, 0, 0];

// Tuple facultatif
let headerColor: [number, number, number, number?];

let bgColor: [number, number, number, number?];

bgColor = [0, 255, 255, 0.5];

headerColor = [0, 255, 255];

// Enum
enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

function isItSummer(month: Month) {
  let isSummer: boolean;
  switch (month) {
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}

console.log(isItSummer(6));

// Void type
function log(message : any): void {
  console.log(message);
}

// Never type
function raiseError(message: string): never {
  throw new Error(message);
}

// Type d'union
let result: number | string;
result = 10; // OK
result = 'Hi'; // also OK

// Alias type
type alphanumeric = string | number;

let input: alphanumeric;

input = 100; // valid

input = 'Hi';
