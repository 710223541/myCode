// JavaScript Document

define( function( require, exports, module ) {
	
	function init( aLi ){
		
		setTimeout( function(){
			move( aLi[0] );
		},700);
		setTimeout( function(){
			move( aLi[1] );
		},900);
		setTimeout( function(){
			move( aLi[2] );
		},1100);
		
		function move( obj ){
			timeMove( obj, { top:-20, opacity:100 }, 1000, 'backOut', function(){
			});
		}
		
		for( var i=0; i<aLi.length; i++ ){
			aLi[i].onmouseover = function(){
				timeMove( this, {top:-10} );
			};
			aLi[i].onmouseout = function(){
				timeMove( this, {top:-20} );
			};
		}
	}
	
	exports.init = init;
});