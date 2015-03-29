// JavaScript Document

define( function( require, exports, module ) {
	
	function init( contact ){
		
		setTimeout( function(){
			timeMove( contact, { top:410, opacity:100 }, 2000 );
		},1900);
		
	}
	
	exports.init = init;
});