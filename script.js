const checkbox = document.getElementById("divStyle");
const button = document.getElementById("remove");
const textfields = document.querySelectorAll(".textfield");
const box = document.getElementById("box");

//Test om hämtningen funkar
console.log(textfields);

//Loopar igenom textfälten
textfields.forEach((field) => field.addEventListener("click", handleClick));

function handleClick(e) {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   output = "hej";
  console.log(e);
}

//Eventlistener för button
button.addEventListener("click", handleClick);
