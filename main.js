let mainElement = document.querySelector("#main")
let graphElement = document.querySelector("#graph")
let resultElement = document.querySelector("#result")

let rockButton = document.createElement("button")
rockButton.append("Rock")
mainElement.append(rockButton)
let paperButton = document.createElement("button")
paperButton.append("Paper")
mainElement.append(paperButton)
let scissorsButton = document.createElement("button")
scissorsButton.append("Scissors")
mainElement.append(scissorsButton)

rockButton.addEventListener('click', playGame)
paperButton.addEventListener('click', playGame)
scissorsButton.addEventListener('click', playGame)

let choices = ["Rock", "Paper", "Scissors"]
let results = [0, 0, 0]

function getComputerChoice(){
    let choiceIndex = Math.floor(Math.random() * 3)
    results[choiceIndex] += 1
    return choices[choiceIndex]
}

function playGame (event) {
    let playerChoice = event.target.innerText
    let computerChoice = getComputerChoice()
    resultElement.innerHTML = ""
    if (playerChoice === computerChoice){
        resultElement.append("It's a draw.")
    }
    if (playerChoice === "Rock" && computerChoice === "Paper") {
        resultElement.append("Paper covers Rock. You lose.")
    }
    if (playerChoice === "Rock" && computerChoice === "Scissors") {
        resultElement.append("Rock breaks Scissors. You win.")
    }
    if (playerChoice === "Paper" && computerChoice === "Rock") {
        resultElement.append("Paper covers Rock. You win.")
    }
    if (playerChoice === "Paper" && computerChoice === "Scissors") {
        resultElement.append("Scissors cuts Paper. You Lose.")
    }
    if (playerChoice === "Scissors" && computerChoice === "Rock") {
        resultElement.append("Rock breaks Scissors. You Lose.")
    }
    if (playerChoice === "Scissors" && computerChoice === "Paper") {
        resultElement.append("Scissors cuts Paper. You Win.")
    }
    displayResults()
}

function displayResults(){
    graphElement.innerHTML = ""
    for (let index = 0; index < results.length; index += 1){
        let currentResult = results[index]
        let newDiv = document.createElement('div')
        newDiv.append(`The computer has chosen ${choices[index]} ${currentResult} times.`)
        newDiv.classList.add("resultBox")
        graphElement.append(newDiv)
    }
}