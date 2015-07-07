var liHtml,arr,newArr,newStrnewArr,iptVal;
var confirm = $('.confirm');
var ulDom = $('.order ul');
var lastHtml = $('.order ul').children().last();
var add = $('.add');
var remove = $('.remove');
var arr = [];
/**
  *获取value值
  *拼接DOM
  */
confirm.live('click',function(){
	iptVal = $('.order input:text').val();
	var oldVal = localStorage.getItem("key");
	var newVal = oldVal+','+iptVal;
	localStorage.setItem("key",newVal);
	newArr = arr.push(newVal);
	arrJoin = arr.join("");
	var s = arrJoin.split(',');
	for(var i = 0;i<s.length;i++){
		liHtml = '<li><span>'+s[i]+'</span><em class="remove">删除</em></li>';
	}
	getArr();
	$('.addOrder').hide();
});
/**
  *处理数据存储函数
  */
function getArr(){
	$(liHtml).insertBefore(lastHtml);  //TODO  此处不妥，有空试下for循环，
}
getArr();
/**
  *处理随机数
  */
$('.submit').live('click',function(){
	if(newArr !== 0){
		var randomN = Math.floor(Math.random() * newArr + 1)-1;
		alert(arr[randomN]); 
	}
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

ulDom.live('mous',function(){
	add.show()
})