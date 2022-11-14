var message = "Hello, World!";
// create a new heading 1 element
var heading = document.createElement("h1");
heading.textContent = message;
// add the heading the document
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
