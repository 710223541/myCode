define(function(require,exports,module){
	
	function tab(obj1,obj2)
	{
		obj1.each(function(index){			
			$(this).click(function(){
				$(this).addClass("active")
				.siblings().removeClass("active");
				obj2.eq(index).addClass("active")
				.siblings().removeClass("active");	
			});
			
		});	
	}	
	
	exports.tab = tab;
});