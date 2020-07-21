let canvasWidth = 700
let canvasHeight = 900
let radius = 50

var canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = canvasWidth
canvas.height = canvasHeight

const img = new Image()
let clippingRegion = {x: 400, y: 200, r: 50}
img.src="image.jpg"
img.onload = function(e) {
    initCanvas()
}

function initCanvas() {
    clippingRegion = {x: Math.random()*(canvas.width-2*radius)+radius, y: Math.random()*(canvas.height-2*radius)+radius, r: radius}
    draw(img, clippingRegion)
}

function setClippingRegion(clippingRegion) {
    ctx.beginPath();
    ctx.arc(clippingRegion.x, clippingRegion.y, clippingRegion.r, 0, 2*Math.PI, false)
    ctx.clip()
}

function draw(img, clippingRegion) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.save()
    setClippingRegion( clippingRegion )
    ctx.drawImage(img, 0, 0)
    ctx.restore()
}

function reset() {

    initCanvas()
}

function show() {
    // clippingRegion.r = 1000
    // draw(img, clippingRegion)
    let time = setInterval(
        function() {
            clippingRegion.r += 20
            if (clippingRegion.r > 2*Math.max(canvas.width, canvas.height)) {
                clearInterval(time)
            }
            draw(img, clippingRegion)
        },
        30
    )
}


