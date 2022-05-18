let form = document.querySelector("#get-api");

function ApiGet(name, key, password) {
  this.name = name;
  this.key = key;
  this.password = password;
}
function UI() {}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let ui = new UI();
  let name = document.querySelector("#api-name").value;
  let key = document.querySelector("#api-key").value;
  let password = document.querySelector("#api-password").value;
  if (name === "" || key === "" || password === "") {
    ui.alertShow("Please Fill All Feild...", "error");
  } else {
    let api = new ApiGet(name, key, password);
    ui.showListApi(api);
    ui.alertShow("Data Added...", "success");
  }
  ui.clearValue();
});

UI.prototype.showListApi = function (api) {
  let list = document.querySelector("#api__container__table__list");
  let row = document.createElement("tr");
  row.innerHTML = `
    <td>${api.name}</td>
   <td> ${api.key}</td>
    <td>${api.password}</td>
    <td><a href='#' class='remove'>Delete</a><a href='#' class='edite'>Edite</a></td>
    `;
  list.appendChild(row);
};

document
  .querySelector(".api__container__table")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // removeItem(e.target);
    let ui = new UI();
    ui.alertShow("Data Delete!", "error");
    ui.removeItem(e.target);
  });

UI.prototype.removeItem = function (li) {
  if (li.className === "remove") {
    li.parentElement.parentElement.remove();
    console.log(li.parentElement.parentElement);
  }
};

UI.prototype.alertShow = function (message, classes) {
  let textAlrt = document.createElement("p");
  textAlrt.className = `alert ${classes}`;
  textAlrt.appendChild(document.createTextNode(message));

  let parentDiv = document.querySelector(".api");
  parentDiv.insertBefore(textAlrt, parentDiv.children[1]);
  setTimeout(() => {
    textAlrt.remove();
  }, 2000);
};

UI.prototype.clearValue = function () {
  document.querySelector("#api-name").value = "";
  document.querySelector("#api-key").value = "";
  document.querySelector("#api-password").value = "";
};
