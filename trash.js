class Trash {
    constructor(x,y,width,height){
        var options ={
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);

        this.image = loadImage("Images/trash.png");
    }

    display(){
        this.box1.image = ("Images/trash.png");
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        image(this.image,0, 0, this.width, this.height);
        pop();
    }
}