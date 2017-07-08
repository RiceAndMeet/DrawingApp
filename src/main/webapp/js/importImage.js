/*
 * Import images using file input and draw it on canvas
 */

var selectedFile = document.getElementById('imageInput');
var image,resize=false;
/*
 *  not supported for older browsers 
 */
selectedFile.onchange = function(event){
	var files = selectedFile.files;
	if(FileReader && files && files.length){
		var fr = new FileReader();
		fr.onload = function(){
			image = new CanvasImage(100,100,300,200,fr.result);
			repaint();
		}
		fr.readAsDataURL(files[0]);
		
	}
	else{
		alert('This verison of brower do not support File API');
	}
}


