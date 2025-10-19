function changeText() {
  document.getElementById("text").innerText = "The text has been changed!";
}

function changeColor() {
  document.getElementById("box").style.backgroundColor = "lightblue";
}
function changeFont() {
  document.getElementById("box").style.fontSize = "17px";
}
function addItem() {
  let li = document.createElement("li");
  li.textContent = "New Item";
  document.getElementById("list").appendChild(li);
}

function removeItem() {
  let list = document.getElementById("list");
  list.lastElementChild?.remove();
}