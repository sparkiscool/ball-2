class paper{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:0.5
        }
       

        this.body=Bodies.circle(x,y,(radius-20)/2,options)
        this.image = loadImage("paper.png")
        this.radius=radius;
        World.add(world,this.body)
    }
    display(){
        fill("yellow")
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
}



