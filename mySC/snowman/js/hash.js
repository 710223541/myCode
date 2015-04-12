var nav_aBtn = document.getElementById('nav_list').getElementsByTagName('a');
var cont_sec = document.getElementById('index_content').getElementsByTagName('section');
var i = 0;
var len = nav_aBtn.length;

for(i;i<len;i++)
{
	nav_aBtn[i].onclick = function()
	{
		var hash = this.dataset.hash;
		
		if(hash != 'index')
		{
			window.location.hash = hash;	
		}else{
			window.location.hash = '';	
		}

		fnSecShow(hash);
	}	
}

var bHash = window.location.hash.substring(1) || 'index';
fnSecShow(bHash);

function fnSecShow(hash)
{
	for(var i=0;i<cont_sec.length;i++)
	{
		if(hash == cont_sec[i].dataset.hash)
		{
			cont_sec[i].style.display = 'block';	
		}else{
			cont_sec[i].style.display = 'none';	
		}
	}		
}

window.onhashchange = function()
{
	window.location.reload();	
}