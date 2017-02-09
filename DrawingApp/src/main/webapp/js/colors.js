/**
 * Color Options 
 */

var colors = ['black','gray','red','orange','yellow','green','blue','indigo','violet'];	
//dynamically create color  panels  
for (var i=0, n=colors.length; i<n; ++i){
	var swatch=document.createElement('div');
	swatch.className ="swatch";
	swatch.style.backgroundColor = colors[i];
	swatch.addEventListener('click',setSwatch);
	document.getElementById('colors').appendChild(swatch);
}

function setColor(color){
	shapeColor = color;
	var active = document.getElementsByClassName("active")[0];
	if (active){
		active.className = "swatch";
	}
}

function setSwatch(event){
	//identify swatch 
	var swatch=event.target;
	//set color;
	setColor(swatch.style.backgroundColor);
	//give active status
	swatch.className += " active";
}

//set default active swatch onload;
setSwatch ({target: document.getElementsByClassName("swatch")[0] });

