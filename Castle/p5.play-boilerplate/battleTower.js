class Battle extends  BaseClass {
    constructor(x,y){
        var options = {
            'restitution':0.025,
            'friction':1.0,
            'density':1.0
        }
        super(x,y,200,430);

        this.image = loadImage("sprites/battleTowerx.png");

    }

    display(){
        super.display();
    }
}