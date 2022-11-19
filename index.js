var message = "Hello, World!";
var heading = document.createElement("h1");
heading.textContent = message;
document.body.appendChild(heading);
var counter;
counter = 1;
// table
var names;
names = ["John", "Jane", "Peter", "David", "Mary"];
// Pour spécifier un type pour un objet, vous utilisez l'annotation de type d'objet. Par exemple:
var person;
person = {
    name: "John",
    age: 25
};
// L'exemple suivant montre une annotation de fonction avec une annotation de type de paramètre et une annotation de type de retour : 
var greeting;
greeting = function (name) {
    return "Hi ".concat(name);
};
// inference de type
var state = 'hello';
// interpolation de chaîne
var firstName = "John";
var title = "Web Developer";
var profile = "I'm ".concat(firstName, ". \nI'm a ").concat(title);
// Type boolean
var pending;
pending = true;
// Type object
var employee;
employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
console.log(employee);
// Type vide
var vacant;
// Type tuple
var skill;
skill = ['Programming', 5];
console.log(skill);
