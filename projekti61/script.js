//canvas
const canvas = document.getElementById("canvas");

const cntx = canvas.getContext("2d");

//drawing values
let size = 10;

let isPressed = false;

let color = "black";

let x;

let y;

//canvas UI
const clear = document.getElementById("clear");

const increaseButton = document.getElementById("increase");

const decreaseButton = document.getElementById("decrease");

const sizeButton = document.getElementById("size");

const colorButton = document.getElementById("color");

//________________________________________________________________________//

colorButton.addEventListener("change", (e) => color = e.target.value)

increaseButton.addEventListener("click", () => {

    size += 5;

    if(size > 50) {

        size = 50;

    }

    updateSizeOnScreen()
})

decreaseButton.addEventListener("click", () => {

    size += -5;

    if(size < 5) {

        size = 5;

    }

    updateSizeOnScreen()
})

clear.addEventListener("click", () => cntx.clearRect(0, 0, canvas.width, canvas.height))


//__________________________________________________________________________________________//
// F U N C T I O N A L I T Y

function updateSizeOnScreen() {

    sizeButton.innerText = size;

}


canvas.addEventListener("mousedown", (e) => {

    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;

})

canvas.addEventListener("mouseup", (e) => {

    isPressed = false;

    x = undefined;
    y = undefined;

})

canvas.addEventListener("mousemove", (e) => {

    if(isPressed) {

        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;

    }

})

function drawCircle(x, y) {

    cntx.beginPath();
    cntx.arc(x, y, size, 0, Math.PI * 2)
    cntx.fillStyle = color;
    cntx.fill();

}

function drawLine(x1, y1, x2, y2) {

    cntx.beginPath();
    cntx.moveTo(x1, y1);
    cntx.lineTo(x2, y2);
    cntx.strokeStyle = color;
    cntx.lineWidth = size * 2;
    cntx.stroke();

}