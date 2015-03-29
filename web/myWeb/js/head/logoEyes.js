// JavaScript Document

define( function( require, exports, module ) {
	
	function init( aSpan ){
		var r = 8;
		var T1 = aSpan[0].offsetTop + aSpan[0].offsetHeight / 2;
		var L1 = aSpan[0].offsetLeft + aSpan[0].offsetWidth / 2;
		var T2 = aSpan[1].offsetTop + aSpan[1].offsetHeight / 2;
		var L2 = aSpan[1].offsetLeft + aSpan[1].offsetWidth / 2;
		
		document.onmousemove  = function(ev){
			var ev = ev || event;
			
			move( aSpan[0], ev.clientX, ev.clientY, T1, L1 );
			move( aSpan[1], ev.clientX, ev.clientY, T2, L2 );
		}
		
		function move( obj, x, y, t, l ){
			var changeX = 0;
			var changeY = 0;
			
			var pos = getPos( obj );
			
			var a =  x - pos.left;
			var b =  y - pos.top;
			
			changeX = Math.sin( Math.atan2(a, b) ) * r; 
			changeY = Math.cos( Math.atan2(a, b) ) * r;
			
			obj.style.left = changeX + l + 'px';
			obj.style.top = changeY + t + 'px';
		}
	}
	
	exports.init = init;
});