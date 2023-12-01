const checkbox = document.getElementById("divStyle");
const button = document.getElementById("remove");
const textfields = document.querySelectorAll(".textfield");
const output = document.getElementById("output");
console.log(output);

//Test om hämtningen funkar
console.log(textfields);

//Loopar igenom textfälten
textfields.forEach((field) => field.addEventListener("blur", handleBlur));

//Eventlistener för button
button.addEventListener("click", handleClick);

function handleClick(e) {
  console.log("handleclick", e);
  //   console.log(e);
}

function handleBlur(e) {
  const name = e.target.name;
  const value = e.target.value;
  const html = `<p>Namn ${name}, Value ${value}</p>`;
  output.insertAdjacentHTML("afterend", html);

  //   console.log(e);
}
