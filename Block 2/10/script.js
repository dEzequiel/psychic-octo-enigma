// Accesing dictinary values by key from prompt

var note = parseInt(prompt("Mark: "))

var notes = {
    1: "not enough",
    2: "not enough",
    3: "not enough",
    4: "not enough",
    5: "enough",
    6: "enough",
    7: "high",
    8: "high",
    9: "high",
    10: "excellent"
}

alert(notes[note])     