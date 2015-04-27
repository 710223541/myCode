define(function(require,exports){
	var nav_aBtn = document.getElementById('nav_list').getElementsByTagName('a');
	var cont_sec = document.getElementById('index_content').getElementsByTagName('section');
	window.bBtn = true;
	window.onhashchange = function(){
		if(window.bBtn)
		{
			window.location.reload();	
		}
	};
	
	require('show.js').show( nav_aBtn , cont_sec );
	
	require('hide.js').hide( nav_aBtn , cont_sec );
})
