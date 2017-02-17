/**
 * 
 */
var saveButton = document.getElementById('save');

saveButton.addEventListener('click',function(){
	var data=c.toDataURL();
	var request = new XMLHttpRequest();
	
	request.onreadystatechange=function (){
		if (request.readyState == 4 && request.status == 200){
			//where the image is stored in server 
			var fileLocation = request.responseText;
			document.getElementById("download").src = 
				"ImageDisplay?filepath="+fileLocation;
			
		}
	}
	//change url when deploy into a different server 
	request.open('POST', 'greeting',true);
	request.setRequestHeader ('Content-type', 'application/x-www-form-urlencoded'); 
	request.send("img="+data);
	 
});
