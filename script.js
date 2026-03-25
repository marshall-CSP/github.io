// LOGIN (fake auth)
function login() {
  let user = document.getElementById("user").value;
  localStorage.setItem("user", user);

  document.getElementById("output").innerHTML =
    "Logged in as: " + user;
}

// SEARCH (DOM injection)
function search() {
  let query = document.getElementById("search").value;

  document.getElementById("output").innerHTML =
    "Results for: " + query;
}

// LOAD USER
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
    "Saved config: " + config;
}

// URL param reflection
const params = new URLSearchParams(window.location.search);
if (params.get("q")) {
  document.body.innerHTML += "<p>Param: " + params.get("q") + "</p>";
}
