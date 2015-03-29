// JavaScript Document

define( function( require, exports, module ) {
	
	function init( obj, hash, aDiv ){
		if( window.off2 ){
			
			var oTop = obj.querySelector('.top_wrap');
			var oImg = oTop.querySelector('img');
			var oUl = oTop.querySelector('ul');
			var aLi = oTop.querySelectorAll('.main_li');
			
			var oBot = obj.querySelector('.bot_wrap');
			var oSpan = oBot.querySelector('span');
			var aDiv2 = oBot.querySelectorAll('.icon_wrap');
			var aImg = oBot.querySelectorAll('img');
			var aSpan = oBot.querySelectorAll('.move_shadow');
			
			for( var i=0; i<aSpan.length; i++ ){
				clearInterval( aSpan[i].timer2 );
				timeMove( aSpan[i], { opacity:0 } );
			}
			clearInterval( oImg.rotateTimer );
			timeMove( oImg, { top:-150, opacity:0 }, 2000 );
			timeMove( oUl, { top:-220, opacity:0 }, 2000, function(){
				for( var i=0; i<aLi.length; i++ ){
					changeCss( aLi[i], { left:-1000, opacity:0 } );
				}
				changeCss( aLi[0], { left:0, opacity:1 } );
				
				oImg.style.webkitTransform = 'rotate(0deg)';
				oImg.style.msTransform = 'rotate(0deg)';
				oImg.style.mozTransform = 'rotate(0deg)';
				oImg.style.Transform = 'rotate(0deg)';
				
				window.location.hash = hash;
				require( 'show.js' ).init( aDiv, 1 );
			});
			
			timeMove(aDiv2[2],{opacity:0,width:0,height:0,top:30,left:590},700,'easeInStrong');
			setTimeout( function(){
				timeMove(aDiv2[1],{opacity:0,width:0,height:0,top:30,left:475},700,'easeInStrong');
			}, 300);
			setTimeout( function(){
				timeMove(aDiv2[0],{opacity:0,width:0,height:0,top:30,left:210},700,'easeInStrong', function(){
					timeMove( oSpan, { left:460, width:0 });
				});
			}, 600);			
		}
	}
	
	exports.init = init;
});