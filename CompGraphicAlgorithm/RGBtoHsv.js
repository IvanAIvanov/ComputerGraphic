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
(lib.RGBtoHsv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var R_inp= 20;
		var G_inp= 30;
		var B_inp= 50;
		
		var r = R_inp/255;
		var g = G_inp/255;
		var b = B_inp/255;
		
		var Cmax;
		if((r>g) && (r>b))
		{
			Cmax = r;
		}
		else if ((g>r) && (g>b))
		{
			Cmax = g;
		}
		else if ((b>r) && (b>g))
		{
			Cmax = b;
		}
		
		var Cmin;
		if((r<g) && (r<b))
		{
			Cmin = r;
		}
		else if ((g<r) && (g<b))
		{
			Cmin = g;
		}
		else if ((b<r) && (b<g))
		{
			Cmin = b;
		}
		
		var dlt= Cmax-Cmin;
		var H;
		if (dlt==0)
		{
			H=0;
		}
		else
		{
			if(Cmax==r)
			{
				H=60*(((g-b)/dlt)%6)
			}
			if(Cmax==g)
			{
				H=60*(((b-r)/dlt)+2)
			}
			if(Cmax==b)
			{
				H=60*(((r-g)/dlt)+4)
			}
		}
		
		var S;
		if(Cmax==0)
		{
			S=0;
		}
		else
		{
			S=dlt/Cmax;
		}
		
		var V = Cmax;
		
		alert(H);
		alert(S);
		alert(V);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;