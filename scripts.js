
"use strict";
//JSON object
var data = '{"kills": 0 ,"initial":"GO GO GO!!!","warn":"STOP GLITCHIN BRUH!!","size":10}';
//converting passed string to JSON Object. 
var obj = JSON.parse(data);
var myObjects = {};
var myBalloons = {};
var index = 0;
var num = document.getElementById("counter");



//clone function to multiply the balloon.
function repeater () {
  var target = document.getElementById("block");
  var cln = target.cloneNode(true);
  document.getElementById("container").appendChild(cln);
  myObjects[index++] = cln;
}

for (var i = 0; i < obj.size -1 ; i ++) {
    console.log(i);
    repeater();

}
//counter function 
function count() {
	if (obj.kills < 9){
		obj.kills += 1;
		num.innerHTML= obj.kills;
	} else {
  	 	obj.kills = obj.warn;
  	 	obj.warn += "!";
  	 	num.innerHTML= obj.kills;
  	}
}
//start button function ---coming soon ---
function starting (){
	num.innerHTML = obj.initial;
	for (var i = 0; i < obj.size -1 ; i ++) {
   		myObjects[i].className = "move"
   		document.getElementById("block").className = "move";
	}
	
	num.innerHTML = obj.initial;

}