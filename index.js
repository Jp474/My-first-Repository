const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let characterSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
let characterNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let characterSymbolsNumber = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/","0","1","2","3","4","5","6","7","8","9"]

let passwordLength = 15
let generateEl = document.getElementById("generate-char")
let buttonOne = document.getElementById("button-One")
let buttonTwo = document.getElementById("button-Two")
let symbolCheck = document.getElementById("Symbols")
let numberCheck = document.getElementById("Numbers")
let populated = false



function returnpasslength() {
    let passLenght = document.getElementById("chose-pass-length")
    return passLenght.value
}


function generateRandomCharacter () {
    if (symbolCheck.checked === true && numberCheck.checked === false) {
        let randomCharacter = Math.floor(Math.random()*characterSymbols.length)
        return characterSymbols[randomCharacter]
    } else if (numberCheck.checked === true && symbolCheck.checked === false) {
        let randomCharacter = Math.floor(Math.random()*characterNumbers.length)
        return characterNumbers[randomCharacter]
    } else if (numberCheck.checked === true && symbolCheck.checked === true) {
        let randomCharacter = Math.floor(Math.random()*characterSymbolsNumber.length)
        return characterSymbolsNumber[randomCharacter]
    } else {
            let randomCharacter = Math.floor(Math.random()*characters.length)
            return characters[randomCharacter]}
    
}

function generateRandomPasswordOne () {
    let randompass = ""
    for (let i = 0; i < returnpasslength(); i++) {
        randompass += generateRandomCharacter()
        buttonOne.textContent = randompass
        populated = true
    }


}

function generateRandomPasswordTwo () {
    let randompass = ""
    for (let i = 0; i < returnpasslength(); i++) {
        randompass += generateRandomCharacter()
        buttonTwo.textContent = randompass
        populated = true
    }

}

function copyOne () {
    if (populated === true) {
        let copyPasswordOne = buttonOne.textContent
        navigator.clipboard.writeText(copyPasswordOne)
        alert("Copied text: " + copyPasswordOne)

    }
    
}

function copyTwo () {
    if (populated === true) {
    let copyPasswordTwo = buttonTwo.textContent
    navigator.clipboard.writeText(copyPasswordTwo)
    alert("Copied text: " + copyPasswordTwo)
    }
}

