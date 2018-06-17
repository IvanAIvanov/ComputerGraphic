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
(lib.rotationanglealfawitbrez = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var shape = new createjs.Shape();
		shape.graphics.beginFill("#ff0000");
		var a=10*(Math.PI/180);
			var x0=10;
			var y0=20;
			var x1=100;
			var y1=40;
			
			var x3 = (x0 * Math.cos(a)) - ( y0 * Math.sin(a));
			var y3 = (x0 * Math.sin(a)) + (y0 * Math.cos(a));
			var x4 = (x1 * Math.cos(a)) - (y1 * Math.sin(a));
			var y4 = (x1 * Math.sin(a)) + (y1 * Math.cos(a));
			
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
		
				for(var i=x0; i<=x1; i++)
				{
					shape.graphics.drawRect(i,y2,1,1);
					
					error = error+delerr;
					if(error >= 0.5)
					{
						y2=y2+1;
						
						error=error-1.0;
					}
					
				}
		}
		
		brez_cherta(x0,x1,y0,y1);
		brez_cherta(x3,x4,y3,y4);
		
		this.addChild(shape);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;