define(function(require,exports){
	function init(obj)
	{
		startMove(obj,{opacity:100},function(){
			window.bBtn = true;	
		});	
		
		require('./index.js').move1("index_main");
		require('./index.js').tab("list");
	}	
	
	exports.init = init;;
});