let countEl = document.getElementById("count-el")
let welcomeBackMessageEl = document.getElementById("welcome-back-message-el")
let previousCountsEl = document.getElementById("previous-counts-el")
let myName = "User!"
let greeting = "Welcome back, "
welcomeBackMessageEl.innerText = greeting + myName
// let saveEl = document.getElementById("")
let peopleCount = 0
let peopleCountArray = []

function increment() {
    console.log("increment button clicled");
    peopleCount++;
    console.log(peopleCount)
    countEl.innerText = peopleCount

}

function save() {
    console.log("save button clicked")
    peopleCountArray.push(peopleCount)
    let peopleCountStr = peopleCount + " - "
    previousCountsEl.textContent += peopleCountStr
    previousCountsEl.innerText = "Previous counts were: " + `${peopleCountArray.reverse()}`
    peopleCount = 0
    countEl.innerText = peopleCount

    console.log(peopleCount)
}



