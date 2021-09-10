// let username = sessionStorage.getItem("name");
let userpoints = sessionStorage.getItem("point");
let usertime = sessionStorage.getItem("time");
// document.querySelector("span.name").innerHTML = username;
document.querySelector("span.points").innerHTML = userpoints;
document.querySelector("span.time_taken").innerHTML = usertime;