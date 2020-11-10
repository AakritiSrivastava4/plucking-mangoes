class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1= loadImage("sprites/sling1.png")
        this.sling2= loadImage("sprites/sling2.png")
        this.sling3= loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push ();
            if (pointA.x<200){
                strokeWeight(9);
            }
            else {
                strokeWeight(5);
            }
           
            
            stroke ("#593822");
            line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
            line (pointA.x-25, pointA.y, pointB.x+20, pointB.y);
            pop ();
            image(this.sling3,pointA.x-25,pointA.y,10,20)
        }
        image(this.sling1,200,80,30,140);
        image(this.sling2,180,70,30,100);
     
    }
    
}