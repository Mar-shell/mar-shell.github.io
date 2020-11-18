// Author and mastermind of the code Andrew T: https://www.youtube.com/watch?v=9dtDaWi6R0g&t=1703s

function degToRad(degree)
{
    var factor = Math.PI / 180
    return degree * factor
}

class Clock
{
    constructor(context,x,y, radius, fontSize = 45)
    {
        this.c = context
        this.x = x
        this.y = y
        this.hours = 0
        this.minutes = 0
        this.seconds = 0
        this.milliseconds = 0
        this.radius = radius
        this.fontSize = fontSize
        if (this.fontSize < 25)
        {
            this.fontSize = 25
        }
    }

    getDate()
    {
        var date = new Date()
        this.today = date.toDateString()
        this.time = date.toLocaleTimeString()
        this.hours = date.getHours()
        this.minutes = date.getMinutes()
        this.seconds = date.getSeconds()
        this.milliseconds = date.getMilliseconds()
        this.newSeconds = this.seconds+ (this.milliseconds/1000)
    }

    create()
    {
        this.getDate()
        this.c.lineWidth = 17
        this.c.lineCap = "round"
        // hours
        this.c.beginPath()
        this.c.strokeStyle = "#6eeb34"
        this.c.arc(this.x,this.y,this.radius,degToRad(270),degToRad((this.hours*15)-90))
        this.c.stroke()

        // minutes
        this.c.beginPath()
        this.c.strokeStyle = "#e8eb34"
        this.c.arc(this.x,this.y,this.radius-30,degToRad(270),degToRad((this.minutes*6)-90))
        this.c.stroke()

        // seconds
        this.c.beginPath()
        this.c.strokeStyle = "#eb8334"
        this.c.arc(this.x,this.y,this.radius-60,degToRad(270),degToRad((this.newSeconds*6)-90))
        this.c.stroke()

        // date
        this.c.font = this.fontSize + "px Arial"
        this.c.fillStyle = "white"
        this.c.fillText(this.time,this.x-80,this.y)

        // time
        this.c.font = (this.fontSize-this.fontSize/2)-5 + "px Arial"
        this.c.fillStyle = "white"
        this.c.fillText(this.today,this.x-80,this.y+30)
    }
}
