//Please create a function that takes in a number and a word. If the length of the word multiplied by the number passed into the function is greater than 100, alert "WINNER"! 

function numberTimesLength (num,word){
    if((word.length)* num > 100){
      alert('Winner')
    }else {
      alert ('Try Again')
    }
  }
  
  numberTimesLength()