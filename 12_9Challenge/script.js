// what do we need to do?
// get an input, convert it, print it for user
// what do I need from the DOM
let convertTemp = document.querySelector('#placeForNumber');
let convertBtn = document.querySelector('#convert');
//console.log(convertBtn);



function convertToCelcius (){

    let fahr = convertTemp.value 
    //console.log(fahr);
    let convertedValue = (fahr - 32) * 5/9;
    document.querySelector('#placeForResult').innerText = convertedValue + '°';
    console.log(convertedValue)
}



convertBtn.addEventListener('click', convertToCelcius);

