// JavaScript Document

define( function( require, exports, module ) {
	
	function init( logo, aSpan, pos ){
		
		timeMove( logo, { left:pos.l + 5, top:pos.t - 15, width: pos.w - 10, height: pos.h - 30 } );
		
		for( var i=0; i<aSpan.length; i++ ){
			aSpan[i].off = true;
		}
		
		logo.index = 80;
		
		setTimeout( function(){
			move( aSpan[0] );
		},0 * logo.index );
		setTimeout( function(){
			move( aSpan[1] );
		},1 * logo.index );
		setTimeout( function(){
			move( aSpan[2] );
		},2 * logo.index );
		setTimeout( function(){
			move( aSpan[3] );
		},3 * logo.index );
		setTimeout( function(){
			move( aSpan[4] );
		},4 * logo.index );
		setTimeout( function(){
			move( aSpan[5] );
		},5 * logo.index );
		setTimeout( function(){
			move( aSpan[6] );
		},6 * logo.index );
		
		function move( obj ){
			timeMove( obj, { top : obj.top - 30 }, 300, 'linear', function(){
				timeMove( obj, { top : obj.top }, 300, 'linear', function(){
					if( obj.off ){
						move( obj );
					}else{
						return;
					}
				});
			});
		}
	}
	
	exports.init = init;
});