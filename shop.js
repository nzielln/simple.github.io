
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

//remove one item
newItem.addEventListener("dblclick", (event) => {
  newItem.parentNode.removeChild(newItem);
  
  })
}

//global variables -scattered around but these are the main ones
const form = document.getElementById('form-shop');
const submitItem = document.getElementById('itemsubmit');

let itemArr = sessionStorage.getItem('items') ? JSON.parse(sessionStorage.getItem('items')) : [];
sessionStorage.setItem('items', JSON.stringify(itemArr));
const itemData = JSON.parse(sessionStorage.getItem('items'));

submitItem.addEventListener("click", () => {
  const inputItem = document.getElementById('iteminput');
  const valueItem = inputItem.value;
  if (inputItem.value === "" || inputItem.value === " ") {
      document.getElementById('alert-item').style.visibility = "visible";
  } else if (valueItem) {

    //add to storage data
    itemArr.push(valueItem);
    sessionStorage.setItem('items', JSON.stringify(itemArr));
    //add to list
    addTask(valueItem);
    document.getElementById('alert-item').style.visibility = "hidden";
  }

});
//trigger 'CLICK' event on 'ENTER'
const input = document.getElementById('iteminput');
input.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    event.preventDefault();
    submitItem.click();
  }
})


itemData.forEach(item => {
  addTask(item);

})

//remove all items
const clearButton = document.getElementById('clearsubmit')
const fullList = document.getElementById('shop-list')
clearButton.addEventListener('click', () => {
  sessionStorage.clear();
  while (fullList.firstChild) {
    fullList.removeChild(fullList.firstChild);
  }
  form.reset();
})
