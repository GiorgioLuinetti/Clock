var h;
var m;
var s;
var endH;
var endM;
var endS;

function setup() {
	createCanvas(600, 600);
}

function draw() {
	background(50);
	translate(300, 300);
	noFill();
	strokeWeight(5);
	rotate(- HALF_PI);

	h = hour();
	endH = map(h, 0, 24, 0, TWO_PI);

	m = minute();
	endM = map(m, 0, 60, 0, TWO_PI);

	s = second();
	endS = map(s, 0, 60, 0, TWO_PI);

	drawH(endH);
	drawM(endM);
	drawS(endS);
	drawClock(h, m ,s);
}

function drawH(h){
	stroke(255, 0, 0);
	arc(0, 0, 400, 400, 0, h);
}

function drawM(m){
	stroke(0, 255, 0);
	arc(0, 0, 380, 380, 0, m);
}

function drawS(s){
	stroke(0, 0, 255);
	arc(0, 0, 360, 360, 0, s);
}

function drawClock(h, m, s){
	strokeWeight(1);
	stroke(255, 0 ,0);
	textSize(50);
	textAlign(CENTER, CENTER);
	rotate(HALF_PI);

	fill(255, 0, 0);
	text('' + h, 0, 0);

}
