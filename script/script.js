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

  tdTagNumber.textContent += 1;
  tdTagUserName.textContent = inputUserName.value;
  tdTagApiKey.textContent = inputApiKey.value;
  tdTagApiSecret.textContent = inputApiSecret.value;

  trTag.appendChild(tdTagNumber);
  trTag.appendChild(tdTagUserName);
  trTag.appendChild(tdTagApiKey);
  trTag.appendChild(tdTagApiSecret);
  bodyTable.appendChild(trTag);
};

document
  .querySelector(".form__api-fields")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    formData();
  });
