const checkbox = document.getElementById("divStyle", "content");
const button = document.getElementById("remove");
const textfields = document.querySelector(".textfield");
const box = document.getElementById("box");

console.log(box);

button.addEventListener("click", handleClick);

function handleClick(e) {
  const name = e.target.name;
  const value = e.target.value;

  output = "hej";
  console.log(output);
}

handleClick(e);
