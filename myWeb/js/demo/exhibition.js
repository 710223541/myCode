// JavaScript Document

define( function( require, exports, module ) {
	
	function init( arr ){
		
		arr[3].len = 5;
		arr[3].nowPage = 1;
		arr[3].allPage = Math.ceil( window.data.length / arr[3].len );
		arr[3].ulH = 0;
		
		createPage();
		function createPage(){
			arr[3].start = ( arr[3].nowPage - 1 ) * arr[3].len;
			arr[3].end = arr[3].start + arr[3].len;
			if( arr[3].end > window.data.length ) arr[3].end = window.data.length;
			
			var str = '';
			if( arr[3].allPage <= arr[3].len ){
				for( var i=1; i<=arr[3].allPage; i++ ){
					createA(i);
				}
			}else if( arr[3].nowPage - 2 <= 1 ){
				for( var i=1; i<=arr[3].len; i++ ){
					createA(i);
				}
			}else if( arr[3].nowPage + 2 > arr[3].allPage ){
				for( var i=arr[3].allPage - 4; i<=arr[3].allPage; i++ ){
					createA(i);
				}
			}else{
				for( var i=arr[3].nowPage - 2; i<=arr[3].nowPage + 2; i++ ){
					createA(i);
				}
			}
			
			var oA1 = document.createElement('a');
			var oA2 = document.createElement('a');
			var oA3 = document.createElement('a');
			var oA4 = document.createElement('a');
			
			oA1.innerHTML = '首页'; oA1.setAttribute( 'page', 1 );
			oA2.innerHTML = '上一页'; oA2.setAttribute( 'page', arr[3].nowPage - 1 );
			oA3.innerHTML = '下一页'; oA3.setAttribute( 'page', arr[3].nowPage + 1 );
			oA4.innerHTML = '尾页'; oA4.setAttribute( 'page', arr[3].allPage );
			
			arr[3].insertBefore( oA2, arr[3].children[0] );
			arr[3].insertBefore( oA1, arr[3].children[0] );
			arr[3].appendChild( oA3 );
			arr[3].appendChild( oA4 );
			
			arr[4].innerHTML = arr[3].nowPage + '/' + arr[3].allPage;
			createDemo();
		}
		
		function createA(i){
			var oA = document.createElement('a');
			oA.setAttribute( 'page', i );
			oA.innerHTML = i;
			arr[3].appendChild( oA );
		}
		
		function createDemo(){
			for( var i=arr[3].start; i<arr[3].end; i++ ){
				var oLi = document.createElement('li');
				oLi.href = window.data[i].href;
				var oSpan1 = document.createElement('span');
				var oSpan2 = document.createElement('span');
				var oP = document.createElement('p');
				oP.innerHTML = window.data[i].p;
				var oImg = document.createElement('img');
				oImg.src = window.data[i].src;
				
				oLi.onclick = function(){
					window.open( this.href );
				};
				
				oLi.appendChild( oSpan1 );
				oLi.appendChild( oSpan2 );
				oLi.appendChild( oP );
				oLi.appendChild( oImg );
				
				arr[2].appendChild( oLi );
			}
			aClick();
		}
			
		function countH(){
			var aLi = arr[2].querySelectorAll( 'li' );
			arr[3].ulH = 0;
			for( var i=0; i<aLi.length; i++ ){
				arr[3].ulH += aLi[i].offsetHeight + 25;
			}
		}
		
		setTimeout( function(){
			timeMove( arr[0], { opacity:100 }, 1000 );
			timeMove( arr[1], { opacity:100 }, 1000 );
			timeMove( arr[2], { opacity:100 }, 1000, function(){
				countH();
				timeMove( arr[2], { height:arr[3].ulH }, 1000, 'easeInStrong', function(){
					window.onscroll = function(){
						liMove();
					}
					liMove();
				});
			});
		},1500);
		
		function liMove(){
			var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			var aLi = arr[2].querySelectorAll( 'li' );
			
			for( var i=0; i<aLi.length; i++ ){
				if( aLi[i].offsetTop  < clientHeight + scrollTop - aLi[i].offsetHeight + 50 ){
					timeMove( aLi[i], { left:0 }, 600, 'backOut', function(){
						var circle = this.querySelector( 'span' );
						circle.style.opacity = 1;
						timeMove( circle, { width:9, height:9, left:-51, top:54 }, 'elasticOut');
					});
				}
			}
		}
		
		function aClick(){
			var aA = arr[3].querySelectorAll( 'a' );
			for( var i=0; i<aA.length; i++ ){
				aA[i].onclick = function(){
					var num = parseInt( this.getAttribute( 'page' ) );
					if( num <= 0 ){
						return;
					}else if( num >= arr[3].allPage + 1 ){
						return;
					}else if( num == arr[3].nowPage ){
						return;
					}
					arr[3].nowPage = num;
					togglePage();
				}
			}
		}
		
		function togglePage(){
			timeMove( arr[2], { height:0 },1000, function(){
				arr[2].innerHTML = '';
				arr[3].innerHTML = '';
				createPage();
				countH();
				timeMove( arr[2], { height:arr[3].ulH }, 1000, 'easeInStrong', function(){
					liMove();
				});
			});
		}
		
		arr[5][1].onclick = inputTog;
		document.onkeyup = function(ev){
			var ev = ev || event;
			if( arr[5][0] == document.activeElement && ev.keyCode == 13 ){
				inputTog();
			}
		};
		
		function inputTog(){
			var value = arr[5][0].value;
			var pa = /^\d+$/;
			
			if( pa.test( value ) ){
				if( value > 0 && value <= arr[3].allPage && value != arr[3].nowPage ){
					arr[3].nowPage = parseInt( value );
					arr[5][0].value = '';
					togglePage();
				}else if( value == arr[3].nowPage ){
					arr[5][0].value = '';
					return;
				}else{
					arr[5][0].value = '';
					alert( '您输入的数值超出范围！' )
				}
			}else{
				arr[5][0].value = '';
				alert( '请输入数字！' )
			}
		}
	}
	
	exports.init = init;
});