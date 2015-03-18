// JavaScript Document
define(function(require,exports,module){
	
	function hide(aA,aDiv)
	{
		for(var i=0;i<aA.length;i++)
		{
			aA[i].onclick = function()
			{
				var hash = this.dataset.hash;
				
				window.location.hash = hash;
				
				console.log(hash);
				
				for(var i=0;i<aDiv.length;i++)
				{
					aDiv[i].style.display = "none";
					
					if(aDiv[i].dataset.hash == hash)
					{
						aDiv[i].style.display = "block";
					}
				}
			}
		}	
	}
	
	exports.hide = hide;
})