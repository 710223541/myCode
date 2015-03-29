/*
	作者：Ghost 
	时间：2015-03-20
	功能块：弹出层模态框
	功能点：
		1、点击接口按钮弹出模块化和背景
		2、关闭按钮功能
		3、点击确定后的动作功能接口
*/

define(function(require,exports,module){
	
	function modals(openBtn,closeBtn,commitBtn,content,fadeBg,url,jsonData)
	{
		openBtn.click(function()
		{
			content.show();	
			fadeBg.show();
		})
		
		closeBtn.click(function()
		{
			content.hide();
			fadeBg.hide();			
		})
		
		commitBtn.click(function(){
			content.hide();
			fadeBg.hide();	
			modalAjax(url,jsonData);
		})
	}
	
	//用于用户数据提交
	function modalAjax(url,jsonData)
	{
		$.ajax({
			url:url,
			type:"POST",
			data:{"input":jsonData},
			dataType:"json",
			async:false,
			success: function(data)
			{
				//测试
				$.each(data,function(i,d){
					console.log(d.name);
					console.log(d.sex);	
				})
				
			},
			error: function(XMLHttpRequest, textStatus, errorThrown)
			{
				//alert(XMLHttpRequest.status);
				//alert(XMLHttpRequest.readyState);
				//alert(textStatus);
				console.log(XMLHttpRequest.status);
			}
					
		})
	}
	
	exports.modals = modals;
	//exports.modalAjax = modalAjax;	
})
