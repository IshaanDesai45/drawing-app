var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

var isDrawing = false ;
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

 var radius = 50;
 var min_radius =10;
 var max_radius =100;
 var increasing =true;
var i = 0;
// var colors =["red","blue"];
// var colors =["red","blue"];
 // var colors =["#0008FF","#8000FF","#FF007B","#FFE600","#FF0059","#FFB700"]
var hue =1;
//  var color = `hsl(${hue},100%,50%)`;

// window.setInterval(update_color,10);
// window.setInterval(update_radius,20);
function update_color(){
	hue++;
	// console.log(color);

}
var mouse ={
	x:null,
	y:null
}
window.addEventListener("click",()=>{
	// c.clearRect(0,0,canvas.width,canvas.height);
	c.beginPath();
});

window.addEventListener("mousedown",function(event){

	isDrawing = true;
	// c.beginPath();
	// c.fillStyle ="black";
	// c.arc(event.x,event.y,50,0,Math.PI*2);
	// c.fill();
});

window.addEventListener("mousemove",function(event){
	
	if(isDrawing === true)
	{
	// var gradient = c.createRadialGradient(event.x,event.y,0,event.x,event.y,50);
	// gradient.addColorStop(0, 'white');           
	// gradient.addColorStop(1, 'black');	
	c.beginPath();
	c.globalCompositeOperation= "lighter";
	c.fillStyle = `hsl(${hue},100%,50%)`;
	c.lineWidth = 5;
	c.arc(event.x,event.y,radius,0,Math.PI*2);
	c.fill();
	c.stokeStyle ="black";
	c.stroke();
	update_color();
	update_radius();

	}
	
	// console.log(i);
});

window.addEventListener("mouseup",function(){
	isDrawing = false;
});

function update_radius (){
	if(increasing === true && radius<max_radius)
	{
		radius+= 1;
	}
	else 
	{
		increasing = false;
	}
	if(increasing === false && radius>min_radius)
	{
		radius-= 1;
	}
	else
	{
		increasing = true;
	}
}