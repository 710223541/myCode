// JavaScript Document

define( function( require, exports, module ) {
	
	function init( aLi, aBtn, oUl ){
				
		for( var i=0; i<aLi.length; i++ ){
			var iDeg = parseInt( Math.random() * 100 ) % 3 + 2;
			var num = Math.random() - 0.5;
			iDeg = num > 0 ? iDeg : -iDeg;
			aLi[i].style.zIndex = aLi.length - i;
			aLi[i].style.transform = 'rotate(' + iDeg + 'deg)';
			aLi[i].style.msTransform = 'rotate(' + iDeg + 'deg)';
			aLi[i].style.webkitTransform = 'rotate(' + iDeg + 'deg)';
			aLi[i].left = getPos( aLi[i] ).left;
		}
		
		oUl.index = 600;
		oUl.num = 0;
		oUl.off = true;
		oUl.off2 = false;
		oUl.zIndex = aLi.length;
		
		setTimeout( function(){
			timeMove( aLi[3], { width:768, height:480, left:89, top:60, opacity:100 }, 600 );
		}, 1 * oUl.index );
		setTimeout( function(){
			timeMove( aLi[2], { width:768, height:480, left:89, top:60, opacity:100 }, 800 );
		}, 2 * oUl.index );
		setTimeout( function(){
			timeMove( aLi[1], { width:768, height:480, left:89, top:60, opacity:100 }, 800 );
		}, 3 * oUl.index );
		setTimeout( function(){
			timeMove( aLi[0], { width:768, height:480, left:89, top:60, opacity:100 }, 800, function(){
				addClick();
				oUl.off2 = true;
				showBtn();
				/*入场动画完毕更改控制nav点击时限变量*/
				window.off2 = true;
				/*入场动画完毕更改控制页面刷新变量*/
				window.off = true;
			});
		}, 4 * oUl.index );
		
		for( var i=0; i<aBtn.length; i++ ){
			aBtn[i].onmouseover = showBtn;
			aBtn[i].onmouseout = hideBtn;
			aBtn[i].style.zIndex = oUl.zIndex++;
		}
		oUl.onmouseover = showBtn;
		oUl.onmouseout = hideBtn;
		
		function addClick(){
			aBtn[0].onclick = function(){
				oUl.num--;
				oUl.off = false;
				clickEvent();
			};
			aBtn[1].onclick = function(){
				oUl.num++;
				clickEvent();
			};
		}
		
		function clickEvent(){
			if( oUl.num > aLi.length - 1 ){
				oUl.num = 0;
			}else if( oUl.num < 0 ){
				oUl.num = aLi.length - 1;
			}
			
			if( !oUl.off ){
				hideBtn();
				oUl.off2 = false;
				timeMove(aLi[oUl.num],{left:aLi[oUl.num].left-aLi[oUl.num].offsetWidth,opacity:0}, 1200, function(){
					this.style.zIndex = oUl.zIndex++;
					changeCss( this, { width:900, height:600, top:0} );
					upZindex();	
					timeMove( this, { width:768, height:480, left:89, top:60, opacity:100 },1200, function(){
						oUl.off2 = true;
						showBtn();
					});
				});
			}else{
				hideBtn();
				oUl.off2 = false;
				timeMove(aLi[oUl.num],{left:aLi[oUl.num].left+aLi[oUl.num].offsetWidth-800,opacity:0},1200, function(){
					this.style.zIndex = oUl.zIndex++;
					changeCss( this, { width:900, height:600, top:0 } );
					upZindex();	
					timeMove( this, { width:768, height:480, left:89, top:60, opacity:100 },1200, function(){
						oUl.off2 = true;
						showBtn();
					});
				});
			}
			oUl.off = true;
		}
		
		function upZindex(){
			for( var i=0; i<aBtn.length; i++ ){
				aBtn[i].style.zIndex = oUl.zIndex++;
			}
		}
		function showBtn(){
			if( oUl.off2 ){
				for( var i=0; i<aBtn.length; i++ ){
					timeMove( aBtn[i], { opacity:100 }, 600 );
				}
			}
		}
		function hideBtn(){
			if( oUl.off2 ){
				for( var i=0; i<aBtn.length; i++ ){
					timeMove( aBtn[i], { opacity:0 }, 600, function(){
					});
				}
			}
		}
	}
	
	exports.init = init;
});