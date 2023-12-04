//Hämtar element
const checkbox = document.getElementById("divStyle");
const button = document.getElementById("remove");
const textfields = document.querySelectorAll(".textfield"); //querySelectorAll skapar en nodelist
const output = document.getElementById("output");
//console.log(output);

//Test om hämtningen funkar
console.log(textfields);

//Loopar igenom textfälten och kollar om man lämnar de (blur)
textfields.forEach((field) => field.addEventListener("blur", handleBlur));

//Eventlistener för checkbox på click
checkbox.addEventListener("click", handleClick);

// Handle click, Lägger till vad man skriver i fälten Färg och Innehåll i den tomma diven (output)
function handleClick(e) {
  console.log("handleclick", e);
  const colorField = settings.color;
  const contentField = settings.content;
  console.log(colorField, contentField);
  output.style.backgroundColor = colorField.value;
  const html = `<p>${contentField.value}</p>`;
  output.innerHTML = html;
}

// när man lämnar textfälten
function handleBlur(e) {
  const name = e.target.name;
  const value = e.target.value;
  console.log("handleBlur", e);
}

//Anonym funktion som tar bort div-element
const remove = function (e) {
  e.preventDefault();
  output.remove();
};

//Eventlistener för knappen
button.addEventListener("click", remove);
