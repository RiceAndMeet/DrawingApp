/*/
 * Canvas Panel and it's event listener 
 */

//global variables
var initial_x,initial_y;
var selected = "brush";
var dragged;//boolean switch 
var selector; //Object shape, the draggable and moveable shape 
var shapes =new Array(); // storage for all shapes  
var lineLength=10; // integer value for line width of drawing
var shapeColor; 


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;

//add mouse listeners 
c.addEventListener("mousedown",function(event){
	initial_x= event.offsetX;
	initial_y= event.offsetY;
	dragged=true;
	
});

c.addEventListener("mouseup",function(event){
	dragged=false;
	if (selected !="eraser" && selected !="image"){
		shapes.push(selector);
		selector=null;
	}
	
	repaint();

});

c.addEventListener("mouseleave",function(event){
	if (selected == "eraser"){
		selector = shapes.pop();
		repaint();
	}
});

c.addEventListener("mousemove",function(event){
	var x = event.offsetX;
	var y = event.offsetY;
	if (selected == "eraser"){
		var width= 10;
		var length= 10;
		var borderWidth = 1;
		selector = new Rectangle (x-width/2,y-length/2,width,length,"black",borderWidth,false);
		repaint();
	}
	if (dragged){
		if (selected == "rectangle"){
			var color = shapeColor;
			var borderWidth = lineLength;
			selector = new Rectangle (initial_x,initial_y,x-initial_x,y-initial_y,color, borderWidth, false);	
		}
		if (selected == "circle"){	
			var color = shapeColor;
			var borderWidth = lineLength;
			selector = new Circle(initial_x,initial_y,Math.abs(x-initial_x),color,borderWidth,false);			
		}
		if (selected == "brush"){
			var lineWidth = lineLength;
			var radius = lineWidth/2;
			var borderWidth = 0;
			var color = shapeColor;
			var point1 = new Circle (initial_x,initial_y,radius,color,borderWidth,true);
			var point2 = new Circle (x,y,radius,color,borderWidth,true);
			selector = new Line (point1,point2,lineWidth,color);
			shapes.push(selector);
			initial_x = x;
			initial_y = y;   
		}
		if (selected == "line"){
			var lineWidth=lineLength;
			var borderWidth=0;
			var color = shapeColor;
			var radius = lineWidth /2;
			var point1 = new Circle (initial_x,initial_y,radius,color,borderWidth,true);
			var point2 = new Circle(x,y,radius,color,borderWidth,true);
			selector = new Line(point1,point2,lineWidth,color);	
		}
		if (selected =="eraser"){
			var width= 10,
				length= 10;
			var radius= width/2;
			var color = "#F0F0F0";
			var point1 = new Circle (initial_x,initial_y,radius,color,borderWidth,true);
			var point2 = new Circle (x,y,radius,color,borderWidth,true);
			selector=new Rectangle (x-width/2,y-length/2,width,length,"#000000",borderWidth,false);
			shapes.push(new Line (point1,point2,width,color));
			initial_x =x ;
			initial_y =y;
		}
		if (selected == "image"){
			var width = image.width;
			var length = image.length;
			image=new CanvasImage(x-width/2,y-length/2,width,length,image.src);
		}	
			
		repaint();
	}
	
});

//event listener for buttons 
$('#clear').on('click', function (e){
	ctx.clearRect(0,0,c.width,c.height);
	shapes.splice(0,shapes.length);
	image =null;
});
$('#undo').on('click', function (e) {
	shapes.pop();
	repaint();
});
$('#rectangle').on('click', function (e) {
	selected="rectangle";
});
$('#circle').on('click', function (e) {
	selected="circle";
});
$('#brush').on('click', function (e) {
	selected="brush";
});
$('#line').on('click', function (e) {
	selected="line";
});
$('#eraser').on('click', function (e) {
	selected="eraser";
});
$ ('#imageInput').on('click',function (e){
	selected= "image";
})

