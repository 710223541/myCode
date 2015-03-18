// JavaScript Document

define( function( require, exports, module ) {
	
	function init( aDiv, num ){		
		var hash = window.location.hash.substring(1) || 'home';
		
		for( var i=0; i<aDiv.length; i++ ){
			
			aDiv[i].style.display = 'none';
			
			var dataHash = aDiv[i].getAttribute( 'hash' );
			
			if( dataHash == hash ){
				
				aDiv[i].style.display = 'block';
				
				switch( dataHash ){
					case 'home':
						require( 'home/homeMain.js' ).init( aDiv[0] );
					break;
					
					case 'demo':
						require( 'demo/demoMain.js' ).init( aDiv[1] );
					break;
					
					case 'about':
						require( 'about/aboutMain.js' ).init( aDiv[2] );
					break;
				}
				
			}
		}
		
		
	}
	
	exports.init = init;
});