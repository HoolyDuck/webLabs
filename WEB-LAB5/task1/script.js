let heightField = document.getElementById("height-field");
let widthField = document.getElementById("width-field");

heightField.addEventListener("input", calculations);
widthField.addEventListener("input", calculations);


let values = {
    "perimeter":document.getElementById("perimeter"),
    "area" : document.getElementById("area"),
    "diagonal" : document.getElementById("diagonal")
}

function calculations() {
    let heightNum = parseFloat(heightField.value) || 0;
    let widthNum = parseFloat(widthField.value) || 0;

    if(heightNum < 0 || widthNum < 0) {
        for (let valuesKey in values) {
            values[valuesKey].innerHTML = "Height and width must be not negative";
        }
        return
    }


    perimeter(heightNum, widthNum)
    area(heightNum, widthNum)
    diagonal(heightNum, widthNum)
}

function perimeter(heightNum, widthNum) {
    values["perimeter"]
        .innerText =
        ((heightNum + widthNum) * 2).toString();
}

function area(heightNum, widthNum) {
    values["area"]
        .innerText =
        (heightNum * widthNum).toString()
}

function diagonal(heightNum, widthNum) {
    values["diagonal"]
        .innerText =
        (Math.sqrt(
            heightNum ** 2 +
            widthNum ** 2
        )).toString()
}

