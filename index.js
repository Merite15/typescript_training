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
  age: 25,
};
// L'exemple suivant montre une annotation de fonction avec une annotation de type de paramètre et une annotation de type de retour :
var greeting;
greeting = function (name) {
  return "Hi ".concat(name);
};
// inference de type
var state = "hello";
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
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};
console.log(employee);
// Type vide
var vacant;
// Type tuple
var skill;
skill = ["Programming", 5];
console.log(skill);
var color = [255, 0, 0];
// Tuple facultatif
var headerColor;
var bgColor;
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
// Enum
var Month;
(function (Month) {
  Month[(Month["Jan"] = 0)] = "Jan";
  Month[(Month["Feb"] = 1)] = "Feb";
  Month[(Month["Mar"] = 2)] = "Mar";
  Month[(Month["Apr"] = 3)] = "Apr";
  Month[(Month["May"] = 4)] = "May";
  Month[(Month["Jun"] = 5)] = "Jun";
  Month[(Month["Jul"] = 6)] = "Jul";
  Month[(Month["Aug"] = 7)] = "Aug";
  Month[(Month["Sep"] = 8)] = "Sep";
  Month[(Month["Oct"] = 9)] = "Oct";
  Month[(Month["Nov"] = 10)] = "Nov";
  Month[(Month["Dec"] = 11)] = "Dec";
})(Month || (Month = {}));
function isItSummer(month) {
  var isSummer;
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
function log(message) {
  console.log(message);
}
// Never type
function raiseError(message) {
  throw new Error(message);
}
// Type d'union
var result;
result = 10; // OK
result = "Hi"; // also OK
var input;
input = 100; // valid
input = "Hi";
