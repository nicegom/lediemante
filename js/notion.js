

/**
* @logs: 스와이프 객체를 다른 함수에서 사용하기 위해 전역으로 설정
*/
window.SwiperVar = {
	instanceArray: [],
	IDX: 0
}



/**
* @mehotd: 프리모드 스와이프 공통
* @parameter: null
* @return:  $swiper객체
* @logs: 2020.01.31
*/

function bModeBannerSwiper() {
	var $swiper = $('.swiper-container');
	var instance = null;
	

	var defalutOptions = {
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		  },
		  speed: 300,
		  touchReleaseOnEdges: true,
		  navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	}

	try {
		$swiper.each(function (idx, el) {
			window.SwiperVar.IDX += 1;
			var $this = $(this);
			//console.log($this)


			if ( $this.hasClass('visual-swiper') ) {
				
				defalutOptions = $.extend(defalutOptions, {
					autoplay : { 
						delay : 2000,
					},
					speed: 800,
				})
			
			} else if( $this.hasClass('clip-swiper') ) {
				defalutOptions = $.extend(defalutOptions, {
					autoplay : false,
					speed: 300,
					slidesPerView: 4,
					spaceBetween: 0,
					breakpoints: {
						320: {
						  slidesPerView: 2,
						  spaceBetween: 0
						},
						769: {
						  slidesPerView: 4,
						  spaceBetween: 0
						}
					}
				})
			} else if( $this.hasClass('recomm_swiper') ) {
				defalutOptions = $.extend(defalutOptions, {
					autoplay : false,
					speed: 300,
					slidesPerView: 2,
					spaceBetween: 0,
					breakpoints: {
						320: {
						  slidesPerView: 1,
						  spaceBetween: 0
						},
						769: {
						  slidesPerView: 1,
						  spaceBetween: 0
						}
					}
				})
			} else if( $this.hasClass('recom') ) {
				defalutOptions = $.extend(defalutOptions, {
					autoplay : false,
					speed: 300,
					slidesPerView: 4,
					spaceBetween: 0,
					breakpoints: {
						320: {
						  slidesPerView: 2,
						  spaceBetween: 0
						},
						769: {
						  slidesPerView: 4,
						  spaceBetween: 0
						}
					}
				})
			} else if( $this.hasClass('progr') ) {
				defalutOptions = $.extend(defalutOptions, {
					autoplay : false,
					speed: 300,
					slidesPerView: 4,
					spaceBetween: 0,
					breakpoints: {
						320: {
						  slidesPerView: 2,
						  spaceBetween: 0
						},
						769: {
						  slidesPerView: 4,
						  spaceBetween: 0
						}
					}
				})
			} else if( $this.hasClass('progr_new') ) {
				defalutOptions = $.extend(defalutOptions, {
					autoplay : false,
					speed: 300,
					slidesPerView: 4,
					spaceBetween: 0,
					breakpoints: {
						320: {
						  slidesPerView: 2,
						  spaceBetween: 0
						},
						769: {
						  slidesPerView: 4,
						  spaceBetween: 0
						}
					}
				})
			}else {
				defalutOptions = {
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					  },
					  autoplay : false,
					  speed: 300,
					  touchReleaseOnEdges: true,
					  navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					  }
				}
			}
			
		

			$this.addClass('instance-' + window.SwiperVar.IDX);
			instance = new Swiper('.instance-' + window.SwiperVar.IDX, defalutOptions);
			window.SwiperVar.instanceArray.push(instance);

			return instance;
		});

	} catch (e) {
		throw new Error(e.message);
	}
}



$(document).ready(function(){
	bModeBannerSwiper();
	
})


