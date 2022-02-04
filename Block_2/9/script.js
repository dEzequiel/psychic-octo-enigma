// Write into HTML from JS
// Accesing arrays values from loop
var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

for (let i = 0; i < month.length; i++) {
    document.write(`<h3>${month[i]}</h3>`)
}