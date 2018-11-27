 var button = document.getElementById("button").value
 var counter = []
//<img src="universe.png"  style="width:100%">

function move(x) {
if(x.keyCode == 13){
counter.push('hola')	
}
}
document.onkeydown = move 



function lol(){
function chill(){
var libro = document.getElementById("hola").value
var yes = libro.split(' ')
if(yes == ','){
	alert("You have 0 words")
}
else{
var yes = yes.length-1
var yes = yes + counter.length
alert("The length of this text is " + yes + ' words')
}
}
chill()
}


function whatever(){
var libro = document.getElementById("hola").value		
counter.push(libro)
counter.shift()
counter.push(libro)
	}

 


