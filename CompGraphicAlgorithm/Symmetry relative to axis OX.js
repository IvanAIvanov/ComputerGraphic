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
(lib.SimetriasprqmoOX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var stroke_color = "#ff0000";
		var stroke_color1 = "#1B0909";
		var stroke_color2 = "#26CA88";
		var shape =  new createjs.Shape();
		shape.graphics.beginStroke(stroke_color);
		shape.graphics.moveTo(400, 200);
		shape.graphics.lineTo(10,200);
		shape.graphics.beginStroke(stroke_color);
		shape.graphics.moveTo(200, 400);
		shape.graphics.lineTo(200,10);
		
		shape.graphics.beginStroke(stroke_color1);
		shape.graphics.moveTo(300, 150);
		shape.graphics.lineTo(200,150);
		
		shape.graphics.beginStroke(stroke_color2);
		shape.graphics.moveTo(200,250);
		shape.graphics.lineTo(300,250);
		
		shape.graphics.endStroke();
		this.addChild(shape);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;