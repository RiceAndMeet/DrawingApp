/**
 * 
 */

var stompClient = null,
	model=null;


function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    model=null;

}

function connect() {
    var socket = new SockJS('/my-websocket');
    stompClient = Stomp.over(socket);
    var shape;
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        //recieve data from server through socket 
        stompClient.subscribe('/info/greetings', function (greeting) {
            var obj =JSON.parse(greeting.body); 
            if (obj.content=="circle"){
            	shape = new Circle(obj.x,obj.y,obj.r,obj.color,obj.lineWidth,false);
            	if (model !=null && shape.x != model.x && shape.y != model.y){
            		shapes.push(model);
            	}
            	model=shape;// for comparison purpose 
            }
            else if (obj.content=="rectangle" ){
            	shape = new Rectangle(obj.x,obj.y,obj.width,obj.height,obj.color,obj.lineWidth,false);
            	if (model !=null && shape.x != model.x && shape.y != model.y){
            		shapes.push(model);
            	}
            	model=shape;// for comparison purpose 
            }
            
            else if (obj.content == "brush"){
            	var circle1= new Circle(obj.point1.x,obj.point1.y,obj.point1.r,obj.point1.color,obj.point1.lineWidth,true);
            	var circle2= new Circle(obj.point2.x,obj.point2.y,obj.point2.r,obj.point2.color,obj.point2.lineWidth,true);
            	shape = new Line(circle1,circle2,obj.lineWidth,obj.color,"brush");
            	shapes.push(shape);
            }
            else if (obj.content =="line"){
            	var circle1= new Circle(obj.point1.x,obj.point1.y,obj.point1.r,obj.point1.color,obj.point1.lineWidth,true);
            	var circle2= new Circle(obj.point2.x,obj.point2.y,obj.point2.r,obj.point2.color,obj.point2.lineWidth,true);
            	shape = new Line(circle1,circle2,obj.lineWidth,obj.color,"line");
            	console.log(model);
            	if (model !=null && model.point1 != null && circle1.x != model.point1.x 
            		&& circle1.y != model.point1.y){
            		shapes.push(model);
            	}
            	model=shape;
            }
            
            selector= shape;
            repaint();   
        });
        
    });
}

function draw(obj){
	
}

function disconnect() {
    if (stompClient != null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function send(shape) {
	if (shape.shape=="brush" || shape.shape=="rectangle" || 
		shape.shape =="circle" || shape.shape =="line")
		stompClient.send("/app/rectangle", {}, JSON.stringify(shape)); 
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
});