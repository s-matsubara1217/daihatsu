
$(function(){

	// for 企業情報サイト
	$('.com-header a, .com-footer a').off();

	var spSize = '767px';
	var tbSize = '1024px';

	// ================================================================
	// U mediaFlag1.1.1
	// ================================================================
	var mediaFlag;
	function mediaFlagGet(){
		if(window.matchMedia("(max-width: " + spSize + ")").matches){
			mediaFlag = "SP";
		}else if(window.matchMedia("(max-width: " + tbSize + ")").matches){
			mediaFlag = "TB";
		}else{
			mediaFlag = "PC";
		}
	}
	mediaFlagGet();
	$(window).on('resize',function(){
		mediaFlagGet();
	});

	// ================================================================
	// com-header__main-search-tb 1.0
	// ================================================================
	if($('.com-header__main-search-pc, .com-header__main-search-tb').length){
			var searchTarget = $("#"+$('.com-header__main-search-tb').attr('aria-controls'));

			$('.com-header__main-search-pc, .com-header__main-search-tb').on('click',function(){
				if($(this).hasClass('is-active')){
					$('.com-header__main-search-pc, .com-header__main-search-tb').removeClass('is-active').find('.com-display-off').text("サイト内検索");
					document.activeElement.blur();
					searchTarget.removeClass('is-active').slideUp(300);
				}else{
					$('.com-header__main-search-pc, .com-header__main-search-tb').addClass('is-active').find('.com-display-off').text("サイト内検索を閉じる");
					searchTarget.slideDown(300).addClass('is-active').find('input[type="text"]').focus();
				}
				return false;
			});
	}

	// ================================================================
	// com-header__main-menu-tb 1.0
	// ================================================================
	if($('.com-header__main-menu-tb').length){
			var navOwn = $('.com-header__main-menu-tb');
			var navTarget = $("#"+$('.com-header__main-menu-tb').attr('aria-controls'));
			var overlayTarget = $('.com-overlay');

			$('.com-header__main-menu-tb').on('click',function(){
				if($(this).hasClass('is-active')){
					$(this).removeClass('is-active').find('.com-display-off').text("メニューを開く");
					navTarget.slideUp('fast').removeClass('is-active');
					overlayTarget.hide();
				}else{
					$(this).addClass('is-active').find('.com-display-off').text("メニューを閉じる");
					navTarget.slideDown('fast').addClass('is-active');
					overlayTarget.show();
				}
				return false;
			});

			overlayTarget.on('click',function(){
				$('.com-header__main-menu-tb').removeClass('is-active').find('.com-display-off').text("メニューを開く");
				navTarget.slideUp('fast').removeClass('is-active');
				overlayTarget.hide();
				return false;
			});

			$(window).on('resize',function(){
				if(mediaFlag == "PC"){
					navOwn.removeClass('is-active').find('.com-display-off').text("メニューを開く");
					navTarget.hide().removeClass('is-active');
					overlayTarget.hide();
				}
			});
	}

	// ================================================================
	// com-header__open-button1-tb 1.0
	// ================================================================
	if($('.com-header__open-button1-tb').length || $('.com-header__open-linkbutton1-tb').length){

		$('.com-header__open-button1-tb').on('click', function() {
				if($(this).hasClass('is-active')){
					$(this).removeClass('is-active').next('.com-header__open-local-target').slideUp('fast');
				}else{
					$(this).addClass('is-active').next('.com-header__open-local-target').slideDown('fast');
				}
			return false;
		});
		$('.com-header__open-linkbutton1-button-tb').on('click', function() {
				if($(this).hasClass('is-active')){
					$(this).removeClass('is-active').find('.com-display-off').text("メニューを開く").parent().parent().next('.com-header__open-local-target').slideUp('fast');
				}else{
					$(this).addClass('is-active').find('.com-display-off').text("メニューを閉じる").parent().parent().next('.com-header__open-local-target').slideDown('fast');
				}
			return false;
		});

		var comHeaderNavFlag;
		$(window).on('load resize',function(){
			if(window.matchMedia("(max-width: " + tbSize + ")").matches && comHeaderNavFlag != "TB"){
				comHeaderNavFlag = "TB";
			}else if(!window.matchMedia("(max-width: " + tbSize + ")").matches && comHeaderNavFlag != "PC"){
				$('.com-header__open-button1-tb').removeClass('is-active');
				$('.com-header__open-linkbutton1-button-tb').removeClass('is-active').find('.com-display-off').text("メニューを開く");
				$('.com-header__open-local-target').hide();
				comHeaderNavFlag = "PC";
			}
		});

	}
    
});
