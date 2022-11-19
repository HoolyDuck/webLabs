let element = document.getElementById("num-field");
let maskOptions = {
    mask: '+{38}(000)-000-00-00'
};
let mask = IMask(element, maskOptions)

let cnt = 0

emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function validate(element, errorElement, regex) {
    element.addEventListener("input", function () {
        if (!regex.test(element.value)) {
            element.style.border = "3px solid red";
            errorElement.style.display = "block";
        } else {
            element.style.border = "none";
            errorElement.style.display = "none"
        }
    })
}


let email = document.getElementById("login-field")
let errorEmail = document.getElementById("error-login")
validate(
    email,
    errorEmail,
    emailRegex
)


let number = document.getElementById("num-field")
let errorNumber = document.getElementById("error-num")
validate(
    number,
    errorNumber,
    /^(\+38)([(]0\d{2}[)])-(\d{3})-(\d{2})-(\d{2})/
)

let password = document.getElementById("password-field")
let errorPassword = document.getElementById("error-password")
validate(
    password,
    errorPassword,
    /^(.{6,})/
)

let name = document.getElementById("name-field")
let errorName = document.getElementById("error-name")
validate(
    name,
    errorName,
    /^(\w)/
)

let surname = document.getElementById("surname-field")
let errorSurname = document.getElementById("error-surname")
validate(
    surname,
    errorSurname,
    /^(\w)/
)

let date = document.getElementById("date-field")
let errorDate = document.getElementById("error-date")
function validateDate(element, errorElement) {

    element.addEventListener("input", function () {
        let inputDate = new Date(element.value);
        let today = new Date()

        if (today < inputDate) {
            element.style.border = "3px solid red";
            errorElement.style.display = "block";
        } else {
            element.style.border = "none";
            errorElement.style.display = "none"
        }

    })
}
validateDate(date, errorDate)


let button = document.getElementById("register-button")
let table = document.getElementById("reg-table")
button.onclick = function () {
    let surnameVal = document.getElementById("surname-field").value;
    let nameVal = document.getElementById("name-field").value;
    let sexVal = document.querySelector('input[name="radio-sex"]:checked').value;
    let numberVal = document.getElementById("num-field").value;
    let emailVal = document.getElementById("login-field").value;
    let dateOfBirthVal = document.getElementById("date-field").value;
    let groupVal = document.getElementById("group-select").value;

    let passVal = document.getElementById("password-field").value;

    if (!/(\w)/.test(surnameVal) ||
        !/(\w)/.test(nameVal) ||
        !sexVal ||
        !/^(\+38)([(]0\d{2}[)])-(\d{3})-(\d{2})-(\d{2})/.test(numberVal) ||
        !emailRegex.test(emailVal) ||
        !/^(.{6,})/.test(passVal) ||
        (new Date() < dateOfBirthVal)
    ) {
        alert("Check your data");
        return;
    }

    cnt += 1
    let row = table.insertRow(-1);
    row.id = "tr" + cnt;
    let checkbox = row.insertCell(0)
    let surname = row.insertCell(1)
    let name = row.insertCell(2)
    let sex = row.insertCell(3)
    let email = row.insertCell(4)
    let number = row.insertCell(5)
    let dateOfBirth = row.insertCell(6)
    let group = row.insertCell(7)

    let checkboxElem = document.createElement("input");
    checkboxElem.type = "checkbox";
    checkboxElem.id = cnt;

    checkbox.appendChild(checkboxElem)
    surname.innerHTML = surnameVal
    name.innerHTML = nameVal;
    sex.innerHTML = sexVal;
    email.innerHTML = emailVal;
    number.innerHTML = numberVal;
    dateOfBirth.innerHTML = dateOfBirthVal;
    group.innerHTML = groupVal;
}

let button2 = document.getElementById("delete-button")
button2.onclick = function () {
    let checkRows = document.querySelectorAll('input[type=checkbox]:checked')
    Array.from(checkRows).forEach(function (check) {
        let toRemove = check.id;
        document.getElementById("tr" + toRemove).remove()
    })
}

let button3 = document.getElementById("duplicate-button")
button3.onclick = function () {
    let checkRows = document.querySelectorAll('input[type=checkbox]:checked')
    Array.from(checkRows).forEach(function (check) {
        let toDuplicate = check.id;
        cnt += 1
        let duplicate = document.getElementById("tr" + toDuplicate).cloneNode(true)
        duplicate.id = "tr" + cnt;
        duplicate.firstChild.firstChild.checked = false
        duplicate.firstChild.firstChild.id = cnt
        table.appendChild(duplicate)
    })
}

