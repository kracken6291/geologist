class Iron{
    constructor(x,y)
	{
		var options={
			'restitution':0.8,
			'friction':3,
			'density':30
		}

		this.x=x;
		this.y=y;
        this.width=150;
        this.height=40;
		this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options);
		World.add(world, this.body);

	}
	display()
	{
			var Ironpos=this.body.position;		
			push();
			translate(Ironpos.x, Ironpos.y);
			strokeWeight(4);
			stroke("black");
			fill("black");
			rectMode(CENTER);
           rect(0,0,this.width,this.height);
			pop();
    }
}