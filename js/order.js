var confirmBtn = $('.confirm');
var ulDom = $('.order ul');
var add = $('.add');
var remove = $('.remove');

/**
 * @param opVal 用户输入的数据
 * @param liId  数据列表标示
 */
var addDom = function(opVal,liId){
	var liHtml = '<li iptId='+liId+'><span>'+opVal+'</span><em class="remove">删除</em></li>';
	$(liHtml).insertBefore($('.addOrder'));
}

/**
 *刷新页面数据存储
 */ 
var loadData = function(){
	for(var i=0;i<localStorage.length;i++){
		var loadArr = localStorage.getItem(localStorage.key(i));
		var jsonObj = eval('('+loadArr+')');
		addDom(jsonObj.name,jsonObj.iptId);
		console.log(localStorage.key(i));
	}
}
loadData();

/**
 * 回车提交事件
 */
$('input[type=text]').live('keydown',function(e){
	if(e.which == 13){
		confirmBtn.click();
	}
});

/**
 * 获取数据
 * 存储数据
 */
confirmBtn.live('click',function(){
	if($('input[type=text]').val()==''){
		alert('请输入内容');
		$('input[type=text]').val('').focus();
		return false;
	}
	var iptVal = $('.order input:text').val();
	addDom(iptVal);
	var liIndex = ulDom.find('li').not('.addOrder,.last');
	liIndex.each(function () {
		var $this = $(this);
		var $index = $this.index();
		$this.attr('iptId',$index);
		iptId = $this.attr('iptId');
		localStorage.setItem("name"+$index,"{name:'"+$this.find('span').text()+"',iptId:"+iptId+"}");
	})
	$('.addOrder').hide();
});

/**
  *添加事件
  */
add.live('click',function(){
	$('.addOrder').show();
	$('input[type=text]').val('').focus();
})

/**
 * 取消事件
 */
$('.cancel').live('click',function(){
	$('.addOrder').hide();
})

/**
  *删除事件
  */
remove.live('click',function(){
	var removeList = confirm('确定删除该项么？');
	if(removeList){
		$(this).parent().remove();
		var parentId = $(this).parent().attr('iptId');
		localStorage.removeItem('name'+parentId+'');
	}
})


var a = function(callback){

		aaa = 1;

		callback();

}

a(function(){
	aaa = 2;
	//console.log(aaa);
})
