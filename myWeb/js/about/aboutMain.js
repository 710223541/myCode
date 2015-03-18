// JavaScript Document

define( function( require, exports, module ) {
	
	function init( obj ){
		/*控制nav点击时限变量*/
		window.off2 = false;
		
		var oTop = obj.querySelector('.top_wrap');
		var oImg = oTop.querySelector('img');
		var oUl = oTop.querySelector('ul');
		var aLi = oTop.querySelectorAll('.main_li');/*-1000 1700*/
		
		var oBot = obj.querySelector('.bot_wrap');
		var oSpan = oBot.querySelector('span');
		var aDiv = oBot.querySelectorAll('.icon_wrap');/*25 100*/
		var aImg = oBot.querySelectorAll('img');/*21 -110*/
		var aSpan = oBot.querySelectorAll('.move_shadow');
		
		var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
		
		var isIE9 = /msie 9/i.test(navigator.userAgent);
		if( isIE9 ){
			oImg.src = 'png/flower_1.png';
		}
		
		for( var i=0; i<aDiv.length; i++ ){
			aDiv[i].num = i;
		}
		oBot.nowNum = 0;
		oBot.prevNum = 0;
		oBot.left = getPos( oBot ).left;
		oBot.time = 260;
		oBot.r = 79;
		oBot.speed = 0;
		oBot.off = true;
		
		setTimeout( function(){
			timeMove( oSpan, { left:-oBot.left, width:clientWidth }, 1200, 'linear', function(){
				setTimeout( function(){
					timeMove(aDiv[0],{opacity:100,width:150,height:150,top:-45,left:135},700,'elasticOut');
				}, oBot.time * 0);
				setTimeout( function(){
					timeMove(aDiv[1],{opacity:100,width:150,height:150,top:-45,left:400},700,'elasticOut');
				}, oBot.time * 1);
				setTimeout( function(){
					timeMove(aDiv[2],{opacity:100,width:150,height:150,top:-45,left:665},700,'elasticOut',function(){
						moveSpan();	
					});
				}, oBot.time * 2);
			});
		},800);
		setTimeout( function(){
			timeMove( oUl, { opacity:100, top:-70 }, 2000 );
			timeMove( oImg, { opacity:70, top:0 }, 2000, function(){
				toRotate( this, 360, 15000 );
				/*入场动画完毕更改控制nav点击时限变量*/
				window.off2 = true;
				/*入场动画完毕更改控制页面刷新变量*/
				window.off = true;
			});
		},1000);
		
		
		function moveSpan(){
			oBot.speed = 0;
			for( var i=0; i<aSpan.length; i++ ){
				clearInterval( aSpan[i].timer2 );
				timeMove( aSpan[i], { opacity:0 }, 600);
			}
			
			timeMove( aSpan[oBot.nowNum], { opacity:100 }, 600 )
			var x = aDiv[oBot.nowNum].offsetWidth / 2;
			var y = aDiv[oBot.nowNum].offsetHeight / 2;
						
			aSpan[oBot.nowNum].timer2 = setInterval( function(){
				oBot.speed--;
				var a = Math.cos( oBot.speed/180*Math.PI ) * (oBot.r);
				var b = Math.sin( oBot.speed/180*Math.PI ) * (oBot.r);
				
				aSpan[oBot.nowNum].style.top = a + x - 22 + 'px';
				aSpan[oBot.nowNum].style.left = b + y -22 + 'px';
			},15);
		}
		
		for( var i=0; i<aDiv.length; i++ ){
			aDiv[i].onmouseover = mouseOver;
			aDiv[i].onmouseout = mouseOut;
			aDiv[i].onclick = divClick;
		}
		
		function mouseOver(){
			timeMove(　aImg[this.num], { top:-228 } );
		}
		function mouseOut(){
			timeMove(　aImg[this.num], { top:12 } );
		}
		function divClick(){
			if( oBot.off ){
				oBot.off = false;
				oBot.nowNum = this.num;
				if( oBot.nowNum == oBot.prevNum ){
					oBot.off = true;
					return;
				}else if( oBot.nowNum > oBot.prevNum ){
					aLi[oBot.nowNum].style.left = '1300px';
					
					timeMove( aLi[oBot.prevNum], { left:-1000, opacity:0 }, 1500, 'backBoth' );
					timeMove( aLi[oBot.nowNum], { left:0, opacity:100 }, 1500, 'backBoth' , function(){
						oBot.off = true;
					});
				}else if( oBot.nowNum < oBot.prevNum ){
					aLi[oBot.nowNum].style.left = '-1000px';
					
					timeMove( aLi[oBot.prevNum], { left:1300, opacity:0 }, 1500, 'backBoth' );
					timeMove( aLi[oBot.nowNum], { left:0, opacity:100 }, 1500, 'backBoth', function(){
						oBot.off = true;
					});
				}
				oBot.prevNum = oBot.nowNum;
				moveSpan();
			}
		}
		
	}
	
	exports.init = init;
});