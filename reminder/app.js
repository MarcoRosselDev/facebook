const input = document.querySelector("input");
const buttonAdd = document.querySelector(".add-button");
const buttonDelete = document.querySelector(".delete-button");
const buttonClean = document.querySelector(".clean-button");
const divDom = document.querySelector(".div-dom");
const areInLocalStorage = JSON.parse(localStorage.getItem("exampleList"));
let inputValue = [];

if (areInLocalStorage) {
  inputValue = areInLocalStorage;
  printDom(inputValue);
}

buttonAdd.addEventListener("click", function () {
  inputValue.push(input.value);
  console.log("holas");
  localStorage.setItem("exampleList", JSON.stringify(inputValue));
  input.value = "";
  printDom(inputValue);
});

function printDom(arr) {
  let printInner = "";
  for (let i = 0; i < arr.length; i++) {
    printInner += `<li>${arr[i]}</li>`;
  }
  divDom.innerHTML = printInner;
}

buttonDelete.addEventListener("click", function () {
  localStorage.clear();
  inputValue = [];
  printDom(inputValue);
});
