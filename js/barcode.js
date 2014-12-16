var canvas = document.getElementById('canvas');

canvas.width = 800;
canvas.height = 500;
canvas.centre = canvas.width / 2;

var ctx = canvas.getContext('2d');

var img = new Image();
img.src = 'img/cardboard.jpg';
ctx.drawImage(img,0,0);

var barCode = {
	width:400,
	height:200,
	x:100,
	y:50
	
};
function makeBars(minWidth,maxWidth){
	
	//var barCodeWidth = 400; // width of the barcode
	//var barCodeHeight = 200; // height of the barcode
	//var x = 100; // x position of the bar code
	//var y = 50;	 // y position of the bar code
	var newX = barCode.x;
	var total = 0;
	
	ctx.rect(barCode.x,barCode.y,barCode.width,barCode.height);
	ctx.fillStyle = '#FFF';
	ctx.fillRect(barCode.x,barCode.y,barCode.width,barCode.height);
	ctx.clip();
	
	while(total < barCode.width)
	{
		var randomWidth = Math.round(Math.random() * maxWidth);
		if(randomWidth < minWidth){
			randomWidth = minWidth;
		}
		ctx.fillStyle = '#000';
		ctx.fillRect(newX,barCode.y,randomWidth,barCode.height);
		
		var spaceWidth = Math.round(Math.random() * maxWidth);
		if(spaceWidth < minWidth){
			spaceWidth = minWidth;
		}
		
		newX += randomWidth + spaceWidth;
		total += randomWidth + spaceWidth;
	}
	
	ctx.lineWidth = 10;
	ctx.strokeStyle = '#FFF';
	ctx.strokeRect(barCode.x + (ctx.lineWidth / 2),barCode.y + (ctx.lineWidth / 2),barCode.width - ctx.lineWidth,barCode.height - ctx.lineWidth);
}


makeBars(2,12);