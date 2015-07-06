var liHtml,arr,newStrnewArr,iptVal;
var confirm = $('.confirm');
var lastHtml = $('.order ul').children().last();
var add = $('.add');
var remove = $('.remove');
/**
  *获取value值
  *拼接DOM
  */
confirm.live('click',function(){
	iptVal = $('.order input:text').val();
	liHtml = '<li><span>'+iptVal+'</span><em class="add">添加</em><em class="remove">删除</em></li>';
	localStorage.setItem("name",liHtml);
	$('.addOrder').hide();
	getArr();
});
/**
  *处理数据存储函数
  */
function getArr(){
	newStr = localStorage.getItem("name");
	console.log(newStr);
	$(newStr).insertBefore(lastHtml);  //TODO  此处不妥，有空试下for循环
	console.log(lastHtml.html());
	arr = ["测试数组1","测试数组2","测试数组3","测试数组4","测试数组5"];
	newArr = arr.push(newStr);
	var arrJoin = arr.join("");
	 
}
getArr();
/**
  *处理随机数
  */
$('.submit').live('click',function(){
	var randomN = Math.floor(Math.random() * newArr + 1)-1;
	alert(arr[randomN]); 
})
/**
  *处理添加事件
  */
add.live('click',function(){
	$('.addOrder').show();
})
/**
  *处理删除事件
  */
remove.live('click',function(){
	$(this).parent().remove();
	localStorage.clear();
})