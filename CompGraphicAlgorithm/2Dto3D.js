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
(lib._2Dto3D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var x1=100;
		var y1=100;
		
		var x2=200;
		var y2=200
		
		
		var stepx=(x2-x1)/10;
		var stepy = (y2-y1)/10;
		
		var stroke_color = "#00FFBF";
		var shape =  new createjs.Shape();
		shape.graphics.beginStroke(stroke_color);
		shape.graphics.moveTo(x1, y1);
		shape.graphics.lineTo(x2, y1);
		shape.graphics.lineTo(x2, y2);
		shape.graphics.lineTo(x1, y2);
		shape.graphics.lineTo(x1, y1);
		
		for (var a=0; a<10; a++)
		
		{
		    shape.graphics.moveTo(x1+a*stepx,y1);
		    shape.graphics.lineTo(x2,y1+(a+1)*stepy);
		    shape.graphics.moveTo(x2,y1+a*stepy);
		    shape.graphics.lineTo(x2-(a+1)*stepx,y2);
		
		    shape.graphics.moveTo(x2-a*stepx,y2);
		    shape.graphics.lineTo(x1,y2-(a+1)*stepy);
		    shape.graphics.moveTo(x1,y2-a*stepy);
		    shape.graphics.lineTo(x1+(a+1)*stepx,y1)
		    
		}
		this.addChild(shape);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;