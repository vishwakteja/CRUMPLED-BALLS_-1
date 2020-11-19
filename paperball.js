class Paper {
    constructor(x, y,radius) {
        var options = {
            restitution:0.2,
            friction:0.3,
            density:1.2
            
            
        }
        this.body =  Bodies.circle(x, y, radius/2,  options);
        this.radius=radius/2;
        
        World.add(world, this.body);
       
 
      }
      display(){
        var pos =this.body.position;
    
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("pink");
        strokeWeight(4)
        stroke("pink")
          pop();
      }
    }