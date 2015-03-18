// JavaScript Document

define( function( require, exports, module ) {
	var oHead = document.getElementById('head');
	var oBody = document.getElementById('body');
	var oFoot = document.getElementById('foot');
	var oLoad = document.getElementById('load');
	var mainDiv = [ oHead, oBody, oFoot ];
	
	var oDiv = document.getElementById('loading');
	var aImg = oDiv.getElementsByTagName('img');
	var oSpan = oDiv.getElementsByTagName('span')[0];
	var oText = getClass( oLoad,'div','text' )[0]
	var oShadow = getClass( oLoad, 'img', 'shadow' )[0];
	
	for( var i=0; i<mainDiv.length; i++ ){
		mainDiv[i].style.display = 'none';
	}
	
	var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
	
	oLoad.style.display = 'block';
	
	var top = ( clientHeight - oDiv.offsetHeight ) / 2;
	
	oDiv.style.top = top + 'px';
	oText.style.left = ( oLoad.offsetWidth - oText.offsetWidth ) / 2 + 'px';
	oText.style.top = top + 270 + 'px';
	
	oShadow.style.top = top + 86 + 'px';
	oShadow.style.left = ( oLoad.offsetWidth - oShadow.offsetWidth +10  ) / 2 + 'px';
	
	oShadow.l = oShadow.offsetLeft;
	oShadow.t = oShadow.offsetTop;
	oShadow.w = oShadow.offsetWidth;
	oShadow.h = oShadow.offsetHeight;
	
	var isIE6 = /msie 6/i.test(navigator.userAgent);
	var isIE7 = /msie 7/i.test(navigator.userAgent);
	var isIE8 = /msie 8/i.test(navigator.userAgent);
	var isIE9 = /msie 9/i.test(navigator.userAgent);
	
	timeMove( oLoad, { opacity:100 }, 1000 );
	
	move();
	function move(){
		timeMove( oDiv, { top:top - 10 }, 600, 'linear', function(){
			timeMove( this, { top : top }, 600, 'linear', function(){
				move();
			});
		});
		timeMove( oShadow, { left:oShadow.l+4, top:oShadow.t+4, width:oShadow.w-8, height:oShadow.h-8,opacity:50 }, 600, 'linear', function(){
			timeMove( this, { left:this.l, top:this.t, width:this.w, height:this.h, opacity:80 }, 600, 'linear');
		});
	}
	
	toRotate( aImg[1], 360, 2000 );
	toRotate( aImg[2], -360, 2000 );
	
	var oImg = new Image();
	var arr = [];
	var iLen = 0;
	var prevTime = new Date().getTime();
	
	for( var i=0; i<window.data.length; i++ ){
		arr.push( window.data[i].src );
	}
	for( var i=0; i<pic.png.length; i++ ){
		arr.push( window.pic.png[i] );
	}
	
	if( isIE6 || isIE7 || isIE8 ){
		aImg[1].src = 'png/load_big_1.gif';
		aImg[2].src = 'png/load_small.gif';
		setTimeout( function(){
			clearInterval( oDiv.timer );
			clearInterval( oShadow.timer );
			clearInterval( aImg[1].rotateTimer );
			clearInterval( aImg[2].rotateTimer );
			
			timeMove( oText, { top : top + 180, opacity:100 }, 2000 );
		}, 1200);
	}else{
		if( isIE9 ){
			aImg[1].src = 'png/load_big_1.gif';
			aImg[2].src = 'png/load_small.gif';		
		}
		downPic();
	}
	
	function downPic(){
		oImg.src = arr[iLen];		
		oImg.onload = function(){
			iLen++;
			oSpan.innerHTML = parseInt( iLen / arr.length * 100 ) + '%';
			if( iLen == arr.length ){				
				var nowTime = new Date().getTime();
				
				if( nowTime - prevTime < 1500 ){
					setTimeout( function(){
						timeMove(oLoad, { opacity:0 }, 1000, function(){
							clearInterval( oDiv.timer );
							clearInterval( oShadow.timer );
							clearInterval( aImg[1].rotateTimer );
							clearInterval( aImg[2].rotateTimer );
							oLoad.style.display = 'none';
							require( 'main.js' ).init( mainDiv );
						});
					}, 1500 - ( nowTime - prevTime) );
				}else{
					timeMove(oLoad, { opacity:0 }, 1000, function(){
						clearInterval( oDiv.timer );
						clearInterval( oShadow.timer );
						clearInterval( aImg[1].rotateTimer );
						clearInterval( aImg[2].rotateTimer );
						oLoad.style.display = 'none';
						require( 'main.js' ).init( mainDiv );
					});
				}
			}else{
				downPic();
			}
		};
		
		oImg.onerror = function(){
			if( confirm( '图片加载出问题了，要刷新当前页面吗？' ) ){
				window.location.reload();
			}
		};
	}
});