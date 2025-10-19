

const box = document.getElementById("hoverBox");
box.addEventListener("mouseover", () => box.style.background = "green");
box.addEventListener("mouseout", () => box.style.background = "red");

document.getElementById("inputField").addEventListener("keyup", function() {
  document.getElementById("output").innerText = this.value;
});

function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let pass = document.getElementById("password").value.trim();
  if (!name || !email || !pass) {
    document.getElementById("error").innerText = "All fields are required!";
    return false;
  }
  return true;
}