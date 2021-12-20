class Paper{
    constructor(x, y, radius) {
        var options = {  
          'restitution':0.3,
            'friction':0.5,
            'density':1.2,
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
       // this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        //push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius);
        //pop();
      }
}