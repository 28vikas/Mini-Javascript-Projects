

let slides = document.querySelectorAll(".slide");

count = 0;

slides.forEach((elem, index) => {
  elem.style.left = `${index * 100}%`;
});

function forward() {
  if(count == slides.length-1){
    count = 0;
    slideimg();
    
  }else{
    count++;
    slideimg();
  }

}

function backward() {
  if(count == 0){
    count = slides.length-1
    slideimg();

  }else{
    count--;
    slideimg();
  }
  
}


function slideimg() {
  slides.forEach((elem, index) => {
    elem.style.transform = `translateX(-${count * 100}%)`;
  });
}
