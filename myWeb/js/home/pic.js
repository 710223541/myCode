// JavaScript Document

define( function( require, exports, module ) {
	
	function init( aImg, picWra, oSpan ){
		setTimeout( function(){
			timeMove( picWra, { opacity:100, top:-70 }, 1200 );
		},500);
		setTimeout( function(){
			timeMove( aImg[0], { top:5, opacity:100 }, 1200, 'backOut' );
			timeMove( aImg[1], { top:20, opacity:100 }, 1800, 'backOut' );
			timeMove( aImg[2], { opacity:100 }, 2000 );
			timeMove( aImg[3], { opacity:100 }, 2000);
			timeMove( aImg[4], { top:100, opacity:100 }, 1200, 'backOut' );
			timeMove( aImg[5], { top:120, opacity:100 }, 1800, 'backOut');
		}, 800);	
		setTimeout( function(){
			timeMove( aImg[6], { top:0, opacity:100 }, 1800, 'backOut', function(){
				toRotate( aImg[6], 360, 15000);
				require( 'home/picMove.js' ).init( aImg, oSpan );
				/*入场动画完毕更改控制nav点击时限变量*/
				window.off2 = true;
				/*入场动画完毕更改控制页面刷新变量*/
				window.off = true;
			});
		}, 1200);	
	}
	
	exports.init = init;
});