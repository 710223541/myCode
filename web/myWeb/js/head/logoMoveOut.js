// JavaScript Document

define( function( require, exports, module ) {
	
	function init( logo, aSpan, pos ){
		
		timeMove( logo, { left : pos.l, top : pos.t, width : pos.w, height : pos.h } );
		
		for( var i=0; i<aSpan.length; i++ ){
			aSpan[i].off= false;
		}
	}
	
	exports.init = init;
});