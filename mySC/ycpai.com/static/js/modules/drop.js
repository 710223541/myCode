define(function(require,exports,module){
	
	function drop(obj1,obj2,obj3)
	{
		var bOff = true;
		obj1.click(function()
		{
			obj2.stop().slideToggle("fast");	
		})
		
		obj3.click(function()
		{
			obj2.hide();	
		});
	}
	
	exports.drop = drop;
})