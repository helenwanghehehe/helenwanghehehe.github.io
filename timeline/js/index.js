// 作者：张可 2015301130037
// 顶部导航条锚点跳转,使用jQuery的animate方法实现
// 首先将跳转封装成一个函数,方便后续重复利用
var changePage = function(skipId, targetId) {
	$(skipId).click(function() {
		$("html,body").animate({
			scrollTop: $(targetId).offset().top
		}, 1000);
	});
};
$(document).ready(function() {
	changePage("#timeline-btn", "div#timeline");
	changePage("#aboutus-btn", "div.aboutus-banner");
	changePage("#contactus-btn", "div.contactus");
});
/*$(document).ready(function() {
	$("#timeline-btn").click(function() {
		$("html,body").animate({
			scrollTop: $("div#timeline").offset().top
		}, 1000);
	});
});*/
// 时间轴滚动条,使用scrollbar.js实现
new CusScrollBar({
	contentSelector: '.scroll_cont', //滚动内容区
	barSelector: '.scroll_bar', //滚动条
	sliderSelector: '.scroll_slider' //滚动滑块
});
// 回到顶部按钮,用jQuery实现
$(document).ready(function() {
	$(function() {
		$(window).scroll(function() {
			if ($(window).scrollTop() > 600) {
				$("#toTop").fadeIn(1000);
			} else {
				$("#toTop").fadeOut(1000);
			}
		});
		$("#toTop").click(function() {
			$("body,html").animate({
				scrollTop: 0
			}, 1000);
		});
	});
});
