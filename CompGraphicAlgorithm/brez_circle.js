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
(lib.brez_circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var stroke_color = "#ff0000";
		var shape =  new createjs.Shape();
		shape.graphics.beginStroke(stroke_color);
		//var r = Math.sqrt(Math.pow((xc-x1),2)+Math.pow((yc-y1),2));
		
		
		function brez_kryg(xc,yc,r) 
		{
		var xs=0;
		var ys=r;
		var sum =3-2*r;
		
		
		    
		while(xs<=ys)
		{
			shape.graphics.drawRect(xs+xc,ys+yc, 1,1);
		    shape.graphics.drawRect(-xs+xc,ys+yc,1,1);
		    shape.graphics.drawRect(xs+xc,-ys+yc,1,1);
		    shape.graphics.drawRect(-xs+xc,-ys+yc,1,1);
		    shape.graphics.drawRect (ys+xc,xs+yc,1,1);
		    shape.graphics.drawRect (-ys+xc,xs+yc,1,1);
		    shape.graphics.drawRect (ys+xc,-xs+yc,1,1);
		    shape.graphics.drawRect (-ys+xc,-xs+yc,1,1);
		    
		
			if(sum<=0)
		    {
		        sum=sum+4*xs+6;
		    }
		    else
		    {
		        sum = sum+4*(xs-ys)+10;
		        ys=ys -1;
		    }
		    xs=xs+1;
		}
		}
		brez_kryg(100,100,50); 
		
		this.addChild(shape);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;