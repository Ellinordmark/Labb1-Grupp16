//Hämtar element
const checkbox = document.getElementById("divStyle");
const button = document.getElementById("remove");
const textfields = document.querySelectorAll(".textfield"); //querySelectorAll skapar en nodelist
const output = document.getElementById("output");

//Test om hämtningen funkar
console.log(textfields);

// Handle change, Lägger till vad man skriver i fälten Färg och Innehåll i den tomma diven (output)
function handleChange(e) {
  console.log("handlechange", e);
  const colorField = settings.color;
  const contentField = settings.content;
  console.log(colorField, contentField);
  output.style.backgroundColor = colorField.value;
  const html = `<p>${contentField.value}</p>`;
  output.innerHTML = html;
}

// funktion som beskriver target när man lämnar textfälten
function handleBlur(e) {
  console.log("handleBlur", e);
}

//Anonym funktion som tar bort div-element
const remove = function (e) {
  e.preventDefault();
  output.remove();
};

//Loopar igenom textfälten och kollar om man lämnar de (blur - eventlistener)
textfields.forEach((field) => field.addEventListener("blur", handleBlur));

//Eventlistener för checkbox på change
checkbox.addEventListener("change", handleChange);

//Eventlistener för knappen (click)
button.addEventListener("click", remove);
