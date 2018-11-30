 var button = document.getElementById("button").value
 var counter = []



/*function move(x) {
var libro = document.getElementById("hola").value
if(x.keyCode == 13){
 arcobaleno = String.fromCharCode(10)
 saya = libro.split('p')
}
}
document.onkeydown = move 
*/


/*var arcobaleno = String.fromCharCode(10)
var duo 
var libro = document.getElementById("hola").value
for(duo; duo == 'hola' ; duo ){
	alert('stil in')
	function move(x){
if(x.keyCode == 13){
break
}
}
document.onkeydown = move 

}
alert('out')
*/


function lol(){
	function chill(){
var libro = document.getElementById("hola").value
var yes = libro.split(' ')
var arcobaleno = String.fromCharCode(10)

var saya = libro.split(arcobaleno)
var helios = saya.filter(random =>{
	return random == ''
})
var passed = yes.filter(espacio => {
	return  espacio  == ''
})
alert(saya)
if( yes == ','){
alert('you have 0 words')
}
else if(yes[0] == ''){ // if there is a space in the beggining this runs
yes= yes.length - passed.length + saya.length - helios.length - 1
alert("The length of this text is " + yes + ' words')
}else{ // if there is no space in the beggining, this runs
yes = yes.length - passed.length + saya.length - helios.length - 1
alert("The length of this text is " + yes  + ' words')
}
}
chill()
}



//write the enter key inside a loop, if another key that is not an enter key is
//pressed, then you get out of the loop, but, only one enter is going to be validaded



//The code below this, is code from before that is not used aymore. It iskeept around in case I need to use it again.

/*function whatever(){
var libro = document.getElementById("hola").value		
counter.push(libro)
counter.shift()
counter.push(libro)
	}
*/
 


