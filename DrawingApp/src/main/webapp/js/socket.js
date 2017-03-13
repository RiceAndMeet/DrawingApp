/**
 * 
 */

var stompClient = null;
var model=null;


function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);

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
            if (obj.shape="rectangle"){
            	shape = new Rectangle(obj.x,obj.y,obj.width,obj.height,obj.color,obj.lineWidth,false);
            	if (model !=null && shape.x != model.x && shape.y != model.y){
            		shapes.push(model);
            	}
            	model=shape;// for comparison purpose 
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
    stompClient.send("/app/hello", {}, JSON.stringify(shape)); 

}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
});