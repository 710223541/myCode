$(function(){
	var arr = [];
	$(".con").children().each(function(){
		arr.push( $(this).offset().top );
	});		//缓存高度
			
	$(window).on("scroll",function(){
		var scroll = $(this).scrollTop();
		for(var i=0; i< arr.length; i++){
			if( arr[i] > scroll-500 ){
				$(".nav").children().removeClass("current").eq(i).addClass("current");
				return;
			}
		}
	});		
});