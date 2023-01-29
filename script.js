const box = document.querySelector(".container");
const btn = document.querySelector("button");
const palete = document.querySelector(".palete");


function random_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let color = "rgb(" + x + "," + y + "," + z + ")";
    console.log(color);
    box.style.background = color;
    palete.innerHTML = color;
}

btn.addEventListener("click", random_color);
