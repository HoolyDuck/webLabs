let ukrainianField = document.getElementById("ukrainian")
let transliteratedField = document.getElementById("transliterated")

let letterMapping = {
    //ukr: latin
    "А": "A",
    "Б": "B",
    "В": "V",
    "Г": "H",
    "Ґ": "G",
    "Д": "D",
    "Е": "E",
    "Є": "Ye",
    "Ж": "Zh",
    "З": "Z",
    "И": "Y",
    "І": "I",
    "Ї": "Yi",
    "Й": "Y",
    "К": "K",
    "Л": "L",
    "М": "M",
    "Н": "N",
    "О": "O",
    "П": "P",
    "Р": "R",
    "С": "S",
    "Т": "T",
    "У": "U",
    "Ф": "F",
    "Х": "Kh",
    "Ц": "Ts",
    "Ч": "Ch",
    "Ш": "Sh",
    "Щ": "Shch",
    "Ь": "'",
    "Ю": "Yu",
    "Я": "Ya"
}

ukrainianField.addEventListener("input", transliteration)

function transliteration() {
    console.log(ukrainianField.value)
    transliteratedField.value = ukrainianField.value.split('')
        .map(function (char) {
            if (char.toLowerCase() === char
                && letterMapping[char.toUpperCase()] !== undefined)
                return (letterMapping[char.toUpperCase()].toLowerCase());
            else return letterMapping[char] || char
        }).join("");
}