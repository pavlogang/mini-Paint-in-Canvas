var canv = document.getElementById('canvas'),
	ctx = canv.getContext('2d');
	
	let clicked = false;
	let myColor = 'black';
	let widthPen = 0;
	let range = document.getElementById('range');
	let rangeType = document.getElementById('rangeType')
	rangeType.textContent = range.value
	
document.getElementById('color').oninput = function() {
	myColor = this.value;
}

document.getElementById('eraser').onclick = function() {
	ctx.globalCompositeOperation = "destination-out";
	ctx.fillStyle = "rgba(255,255,255,1)";
	eraser.style.boxShadow = "1px 1px black"
	pen.style.boxShadow = ""

}

document.getElementById('pen').onclick = function() {
	ctx.globalCompositeOperation = "source-over";
	pen.style.boxShadow = "1px 1px black"
	eraser.style.boxShadow = ""
}

range.oninput = function() {
	document.getElementById('rangeType').textContent = this.value
	widthPen = this.value;
}

canv.onmousedown = function() {
	clicked = true;
};
canv.onmouseup = function() {
	clicked = false;
	ctx.beginPath();
};
canv.addEventListener("mousemove", function(e) {
	let posX = e.offsetX,
		posY = e.offsetY;

	if (clicked) {
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.stroke()
				
		ctx.fillStyle = myColor;
		ctx.strokeStyle = myColor;
		ctx.beginPath()
		ctx.arc(posX, posY, widthPen, 0, Math.PI * 2);
		ctx.lineWidth = widthPen * 2;
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(e.offsetX, e.offsetY);
	}

});

canv.addEventListener('contextmenu', (event) => {
	event.preventDefault()
	ctx.clearRect(0, 0, canv.width, canv.height)
})

