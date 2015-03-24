// JavaScript Document
+function(){
	var isIE6 = /msie 6/i.test(navigator.userAgent);
    var isIE7 = /msie 7/i.test(navigator.userAgent);
    var isIE8 = /msie 8/i.test(navigator.userAgent);
	
	if( isIE6 || isIE7 || isIE8 ){
		$('#page-wrap').html('您的浏览器版本过低，无法查看本页面，请升级后再行浏览！').show()
		.css({ textAlign:'center', paddingTop:'20%' });
	}else{
		$('#page-wrap').show().next('div#navWrap').show();
	}
}();

+function(){
	var $wrap = $('#page-wrap');
	var $page = $wrap.find('div.page');
	var len = $page.length;
	var top = parseInt( $page.eq(1).css('top') );
	
	var $nav = $('#navWrap').find('.side-nav');
	var pre = 0;
	var pageIndex = len;
	var mouseWheelNum = 0;
	
	var $nextIcon = $('#nextIcon');
	var $nextDiv = $nextIcon.find('div');
	$nextIcon.css('left', ( $(document).outerWidth() - 100 ) / 2 );
	
	var arr = [
		{ bottom:-100, move:-700 },
		{ top:20, move:1000 },
		{ bottom:130, move:-700 },
		{ top:-10, move:1000 },
		{ top:-10, move:1000 }
	]
	
	$(document).attr('bo', true);
	$wrap.prop('bo', true);
	$page.eq(0).prop('bo', true).css({ zIndex:pageIndex-1, top:0 });
	moveFlower( $page.eq(0) );
	
	$nav.each(function(index, element) {
        $(element).css({ top: index * 30 })
    }).click(function(){
		var str = $(this).attr('class');
		if( $wrap.prop('bo') && str.indexOf('side-now') == -1 ){
			
			$wrap.prop('bo', false);
			var index = $(this).index();
			
			mouseWheelNum = index;
			
			pageIndex += 2;
			$page.eq( pre ).css({ zIndex:pageIndex });
			
			init( $page, top, pre, index, arr );
			
			$nav.eq(pre).removeClass('side-now').end().eq(index).addClass('side-now');
			pre = index;
		}
	});
	
	addMouseWheel(document, function(e){
		var bo = mouseWheelDir(e);
		var bo2 = $(document).attr('bo');
		
		if( bo2 ){
			if( !bo ){
				if( mouseWheelNum != len-1 ){
					bo2 = $(document).attr('bo', false);
					mouseWheelNum++;
					
					$nav.eq( mouseWheelNum ).trigger('click');
				}
			}else{
				if( mouseWheelNum != 0 ){
					bo2 = $(document).attr('bo', false);
					mouseWheelNum--;
					
					$nav.eq( mouseWheelNum ).trigger('click');
				}
			}
		}
	});
	
	var runNextIcon = function(){
		var len = $nextDiv.length - 1;
		var time = 0;
		$nextDiv.each(function(index, element) {
            time += 100;
			setTimeout(function(){
				$(element).myMove({ opacity:0.8 }, function(){
					$(this).myMove({ opacity:0.1 }, function(){
						if( $(this).index() == len ){
							setTimeout(runNextIcon, 600);
						}
					})
				});
			}, time)
        });
	}
	runNextIcon();
}();

function addMouseWheel(obj,fn){
	obj.onmousewheel = fn;
	if(obj.addEventListener){
		obj.addEventListener('DOMMouseScroll',fn,false);
	}
}	
function mouseWheelDir(ev){
	var oEv=ev||event;
	if(oEv.wheelDelta){
		return oEv.wheelDelta>0?true:false;
	}else{
		return oEv.detail<0?true:false;
	}
}

