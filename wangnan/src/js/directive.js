
function pageTitle($rootScope){
	return {
		restrict : "A",
		link : function(scope,element){
			$rootScope.$on('$stateChangeStart',function(event,toState){
				//console.log(toState.data) //$stateChangeConcel $stateChangeSuccess $stateChangeError $stateNo1Found
				var title = "当前页面--";
				if(toState.data && toState.data.title){
					title+=toState.data.title;
				}
				element.text(title);
			})
		}
	}
}


function pageTab(){
	return {
		restrict : "A",
		link : function(scope, element){
			$("#nav").on("click","span",function(){
				$(this).addClass("bg").siblings().removeClass("bg");
				var index=$(this).index();
				$("#d_box>div").eq(index).show().siblings().hide();
			})

			$("#x_nav").on("click","span",function(){
				var i=$(this).index();
				$(this).addClass("no").siblings().removeClass("no");
				$("#x_box").find("ul").eq(i).show().siblings().hide();
			})
		}
	}
}

function yinDao(){
	return {
		restrict : "A",
		link : function(scope, element){
			var swiper = new Swiper('.swiper-container',{
				pagination: '.swiper-pagination' , //显示页面上的分页器
				paginationClickable:true, //可以用手指去切换
				autoplay:5000,/*自动播放时间设定*/
				//loop:true,
				//autoplayDisableOnInteraction:false //循环播放
				onTouchEnd:function(swiper){
					var index=swiper.activeIndex;
					//console.log(index);
					var h2=document.getElementsByTagName("h2");
					for(var i=0;i<h2.length;i++){
						h2[i].style.display="none";
					}
					h2[index].style.display="block";
				}
			});
		}
	}
}

function pageSwiper(){
	return {
		restrict : "A",
		link : function(scope, element){
			new Swiper('.swiper-container',{
				pagination: '.swiper-pagination' , //显示页面上的分页器
				paginationClickable:true, //可以用手指去切换
				autoplay:2000,/*自动播放时间设定*/
				loop:true,
				autoplayDisableOnInteraction:false //循环播放

			});
		}
	}
}

function pageIscroll($timeout){
	return {
		restrict : "A",
		link : function(scope, element){
			/*if(scope.$last === true){
				$timeout(function(){
					scope.$emit("ngRepeatFinished")
				})
			}*/
			setTimeout(function(){
				var home1 = new IScroll("#home",{
					click:true
				});
			},200)
		}
	}
}

function desPage(){
	return {
		restrict:"A",
		link:function(scope,element){
			$(".list").on("click","li",function(e){
				e.preventDefault();
				var pageId=$(this).index();
				$(".right section").eq(pageId).css("left","0").siblings().css("left","200%");	
				$(this).addClass("on").siblings().removeClass("on");
			})		
		}
	}
}
function foodDet(){
	return {
		restrict:"A",
		link:function(scope,element){
			$(".lis").on("click","li",function(){
			var index=$(this).index();
			$(".box").find("section").eq(index).css("left","0").siblings().css("left","100%");
			$(this).addClass("bg").siblings().removeClass("bg");
			})		
		}
	}
}

function chinaPage(){
	return {
		restrict:"A",
		link:function(scope,element){
			var arr=["西安","天津","上海","哈尔滨"]
			$(".city").on("click","li",function(){
				if($(this).hasClass("more")){
					
					if($(this).text()=="更多"){
						var str="";
						$.each(arr,function(key,val){
							str+="<li class='ap'>"+val+"</li>";
						})
						$(this).before(str);
						$(this).text("收起");
					}else{
						$(".ap").remove();
						$(this).text("更多");
					}
				}else{
					$(this).addClass("on").siblings().removeClass("on");
				}
			})
		}
	}
}

function rimPage(){
	return {
		restrict:"A",
		link:function(scope,element){
			$(".rim_nav").on("click","li",function(){
				var index=$(this).index();
				$(".rim_section").eq(index).css("left","0").siblings().css("left","100%");
				$(this).addClass("rim_on").siblings().removeClass("rim_on");
			})
		}
	}
}

function gongPage(){
	return {
		restrict:"A",
		link:function(scope,element){
			$(".arrange_nav").css({"position":"relative","top":"0"});
			$(".arrange_nav").on("click","li",function(){
				var index=$(this).index();
				$(".rim_section").eq(index).css("left","0").siblings().css("left","100%");
				$(this).addClass("arrange_on").siblings().removeClass("arrange_on");
			})
		}
	}
}

function swiperPage(){
	return {
		restrict:"A",
		link:function(scope,element){
			var swiper = new Swiper('.swiper-container', {
		    pagination: '.swiper-pagination',/*分页器容器的css选择器或HTML标签。*/
		    paginationClickable: true,/*此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换*/
		    autoplay:1000,/*自动播放时间设定*/
		    autoplayDisableOnInteraction:false/* 当设置为false时,用户操作之后(swipes,arrow以及pagination 点击)autoplay不会被禁掉*/
			});
		}
	}
}
function baikePage(){
	return {
		restrict:"A",
		link:function(scope,element){
			var data=new Date();
				var xingqi=data.getDay();
				switch(xingqi){
					case 1:xingqi="星期一";break;
					case 2:xingqi="星期二";break;
					case 3:xingqi="星期三";break;
					case 4:xingqi="星期四";break;
					case 5:xingqi="星期五";break;
					case 6:xingqi="星期六";break;
					case 7:xingqi="星期日";break;
				}
			$(".baike_tit").text(data.toLocaleDateString()+" "+xingqi);
		}
	}
}

angular.module("myapp")
     .directive("pageTitle",pageTitle)
     .directive("pageTab",pageTab)
     .directive("yinDao",yinDao)
     .directive("pageSwiper",pageSwiper)
	.directive("pageIscroll",pageIscroll)
	.directive("desPage",desPage)
	.directive("foodDet",foodDet)
	.directive("chinaPage",chinaPage)
	.directive("rimPage",rimPage)
	.directive("gongPage",gongPage)
	.directive("swiperPage",swiperPage)
	.directive("baikePage",baikePage)


