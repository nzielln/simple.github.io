
window.addEventListener("load", () => {
  document.getElementById('form-shop').hidden = true;




});

document.getElementById('shop-add').addEventListener("click", () => {
  document.getElementById('form-shop').hidden = false;
  document.getElementById('shop-add').style.visibility = "hidden";


});


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

newItem.addEventListener("dblclick", (event) => {
newItem.parentNode.removeChild(newItem);


})

}
