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

buttonAdd.addEventListener("click", function () {
  let printDom = "";
  inputValue.push(input.value);
  console.log(inputValue);
  for (let i = 0; i < inputValue.length; i++) {
    printDom += `<li>${inputValue[i]}</li>`;
  }
  divDom.innerHTML = printDom;
});

/*
  inputValue = input.value;
  for (let i = 0; i < inputValue.length; i++) {
    inputValue.push() = `<li>${inputValue[i]}</li>`;
  }

  divDom.innerHTML = inputValue;
*/
