let endDate = '26 June 2023 12:09 PM'


document.getElementById('endDate').innerText = endDate
const inputs = document.querySelectorAll("input")


function clock(){
    const end = new Date(endDate);
    const now = new Date();
   const diff = (end - now)/1000;

   if(diff < 0)return;
  
   inputs[0].value = (Math.floor(diff/3600/24)); // second/min/hour/day
   inputs[1].value = (Math.floor(diff/3600)%24); // use modulus because we want remainder
   inputs[2].value = (Math.floor(diff/60)%60);
   inputs[3].value = (Math.floor(diff)%60);
   
}

clock();

setInterval( () => {
    clock()
},1000)






