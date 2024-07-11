let person = {
    name: "Krunal",
    age: 20,
    country: "India",
}

function logData() {
    console.log(person.name + " is " + person.age + " years old & lives in " + person.country)
}

//logData()

let largeCountries = ["China", "India", "USA", "Russia", "Japan"]

//console.log("The 5 largest countries in the world :")

// for(let i in largeCountries) {
//     console.log("- " + largeCountries[i])
// }

for(let i=0; i<largeCountries.length; i++) {
    //console.log("- " + largeCountries[i])
}

let hand = ["rock", "paper", "scissor"]

function getHand() {
    let num = Math.floor(Math.random() * 3)

    return hand[num]
}

//console.log(getHand())

let fruits = ["apple", "orange", "apple", "apple", "orange"]

let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sortFruit() {
    for (let i in fruits) {
        if(fruits[i] === "apple") {
            appleShelf.textContent += (fruits[i] + " ")
        } else {
            orangeShelf.textContent += (fruits[i] + " ")
        }
    }
}

sortFruit()