const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

// const tabs = [
//     {url: "https://www.linkedin.com/in/janusanb/"}
// ]

/*
localStorage.setItem("myLeads", "www.j.com")
console.log(localStorage.getItem("myLeads"))
localStorage.clear()
*/

let myLeads = [] //"www.a.com", "www.b.com", "www.c.com"]

/*
let myLeads = `["www.j.com"]`
myLeads = JSON.parse(myLeads)
myLeads.push("www.k.com")
myLeads = JSON.stringify(myLeads)
console.log(typeof myLeads)
*/

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// const container = document.getElementById("container")

// container.innerHTML = "<button onclick="buy()">BUY!</button>"

/* function buy() {
    container.innerHTML += "<p>Thank you for buying!</p>"
}*/


function render(leads) {
    let listItems = ""
    for (let i = 0; i< leads.length; i++) {
        // listItems += `<li><a href='` + myLeads[i] + `' target="_blank">` + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a href='${leads[i]}' target='_blank'>
                    ${leads[i]}
                </a>
            </li>
        `
        // this creates an li element
        // set text content
        // append to ul
        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", () => {
     console.log("Button clicked through Event Listener")
     let inputText = inputEl.value
     inputEl.value = ""
     myLeads.push(inputText)
     localStorage.setItem("myLeads", JSON.stringify(myLeads))
     render(myLeads)
     console.log(localStorage.getItem("myLeads"))
})

deleteBtn.addEventListener("dblclick", () => {
    console.log("Delete Button double clicked through Event Listener")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

tabBtn.addEventListener("click", () => {
    console.log("Delete Button double clicked through Event Listener")
    // console.log(tabs[0].url)
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        let activeTab = tabs[0]
        let activeTabID = activeTab.id
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})