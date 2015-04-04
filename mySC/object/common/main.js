/*
	公用方法 
*/

/*通过id获取元素*/
function $(id)
{
	return document.getElementById(id);	
}

/*继承属性赋值*/
function extend(obj1,obj2)
{
	for(var attr in obj2)
	{
		obj1[attr] = obj2[attr];
	}	
}
/*
	拖拽
*/
function Drag()
{
	this.obj = null;
	this.disX = 0;
	this.disY = 0;
}

Drag.prototype.init = function(id,toDown,toUp)
{
	var _this = this;
	this.obj = $(id);
	this.obj.onmousedown = function(ev)
	{
		var ev = ev || window.event;
		_this.fnDown(ev);
		toDown();
		document.onmousemove = function(ev)
		{
			var ev = ev || window.event;
			_this.fnMove(ev);
		}
		document.onmouseup = function()
		{
			_this.fnUp();	
			toUp();
		}
		
		//ev.cancelBubble = true;	
		return false;
	}		
}

Drag.prototype.fnDown = function(ev)
{
	this.disX = ev.clientX - this.obj.offsetLeft;
	this.disY = ev.clientY - this.obj.offsetTop;	
}

Drag.prototype.fnMove = function(ev)
{
	this.obj.style.left	= ev.clientX - this.disX +　"px";
	this.obj.style.top = ev.clientY - this.disY +　"px";
}

Drag.prototype.fnUp = function()
{
	document.onmousemove = null;
	document.onmouseup = null;	
}