define(function(require,exports,module){
	
	function scrollSpy(obj1,obj2,cn)
	{
		var arr = [];
		
		$(obj1).children().each(function(){
			arr.push($(this).offset().top);	
		})
		
		$(window).on('scroll',function(){
			
			var scrollTop = $(this).scrollTop();
			console.log(scrollTop);
			for(var i=0;i<arr.length;i++)
			{
				if(arr[i] > (scrollTop+20))
				{
					$(obj2).children().removeClass(cn)
					.eq(i).addClass(cn);
					return;
				}
			}	
		})		
	}
	
	exports.scrollSpy = scrollSpy;
})