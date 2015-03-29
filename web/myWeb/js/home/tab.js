// JavaScript Document

define( function( require, exports, module ) {
	
	function init( tab ){
		
		setTimeout( function(){
			timeMove( tab, { top:410, opacity:100 }, 2000 );
		},1400);
		
		var aImg = tab.querySelectorAll( 'img' );
		var aSpan = tab.querySelectorAll( 'span' );
		
		require( 'home/tabEvent.js' ).init( tab, aImg, aSpan );
		
	}
	
	exports.init = init;
});