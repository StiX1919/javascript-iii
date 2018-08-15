/*
  Once you complete a problem, refresh ./for-in-delete.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.
  You can refresh the page at any time to re-run all the tests.
*/

/*
  First we'll look at the difference between accessing property values in
  a for in loop and accessing the property name in a for in loop.
  In the example below, we are accessing the property values. 
  Uncomment the code below, run it and look at what prints in the console.
*/

////////// PROBLEM 1 //////////<<<<<COMPLETE
/*
  Inside the function showValues, write a for in loop that concatenates
   each of the property values and returns the concatenated string.
*/
var objProblem1 = {
  one: 'Duck',
  two: ' goes',
  three: ' quack',
  four: ' quckity',
  five: ' quack.'
}
var hold = "";
function showValues(objProblem1) {
for(var prop in objProblem1){
hold += objProblem1[prop];
}
return hold;
}
console.log(showValues(objProblem1))

////////// PROBLEM 2 //////////<<<<<COMPLETE
/*
  Write a function called greaterThan10 that takes in an object. 
  Write a for in loop that loops over the object and changes any value
   that is great than 10 to 0. 
  Return the updated object.
*/
var obj = {
  one:  1,
  two:  25,
  three:  3,
  four:  10,
  five:  15,
  six:  55,
}
function greaterThan10(list)
{
  for (var prop in list){
    if (list[prop] > 10){
      list[prop] = 0;
     }
}
return list;
}
greaterThan10(obj)
////////// PROBLEM 3 //////////<<<<<COMPLETE
/*
  Write a function called double that takes in an object.
  Write a for in loop that loops over the object and changes every
  value to be itself multipled by 2.
  Return the updated object.
*/
var toBeDoubled = {
num1: 2,
num2: 5,
num3: 7
}
var a = 0;
function double(toBeDoubled)
{
  for (prop in toBeDoubled){
   toBeDoubled[prop] *= 2
  }
  return toBeDoubled;
}
 console.log(double(toBeDoubled));

 ////////// PROBLEM 4 //////////<<<<<COMPLETE
/*
  Write a function called secrets that will take in an object.
  Create an empty string variable.
  Write a for in loop that loops over the object.
  If the property name starts with an 'sh', concatenate the value to the string variable.
  By the end of the for in loop, you should have a sentence, return that sentence.
*/
var objectProblem4 = {
str1: "",
str2: "",
str3: ""
}
var empty = "";
function secrets(obj)
{
  for(var values in obj)
  {
    if (values)
    sentence = values + empty;
  }
  return sentence;
}
secrets(objectProblem4);
/* 
  Sometimes it's needed to delete object properties. 
  All you need is the word delete before a reference to the object property value. 
  Uncomment the example below to see a for in loop deleting all the properties inside an object.
*/

 var deleteAllThethings = {
   one: 1,
   two: 2,
   three: 3
 }

 for(var key in deleteAllThethings) {
   delete deleteAllThethings[key]
 }
////////// PROBLEM 5 //////////<<<<<COMPLETE
/*
  Write a function called removePassword that takes in an object.
  Delete the property password and return the object.
*/
 var objectProblem5={
  password: "",
  notpassword: ""
}
function removePassword(obj)
{
  for(var key in obj) {
    delete obj.password;
    return obj;
  }
}

////////// PROBLEM 6 //////////
var deleteTheBigNumbers = {
  first: 10,
  second: 20,
  third: 110,
  fourth: 200
}
for (var value in deleteTheBigNumbers)
{
  if (deleteTheBigNumbers[value] > 100)
  {
    delete deleteTheBigNumbers[value];
  }
}
////////// PROBLEM 7 //////////

/*
  Write a function called startsWithK that takes an object as a parameter.
  Write a for in loop to loop over the object.
  If any property name starts with k, delete that property.
  Return the updated object.
*/
var objectK = {
  one: "kool",
  two: "Cool",
  three: "NotCool"
}
function startsWithK(objectK){
  for (value in objectK){
    if(objectK[value].charAt(0) === "k"){
      delete objectK[value];
    }
    return objectK;
  }
}
console.log(startsWithK(objectK))



////////// PROBLEM 8 //////////

/*
  Write a function called hiddenTreasure that takes in an object.
  Write a for in loop that loops over this object. Each property
  will have a sentence as it's value.
  If the property value does not contain the word 'treasure', delete the property.
  Return the updated object.
  (hint: the method includes() may be of use...)
*/
var objectProblem8 = {
  daveyJonesLocker: "I contain fish",
  mountOlympus: "I contain lightning",
  fortKnocks: "I contain tanks",
  theFederalReserve: "I contain treasure"
}

function hiddenTreasure(objectProblem8){
 for(var prop in objectProblem8){
 if (objectProblem8[prop].search("treasure") == -1){delete objectProblem8[prop];}
 else {return objectProblem8}
  }
}
  console.log(hiddenTreasure(objectProblem8));