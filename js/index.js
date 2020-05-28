
var hrefs = document.querySelectorAll("[data-href]");
for(var i = 0; i < hrefs.length; i++){
  //绑定touchstart事件
  hrefs[i].addEventListener("touchstart",function(){
  //核心语句
	window.location = this.getAttribute("data-href");
  },true);
}  

/*
	语言下拉
*/

var language = $(".header-language");

$("#language").click(function(){
	if(language.hasClass('active')){
		language.removeClass("active");
	}else{
		language.addClass("active");
	}
})

/*语言下拉END*/


/*菜单*/

$("#menu").click(function(){
	var $nav = $(".nav-menu");
	var b = "";
	//显示与隐藏
	$(".nav-down").stop(true).fadeToggle();
	//判断条件
	if($nav.hasClass('cur')){
		$nav.removeClass('cur');
	}else{
		$nav.addClass('cur');
	};

	//获取元素
	var secondLi = $(".second-level li");
	//自定义对比个数
	var nuber = 0;
	//获取元素
	var stair = $(".stair>li")

	//循环获取stair下的secondLi
	for(var i = 0; i < stair.length; i++){

		//获取到二级菜单
		var s = stair.eq(i).find(secondLi);

		//判断second-level有没有二级菜单有多的话就追加元素
		if(s.length > nuber){
			b = "<b class='icon_1 fold'></b>"
			s.parents("li").find(".stair-title").append(b);
		 }
	};
	//不管打不打开直接隐藏
	$(".second-level").hide();
	$(".stair-title").removeClass('active');
});

//给追加的元素绑定事件

$(".stair-title").on("click",".icon_1.fold",function(event) {
	var $this = $(this);
	//获取父元素
	var $parent = $this.parents(".stair-title");
	//获取父元素的LI
	var $parentLi = $parent.parents("li");

	//关闭同级元素
	$parentLi.siblings().find('.stair-title').removeClass('active');
	$parentLi.siblings().find('.second-level').stop(true).slideUp()

	//判断条件
	if($parent.hasClass('active')){
		//隐藏效果
		$parent.removeClass('active').next().stop(true).slideUp();
	}else{
		//显示效果
		$parent.addClass('active').next().stop(true).slideDown();
	}
});

/*菜单END*/

//首页新闻切换

$("#notice_header .notice_header_list").each(function(){
	$(this).on("touchstart", function(){
		$(this).addClass('cur').siblings().removeClass('cur');
		i = $(this).index();
		$(".notice_eq").find(".notice_eq_nth").eq(i).stop(true).show().siblings().stop(true).hide();
	});
})

//市场活动
$("#market-ul li").each(function(i){
	$(this).on("touchstart", function(){
		$(this).addClass('active').siblings().removeClass('active');
		i = $(this).index();
		$(".market-list-cont").find(".market-list").eq(i).stop(true).show().siblings().stop(true).hide()
	});
})


