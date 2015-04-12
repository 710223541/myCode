define(function(require,exports){
	function show(obj1,obj2)
	{
		var	hash = window.location.hash.substring(1) || 'index';

		for(var i=0;i<obj2.length;i++)
		{
			obj2[i].style.display = 'none';
			if(hash == obj2[i].dataset.hash)
			{
				obj2[i].style.display = 'block';
				switch(hash)
				{
					case 'index' :
						require('./index/indexIn.js').init(obj2[i]);	
					break;
					case 'demo' :
						require('./demo/demoIn.js').init(obj2[i]);
					break;
					case 'blog' :
						require('./blog/blogIn.js').init(obj2[i]);
					break;
					case 'about' :
						require('./about/aboutIn.js').init(obj2[i]);
					break;
				}	
			}
		}			
	}
	exports.show = show;
})
