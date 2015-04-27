define(function(require,exports){
	function init(obj1,obj2,hash)
	{
		for(var i=0;i<obj2.length;i++)
		{
			if(obj2[i].dataset.hash == 'about')
			{
				startMove(obj2[i],{opacity:0},function(){
					window.location.hash = hash;
					require('../show.js').show(obj1,obj2);	
				});
			}
		}	
	}	
	
	exports.init = init;
});