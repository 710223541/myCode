// JavaScript Document

define( function( require, exports, module ) {
	
	function init( obj, hash, aDiv ){
		
		if( window.off2 ){
			var oTab = obj.querySelector( '.tab' );
			var aLi = oTab.querySelectorAll( 'li' );
			var aBtn = oTab.querySelectorAll( 'span' );
			
			var oEx = obj.querySelector( '.exhibition' );
			var demoList = oEx.querySelector( '.demoList' );
			var pageList = oEx.querySelector( '.listWrap' );
			var oTop = oEx.querySelector( '.top' );
			var oBot = oEx.querySelector( '.bot' );
			
			timeMove( obj, { opacity:0 }, 1500, function(){
				for( var i=0; i<aLi.length; i++ ){
					changeCss( aLi[i], { width:960, height:600, left:0, top:0, opacity:0 } );
					aLi[i].style.zIndex = 1;
				}
				for( var i=0; i<aBtn.length; i++ ){
					changeCss( aBtn[i], { opacity:0 } );
				}
				changeCss( demoList, { opacity:0, height:0 } );
				changeCss( oTop, { opacity:0 } );
				changeCss( oBot, { opacity:0 } );
				demoList.innerHTML = '';
				pageList.innerHTML = '';
				window.onscroll = null;
				
				window.location.hash = hash;
				require( 'show.js' ).init( aDiv );
			});
		}
	}
	
	exports.init = init;
});