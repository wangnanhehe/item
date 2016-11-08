;(function($){
	$(".left ol").on("click","li",function(){
		var index=$(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$('.left ul').find('li').eq(index).css('left','0').siblings().css('left','100%');
		console.log(index);
	})

	var num=0;
	$('.btn').on('click',function(){
		num++;
		if(num%2==0){
			$('.header_box ul').css("left","-100%");
		}else{
			$('.header_box ul').css("left","0");
		}
	})
})(jQuery)