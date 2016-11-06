
"use strict";

var data = '{"kills": 0 ,"initial":"GO GO GO!!!","warn":"STOP GLITCHIN BRUH!!"}';

var obj = JSON.parse(data);

var num = document.getElementById("counter");

num.innerHTML = obj.initial;

function repeater () {
  var target = document.getElementById("block");
  var cln = target.cloneNode(true);
  document.getElementById("container").appendChild(cln);
}
 
for (var i = 0; i < 9 ; i ++) {
    console.log(i);
    repeater();

}

function count() {
	if (obj.kills < 9){
		obj.kills+=1;
		num.innerHTML= obj.kills;
	} else {
  	 	obj.kills = obj.warn;
  	 	obj.warn += "!";
  	 	num.innerHTML= obj.kills;
  	}
}

// function starting (){
//  num.innerHTML = obj.initial;
// }