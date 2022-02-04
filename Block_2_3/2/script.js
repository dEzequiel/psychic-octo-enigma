// Get prompts inside a loop, add to array, get the max number inside an array
function printInConsole() {
    
    numbers = []
    for (let i = 0; i < 3; i++) {
        var value = parseInt(prompt("Number: "))
        numbers.push(value)
    }

    maxNumber = Math.max.apply(Math, numbers)
    console.log(maxNumber)
}