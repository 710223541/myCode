// JavaScript Document

+function(){
	var vendors = ['webkit', 'moz'];
	for(var i = 0; i < vendors.length && !window.requestAnimationFrame; i++) {
		window.requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
	}
}();

$.extend({
	tween:{
		//匀速
		linear: function (t, b, c, d){return c*t/d + b;},
		//加速
		easeIn: function(t, b, c, d){return c*(t/=d)*t + b;},
		//减速
		easeOut: function(t, b, c, d){return -c *(t/=d)*(t-2) + b;},
		//加减速
		easeBoth: function(t, b, c, d){  
			if ((t/=d/2) < 1) return c/2*t*t + b;
			return -c/2 * ((--t)*(t-2) - 1) + b;
		},
		//加加速
		easeInStrong: function(t, b, c, d){return c*(t/=d)*t*t*t + b;},
		//减减速
		easeOutStrong: function(t, b, c, d){return -c * ((t=t/d-1)*t*t*t - 1) + b;},
		//加加减减速
		easeBothStrong: function(t, b, c, d){  
			if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
			return -c/2 * ((t-=2)*t*t*t - 2) + b;
		},
		//正弦衰减曲线（先弹后入）
		elasticIn: function(t, b, c, d, a, p){
			if (t === 0) return b; 
			if ( (t /= d) == 1 )return b+c; 
			if (!p) p=d*0.4; //弹性幅度
			if (!a || a < Math.abs(c)) {
				a = c; var s = p/4;
			} else {
				var s = p/(2*Math.PI) * Math.asin (c/a);
			}
			return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		},
		//正弦增强曲线（先入后弹）
		elasticOut: function(t, b, c, d, a, p){    
			if (t === 0) return b;
			if ( (t /= d) == 1 ) return b+c;
			if (!p) p=d*0.4;//弹性幅度
			if (!a || a < Math.abs(c)) {
				a = c; var s = p / 4;
			} else {
				var s = p/(2*Math.PI) * Math.asin (c/a);
			}
			return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
		},
		//正弦衰减增强曲线（弹动出入）    
		elasticBoth: function(t, b, c, d, a, p){
			if (t === 0) return b;
			if ( (t /= d/2) == 2 ) return b+c;
			if (!p) p = d*(0.3*1.5);//弹性幅度
			if ( !a || a < Math.abs(c) ) {
				a = c; var s = p/4;
			}else {
				var s = p/(2*Math.PI) * Math.asin (c/a);
			}
			if (t < 1) return - 0.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
			return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
		},
		//回退加速（先出后入）
		backIn: function(t, b, c, d, s){
			if (typeof s == 'undefined') s = 1.70158;//回缩的距离
			return c*(t/=d)*t*((s+1)*t - s) + b;
		},
		//回退加速（先入后出）
		backOut: function(t, b, c, d, s){
			if (typeof s == 'undefined') s = 1.70158; //回缩的距离 
			return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		}, 
		//回退加速（渐入渐出）
		backBoth: function(t, b, c, d, s){
			if (typeof s == 'undefined') s = 1.70158; //回缩的距离
			if ((t /= d/2 ) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
			return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
		},
		//弹球减振（先振后出）
		bounceIn: function(t, b, c, d){
			return c - $.tween['bounceOut'](d-t, 0, c, d) + b;
		}, 
		//弹球减振（先出后振）
		bounceOut: function(t, b, c, d){
			if ((t/=d) < (1/2.75)) {
				return c*(7.5625*t*t) + b;

			} else if (t < (2/2.75)) {
				return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
			} else if (t < (2.5/2.75)) {
				return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
			}
			return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
		},
		//弹球减振（渐振渐出）     
		bounceBoth: function(t, b, c, d){
			if (t < d/2) return $.tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
			return $.tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
		}
	},
	supCss3:function(style){
		var arr = ['webkit', 'Moz', 'ms', 'o'];
		var strArr = [], i;
		var htmlStyle = document.documentElement.style;
		var toHump = function (str){
			return str.replace(/-(\w)/g, function ($0, $1){
				return $1.toUpperCase();
			});
		};
		
		for( i in arr ){
			strArr.push( toHump(arr[i] + '-' + style) )
		}
		strArr.push(style);
		
		for( i in strArr ){
			if( strArr[i] in htmlStyle ) return true;
		}
		return false;
	},
	angleChange:function(obj){
		var angle = 0;
		if( $.supCss3('transform') ){
			var matrix = obj.css('-webkit-transform') || obj.css('-moz-transform') || obj.css('-ms-transform')  || obj.css('-o-transform')  || obj.css('transform');
			if(typeof matrix == 'string' && matrix != 'none'){
				var values = matrix.split('(')[1].split(')')[0].split(',');
				var a = values[0];
				var b = values[1];
				angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
			}
		}else{
			var filter = obj.get(0).currentStyle ? obj.get(0).currentStyle['filter'] : '';
			if( filter && filter.indexOf('Matrix') != -1 ){
				var values = filter.match(/(Matrix).+(expand\"\))/)[0].match(/(\().+(\))/)[0].split(',');
				var a = values[0].split('=')[1];
				var b = values[2].split('=')[1];
				angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
			}
		}
		return angle;
	}
});

$.fn.extend({
	/*
		linear; easeIn,easeOut,easeBoth; easeInStrong,easeOutStrong,easeBothStrong;
		elasticIn,elasticOut,elasticBoth; backIn,backOut,backBoth; bounceIn,bounceOut,bounceBoth;
	*/
	myMove:function(json, time, fx, fn){
		var This = $(this);
		
		if(typeof time=='undefined'){
			time=400; fx='linear';
		}
		if(typeof time=='string'){
			if(typeof fx=='function'){
				fn=fx;　fx=time; time=400;
			}else if(typeof fx=='undefined'){
				fx=time; time=400;
			}
		}else if(typeof time=='function'){
			fn=time; time=400; fx='linear';
		}else if(typeof time=='number'){
			if(typeof fx=='function'){
				fn=fx; fx='linear';
			}else if(typeof fx=='undefined'){
				fx='linear';
			}
		}
		
		var iCur = {};
		for(var attr in json){
			var val = parseInt( This.css(attr) );
			if( $.type( val ) != 'number' || isNaN( val ) ){
				console.log('元素的 '+attr+' 值不合法，请先设置元素的 '+attr+' 值!');
				return;
			}
			if( attr == 'opacity' ){
				var obj = This.get(0);
				var opaVal = obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
				iCur[attr] = Math.round(parseFloat( opaVal ) * 100) / 100;
			}else{
				iCur[attr] = val;
			}
		}
		
		var startTime = new Date().getTime();	
		
		var run = function(){
			var nowTime = new Date().getTime();
			var t = time - Math.max(0, startTime - nowTime + time);
			for(var attr in json){
				var value = $.tween[fx](t, iCur[attr], json[attr] - iCur[attr], time);
				if( attr == 'lineHeight' || attr == 'fontSize' ){
					This.css(attr, value + 'px');
				}else{
					This.css(attr, value);
				}
			}
			
			if( t != time ){
				if( !window.requestAnimationFrame ){
					This.prop( 'timer', setTimeout(run, 16.7) );
				}else{
					This.prop( 'timer', requestAnimationFrame(run) );
				}
			}else{
				fn && fn.call( This );
			}
		}
		
		if( !window.requestAnimationFrame ){
			clearTimeout( This.prop('timer') );
		}else{
			cancelAnimationFrame( This.prop('timer') );
		}
		run();
		
		return This;
	},
	myScale:function(scale, time, fx, fn){
		if(typeof time=='undefined'){
			time=400; fx='linear';
		}
		if(typeof time=='string'){
			if(typeof fx=='function'){
				fn=fx;　fx=time; time=400;
			}else if(typeof fx=='undefined'){
				fx=time; time=400;
			}
		}else if(typeof time=='function'){
			fn=time; time=400; fx='linear';
		}else if(typeof time=='number'){
			if(typeof fx=='function'){
				fn=fx; fx='linear';
			}else if(typeof fx=='undefined'){
				fx='linear';
			}
		}
		
		var This = $(this);
		
		if( This.attr('myScale-width') ){
			var oldW = parseInt(This.attr('myScale-width'));
			var oldH = parseInt(This.attr('myScale-height'));
			var oldL = parseInt(This.attr('myScale-left'));
			var oldT = parseInt(This.attr('myScale-top'));
			var oldR = parseInt(This.attr('myScale-right'));
			var oldB = parseInt(This.attr('myScale-bottom'));
		}else{
			var oldW = parseInt(This.css('width'));
			var oldH = parseInt(This.css('height'));
			var oldL = parseInt(This.css('left'));
			var oldT = parseInt(This.css('top'));
			var oldR = parseInt(This.css('right'));
			var oldB = parseInt(This.css('bottom'));
			
			This.attr({
				'myScale-width':oldW,
				'myScale-height':oldH,
				'myScale-left':oldL,
				'myScale-top':oldT,
				'myScale-right':oldR,
				'myScale-bottom':oldB
			});
		}
		
		var w = oldW * scale;
		var h = oldH * scale;
		var l = oldL - ( w - oldW ) / 2;
		var t = oldT - ( h - oldH ) / 2;
		var r = oldR - ( w - oldW ) / 2;
		var b = oldB - ( h - oldH ) / 2;
		
		var json = {};
		json.width = w;
		json.height = h;
		
		if( !isNaN(l) && $.type(l) == 'number' ){
			json.left = l;
		}else if( !isNaN(r) && $.type(r) == 'number' ){
			json.right = r;
		}
		if( !isNaN(t) && $.type(t) == 'number' ){
			json.top = t;
		}else if( !isNaN(b) && $.type(b) == 'number' ){
			json.bottom = b;
		}
		
		This.myMove(json, time, fx, function(){
			fn && fn.call(this);
		});
		
		return This;
	},
	myScroll:function(target, time, fx){
		if(typeof time=='undefined'){
			time=600; fx='linear';
		}
		if(typeof time=='string'){
			fx=time; time=600;
		}else if(typeof time=='number'&& typeof fx=='undefined'){
			fx='linear';
		}
		
		var This = $(this);
		var top = This.scrollTop();

		
		var startTime = new Date().getTime();
		
		var run = function(){
			var nowTime = new Date().getTime();
			var t = time - Math.max(0, startTime - nowTime + time);
			
			var value = $.tween[fx](t, top, target - top, time);
			This.scrollTop( value );
			
			if( t != time ){
				if( !window.requestAnimationFrame ){
					This.prop( 'timer', setTimeout(run, 16.7) );
				}else{
					requestAnimationFrame(run);
				}
			}
		}
		
		run();
		
		return This;
	},
	myRoMove:function(deg, time, fx, fn){
		var This = $(this);
		
		if(typeof time=='undefined'){
			time=600; fx='linear';
		}
		if(typeof time=='string'){
			if(typeof fx=='function'){
				fn=fx;　fx=time; time=600;
			}else if(typeof fx=='undefined'){
				fx=time; time=600;
			}
		}else if(typeof time=='function'){
			fn=time; time=600; fx='linear';
		}else if(typeof time=='number'){
			if(typeof fx=='function'){
				fn=fx; fx='linear';
			}else if(typeof fx=='undefined'){
				fx='linear';
			}
		}
		
		var nowDeg = $.angleChange( This );
		var startTime = new Date().getTime();
		
		var run = function(){			
			var nowTime = new Date().getTime();
			var t = time - Math.max(0, startTime - nowTime + time);
			
			var value = $.tween[fx](t, nowDeg, deg - nowDeg, time);
			
			This.myRotate(value);
			
			if( t != time ){
				if( !window.requestAnimationFrame ){
					This.prop( 'roTimer', setTimeout(run, 16.7) );
				}else{
					This.prop( 'roTimer', requestAnimationFrame(run) );
				}
			}else{
				fn && fn.call( This );
			}
		}
		
		if( !window.requestAnimationFrame ){
			clearTimeout( This.prop('roTimer') );
		}else{
			cancelAnimationFrame( This.prop('roTimer') );
		}
		run();
		
		return This;
	},
	myRotate:function(deg){
		var This = $(this);
		
		if( $.supCss3('transform') ){
			var m = 'rotate('+deg+'deg)';
			This.css({ WebkitTransform:m, MozTransform:m, transform:m });
		}else{
			var IE = This.get(0).currentStyle ? true : false;
			
			if( IE ){
				var filter = This.get(0).currentStyle['filter'];
				if( filter.indexOf('Matrix') != -1 ){
					filter = filter.replace(/(progid).+(expand\"\)\s)/g, '');
				}
				
				var a = Math.round(Math.cos(deg/180*Math.PI)*100)/100,
					b = Math.round(Math.sin(deg/180*Math.PI)*100)/100,
					c = -b, d = a;
				
				var f = 'progid:DXImageTransform.Microsoft.Matrix( M11='+a+', M12='+c+', M21='+b+' , M22='+d+', SizingMethod="auto expand") ' + filter;
				
				This.css({ filter:f });
				
				var l = ( This.parent().outerWidth() - This.outerWidth() ) / 2;
				var t = ( This.parent().outerHeight() - This.outerHeight() ) / 2;
				
				This.css({ left:l, top:t });
			}else{
				console.log( '浏览器不支持旋转特性' );
			}
		}
		return This;
	}
});