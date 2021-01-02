//Please create a function that takes in the name of a person. This function should add this person to a names list and let them know their position on the list. The names list should be created outside of the function. 

// push a new element into an array and then return the new array length

//create an array outside of the function, within the function add the person 
//return the length of the updated array 
//push is used to add a new variable into the array 
//.length for an array tells you how many elements there are 
var nameArray = [];

function nameList(name){
  nameArray.push(name);
  var arrayLen = nameArray.length
  //tells you the length of what you are asking for "since you are looking for how long the array is, it will tell you how long it is when a new one is added (+1)
  return arrayLen
}

var taeNum = nameList('Tae')
console.log('Tae is ' + taeNum)


