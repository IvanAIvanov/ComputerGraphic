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
(lib.rotation2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var shape = new createjs.Shape();
		shape.graphics.beginFill("#ff0000");
		
		function brez_cherta(x0,x1,y0,y1)
		{
			var delx;
			delx=x1-x0; 
			var dely;
			dely=y1-y0;
			var error=0;
			var delerr ;
			delerr= Math.abs(dely/delx);
			var y2=y0;
				for(var i=x0; i>=x1; i--)
				{ 
					shape.graphics.drawRect(i,y2,2,2);
					
					
					
					error = error+delerr;
					if(error >= 0.5)
					{
						y2=y2-1;
						error=error-1.0;
					}
				}
				
			
				}
		
		brez_cherta(100,10,120,30);
		
		this.addChild(shape);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;