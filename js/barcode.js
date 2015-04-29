var canvas = document.getElementById('canvas');

canvas.width = 400;
canvas.height = 200;

var ctx = canvas.getContext('2d');



var barCode = {
	width:400,
	height:200,
	x:0,
	y:0,
	min:2,
	max:12,
	centre:function(){
		return this.x + (this.width/2);
	}
};

var newX = barCode.x;
var total = 0;

ctx.rect(barCode.x,barCode.y,barCode.width,barCode.height);
ctx.fillStyle = '#FFF';
ctx.fillRect(barCode.x,barCode.y,barCode.width,barCode.height);

while(total < barCode.width)
{
	var randomWidth = Math.round(Math.random() * barCode.max);
	if(randomWidth < barCode.min){
		randomWidth = barCode.min;
	}
	ctx.fillStyle = '#000';
	ctx.fillRect(newX,barCode.y,randomWidth,barCode.height);
	
	var spaceWidth = Math.round(Math.random() * barCode.max);
	if(spaceWidth < barCode.min){
		spaceWidth = barCode.min;
	}
	
	newX += randomWidth + spaceWidth;
	total += randomWidth + spaceWidth;
}

ctx.lineWidth = 10;
ctx.strokeStyle = '#FFF';
ctx.strokeRect(barCode.x + (ctx.lineWidth / 2),barCode.y + (ctx.lineWidth / 2), barCode.width - ctx.lineWidth,barCode.height - ctx.lineWidth);

ctx.lineWidth = 1;
ctx.strokeStyle = '#000';
ctx.strokeRect(.5,.5,barCode.width-1,barCode.height-1);

	

	

