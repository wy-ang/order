var liHtml,arr,newArr,newStrnewArr,iptVal;
var confirmBtn = $('.confirm');
var ulDom = $('.order ul');
var lastHtml = $('.order ul').children().last();
var add = $('.add');
var remove = $('.remove');
var arr = [];
/**
  *构建DOM
  */
  function data(){

  }
  data()
/**
  *处理数据存储
  *处理数组分割
  *拼接DOM
  */
confirmBtn.live('click',function(){
	if($('input[type=text]').val('')){
		alert('请输入内容');
		$('input[type=text]').val('').focus();
		return false;
	}
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
	$(liHtml).insertBefore(lastHtml); 
	$('.addOrder').hide();
});
/**
  *处理数据存储函数
  */
function getArr(){
	var getVal = localStorage.getItem("key");
	newArr = arr.push(getVal);
	arrJoin = arr.join("");
	var s = arrJoin.split(',');
	s.shift();
	for(var i = 0;i<s.length;i++){
		liHtml = '<li><span>'+s[i]+'</span><em class="remove">删除</em></li>';
		console.log(s[i]);
		$(liHtml).insertBefore(lastHtml); 
	}
	/**
	  *处理随机数
	  */
	$('.submit').live('click',function(){
		if(s !== 0){
			var randomN = Math.floor(Math.random() * s + 1)-1;
			console.log(randomN)
			alert(arr[randomN]);
		}
	})
	 //console.log(getVal);
}
getArr();
/**
  *处理添加事件
  */
add.live('click',function(){
	$('.addOrder').show();
	$('input[type=text]').val('').focus();
	add.hide();
})


$('.cancel').live('click',function(){
	$('.addOrder').hide();
})

/**
  *处理删除事件
  */
remove.live('click',function(){
	var removeList = confirm('确定删除该项么？');
	if(removeList){
		$(this).parent().remove();
		localStorage.clear();
	}
})

ulDom.mouseover(function(){
	if($('.addOrder').is(':hidden')){
		add.show();
	}
})