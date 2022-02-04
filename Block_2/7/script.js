// String concatenation

let name = prompt("Your name: ");
let age = parseInt(prompt("Your age: "));
let height = parseFloat(prompt("Your height"));
let civilStatus = prompt("Your civil status married/single: ");

if (civilStatus == 'married') {
    alert(name + ' ' + ' ' + age + ' ' + height + ' ' + civilStatus)
} else {
    alert(
        name + "\n" +
        age + "\n" +
        height + "\n" +
        civilStatus
    )
}