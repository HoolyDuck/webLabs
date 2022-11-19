let dateOfBirth = document.getElementById("dateOfBirth");
let calendar = document.getElementById("calendar");

calendar.addEventListener("input", calcDay);

let days = [
    "Sunday", "Monday", "Tuesday",
    "Wednesday", "Thurday", "Friday", "Saturday"
]

function calcDay() {
    let yearMonthDay = calendar
        .value
        .split("-")
        .map(time => parseInt(time));
    console.log(yearMonthDay)
    let a = Math.floor((14 - yearMonthDay[1]) / 12);
    let y = yearMonthDay[0] - a;
    let m = yearMonthDay[1] + 12 * a - 2;
    dateOfBirth.innerHTML = days[
    (yearMonthDay[2]
        + y + Math.floor(y / 4) - Math.floor(y / 100)
        + Math.floor(y / 400) + Math.floor((31 * m) / 12))
    % 7];
}


