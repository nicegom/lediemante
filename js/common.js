$(document).ready(function(){
    if($('body').hasClass('sub')){
        var subSlashTop = $('.sub .slash_tab li').offset().top;
        var subSlashDefualt=subSlashTop
    }
    
    $(window).scroll(function () { 
        var scrollValue = $('html, body').scrollTop();
        var bottomValue= $('.container_footer').offset().top;
        var topValue= $('.btn_top').offset().top+$('.btn_top').outerHeight();
        var scrollbottom = $(document).height() - ($(window).height() + $(window).scrollTop())
        var footerHeight = $('.container_footer').outerHeight()
        if($('body').hasClass('sub')){
            var centerValue= $('.sub .center_wrap').offset().top+$('.sub .center_wrap').outerHeight();
        }

        // top 버튼 기본 모션
        if(scrollValue>0){
            $('.btn_top').fadeIn()
            if(scrollbottom>=footerHeight){
                $('.floating_wrap').removeClass('bottom')
                $('.con_right').removeClass('bottom')
            }else if(topValue>bottomValue){
                $('.floating_wrap').addClass('bottom')
            }else if(centerValue>bottomValue){
                $('.con_right').addClass('bottom')
            }
        }else if(scrollValue==0){
            $('.btn_top').fadeOut()
        }

        // 서브 슬래쉬메뉴 floating 
        if($('body').hasClass('sub')){
            if(scrollValue<subSlashDefualt){
                $('.sub').removeClass('scroll')
            }else if(scrollValue>=subSlashTop){
                $('.sub').addClass('scroll');
            }
        }

    });

    // top 버튼 click 
	$('.btn_top').click(function(){
        $('html, body').stop().animate( { scrollTop : 0 }, 400 );
        $('html, body').stop().animate( { scrollTop : 0 }, 400 );
        return false;
    })

    // 햄버거 
    $('.btn_hamburger').click(function(){
        var gnbHeight = $('.container_header').outerHeight()
        if($('header').hasClass('open')){
            setTimeout(function() { $('header').toggleClass('open') }, 300);
            $('header').stop().animate( { height : 65 }, 300 );
        }else{
            $('header').toggleClass('open')
            $('header').stop().animate( { height : gnbHeight }, 300 );
        }
    }) 

    // 슬래쉬 메뉴 
    $('.slash_tab li').click(function(){
        $('.slash_tab li').removeClass('on')
        $(this).addClass('on')
        if($('body').hasClass('sub')){
            var secOfftop = $('.sec_tab_'+$(this).index()).offset().top-60;
            $('html, body').stop().animate( { scrollTop : secOfftop }, 300 );
            return false;
        }else if($('body').hasClass('main')){
            $('.sec_progr .con_wrap').hide()
            var selectTab = $(this).index()
            $('.sec_progr .con_wrap').eq(selectTab).show()
        }
        var instanceObj = window.SwiperVar.instanceArray;
        instanceObj.forEach(function($swiper){
            $swiper.update();
        })
    })

    // 메인키워드탭 
    $('.sec_recom .tab li').click(function(){
        $('.sec_recom .tab li').removeClass('on')
        $(this).addClass('on')
        
        $('.sec_recom .slide>div').hide()
        var selectTab = $(this).index()
        $('.sec_recom .slide>div').eq(selectTab).show()
    
        var instanceObj = window.SwiperVar.instanceArray;
        instanceObj.forEach(function($swiper){
            $swiper.update();
        })
    })

    //레이어팝업
    $('.clip_video').click(function(){
        $(this).hide()
    })
    $('.layer_close').click(function(){
        $(this).closest('.layer_wrap').hide()
    })
    $('.clip-swiper .swiper-slide').click(function(){
        var clipNum = $(this).index()
        $('.layer_wrap.clip_video').show()
        $('.layer_wrap.clip_video div').hide()
        $('.layer_wrap.clip_video div').eq(clipNum).show()
    })

    // 디폴트탭 
    $('.default_tab li').click(function(){
        if($(this).parent('default_tab').hasClass('noCursor')){
            return false;
            alert('s')
        }
        $('.default_tab li').removeClass('on')
        $(this).addClass('on')
        var tabNum = $(this).index()
        $('.tab_con_wrap').hide()
        $('.tab_con_wrap').eq(tabNum).show()
    })

    //말줄임
    $('.scope_col .tit .txt').each(function(){
        var txtWidth = $(this).width()
        var tdWidth = $(this).closest('td').width()
        if(txtWidth+20>=tdWidth){
            $(this).addClass('ellipsis')
        }
    })
    $('.move_wrap .txt').each(function(){
        var txtWidth = $(this).width()
        var tdWidth = $(this).closest('.tit').width()
        if(txtWidth+20>=tdWidth){
            $(this).addClass('ellipsis')
        }
    })

    //등록순 정렬
    $('.comment_menu .btn_align').click(function(){
        $(this).toggleClass('asc')
    })

    //교육일정
    $('.schedule_wrap .btn_toggle').click(function(){
        $(this).toggleClass('cal');
        if($(this).hasClass('cal')){
            $(this).text('교육일정 목록 열기')
        }else{
            $(this).text('교육일정 캘린더 열기')
        }
    })

    //인풋공통
    $('.input_border select').change(function(){
        $(this).addClass('change')
    })

    //LNB
    $('.lnb_wrap .btn_toggle').click(function(){
        $(this).closest('.lnb_wrap').toggleClass('close')
    })
})





