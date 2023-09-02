function showTask() {
  const addTaskDiv = document.getElementById("addTask");
  addTaskDiv.style.display = "block";
  const addTask = document.getElementById("addbtn");
  addTask.style.display = "block";
}

function hideTask() {
  const addTaskDiv = document.getElementById("addTask");
  addTaskDiv.style.display = "none";

  const addTask = document.getElementById("addbtn");
  addTask.style.display = "none";
}

let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let msg = document.getElementById("msg");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let task = document.getElementById("allitem");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textInput.value === "") {
    msg.innerHTML = "Task Cannot be blank";
  } else {
    console.log("sucess");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = [];

function acceptData() {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    textarea: textarea.value,
  });

  localStorage.setItem("data", JSON.stringify(data));

  createTask();
}

function createTask() {
  task.innerHTML = "";
  data.map((elem, index) => {
    return (task.innerHTML += ` <div class="task" id="${index}"><h5>${elem.text}</h5>
            <p>${elem.date}</p>
            <p>${elem.textarea}</p>
             <div class="icon">
                <i class="fa-solid fa-pen-to-square" onClick = "editItem(this)"></i>
                <i class="fa-solid fa-trash" onClick = "deleteItem(this)"></i>
                </div>
                </div>  `);
  });

  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
}

function deleteItem(e) {
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id, 1);

  localStorage.setItem("data", JSON.stringify(data));
}

function editItem(e) {
  let selectTask = e.parentElement.parentElement;

  textInput.value = selectTask.children[0].innerHTML;
  dateInput.value = selectTask.children[1].innerHTML;
  textarea.value = selectTask.children[2].innerHTML;

  deleteItem(e);
  showTask();
}

(() => {
  data = JSON.parse(localStorage.getItem("data"));
  createTask();
})();
