class Dustbin {
    constructor(x, y, height,angle ) {
        var options = {
            isStatic:true
        }
        this.body =  Matter.Bodies.rectangle(x, y, height, angle,  options);
        this.width = 20;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
    
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        strokeWeight(4)
        stroke("red")
        rect(0, 0, this.width, this.height);
        pop();
      }
    }
