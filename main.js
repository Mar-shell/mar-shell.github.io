var canvas = document.querySelector("canvas")
var c = canvas.getContext("2d")
var radius = 0,
    sizeFont = 0

function resizeCanvas()
{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    if (window.innerWidth < 400)
    {
        radius = 150
        sizeFont = 35
    }
    else
    {
        radius = 200
        sizeFont = 45
    }
}
resizeCanvas()

addEventListener("resize", resizeCanvas)

function scene()
{
    var clock = new Clock(c,canvas.width/2,canvas.height/2,radius, fontSize)
    c.fillStyle = "#333333"
    c.fillRect(0,0,canvas.width,canvas.height)
    clock.create()
}
setInterval(scene,30)
