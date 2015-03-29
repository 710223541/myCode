// JavaScript Document

define( function( require, exports, module ) {
	
	function init( obj ){
		/*控制nav点击时限变量*/
		window.off2 = false;
		var main_pic = obj.querySelector( '.main_pic' );
		var aImg = main_pic.querySelectorAll( 'img' );
		var oSpan = main_pic.querySelector( 'span' );
		require( 'home/pic.js' ).init( aImg, main_pic, oSpan );
		
		var tab = obj.querySelector( '.tab' );
		require( 'home/tab.js' ).init( tab );
		
		var contact = obj.querySelector( '.contact' );
		require( 'home/contact.js' ).init( contact );
	}
	
	exports.init = init;
});