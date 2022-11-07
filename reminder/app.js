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

buttonAdd.addEventListener("click", function () {
  console.log("clicked add button");
});
