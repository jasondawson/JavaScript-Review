//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here
var Animal = function(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
};

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here
var person = function(name, age, height, gender) {
  var myObj = {};
  myObj.name = name;
  myObj.age = age;
  myObj.height = height;
  myObj.gender = gender;
  return myObj;
};

//Create a animal array and a person array.

  //code here
var animals = [];
var persons = [];

//Create two instances of Animal and push those into your animal array

  //code here 
animals.push(new Animal('giraffe','Bnecky', 4, 'yellow', ['shoots', 'leaves']));
animals.push(new Animal('alligator', 'Future Boots', 4, 'green', ['birds', 'fish','cats']));

//Create two instances of person and push those into your person array.

  //code here
persons.push(person('Jason', 34, "6'1", 'male'));
persons.push(person('Tyrion', 28, "3'5", 'male'));

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here
Animal.prototype.eat = function() {
  alert(this.name + ' ate ' + this.food[Math.floor(Math.random() * (this.food.length - 0)) + 0] + '.');
};

//At this point, if we wanted to add something to every instance of person could we? 

  //Yes or no? and why or why not?

//A: No. My code above does not link the person object to any prototype. (I could do so by replacing the 'var obj = {};' with 'var obj = Object.create(person.prototype));'


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
    Creates 'this' object and returns 'this' object and links 'this' obj with the Constructor's prototype.
  2) What's a good way to describe the keyword 'this'
    Placeholder for whatever is calling the function in which 'this' is contained.
  3) Can a normal function which creates an object and then returns that object use the prototype?
    Yes, with Object.create()
  4) What happens if you forget to use 'new' when calling a constructor?
    You may create stuff on the window (global) scope. 
*/

