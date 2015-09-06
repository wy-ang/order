var confirmBtn = $('.confirm');
var ulDom = $('.order ul');
var add = $('.add');
var remove = $('.remove');

/**
 * 添加Dom
 * @param 用户输入的数据
 */
var addDom = function(opVal){
	var liHtml = '<li><span>'+opVal+'</span><em class="remove">删除</em></li>';
	$(liHtml).insertBefore($('.addOrder'));
}

/**
  *处理数据存储
  *处理数组分割
  *拼接DOM
  */
var dataArr = function(){
	var iptVal = $('.order input:text').val();
	addDom(iptVal);
	var liIndex = ulDom.find('li').not('.addOrder,.last');
	liIndex.each(function () {
		var $this = $(this);
		var $index = $this.index();
		$this.attr('iptId',$index);
		iptId = $this.attr('iptId');
		localStorage.setItem('name'+$index,'{name'+':'+$this.find('span').text()+',iptId'+':'+iptId+'}');
	})
	$('.addOrder').hide();
}
console.log($('input[type=hidden]').val());
/**
 *处理刷新页面数据存储
 */ 
var loadData = function(){
	for(var i=0;i<localStorage.length;i++){
		var loadArr = localStorage.getItem('name'+i);
		var jsonObj = eval('('+loadArr+')');
		addDom(jsonObj.name);
	}
}
loadData();


$('input[type=text]').keydown(function(e){
	if(e.which == 13){
		confirmBtn.click();
	}
})

confirmBtn.live('click',function(){
	if($('input[type=text]').val()==''){
		alert('请输入内容');
		$('input[type=text]').val('').focus();
		return false;
	}
	dataArr();
});

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
	var dataLength = localStorage.length;
		console.log(dataLength);
	var removeList = confirm('确定删除该项么？');
	if(removeList){
		$(this).parent().remove();
		for(var i=0;i<dataLength;i++){
			localStorage.removeItem('name'+i+'');
		}

	}
})

ulDom.live('mouseover mouseout',function(e){
	if(e.type=='mouseover'){
		add.show();
	}else{
		add.hide();
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
