class Dustbin {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(600,660,100,10,options);
      this.body1 = Bodies.rectangle(550,640,10,50,options);
      this.body2 = Bodies.rectangle(650,640,10,50,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      World.add(world, this.body1);
      World.add(world, this.body2);
    }
    display(){
      var pos =this.body.position;
      var pos1 =this.body1.position;
      var pos2 =this.body2.position;
    
    
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, 100,10);
      rect(pos1.x, pos1.y, 10,50);
      rect(pos2.x, pos2.y, 10,50);
    }
  };
