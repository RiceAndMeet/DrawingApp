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
}

//constructor for line 
function Line (point1,point2,width,color){
	this.point1=point1;
	this.point2=point2;
	this.width=width;
	this.color=color;
	
	this.paint=function(context){
		point1.paint(context);
		point2.paint(context);
		context.lineWidth = this.width;
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
    var image = new Image();
	image.src = this.src;
	this.paint=function(context){
		context.drawImage(image,x,y,width,length);
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