define(function(require,exports){
	function hide(obj1,obj2)
	{
		for(var i=0;i<obj1.length;i++)
		{
			obj1[i].onclick = function()
			{
				window.bBtn = false;
				var hash = this.dataset.hash;
				var bHash = window.location.hash.substring(1) || 'index';
				switch(bHash)
				{
					case 'index' : 
						require('./index/indexOut.js').init(obj1,obj2,hash);
					break;
					
					case 'demo' : 
						require('./demo/demoOut.js').init(obj1,obj2,hash);
					break;
					
					case 'blog' : 
						require('./blog/blogOut.js').init(obj1,obj2,hash);
					break;
					
					case 'about' : 
						require('./about/aboutOut.js').init(obj1,obj2,hash);
					break;
				}				
			}	
		}

	}	
	
	exports.hide = hide;
});