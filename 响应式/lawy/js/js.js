// JavaScript Document
$(function(){
	$(".all").click(function(){
		$(".ly-alert-1").show();	
	});	
})

//ly 2014.12.23
//搜索页面中的切换
$(function(){
	$(".head-top-p1 span").click(function(){
		$(this).addClass("cur").parent("li").siblings().children("span").removeClass("cur");	
	});	
})


//ly 2014.12.22
//detail页面中的切换
$(function(){
	$(".ly-alert-1-wrap-p1-span1").click(function(){
		$(".ly-alert-1-wrap-p1").hide();
		$(".ly-article-1-wrap-block").show();
	});	
})

$(function(){
	$(".ly-article-1-wrap-block").click(function(){
		$(".ly-article-1-wrap-block").hide();
		$(".ly-alert-1-wrap-p1").show();	
	});	
})


//ly 2014.12.22
//result页面中排序的切换
$(function(){
	$(".ly-paixu-wrap li").click(function(){
		$(this).addClass("cur").siblings("li").removeClass("cur");	
	})	
})


//ly 2014.12.22
//获取login页body的可视高度
window.onload = function()
{
	var oDiv1 = document.getElementsByTagName("body")[0];
	oDiv1.style.height = document.documentElement.clientHeight  + "px";	
}



//加载内容
var myScroll,
	pullDownEl, pullDownOffset,
	pullUpEl, pullUpOffset,
	generatedCount = 0;
	
function pullDownAction () {
	
}
	
function pullUpAction () {
	setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
		var el, li, i;
		

		for (i=0; i<3; i++) {
			
			li = $('<li><dl class="ly-content-dl1 ft16"><dt class="corF fl"><p class="ly-content-dl1-dt4">上'+i+'</p></dt><dd class="fl"><a href="#"> <p class="cor333">汪洋与海南xx股份有限责任</p><p class="cor80">案由:</p> <p class="cor80">审理法院:</p> </a></dd></dl></li> ');
			
			$('#thelist').append(li);
		}
		
		myScroll.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
	}, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
}

function loaded() {
	pullDownEl = document.getElementById('pullDown');
	pullDownOffset = pullDownEl.offsetHeight;
	pullUpEl = document.getElementById('pullUp');	
	pullUpOffset = pullUpEl.offsetHeight;
	
	myScroll = new iScroll('wrapper', {
		useTransition: true,
		topOffset: pullDownOffset,
		onRefresh: function () {
			if (pullDownEl.className.match('')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '';
			} else if (pullUpEl.className.match('loading')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
			}
		},
		onScrollMove: function () {
			if (this.y > 5 && !pullDownEl.className.match('flip')) {
				pullDownEl.className = 'flip';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '';
				this.minScrollY = 0;
			} else if (this.y < 5 && pullDownEl.className.match('flip')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '';
				this.minScrollY = -pullDownOffset;
			} else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
				pullUpEl.className = 'flip';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Release to refresh...';
				this.maxScrollY = this.maxScrollY;
			} else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
				this.maxScrollY = pullUpOffset;
			}
		},
		onScrollEnd: function () {
			if (pullDownEl.className.match('flip')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '';				
				pullDownAction();	// Execute custom function (ajax call?)
			} else if (pullUpEl.className.match('flip')) {
				pullUpEl.className = 'loading';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';				
				pullUpAction();	// Execute custom function (ajax call?)
			}
		}
	});
	
	setTimeout(function () {document.getElementById('wrapper').style.left = '0';}, 800);
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);











