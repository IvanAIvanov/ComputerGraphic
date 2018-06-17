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
(lib.Shablon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var shape = new createjs.Shape();
		shape.graphics.beginFill("#ff0000");
		
		
		function shablon(x0, x1, y0, y1)
		{
			var br=0;
			
			for(var i = x0; i<=x1; i++)
			{
				if(br!=6) {shape.graphics.drawRect(i,y0,2,2);
					br++;}
				else { i=i+2; br=0;}
			}
		}
		shablon(10,100,20,20);
		
		shape.graphics.endStroke();
		
		this.addChild(shape);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;