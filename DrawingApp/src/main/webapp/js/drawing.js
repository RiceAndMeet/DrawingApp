/*/
 * Canvas Panel and it's event listener 
 */

//global variables
var initial_x,initial_y;
var selected = "brush";
var dragged;//boolean switch 
var selector;//Object shape, the draggable and moveable shape 
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
	if (selected !="eraser"){
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
			var width= 10;
			var length= 10;
			var lineWidth = 1;
			var erase = new Rectangle (x-width/2, y-length/2, width, length, "white", lineWidth, true);
			shapes.push(erase);
		}
		repaint();
	}
	
});

//event listener for buttons 
document.getElementById("clear").addEventListener("click",function(){
	ctx.clearRect(0,0,c.width,c.height);
	shapes.splice(0,shapes.length);
});
document.getElementById("undo").addEventListener("click",function(){
	shapes.pop();
	repaint();
});
document.getElementById("rectangle").addEventListener("click",function(){
	selected="rectangle";
});
document.getElementById("circle").addEventListener("click",function(){
	selected="circle";
});
document.getElementById("brush").addEventListener("click",function(){
	selected="brush";
});
document.getElementById("line").addEventListener("click",function(){
	selected="line";
});
document.getElementById("eraser").addEventListener("click",function(){
	selected="eraser";
});


