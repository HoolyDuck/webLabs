let images = [
    "images/red.png",
    "images/yellow.png",
    "images/white.svg",
    "images/black.webp"
]

let shownImage = document.getElementById("shownImage");


let buttons = []
for (let i = 1; i <= 4; i++) {
    buttons[i - 1] = document.getElementById("image" + i.toString())
    buttons[i - 1].addEventListener("click",
        function (){
            shownImage.src = images[i- 1];
        }
    )
}


