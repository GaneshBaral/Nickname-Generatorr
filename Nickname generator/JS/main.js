// Nickname Generator

// Assign global variables
let firstnameEl = document.getElementById("firstname");
let lastnameEl = document.getElementById("lastname");
let nicknameEl = document.getElementById("nickname");
let randnickbtnEl = document.getElementById("randnick");
let allnickbtnEl = document.getElementById("allnick");

// Array that stores all nicknames
let nickname = ['"Crusher"', '"the scientist"', '"Twinkle-toes"', '"the Coder"', '"the Jester"', '"the sloth"', '"Quick-Silver"']

// Event listeners

randnickbtnEl.addEventListener("click", randomNickname);
allnickbtnEl.addEventListener("click", allNicknames);

// Define functions

function randomNickname() {
    nicknameEl.innerHTML = firstnameEl.value + " " + nickname[randomInt(0, 7)] + " " + lastnameEl.value;
}

function allNicknames() {
    let divStr = " ";
    for (let i = 0; i < nickname.length; i++) {
        divStr += firstnameEl.value + " " + nickname[i] + " " + lastnameEl.value + "<br>";
    }
    nicknameEl.innerHTML = divStr;
}



