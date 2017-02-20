/*
 * Import images using file input and draw it on canvas
 */

var selectedFile = document.getElementById('imageInput');

/*
 *  not supported for older browsers 
 */
selectedFile.onchange = function(event){
	var files = selectedFile.files;
	if(FileReader && files && files.length){
		var fr = new FileReader();
		fr.onload = function(){
			shapes.push(new CanvasImage(0,50,fr.result));
			console.log(shapes)
			repaint();
		}
		fr.readAsDataURL(files[0]);
		
	}
	else{
		alert('This verison of brower do not support File API');
	}
}


