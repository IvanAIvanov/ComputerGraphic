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
(lib.Centralnasimetria = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*lineto() API
		*/
		var stroke_color = "#ff0000";
		var stroke_color1 = "#1B0909";
		
		var shape =  new createjs.Shape();
		
		shape.graphics.beginStroke(stroke_color);
		shape.graphics.moveTo(400, 200);
		shape.graphics.lineTo(10,200);
		shape.graphics.beginStroke(stroke_color);
		shape.graphics.moveTo(200, 400);
		shape.graphics.lineTo(200,10);
		
		shape.graphics.beginStroke(stroke_color1);
		shape.graphics.moveTo(200, 200);
		shape.graphics.lineTo(250,100);
		
		shape.graphics.beginStroke(stroke_color1);
		shape.graphics.moveTo(150, 300);
		shape.graphics.lineTo(200,200);
		
		shape.graphics.endStroke();
		this.addChild(shape);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;