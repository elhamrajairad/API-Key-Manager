let inputUserName = document.querySelector("#user-name");
let inputApiKey = document.querySelector("#api-key");
let inputApiSecret = document.querySelector("#api-secret");
let bodyTable = document.querySelector("#tbody");
let tdTagNumber = 1;

const formData = function () {
  let trTag = document.createElement("tr");
  let tdTagNumber = document.createElement("td");
  let tdTagUserName = document.createElement("td");
  let tdTagApiKey = document.createElement("td");
  let tdTagApiSecret = document.createElement("td");
  let deleteBtn = document.createElement("a");
  let editeBtn = document.createElement("a");

  tdTagNumber.textContent += 1;
  tdTagUserName.textContent = inputUserName.value;
  tdTagApiKey.textContent = inputApiKey.value;
  tdTagApiSecret.textContent = inputApiSecret.value;
  deleteBtn.textContent = "Delete";
  editeBtn.textContent = "Edite";

  editeBtn.classList.add("btn");
  editeBtn.classList.add("btnEdite");
  deleteBtn.classList.add("btn");
  deleteBtn.classList.add("btnDelete");

  trTag.appendChild(tdTagNumber);
  trTag.appendChild(tdTagUserName);
  trTag.appendChild(tdTagApiKey);
  trTag.appendChild(tdTagApiSecret);
  trTag.appendChild(editeBtn);
  trTag.appendChild(deleteBtn);
  bodyTable.appendChild(trTag);
};
let formReset = function () {
  inputUserName.value = "";
  inputApiSecret.value = "";
  inputApiKey.value = "";
};
document
  .querySelector(".form__api-fields")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    formData();
    formReset();
  });
