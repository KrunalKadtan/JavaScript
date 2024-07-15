

let myLead = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLead"))

if(leadsFromLocalStorage) {
    myLead = leadsFromLocalStorage
    render(myLead)
}

tabBtn.addEventListener("click", function() {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLead.push(tabs[0].url)
        localStorage.setItem("myLead", JSON.stringify(myLead))
        render(myLead)
    })
})

function render(leads) {
    let listItem = ""

    for (let i=0; i<leads.length; i++) {
        //listItem += "<li> <a target='_blank' href='" + leads[i] + "'>" + leads[i] + "</a> </li>"
        listItem += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }

    ulEl.innerHTML = listItem
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLead = []
    render(myLead)
})

// function saveLead() { } 
//Both are true
inputBtn.addEventListener("click", function() {
    myLead.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLead", JSON.stringify(myLead))
    render(myLead)
})

