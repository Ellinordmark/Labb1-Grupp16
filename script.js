const checkbox = document.getElementById("divStyle");
const button = document.getElementById("remove");
const textfields = document.querySelectorAll(".textfield");
const output = document.getElementById("output");
console.log(output);

//Test om hämtningen funkar
console.log(textfields);

//Loopar igenom textfälten och kollar om man lämnar de (blur)
textfields.forEach((field) => field.addEventListener("blur", handleBlur));

//Eventlistener för button på click
button.addEventListener("click", handleClick);

// Handle click
function handleClick(e) {
  console.log("handleclick", e);
  //   console.log(e);
}

// Lägger till vad man skriver i fälten Färg och Innehåll i den tomma diven (output) när man lämnar textfälten
function handleBlur(e) {
  const name = e.target.name;
  const value = e.target.value;
  const html = `<p>Namn ${name}, Value ${value}</p>`;
  output.insertAdjacentHTML("afterend", html);
}
