class Player{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y; 
        this.image = loadImage("images/player.jpg")
        this.body = Bodies.circle(this.x, this.y, 50, options)
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        push();
        translate(pos.x, pos.y);
        //ellipseMode(RADIUS);
        //ellipse(0,0, 50, 50)
        
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop();
    }
}