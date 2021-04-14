class Ball {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':5.0,
          'density':1.0,
      }
      this.body = Bodies.circle(x, y,radius,options);
     this.radius=radius;
      this.Image=loadImage("paper.png");
            World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      image(this.Image,0,0, this.radius,this.radius);
      pop();
    }
  };
  