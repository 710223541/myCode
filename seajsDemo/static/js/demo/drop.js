define(function(require,exports,module){
	
	function drop(obj1,obj2,obj3)
	{
		var bOff = true;
		obj1.click(function()
		{
			obj2.stop().slideToggle("fast");	
		})
		
		//obj3.each
		drop2();
	}
	
	function drop2()	
	{
		alert(2);
	}	
	
	exports.drop = drop;
	
	exports.drop2 = drop2;
})