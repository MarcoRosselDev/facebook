/*
<input type="text" class="input" />
    <button class="add-button">add</button>
    <button class="delete-button">delete</button>
    <button class="clean-button">clean all</button>
    <!-- modifiqued dom -->
    <div class="div-dom"></div>

*/

const input = document.querySelector("input");
const buttonAdd = document.querySelector(".add-button");
const buttonDelete = document.querySelector(".delete-button");
const buttonClean = document.querySelector(".clean-button");
const divDom = document.querySelector(".div-dom");
let inputValue = [];

let isLocalHost = [];

buttonAdd.addEventListener("click", function () {
  inputValue.push(input.value);
  input.value = "";
  printDom(inputValue);
});

const printDom = (arr) => {
  let printInner = "";
  for (let i = 0; i < arr.length; i++) {
    printInner += `<li>${arr[i]}</li>`;
  }
  divDom.innerHTML = printInner;
};

/*
  inputValue = input.value;
  for (let i = 0; i < inputValue.length; i++) {
    inputValue.push() = `<li>${inputValue[i]}</li>`;
  }

  divDom.innerHTML = inputValue;
*/
