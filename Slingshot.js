class Slingshot{
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
           
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        
        World.add(world, this.chain);
    }
    fly(){
     this.chain.bodyA = null;
    }
    attach(obj){
     this.chain.bodyA = obj;
    }
    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
        }
    }
    
}



 