// JavaScript Document

define( function( require, exports, module ) {
	
	function init( mainDiv ){
		/*检测浏览器*/
		var isIE6 = /msie 6/i.test(navigator.userAgent);
		var isIE7 = /msie 7/i.test(navigator.userAgent);
		var isIE8 = /msie 8/i.test(navigator.userAgent);
		
		if( isIE6 || isIE7 || isIE8 ){
			window.location.href = 'check.html';
		}
		
		for( var i=0; i<mainDiv.length; i++ ){
			mainDiv[i].style.display = 'block';
		}
		
		/*logo*/
		var oLogo = document.querySelector('#logo');
		var aSpan1 = oLogo.querySelector('.span_wrap').querySelectorAll('span');
		var aSpan2 = oLogo.querySelector('.logo_pic').querySelectorAll('span');
		
		timeMove( oLogo, { top : -90, opacity : 100 }, 1500, 'backOut', function(){
			require( 'head/logoEvent.js' ).init( oLogo, aSpan1, aSpan2 );
		})
		
		/*nav*/
		var oNav = document.querySelector('#nav');
		var aLi = oNav.querySelectorAll('li');
		var hashList = ['home', 'demo', 'about']
		
		require( 'head/navIn.js' ).init( aLi );
		
		/*切换控制*/
		var oHome = document.querySelector('#home');
		var oDemo = document.querySelector('#demo');
		var oAbout = document.querySelector('#about');
		var aDiv = [oHome, oDemo, oAbout];
		
		/*设置foot宽度为可视宽度*/
		var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
		var oFoot = document.querySelector( '#foot' );
		oFoot.style.width = clientWidth + 'px';
		oFoot.style.marginLeft = -getPos( oFoot ).left + 'px';
		
		var aLi2 = oFoot.querySelectorAll( 'li' );
		
		/*设置自定义属性，控制hash值*/
		for( var i=0; i<aLi.length; i++ ){
			aLi[i].setAttribute( 'hash', hashList[i] );
			aLi2[i].setAttribute( 'hash', hashList[i] );
			aDiv[i].setAttribute( 'hash', hashList[i] );
		}
		
		/*出场动画*/
		require( 'show.js' ).init( aDiv );
		
		/*离场动画*/
		require( 'hide.js' ).init( aDiv, aLi, aLi2 );
		
		/*控制页面刷新变量*/
		window.off = true;
		/*控制nav点击时限变量*/
		window.off2 = false;
		window.onhashchange = function(){
			if(window.off){
				window.location.reload();
			}
		};
	}
	
	exports.init = init;
});