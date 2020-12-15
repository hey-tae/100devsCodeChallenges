let heading = document.querySelector('#pageHeader')
// console.log(heading);
let inputText = document.querySelector('.inputText')
// console.log(inputText);
let convertLower = document.querySelector('.btn')
// console.log(convertLower);
let placeForOutput = document.querySelector('#placeForOutput')
// console.log(placeForOutput);

function makeLowerCase (){
    let newText = inputText.value.toLowerCase();
    placeForOutput.innerText = newText
    console.log("quiet down");
}

convertLower.addEventListener('click', makeLowerCase);
