define(function(require,exports,module){
	function show(aA,aDiv){
		
		var firstHash = window.location.hash.substring(1) || "index";
		
		for(var i=0;i<aDiv.length;i++)
		{
			if(firstHash == aDiv[i].dataset.hash)
			{
				aDiv[i].style.display = "block";
			}
		}
		
	}
	
	exports.show = show;	
})