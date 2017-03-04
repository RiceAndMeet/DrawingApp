/**
 * 
 */
var saveButton = document.getElementById('save');

saveButton.addEventListener('click',function(){
	var data=c.toDataURL();
	var request = new XMLHttpRequest();
	
	request.onreadystatechange=function (){
		if (request.readyState == 4 && request.status == 200){
			var json = JSON.parse(request.response);
			var imageLocation= json.imageLocation;
			document.getElementById("download").src = 
			"ImageDisplay?filepath="+imageLocation;
			
			console.log(json);
			
		}
	}
	//change url when deploy into a different server 
	request.open('POST', 'greeting',true);
	request.setRequestHeader ('Content-type', 'application/x-www-form-urlencoded'); 
	request.send("img="+data);
	 
});
