$(function(){
    // cf section 탭 - 클릭시
	$('.tab_mv > li').on('click', function(){
		var index = $(this).index();
		$('.tab_mv > li').removeClass('on');
		$(this).addClass('on');
		$('.con_mv > li').removeClass('on');
		$('.con_mv > li').eq(index).addClass('on');

		// 영상 계속재생 방지
		// var mvSrc = $(this).data('src');
	   	// if(mvSrc != ''){
	    //     $('.con_mv iframe').attr('src', mvSrc);
	    // } else {
	    //     $('.con_mv iframe').attr('src', '');
	    // }
	});
});