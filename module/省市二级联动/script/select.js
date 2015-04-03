function $tag()
{
	if(arguments.length==1)
	{
		return document.getElementsByTagName(arguments[0]);	
		
	}else if(arguments.length==2)
	{
		return document.getElementById(arguments[0]).getElementsByTagName(arguments[1]);	
	}
}

function Sel(id)
{
	this.aSel = $tag(id,'select');		
}

Sel.prototype = {
	init : function()
	{
		var _this = this;
		this.setState(_this);
		this.setCity(this.aSel[0].value);
		this.aSel[0].onchange = function()
		{
			_this.change(this);	
		}	
	},
	setState : function(_this)
	{
		for(var i=0;i<state.length;i++)
		{
			var oPt = document.createElement("option");
			oPt.innerHTML = state[i].data;
			oPt.setAttribute('value',state[i].id);
			_this.aSel[0].appendChild(oPt);		
		}	
	},
	setCity : function(val)
	{
		var _this = this;
		var target = "city_"+val;
		var len = city[target].length;
		this.aSel[1].innerHTML = "";
		for(var i=0;i<len;i++)
		{
			var oPt = document.createElement("option");
			oPt.innerHTML = city[target][i].data;
			oPt.setAttribute('value',city[target][i].id);
			_this.aSel[1].appendChild(oPt);	
		}			
	},
	change : function(t)
	{
		this.setCity(t.value);	
	}
}