define(function(require,exports,module)
{
	function show(cont)
	{
		console.log(cont);	
	}
	
	function tag(c)
	{
		console.log(c);
	}
	
	exports.show = show;
	exports.tag = tag;

})

