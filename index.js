var stranger = document.querySelector("h5");
var addF = document.querySelector("#Add");

stranger.style.color = "red";
let a = 0;

addF.addEventListener("click", () => {
    if (a == 0) {
        stranger.innerHTML = "Friend";
        stranger.style.color = "green";
        addF.innerHTML = "remove friend";
        console.log("1st");
        a = 1;
    } else {
        stranger.innerHTML = "str";
        stranger.style.color = "red";
        addF.innerHTML = "add friend";
        console.log("2nd");
        a = 0;
    }

})
