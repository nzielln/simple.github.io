
window.addEventListener("load", () => {
  document.getElementById('rdm-form').hidden = false;



});


document.getElementById('rdm-add').addEventListener("click", () => {
  document.getElementById('rdm-form').hidden = false;
  document.getElementById('rdm-task-form').hidden = false;
  document.getElementById('rdm-add').style.visibility = "hidden";


});



const submitName = document.getElementById('listsubmit');
submitName.addEventListener("click", () => {
  const inputName = document.getElementById('nameinput');
  const valueName = inputName.value;
  if (valueName === "" || valueName === " "){
    document.getElementById('alert-name').style.visibility = "visible";
  } else if (valueName) {
    addName(valueName);
    document.getElementById('alert-name').style.visibility = "hidden";

}
});

function addName(text) {
  const toListName = document.getElementById('rdm-top-main-title');
  let name = document.createElement('h3');
  name.innerHTML = text;
  name.setAttribute("class", "rdm-top-main-title");
  toListName.appendChild(name);
  document.getElementById('rdm-form').hidden = true;

};

const form = document.getElementById('rdm-task-form');
const submit = document.getElementById('tasksubmit');
submit.addEventListener("click", () => {
  const input = document.getElementById('taskinput');
  const value = input.value;
if (value === "" || input.value === " ") {
  document.getElementById('alert-task').style.visibility = "visible";
} else if (value) {
  addTask(value);
  document.getElementById('alert-task').style.visibility = "hidden";

}
});



function addTask(text) {
  const toList = document.getElementById('rdm-list');
  let newTask = document.createElement('li');
  newTask.innerText = text;
  newTask.setAttribute("id", "rdm-item");
  toList.appendChild(newTask);
  form.reset();

  newTask.addEventListener("click", (event) => {
  if (!newTask.classList.contains('line-through')) {
  newTask.classList.add('line-through');
} else if (newTask.classList.contains('line-through')) {
      newTask.classList.remove('line-through');
}

})

newTask.addEventListener("dblclick", (event) => {
newTask.parentNode.removeChild(newTask);


})

};
