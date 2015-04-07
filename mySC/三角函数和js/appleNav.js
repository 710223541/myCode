/*
	作者：墨飞
	2015.04.06
	Email:ghost199006@126.com
	QQ:1434831689
*/
function appleNav()
{
	this.setting = {
		oParent:'',
		oChilds:'',	
	};
}

appleNav.prototype = {
	init : function(opt)
	{
		extend(this.setting,opt);
		var This = this;
		document.onmousemove = function(ev)
		{
			var ev = ev || window.event;
			This.fnCp(ev);	
		}
	},
	fnCp : function(ev)
	{
		var arr = [];
		for(var i=0;i<this.setting.oChilds.length;i++)
		{
			var X = this.setting.oChilds[i].offsetLeft+(this.setting.oChilds[i].offsetWidth/2);
			var Y = this.setting.oChilds[i].offsetTop+(this.setting.oChilds[i].offsetHeight/2)+this.setting.oParent.offsetTop;			
			var a = ev.clientX - X;
			var b = ev.clientY - Y;
			var c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));	
			var scale = 1 - c/300;
			if(scale<0.5)
			{
				scale = 0.5;	
			}
			this.setting.oChilds[i].style.width = scale*128+'px';
			this.setting.oChilds[i].style.height = scale*128+'px';
		}
	}	
}
function extend(obj1,obj2)
{
	for(var attr in obj2)
	{
		obj1[attr] = obj2[attr];	
	}
}