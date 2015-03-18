define(function(require,exports,module){
	
	var aA = document.getElementsByTagName("a");
	var aDiv = document.getElementsByTagName("div");
	
	/*window.bBtn = true;
	
	window.onhashchange = function(){
		if(window.bBtn){
			window.location.reload();
		}
	};*/
	
	window.bBtn = true;
	
	window.onhashchange = function()
	{
		if(window.bBtn)
		{
			window.location.reload();
		}	
	}

	require("show").show(aA,aDiv);
		
	require("hide").hide(aA,aDiv);	
})