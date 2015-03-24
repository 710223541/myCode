/*
	作者：Ghost 
	时间：2015-03-24
	功能块：表单ajax提交
	功能点：
		1、接收参数，异步提交给服务器
		2、根据服务器返回状态，进行对应处理
*/
define(function(require,exports,module){
		
	function ajax(data)
	{
		$.ajax({
			url:data.url,
			type:data.type ? data.type : "POST",
			data:data.data ? data.data : {},   //注意不要返回XML格式
			dataType:data.dataType ? data.dataType : "json",
			async:data.async ? data.async : false,
			success:data.callBack ? data.callBack : console.log("成功！"),
			error:function(XMLHttpRequest, textStatus, errorThrown){
				//alert(XMLHttpRequest.status);
				//alert(XMLHttpRequest.readyState);
				//alert(textStatus);
				console.log("error:"+XMLHttpRequest.status);	
			}	
		});		 
	}
	
	exports.ajax = ajax;		
})