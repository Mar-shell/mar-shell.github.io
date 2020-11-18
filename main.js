var canvas = document.querySelector("canvas")
var c = canvas.getContext("2d")
var radius = 200

function resizeCanvas()
{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    if (canvas.width > 400)
    {
        radius = 170
    }
}
resizeCanvas()

addEventListener("resize", resizeCanvas)

function scene()
{
    var clock = new Clock(c,canvas.width/2,canvas.height/2,radius)
    c.fillStyle = "#333333"
    c.fillRect(0,0,canvas.width,canvas.height)
    clock.create()
}
setInterval(scene,30)
