// JavaScript Document

define( function( require, exports, module ) {
	
	function init( logo, aSpan1, aSpan2 ){
		
		var pos = {};
		pos.t = logo.offsetTop;
		pos.l = logo.offsetLeft;
		pos.w = logo.offsetWidth;
		pos.h = logo.offsetHeight;
		
		
		for( var i=0; i<aSpan1.length; i++ ){
			aSpan1[i].top = aSpan1[i].offsetTop;
		}
		logo.onmouseenter = function(){
			require( 'head/logoMoveIn.js' ).init( logo, aSpan1, pos );
		};
		
		logo.onmouseleave = function(){
			require( 'head/logoMoveOut.js' ).init( logo, aSpan1, pos );
		};
		
		
		require( 'head/logoEyes.js' ).init( aSpan2 );
		
	}
	
	exports.init = init;
});