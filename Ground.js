class Ground{
	constructor(x,y,width,height){
      var options={
      	isStatic:true

      }
      this.object=Bodies.rectangle(x,y,width,height,options)
      this.width=width
      this.height=height
      World.add(world,this.object)
	}
	display(){
		rectMode(CENTER)
		fill("brown")
		rect(this.object.position.x,this.object.position.y,this.width,this.height)
	}
}