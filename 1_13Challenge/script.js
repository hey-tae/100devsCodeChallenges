//Please create a function that takes in an array. The function should console.log() the sum of the first value in the array and the last value in the array 


//save an array into a variable 
let ary = [2,4,6,8,10]

//create a function
function sumOfArray (){
  let firstElement = ary[0] //get first element
  let lastElement = ary[ary.length - 1] //get last element
  let sum = firstElement + lastElement //add both first and last elements
  console.log(sum)
}

sumOfArray(ary)