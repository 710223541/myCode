define(function(require,exports){
	function init(obj)
	{
		startMove(obj,{width:960,height:600},function(){
			window.bBtn = true;	
		});	
	}	
	
	exports.init = init;;
});