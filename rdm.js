

//rdm js, onload code
window.addEventListener("load", () => {
  const form = document.getElementById('rdm-form').firstChild;

  if (form.innerHTML == ""){
    form.hidden = false;
} else {
  form.hidden = true;
}

document.getElementById('add-new-todo').hidden = true;
document.getElementById('newbutton').hidden = true;

});


document.getElementById('rdm-add').addEventListener("click", () => {
document.getElementById('rdm-form').hidden = false;
document.getElementById('rdm-task-form').hidden = false;
document.getElementById('rdm-add').style.visibility = "hidden";

});


// variables for sessionStorage
//task
const submitName = document.getElementById('listsubmit');
let taskArrRdm = sessionStorage.getItem('rdmtasks') ? JSON.parse(sessionStorage.getItem('rdmtasks')) : [];
sessionStorage.setItem('rdmtasks', JSON.stringify(taskArrRdm));
const taskDataRdm = JSON.parse(sessionStorage.getItem('rdmtasks'));
//name
let nameArrRdm = sessionStorage.getItem('rdmnames') ? JSON.parse(sessionStorage.getItem('rdmnames')) : [];
sessionStorage.setItem('rdmnames', JSON.stringify(nameArrRdm));
const nameDataRdm = JSON.parse(sessionStorage.getItem('rdmnames'));

//let oneWeWant = nameDataRdm[nameDataRdm.length-1];
//remove data for name on focus so new name can be added each time
addName(nameDataRdm[0]|| "double click to add a list name here");

document.getElementById('nameinput').addEventListener('focus', () => {
window.sessionStorage.removeItem('rdmnames');

})

//event listener for "ENTER"-->triggers 'CLICK'
const inName = document.getElementById('nameinput');
inName.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    event.preventDefault();
    submitName.click();
  }
})

//create new list by adding name
function addName(text) {
  const toListName = document.getElementById('rdm-top-main-title');
  const nameForm = document.getElementById('rdm-form');
  let name = document.createElement('h3');
  name.innerHTML = text;
  name.setAttribute("class", "rdm-top-main-title");
  toListName.insertBefore(name, toListName.children[0]);
  nameForm.hidden = true;
  nameForm.reset();

  name.addEventListener("dblclick", (event) => {
  name.parentNode.removeChild(name);
  nameForm.reset();
  document.getElementById('rdm-form').hidden = false;
  nameForm.reset();

  })
};

submitName.addEventListener("click", () => {
  const inputName = document.getElementById('nameinput');
  const valueName = inputName.value;
  if (valueName === "" || valueName === " "){
    document.getElementById('alert-name').style.visibility = "visible";
  } else if (valueName) {
// add to storage

  nameArrRdm.push(valueName);
  sessionStorage.setItem('rdmnames', JSON.stringify(nameArrRdm));

// add name
    addName(valueName);
    document.getElementById('alert-name').style.visibility = "hidden";

}
//show other buttons
document.getElementById('add-new-todo').hidden = false;
document.getElementById('newbutton').hidden = false;
})

//remove a list name
  const nametheForm = document.getElementById('rdm-form');
  let newname = document.createElement('h3');

  newname.addEventListener("dblclick", (event) => {
  newname.parentNode.removeChild(name);
  nametheForm.reset();
  document.getElementById('rdm-form').visibility = false;
  nametheForm.reset();

})

const form = document.getElementById('rdm-task-form');
const submit = document.getElementById('tasksubmit');
//add new task or item to list
function addTask(text) {
  const toList = document.getElementById('rdm-list');
  let newTask = document.createElement('li');
  newTask.innerText = text;
  newTask.setAttribute("id", "rdm-item");
  toList.appendChild(newTask);
  form.reset();

  //cross out item or task
  newTask.addEventListener("click", (event) => {
  if (!newTask.classList.contains('line-through')) {
  newTask.classList.add('line-through');
} else if (newTask.classList.contains('line-through')) {
      newTask.classList.remove('line-through');
}

})
//delete item/task
newTask.addEventListener("dblclick", (event) => {
newTask.parentNode.removeChild(newTask);

})

}

submit.addEventListener("click", () => {
  const input = document.getElementById('taskinput');
  const rdmvalue = input.value;
if (rdmvalue === "" || input.value === " ") {
  document.getElementById('alert-task').style.visibility = "visible";
} else if (rdmvalue) {
// add to storage
  taskArrRdm.push(rdmvalue);
  sessionStorage.setItem('rdmtasks', JSON.stringify(taskArrRdm));

// add to list
  addTask(rdmvalue);
  document.getElementById('alert-task').style.visibility = "hidden";

}
});

//event listener for "ENTER"-->triggers 'CLICK'
const input = document.getElementById('taskinput');
input.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    event.preventDefault();
    submit.click();
  }
})

taskDataRdm.forEach(rdmtask => {
  addTask(rdmtask);

})

//clear sessionStorage on click
const clearButton = document.getElementById('clearsubmit')
const fullList = document.getElementById('rdm-list')
clearButton.addEventListener('click', () => {
  sessionStorage.removeItem('rdmtasks', JSON.stringify(taskArrRdm));
  sessionStorage.removeItem('rdmnames', JSON.stringify(nameArrRdm));
  while (fullList.firstChild) {
    fullList.removeChild(fullList.firstChild);
  }
  form.reset();
})
