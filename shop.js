
//on load, hide buttons and form until + is clicked
window.addEventListener("load", () => {
  document.getElementById('includes-clear').hidden = true;

});

document.getElementById('shop-add').addEventListener("click", () => {
  document.getElementById('includes-clear').hidden = false;
  document.getElementById('shop-add').style.visibility = "hidden";

});




// add new item
function addTask(text) {
  const toListItem = document.getElementById('shop-list');
  let newItem = document.createElement('li');
  newItem.innerText = text;
  newItem.setAttribute("id", "shop-item");
  toListItem.appendChild(newItem);
  form.reset();

  newItem.addEventListener("click", (event) => {
  if (!newItem.classList.contains('line-through')) {
  newItem.classList.add('line-through');
} else if (newItem.classList.contains('line-through')) {
    newItem.classList.remove('line-through');
}

})
const form = document.getElementById('form-shop');
const submitItem = document.getElementById('itemsubmit');

submitItem.addEventListener("click", () => {
  const inputItem = document.getElementById('iteminput');
  const valueItem = inputItem.value;
  if (inputItem.value === "" || inputItem.value === " ") {
      document.getElementById('alert-item').style.visibility = "visible";
  } else if (valueItem) {
    addTask(valueItem);
    document.getElementById('alert-item').style.visibility = "hidden";
  }

});

const input = document.getElementById('iteminput');
input.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    event.preventDefault();
    submitItem.click();
  }
})
//remove one item
newItem.addEventListener("dblclick", (event) => {
newItem.parentNode.removeChild(newItem);

})

}
//remove all items
const clearButton = document.getElementById('clearsubmit')
const fullList = document.getElementById('shop-list')
clearButton.addEventListener('click', () => {
  sessionStorage.clear();
  while (fullList.firstChild) {
    fullList.removeChild(fullList.firstChild);
  }
})