function init( $page, top, pre, now, arr ){
	var $wrap = $page.eq(0).parent();
	var height = $page.eq(0).parent().outerHeight();
	var index = $page.eq(pre).css('zIndex');
	
	if( now == $page.length-1 ){
		$('#nextIcon').myMove({ opacity:0 });
	}else{
		$('#nextIcon').myMove({ opacity:1 });
	}
	
	var bo = now > pre ? true : false;
	var time = 800;
	
	if( bo ){
		var posKey = null, posKey2 = null, tarKey = null;
		$.each(arr[pre], function(key, val){
			if( key == 'top' || key == 'bottom' ) posKey = key;
		});
		$.each(arr[now], function(key,val){
			if( key == 'top' || key == 'bottom' ){
				posKey2 = key;
			}else{
				tarKey = key;
			}
		});
		var json = {}, json2 = {}, json3 = {};
		json[posKey] = arr[pre].move;
		json2[posKey2] = arr[now][posKey2];
		json3[posKey2] = arr[now][tarKey];
		
		$page.eq(now).css({ top:top, zIndex:index-1 })
		.find('.fix').css(json3).myMove(json2, time, 'easeBothStrong');
		
		$page.eq(pre).myMove({ top:-height }, time, 'easeBothStrong')
		.find('.fix').myMove(json, time, 'easeBothStrong');
	}else{
		var posKey = null, tarKey = null;
		$.each(arr[now], function(key, val){
			if( key == 'top' || key == 'bottom' ){
				posKey = key;
			}else{
				tarKey = key;
			}
		})
		var json = {}, json2 = {};
		json[posKey] = arr[now][posKey];
		json2[posKey] = arr[now][tarKey];
		
		$page.eq(now).css({ top:-height, zIndex:parseInt(index)+1 })
		.find('.fix').css(json2).myMove(json, time, 'easeBothStrong');
		
		$page.eq(pre).myMove({ top:top }, time, 'easeBothStrong');
	}
		
	$page.eq(now).prop('bo', true).myMove({ top:0 }, time, 'easeBothStrong', function(){
		$page.eq(pre).prop('bo', false);
		$wrap.prop('bo', true);
		$(document).attr('bo', true);
	});
	choiceMoveFn( $page.eq(now), now );
};

function choiceMoveFn( $obj, num ){
	switch( num ){
		case 0:
			moveFlower( $obj );
		break;
		case 1:
			moveStar( $obj );
		break;
		/*case 2:
			
		break;*/
		case 3:
			var $img = $obj.find('img.bg-sky');
			$img.eq(0).attr('src', 'img/bg-sky2.jpg');
			$img.eq(1).attr('src', 'img/bg-sky1.jpg');
			moveSkyChange( $obj, false );
		break;
		/*case 4:
			
		break;*/
	}
}

function moveStar( $obj ){
	if( $obj.prop('bo') ){
		var $img = $obj.find('img');
		var time = 1000;
		
		$img.eq(0).myScale( 0.5, time ).myMove({ opacity:0.3 }, time, function(){
			$(this).myScale(1, time).myMove({ opacity:0.8 }, time);
		});
		
		$img.eq(1).myScale(1.5, time).myMove({ opacity:0.8 }, time, function(){
			$(this).myScale(1, time).myMove({ opacity:0.3 }, time, function(){
				moveStar( $obj );
			});
		});
	}
}

function moveFlower( $obj ){
	if( $obj.prop('bo') ){
		var $img = $obj.find('img.moveImg');
		var time = 4000;
		var type = 'easeBoth';
		
		$img.eq(0).css({ right:60, top:20 });
		$img.eq(1).css({ right:180, top:130 });
		$img.css({ opacity:0 });
		
		$img.eq(0).myRotate(-120).myRoMove(-15, time)
		.myMove({ right:600, top:300, opacity:1 }, time+1000, type, function(){
			$(this).myRoMove(-90, time).myMove({ right:920, top:480, opacity:0 }, time-1000, type);
		});
		
		$img.eq(1).myRoMove(70, time).myMove({ right:450, top:210, opacity:1 }, time-1000, type, function(){
			$(this).myRoMove(-40, time).myMove({ right:900, top:300, opacity:0 }, time+1000, type, function(){
				moveFlower( $obj );
			});
		});
	}
}

function moveSkyChange( $obj, bo ){
	if( $obj.prop('bo') ){
		if( !bo ){
			var a = 'img/bg-sky2.jpg';
			var b = 'img/bg-sky1.jpg';
		}else{
			var a = 'img/bg-sky1.jpg';
			var b = 'img/bg-sky2.jpg';
		}
		
		var $img = $obj.find('img.bg-sky');
		var time = 5000;
		
		$img.eq(1).myMove({opacity:0}, time, function(){
			$(this).attr('src', a).css('opacity', 1);
			$img.eq(0).attr('src', b);
			bo = !bo;
			moveSkyChange( $obj, bo );
		});
	}
}
