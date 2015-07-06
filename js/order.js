var liHtml;
var newStr;
var confirm = $('.confirm');
var lastHtml = $('.order ul').children().last();
var add = $('.add');
var remove = $('.remove');
/**
  *获取value值
  *拼接DOM
  */
confirm.live('click',function(){
	var iptVal = $('.order input:text').val();
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
	$(newStr).insertBefore(lastHtml);
	console.log(lastHtml.html());
	var arr = [];
	var newArr = arr.push(newStr);
	var arrJoin = arr.join("");
}
getArr();
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