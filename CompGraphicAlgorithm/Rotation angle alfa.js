(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: []
};



lib.ssMetadata = [];


// symbols:



// stage content:
(lib.Rotationanglealfa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var stroke_color = "#ff0000";
		var shape =  new createjs.Shape()
		var x0=400;
		var x1=50;
		var y0=200;
		var y1=50;
		var a=20*(Math.PI/180); //преобразуване на градуси в радиани
			var x3 = (x0 * Math.cos(a)) - ( y0 * Math.sin(a));
		    var y3 = (x0 * Math.sin(a)) + (y0 * Math.cos(a));
			var x4 = (x1 * Math.cos(a)) - (y1 * Math.sin(a));
			var y4 = (x1 * Math.sin(a)) + (y1 * Math.cos(a));
			
		shape.graphics.beginStroke(stroke_color);
		shape.graphics.moveTo(x0, y0);
		shape.graphics.lineTo(x1, y1);
		
		shape.graphics.moveTo(x3, y3);
		shape.graphics.lineTo(x4, y4);
		
		shape.graphics.endStroke();
		
		
		this.addChild(shape);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;