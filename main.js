var canvas = document.querySelector("canvas")
var c = canvas.getContext("2d")
var radius = 200,
    fontSize = 45

function resizeCanvas()
{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    if (window.innerWidth < 400)
    {
        radius = 150
        fontSize = 35
    }
    else
    {
        radius = 200
        fontSize = 45
    }

}
resizeCanvas()

addEventListener("resize", resizeCanvas)

function scene()
{
    var clock = new Clock(c,canvas.width/2,canvas.height/2,radius,fontSize)
    c.fillStyle = "#333333"
    c.fillRect(0,0,canvas.width,canvas.height)
    clock.create()
}
setInterval(scene,30)