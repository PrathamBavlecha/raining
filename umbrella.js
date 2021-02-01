class Umbrella {
    constructor(x,y){
     this.body = Bodies.circle(x,y,50,{isStatic:true})
     this.radius = 150
     this.image = loadImage("umbrealla.png")
     World.add(world,this.body)
    }
    display(){
        var pos = this.body.position 
        push ()
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.radius,this.radius)
        pop ()
    }
}