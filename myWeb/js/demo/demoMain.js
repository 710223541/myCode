// JavaScript Document

define( function( require, exports, module ) {
	
	function init( obj ){
		/*控制nav点击时限变量*/
		window.off2 = false;
		
		var oTab = obj.querySelector( '.tab' );
		var aLi = oTab.querySelectorAll( 'li' );
		var aBtn = oTab.querySelectorAll( '.btn' );
		var oUl = oTab.querySelector( 'ul' );
		obj.style.opacity = 1;
		require( 'demo/tab.js' ).init( aLi, aBtn, oUl );
		
		var oEx = obj.querySelector( '.exhibition' );
		var oTop = oEx.querySelector( '.top' );
		var oBot = oEx.querySelector( '.bot' );
		var demoList = oEx.querySelector( '.demoList' );
		var pageList = oEx.querySelector( '.listWrap' );
		var aInput = oEx.querySelectorAll( 'input' );
		var oSpan = oEx.querySelector( '.page_num' );
		var arr = [ oTop, oBot, demoList, pageList, oSpan, aInput ];
		require( 'demo/exhibition.js' ).init( arr );
	}
	
	exports.init = init;
});