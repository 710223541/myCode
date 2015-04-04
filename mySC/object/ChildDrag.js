/*
	继承的drag，增加限制范围功能
*/

function ChildDrag(id)
{
	Drag.call(this,id);
}

extend(ChildDrag.prototype,Drag.prototype);

ChildDrag.prototype.fnMove = function(ev)
{
	var L = ev.clientX - this.disX;
	var T = ev.clientY - this.disY;
	
	if(L<0)
	{
		L = 0;	
	}else if(L>document.documentElement.clientWidth - this.obj.offsetWidth)
	{
		L = document.documentElement.clientWidth - this.obj.offsetWidth;
	}
	
	if(T<0)
	{
		T = 0;	
	}else if(T>document.documentElement.clientHeight - this.obj.offsetHeight)
	{
		T = document.documentElement.clientHeight - this.obj.offsetHeight;
	}
	
	this.obj.style.left = L+"px";
	this.obj.style.top = T+"px";
}
