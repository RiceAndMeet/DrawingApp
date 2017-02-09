/**
 *  change width of the line drawn 
 */
var setLen = function (newLen){
	if (newLen < minLen)
		newLen = minLen;
	else if (newLen > maxLen)
		newLen = maxLen;
	lineLength = newLen;
	
	lenSpan.innerHTML = lineLength;
}

var minLen= 0.5,
	maxLen= 100,
	lenSpan = document.getElementById("lenval"),
	interval = 5;
	dLen = document.getElementById("dlen"),
	iLen = document.getElementById("ilen");

dLen.addEventListener('click',function(){
	setLen(lineLength-interval);
});

iLen.addEventListener('click',function(){
	setLen(lineLength+interval);
});