// JavaScript Document

define( function( require, exports, module ) {
	
	function init( aDiv, aLi, aLi2 ){
		
		for( var i=0; i<aLi.length; i++ ){
			aLi[i].onclick = navClick;
			aLi2[i].onclick = navClick;
		}
		
		function navClick(){
			/*点击更改控制页面刷新变量*/
			window.off = false;
			
			var hash = this.getAttribute( 'hash' );
			var nowHash = window.location.hash.substring(1) || 'home';
			
			if( nowHash == hash ) return;
			
			switch( nowHash ){
				case 'home':
					require( 'home/homeLeave.js' ).init( aDiv[0], hash, aDiv );
				break;
				
				case 'demo':
					require( 'demo/demoLeave.js' ).init( aDiv[1], hash, aDiv );
				break;
				
				case 'about':
					require( 'about/aboutLeave.js' ).init( aDiv[2], hash, aDiv );
				break;
			}
		}
	}
	
	exports.init = init;
});