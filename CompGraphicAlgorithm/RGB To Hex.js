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
(lib.rgbtohex = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function componentToHex(c) {
		    var hex = c.toString(16);
		    return hex.length == 1 ? "0" + hex : hex;
		}
		
		function rgbToHex(r, g, b) {
		    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
		}
		
		var rect_col = rgbToHex(R, G, B);
		
		var shape = new createjs.Shape();
		shape.graphics.beginFill(rect_col);
		shape.graphics.drawRect(5,5,100,100);
		this.addChild(shape);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;