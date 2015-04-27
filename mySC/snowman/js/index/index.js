define(function(require,exports)
{
	function move1(obj)
	{
		var oWrap=document.getElementById(obj);
		var aImg=oWrap.getElementsByTagName("img");
		var iMax=6;
		for(var i=0;i<aImg.length;i++)
		{
			aImg[i].startX=parseInt(getStyle(aImg[i],"left"));
		}
		oWrap.onmousemove=function(ev)
		{
			var iX=ev.clientX-(getX(this)+this.offsetWidth/2);
			for(var i=0;i<aImg.length;i++)
			{
				var iZindex=getStyle(aImg[i],"zIndex");
				var iDisL=-parseInt(iX/iMax*(iMax-iZindex)/5);
				aImg[i].style.left=aImg[i].startX+iDisL+"px";
			}
		};
		
		function getStyle(obj,attr)
		{
			if( obj.currentStyle){
					return obj.currentStyle[attr];        
			}
			return getComputedStyle(obj)[attr];        
		}
		function getX(obj)
		{
			var iLeft=0;
			while(obj)
			{
				iLeft+=obj.offsetLeft;
				obj=obj.offsetParent;
			}
			return iLeft;
		};		
	}
	
	function tab(obj)
	{
		var oList=document.getElementById(obj);
		var aLi=oList.children;
		var oPrev=document.getElementById("prev");
		var oNext=document.getElementById("next");
		var arr=[];
		//arr.unshift(arr.pop());
		//arr.push(arr.shift());
		for(var i=0;i<aLi.length;i++)
		{
			var oSpan=aLi[i].children[0];
			arr[i]={left:getStyle(aLi[i],"left"),opacity:getStyle(aLi[i],"opacity"),scale:getStyle(aLi[i],"-webkit-transform"),zIndex:getStyle(aLi[i],"z-index"),alpha:getStyle(oSpan,"opacity")};
		}
		oPrev.onclick=function()
		{
			arr.unshift(arr.pop());
			toStyle();
		};
		oNext.onclick=function()
		{
			arr.push(arr.shift());
			toStyle();
		};
		function toStyle()
		{
			for(var i=0;i<aLi.length;i++)
			{
				var oSpan=aLi[i].children[0];
				aLi[i].style.left=arr[i].left;
				aLi[i].style.opacity=arr[i].opacity;
				aLi[i].style.WebkitTransform=arr[i].scale;	
				aLi[i].style.zIndex=arr[i].zIndex;	
				oSpan.style.opacity=arr[i].alpha;			//arr[i]={left:getStyle(aLi[i],"left"),opacity:getStyle(aLi[i],"opacity"),scale:getStyle(aLi[i],"-webkit-transform")};
			}	
		}
		
		function getStyle(obj,attr)
		{
			if( obj.currentStyle){
					return obj.currentStyle[attr];        
			}
			return getComputedStyle(obj)[attr];        
		}	
	}
	
	exports.move1 = move1;	
	exports.tab = tab;
})