/**
 * Rectangle, circle and line shape constructor and its painting methods 
 */

//constructor for rectangle 
function Rectangle(x,y,width,height,color,lineWidth,eraseOn){
	 this.x=x;
	 this.y=y;
	 this.height=height;
	 this.width=width;
	 this.color=color;
	 this.lineWidth=lineWidth;
	 this.shape = "rectangle";
	 this.paint = function (context){
		 context.lineWidth= this.lineWidth;
		 if (eraseOn){
			 context.fillStyle = "#F0F0F0";
			 context.fillRect(this.x,this.y,this.width,this.height);
			 context.strokeStyle = "black";
			 context.strokeRect(this.x,this.y,this.width,this.height);
		 }
		 else{
			 context.strokeStyle = this.color;
			 context.strokeRect(this.x,this.y,this.width,this.height);
		 } 
	 }
}

//constructor for circle
function Circle (x,y,r,color,lineWidth,brushOn){
	this.x=x;
	this.y=y;
	this.r=r;
	this.color=color;
	this.lineWidth=lineWidth;
	this.shape = "circle";
	this.paint=function (context){
		context.lineWidth = this.lineWidth;
	    if (brushOn){
	    	this.shape ="brush";
	    	context.beginPath();
	    	context.arc(x, y, r, 0, 2 * Math.PI, false);
	    	//context.closePath();
	    	context.fillStyle = this.color;
	    	context.fill();    	
	    }else{
	    	context.beginPath();
		    context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
		    //context.closePath();
	    	context.strokeStyle = this.color;
	    	context.stroke();
	    } 
	}
	this.contains = function (x1,y1){
		return Math.abs(x1-this.x) <= this.r*2 && Math.abs(y1-this.y) <= this.r *2;
	}
}

//constructor for line 
function Line (point1,point2,lineWidth,color,shape){
	this.point1=point1;
	this.point2=point2;
	this.lineWidth=lineWidth;
	this.color=color;
	this.shape=shape;
	this.paint=function(context){
		point1.paint(context);
		point2.paint(context);
		context.lineWidth = this.lineWidth;
		context.beginPath();
	    context.moveTo(this.point1.x, this.point1.y);
	    context.lineTo(this.point2.x, this.point2.y);
	    context.strokeStyle= this.color;
	    context.stroke();
	}
}

//constructor for images
function CanvasImage(x,y,width,length,src){
	this.x = x;
	this.y = y;
	this.width=width;
	this.length=length;
	this.src = src;
	this.selectedDot;
	/*c1 --> top left corner
	  c2 --> bottom right corner
	  c5 --> right side 
	*/
	var color = "black";
	this.c1 = new Circle (this.x,this.y,5,color,0,true);
	this.c2 = new Circle (this.x+this.width,this.y+this.length,5,color,0,true);
	this.c5 = new Circle (this.x+this.width,this.y+this.length/2,5,color,0,true);
    var image = new Image();
	image.src = this.src;
	this.paint=function(context){
		var color = "black";
		
		
		var c3 = new Circle (this.x+this.width,this.y,5,color,0,true);
		var c4 = new Circle (this.x,this.y+this.length,5,color,0,true);
		
		var c6 = new Circle (this.x+this.width/2,this.y,5,color,0,true);
		var c7 = new Circle (this.x,this.y+this.length/2,5,color,0,true);
		var c8 = new Circle (this.x+this.width/2,this.y+this.length,5,color,0,true);
		this.c1.paint(context);
		this.c2.paint(context);
		c3.paint(context);
		c4.paint(context);
		this.c5.paint(context);
		c6.paint(context);
		c7.paint(context);
		c8.paint(context);
		context.drawImage(image,x,y,width,length);
	}
	this.contains = function (x1,y1){
		return x1> this.x && x1-this.x <= this.width
			&& y1 > this.y && y1-this.y < this.length; 
	}
}

//painting method
function repaint(){
	ctx.clearRect(0,0,c.width,c.height);
	var count;
	var rec;
	
	if (image != null){
		image.paint(ctx);
	}
	
	for (count=0; count<shapes.length;++count){
		rec=shapes[count];
		if (rec != null){
			rec.paint(ctx);}
	}
	
	if (selector != null){
		selector.paint(ctx);}

}