(function($) {


	/*-------------------------------
		objectFitImages
	-------------------------------*/
	objectFitImages('img.ofi');

	/*-------------------------------
		iPhone/iPad class
	-------------------------------*/
	var ua = navigator.userAgent.toLowerCase();

	if ( ua.indexOf('iPhone') > 0 ) {
		$("body").addClass("iPhone");
	}else if ( ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document ) {
		$("body").addClass("iPad");
	}

	/*-------------------------------
		ロード判定
	-------------------------------*/
	setTimeout(function() {
		$('body').addClass('js-ready');
	}, 300);

	$(window).on('load',function(){
		$('body').addClass('js-loaded');
	});

	/*-------------------------------
		スクロール判定
	-------------------------------*/
	$(window).on('load scroll',function(){
		var s_top = $(window).scrollTop();
		if(s_top > 0){
			$('body').addClass('js-scroll');
		}else{
			$('body').removeClass('js-scroll');
		}
	});

	/*-------------------------------
		aのクリックイベント
	-------------------------------*/
	$('body').on('click', 'a', function (e) {

		if (this.getAttribute('href') == null) {
			//何もしない
		} else {
			var str = this.getAttribute('href').substring(0, 1),
				$linktype = $(this).attr('target'),
				$call = this.getAttribute('href').substring(0, 3);

			if (this.getAttribute('href').includes('#')) {
				//メニューを閉じる
				$('.com-header__main-menu-tb').removeClass('is-active').find('.com-display-off').text("メニューを開く");
				$("#"+$('.com-header__main-menu-tb').attr('aria-controls')).slideUp('fast').removeClass('is-active');
				$('.com-overlay').hide();
				//スムーズスクロールをさせる
				if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $("[name=' + this.hash.slice(1) + ']");
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top
						}, 700);
						return false;
					}
				}
			} else if ($linktype == "_blank" || $call == "tel") {
				//何もしない
			}
		}

	});

	/*-------------------------------
		ハンバーガーメニュー
	-------------------------------*/
	$('.hamburgerBtn').on('click', function (e) {
		if ($(this).hasClass('js-open')) {
			$('.hamburgerMenu').slideUp();
			$(this).removeClass('js-open');
		} else {
			$('.hamburgerMenu').slideDown();
			$(this).addClass('js-open');
		}
	});

})(jQuery);

/*-------------------------------
	IEでclosestを有効にする
-------------------------------*/
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector ||
		Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
	Element.prototype.closest = function(s) {
		var el = this;

		do {
			if (el.matches(s)) return el;
			el = el.parentElement || el.parentNode;
		} while (el !== null && el.nodeType === 1);
		return null;
	};
}

/*-------------------------------
	スクロールアクション
-------------------------------*/
function scrollAnime() {
	const animation = document.querySelectorAll(".anime");
	const animationArray = Array.prototype.slice.call(animation, 0);

	const options = {
		root: null,
		rootMargin: "-200px 0px -200px",
		threshold: 0
	};
	const observer = new IntersectionObserver(doWhenIntersect, options);
	animationArray.forEach(function(animation) {
		observer.observe(animation);
	});

	function doWhenIntersect(entries) {
		const entriesArray = Array.prototype.slice.call(entries, 0);

		entriesArray.forEach(function(entry) {
			if (entry.isIntersecting) {
				entry.target.classList.add("js-active");
			}
		});
	}
}
scrollAnime();

//ロード時、ウィンドウ内に入っている要素は強制的に表示
function loadActive() {
	$(".anime").each(function(){
		var targetAnime = $(this).offset().top;
		var windowHeight = $(window).height();
		if (targetAnime < windowHeight){
			$(this).addClass("js-active");
		}
	});
}
loadActive();
