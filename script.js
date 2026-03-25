// LOGIN (no validation)
function login() {
  let user = document.getElementById("user").value;

  localStorage.setItem("user", user);

  document.getElementById("output").innerHTML =
    "Logged in as: " + user;
}

// SEARCH (DOM XSS)
function search() {
  let query = document.getElementById("search").value;

  document.getElementById("output").innerHTML =
    "Results for: " + query;
}

// LOAD USER INFO
if (document.getElementById("userInfo")) {
  document.getElementById("userInfo").innerHTML =
    "Current user: " + localStorage.getItem("user");
}

// LOAD API DATA
function loadData() {
  fetch("api/data.json")
    .then(res => res.json())
    .then(data => {
      document.getElementById("data").innerHTML =
        JSON.stringify(data, null, 2);
    });
}

// ADMIN CONFIG (unsafe)
function saveConfig() {
  let config = document.getElementById("config").value;

  document.getElementById("output").innerHTML =
    "Saved: " + config;
}

// DELETE USER (no validation)
function deleteUser() {
  let user = prompt("Enter username");

  document.getElementById("output").innerHTML =
    "Deleted: " + user;
}

// URL PARAM XSS
const params = new URLSearchParams(window.location.search);

params.forEach((value, key) => {
  document.body.innerHTML += `<p>${key}: ${value}</p>`;
});

// HASH XSS
document.body.innerHTML += location.hash;
