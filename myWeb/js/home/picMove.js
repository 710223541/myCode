// JavaScript Document

define( function( require, exports, module ) {
	
	function init( aImg, oSpan ){
		
		for( var i=0; i<aImg.length - 1; i++ ){
			aImg[i].left = aImg[i].offsetLeft;
		}
		oSpan.style.zIndex = parseInt( getStyle( aImg[3], 'zIndex' ) ) + 1;
		oSpan.middleX = oSpan.offsetWidth / 2 + getPos( oSpan ).left;
		oSpan.iMax = parseInt( oSpan.style.zIndex );
		oSpan.off = true;
		
		oSpan.onmouseover = move1;
		oSpan.onmousemove = move2;
		
		function move1( ev ){
			oSpan.off = false;
			oSpan.onmousemove = null;
			var ev = ev || event;
			var nowX = ev.clientX - this.middleX;
			for( var i=0; i<aImg.length - 1; i++ ){
				aImg[i].distance1 = nowX / oSpan.iMax * ( oSpan.iMax - parseInt( getStyle( aImg[i], 'zIndex' ) ) ) / 20;
				timeMove( aImg[i], { left:aImg[i].distance1 + aImg[i].left }, 200, function(){
					oSpan.off = true;
					oSpan.onmousemove = move2;
				});
			}
		}
		
		function move2( ev ){
			if( oSpan.off ){
				var ev = ev || event;
				var nowX = ev.clientX - this.middleX;
				for( var i=0; i<aImg.length - 1; i++ ){
					aImg[i].distance2 = nowX / oSpan.iMax * ( oSpan.iMax - parseInt( getStyle( aImg[i], 'zIndex' ) ) ) / 20;
					aImg[i].style.left = aImg[i].distance2 + aImg[i].left + 'px';
				}
			}
		}
	}
	
	exports.init = init;
});