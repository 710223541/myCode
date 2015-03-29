// JavaScript Document

define( function( require, exports, module ) {
	
	function init( tab, aImg, aSpan ){
		
		tab.num = 0;
		tab.zIndex = 3;
		tab.middle = 1;
		
		for( var i=0; i<aSpan.length; i++ ){
			aSpan[i].style.zIndex = 9999;
		}
		
		aSpan[0].onmouseover = function(){
			timeMove( this, {  opacity:100, left:115 } );
		};
		aSpan[0].onmouseout = function(){
			timeMove( this, { opacity:50, left:100 } );
		};
		aSpan[1].onmouseover = function(){
			timeMove( this, { opacity:100, left:400 } );
		};
		aSpan[1].onmouseout = function(){
			timeMove( this, { opacity:50, left:415 } );
		};
		for( var i=0; i<aImg.length; i++ ){
			aImg[i].w = aImg[i].offsetWidth;
			aImg[i].h = aImg[i].offsetHeight;
			aImg[i].l = aImg[i].offsetLeft;
			aImg[i].t = aImg[i].offsetTop;
		}
		
		aSpan[0].onclick = function(){
			tab.middle += -1;
			move();
		}
		aSpan[1].onclick = function(){
			tab.middle += 1;
			move();
		}
		
		function move(){
			if( tab.middle < 0 ){
				tab.middle = 2;
			}else if( tab.middle > 2 ){
				tab.middle = 0;
			}
			var num = tab.middle;
			var numPrev = tab.middle - 1;
			var numNext = tab.middle + 1;
			if( numPrev < 0 ){
				numPrev = 2;
			}else if( numNext > 2 ){
				numNext = 0;
			}
			
			timeMove(aImg[num],{ width:aImg[1].w,height:aImg[1].h,left:aImg[1].l,top:aImg[1].t,opacity:100 },1000);
			timeMove(aImg[numPrev],{width:aImg[0].w,height:aImg[0].h,left:aImg[0].l,top:aImg[0].t,opacity:60},1000);
			timeMove(aImg[numNext],{width:aImg[2].w,height:aImg[2].h,left:aImg[2].l,top:aImg[2].t,opacity:60},1000);
			
			aImg[num].style.zIndex = tab.zIndex++;
			setTimeout(function(){
				aImg[num].src = 'png/tab' + ( num + 1) + '_1.png';
				aImg[numPrev].src = 'png/tab' + ( numPrev + 1) + '_2.png';
				aImg[numNext].src = 'png/tab' + ( numNext + 1) + '_2.png';
			},300);
		}
	}
	
	exports.init = init;
});