

// on line code
//  const hexacode = `#${Math.floor(Math.random()*16777215).toString(16)}`



let body = document.getElementById('body')  


function hexaColor(){

const randomNum = Math.floor(Math.random()*16777215);
const str = randomNum.toString(16);
const hexacode = "#" + str


body.style.backgroundColor = hexacode

document.querySelector('h3').innerHTML = hexacode
   
}