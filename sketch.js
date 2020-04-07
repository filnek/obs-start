var i=0;
var dog = new doggo(100,400);
var stars = [40];

function preload() {
  img1 = loadImage('1.png');
  img2 = loadImage('2.png');
  img3 = loadImage('3.png');
}


function setup() {
 createCanvas(1280, 720);

  background('rgba(0,0,0, 0.25)');
	for(var i=0;i<50;i++){
		var y=Math.floor(Math.random() * 720); 
		var speed=Math.floor(Math.random() * 10); 
		var size=Math.floor(Math.random() * 13)+2;
		var x = Math.floor(Math.random() * 3000); 
		stars[i]=new star(1280+x,y,size,speed);
	}

}

function draw() {
 
  image(img1,Math.floor(Math.random() * 2)-3,Math.floor(Math.random() * 2)-3);
  //background('rgba(0,0,0, 0.3)');
  for(var i=0;i<50;i++){
	 if(stars[i].x>-100 && stars[i].x<1280)
	stars[i].draw();
	stars[i].update();
  }
  dog.draw();
}


function doggo(xx,yy){
	this.i=0;
	this.x=xx;
	this.y=yy;
	this.draw = function(){
				this.i++;
				if(this.i<30)
				image(img2,this.x+Math.floor(Math.random() * 2),this.y+Math.floor(Math.random() * 2));
				else
				image(img3,this.x+Math.floor(Math.random() * 2),this.y+Math.floor(Math.random() * 2));
			if(this.i>60) this.i=0;
		}
	
}

function star(x,y,sz,speed){
	this.x=x;
	this.y=y;
	this.size=sz;
	this.speed=speed;
	this.positions=[];
	this.draw=function(){
		fill(255);
		noStroke();
		rect(this.x,this.y,this.size+this.speed*3,this.size);
	}
	
	this.update=function(){
		this.x-=this.speed;

		this.speed+=this.size/10;
		if(this.speed>this.size*4)this.speed=this.size*4;
		if(this.x<-100){
			this.x=1270;
			this.speed=Math.floor(Math.random() * 10); 
			this.size=Math.floor(Math.random() * 5)+5; 
			this.y=Math.floor(Math.random() * 720); 
			this.x = Math.floor(Math.random() * 3000); 
		}
	}
}