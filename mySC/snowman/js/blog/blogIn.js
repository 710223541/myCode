define(function(require,exports){
	function init(obj)
	{
		startMove(obj,{opacity:100},function(){
			window.bBtn = true;		
		});	
	}	
	
	exports.init = init;
});