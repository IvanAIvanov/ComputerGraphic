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
(lib.HsvToRgbandtohex = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var H = 230;
		var S = 80;
		var V = 80;
		
		function HSVtoRGB(h, s, v) {
		    var r, g, b;
		    var i;
		    var f, p, q, t;
		    s /= 100;
		    v /= 100;
		    h /= 60; 
		    i = Math.floor(h);
		    f = h - i; 
		    p = v * (1 - s);
		    q = v * (1 - s * f);
		    t = v * (1 - s * (1 - f));
		    switch(i) {
		        case 0:
		            r = v;
		            g = t;
		            b = p;
		            break;
		        case 1:
		            r = q;
		            g = v;
		            b = p;
		            break;
		        case 2:
		            r = p;
		            g = v;
		            b = t;
		            break;
		        case 3:
		            r = p;
		            g = q;
		            b = v;
		            break;
		        case 4:
		            r = t;
		            g = p;
		            b = v;
		            break;
		        default: // case 5:
		            r = v;
		            g = p;
		            b = q;
		    }
		    return {
		        r: Math.round(r * 255),
		        g: Math.round(g * 255),
		        b: Math.round(b * 255)
		    };
		}
		
		
		var RGB = HSVtoRGB(H,S,V);
		
		var R = RGB.r;
		var G = RGB.g;
		var B = RGB.b;
		alert (R);
		alert (G);
		alert (B);
		
		
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