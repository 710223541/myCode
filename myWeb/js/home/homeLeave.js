// JavaScript Document

define( function( require, exports, module ) {
	
	function init( oDiv, hash, aDiv ){
		
		if( window.off2 ){
			var pic = oDiv.querySelector( '.main_pic' );
			var tab = oDiv.querySelector( '.tab' );
			var contact = oDiv.querySelector( '.contact' );
			var aImg = pic.querySelectorAll( 'img' );
			
			var tab = oDiv.querySelector( '.tab' );
			var aImg1 = tab.querySelectorAll( 'img' );
			
			clearInterval( aImg[6].rotateTimer );
			
			timeMove( pic, { top:-120, opacity:0 }, 1000, function(){
				changeCss( aImg[0], { top:-145, opacity:0 } );
				changeCss( aImg[1], { top:-130, opacity:0 } );
				changeCss( aImg[2], { opacity:0 } );
				changeCss( aImg[3], { opacity:0 } );
				changeCss( aImg[4], { top:0, opacity:0 } );
				changeCss( aImg[5], { top:0, opacity:0 } );
				changeCss( aImg[6], { top:-150, opacity:0 } );
				
				aImg[6].style.webkitTransform = 'rotate(0deg)';
				aImg[6].style.msTransform = 'rotate(0deg)';
				aImg[6].style.mozTransform = 'rotate(0deg)';
				aImg[6].style.Transform = 'rotate(0deg)';
				
				for( var i=0; i<aImg1.length; i++ ){
					changeCss(aImg1[i], {left:aImg1[i].l,top:aImg1[i].t,width:aImg1[i].w,height:aImg1[i].h});
					aImg1[i].src = 'png/tab' + (i+1) + '_2.png';
					aImg1[i].style.zIndex = 1;
					aImg1[i].style.opacity = 0.6;
				}
				
				aImg1[1].src = 'png/tab2_1.png';
				aImg1[1].style.zIndex = 2;
				aImg1[1].style.opacity = 1;
				
				window.location.hash = hash;
				require( 'show.js' ).init( aDiv );
			});
			
			timeMove( tab, { top:480, opacity:0 }, 2000 );
			timeMove( contact, { top:480, opacity:0 }, 2000 );
		}
	}
	
	exports.init = init;
});