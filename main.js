var canvas = document.querySelector("canvas")
var c = canvas.getContext("2d")

function resizeCanvas()
{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}
resizeCanvas()

addEventListener("resize", resizeCanvas)

function scene()
{
    var clock = new Clock(c,canvas.width/2,canvas.height/2,200)
    c.fillStyle = "#333333"
    c.fillRect(0,0,canvas.width,canvas.height)
    clock.create()
}
setInterval(scene,30)