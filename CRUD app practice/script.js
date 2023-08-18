let form = document.getElementById("form");
let input = document.getElementById("textInput");
let err = document.getElementById("eror");
let post = document.getElementById("post1")

form.addEventListener("click", (e) => {
  e.preventDefault();
  validForm();

});

function validForm() {
  if (input.value === "") {
    err.innerHTML = "**please write something";
  } else {
    err.innerHTML = "";
getdata();

  }
}


let data = {}; 

function getdata(){
  data["text"] = input.value;
  post.innerHTML += `   <div id="post">
  <div><p>${data.text}</p></div>
  <div><i class="fa-solid fa-pen-to-square" onClick = "editPost(this)"></i>
  <i class="fa-solid fa-trash" onClick = "deletePost(this)"></i></div>
  </div>`
  input.value = ""

};



let deletePost = (e) =>{
  e.parentElement.parentElement.remove();
}


let editPost = (e) => {
  
  input.value = e.parentElement.previousElementSibling.innerHTML ;
  e.parentElement.parentElement.remove();

};



