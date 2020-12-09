class Chain {
    constructor(body1, point2) {
        // this.bodyA = body1;
        // this.bodyB = body2;
        var chain_options = {
            bodyA: body1,
            pointB: point2,
            length: 10,
            stiffness: 0.0000000000001
        }
        this.chain = Matter.Constraint.create(chain_options);
        World.add(world, this.chain);
        this.bodyA = body1;
        this.pointB = point2;
    }
    fly() {
        this.chain.bodyA = null;
    }
    display() {
        if (this.chain.bodyA) {
            push();
            strokeWeight(4);
            stroke("black");
            line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.pointB.x, this.pointB.y);
            pop();
        }
    }
}