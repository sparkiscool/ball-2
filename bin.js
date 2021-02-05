class bin{
    constructor(x,y,width,height){
        var options =  {
            'isStatic':true
        }
        this.bodyb = Bodies.rectangle(x,y,width,height,options)
        this.height = height
        this.width = width
        World.add(world,this.bodyb)}
        display(){
            var pos = this.bodyb.position
            rectMode(CENTER)
            rect(pos.x,pos.y,this.width,this.height)
        }}