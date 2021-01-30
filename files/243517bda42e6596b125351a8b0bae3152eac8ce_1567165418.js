jQuery(function(){
	var main_swiper = new Swiper(".main_visual_swiper", {
		loop:true,
		resistanceRatio:0,		
		autoplay:{
			delay:4000,
		},
		speed:700,
		  navigation: {
			nextEl: '.main_visual_swiper .main_visual_next',
			prevEl: '.main_visual_swiper .main_visual_prev',
		  },
	});

	$('.main_visual_play .pause').click(function(){
		$('.main_visual_play .pause').hide();
		$('.main_visual_play .play').show();
		main_swiper.autoplay.stop();
	});

	$('.main_visual_play .play').click(function(){
		$('.main_visual_play .pause').show();
		$('.main_visual_play .play').hide();
		main_swiper.slideNext();
		main_swiper.autoplay.start();
	});

	$('.main_visual_prev').click(function(){
		main_swiper.slidePrev();
		$('.main_visual_play .pause').hide();
		$('.main_visual_play .play').show();
	});
	$('.main_visual_next').click(function(){
		main_swiper.slideNext();
		$('.main_visual_play .pause').hide();
		$('.main_visual_play .play').show();
	});

	var main_event_swiper = new Swiper(".main_event_swiper", {
		slidesPerView:2,
		loop:true,
		pagination: {
			el: '.main_events .swiper-pagination-event',
			clickable:true,
		},
		autoplay:{
			delay:4000,
		},
	});


	var main_review_swiper = new Swiper(".main_review_swiper",{
		loop:true,
	});
	$('.main_review_prev').click(function(){
		main_review_swiper.slidePrev();
	});
	$('.main_review_next').click(function(){
		main_review_swiper.slideNext();
	});


	var main_bna_swiper = new Swiper(".main_bna_swiper",{
		loop:true,	
	})
	$('.main_bna_prev').click(function(){
		main_bna_swiper.slidePrev();
	});
	$('.main_bna_next').click(function(){
		main_bna_swiper.slideNext();
	});
	
	var this_idx = 0;
	var color_arr = ['#8b606b','#c2976a','#9a5ba3','#5b79b6','#ea7148'];
	$('.main_program_btns li').mouseover(function(e) {
		if(this_idx != $(this).index()){
			this_idx = $(this).index();	
			
        	$('.main_program_btns li a').removeAttr('style');
        	$('.main_program_btns li .partition').removeAttr('style');
			$('.main_program_cnts > div').hide();
			$('.main_program_cnts > div').eq(this_idx).fadeIn('slow');
			if(this_idx < $('.main_program_btns li').length - 1){
				var t = this_idx * 130;
				$('.main_program_btns .main_program_bars').stop().animate(
					{
						top:t,
						backgroundColor:color_arr[this_idx],
					},
					500,
					function(){}
				);
				$(this).find('a').css('color','#fff');
				$(this).find('.partition').css('background','#fff');
			}
		}
    });
	$('.main_program_btns li').eq(0).find('a').css('color','#fff');
	$('.main_program_btns li').eq(0).find('.partition').css('background','#fff');
	
	/*�앹뾽李쎄���*/
	$('#popup_checkbox').change(function(e){
        $.cookie("popup_20190830", "1", { expires: 1 });
        $('#popup_icon').hide();
    });
    
    if(!$.cookie("popup_20190830")){
      $('#popup_icon').show(); 
    }
	
    $('#popup_close').bind("click",function(){
        $('#popup_icon').hide();
    });
	/*�앹뾽李쎄���*/
})

/* id�쇰�怨쇱냼媛� �곷떒�� bg媛� �덉쑝硫� 遺�紐⑥쓽 contents 諛곌꼍�됱� �곸슜�섏� �딆쓬 */

$('.contents_top_bg').parent('.contents').css({"background":"none"})
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function(e) {

	$('.lnb .cm .depth2').show();
	$('.cm_d1 a:eq(0)').addClass('on');
	$('.cm_d2 a:eq(0)').addClass('on');
	$('.cm_d3 a:eq(0)').addClass('on');
	$('.lnb li a').mouseenter(function(){
		$(this).parent().addClass('on'); // �좏깮�� li�� addClass on
		$(this).parent().siblings().removeClass('on'); //�좏깮�섏� �딆� li�� removeClass on
		if ($(this).parent().hasClass('on')){
			//2�곸뒪 硫붾돱 show
			$(this).parent().find('.depth2').show();
		}
		$(this).parent().siblings().find('.depth2').hide();
	});
	$('.lnb .depth2').mouseleave(function() {
		$('.lnb .depth2').hide();
		$('.lnb .cm .depth2').show();
	});
	$('html body').mouseleave(function() {
		$('.lnb .depth2').hide();
		$('.lnb .cm .depth2').show();
	});

});

jQuery(function(){
	$(".quick_agree_detail_btn").click(function(){
		$(".quick_agree_detail_cnts").fadeIn();
	});

	$(".quick_agree_detail_cnts_close").click(function(){
		$(".quick_agree_detail_cnts").fadeOut();
	});

/*
	$(".quick_btns > li").hover(function(){
		$(this).children("a").find("quick_icon").attr
	},function(){
		
	})
	$(".quick_btn1").hover(function(){
		
	},function(){
		
	})
*/

	$(".quick_counsel_open").click(function(){
		$(".quick_group").addClass("quick_open");
		$(".quick_cnt_group").addClass("quick_open");
		$(".quick_opacity").fadeIn("700");
	});

	$(".quick_btns > li").click(function(){
		var quick_nums = $(this).index() + 1;
		$(".quick_btns > li > a > p").removeClass("quick_font_color");
		$(this).children("a").find("p").addClass("quick_font_color");
		$(".quick_cnt_group > div").hide();
	//	$(".quick_btns > li > a > div > span").removeClass("on"+quick_nums+"")
		$(".quick_btns > li > a > div > span").removeClass("on1");
		$(".quick_btns > li > a > div > span").removeClass("on2");
		$(".quick_btns > li > a > div > span").removeClass("on3");
		$(".quick_btns > li > a > div > span").removeClass("on4");
		$(".quick_btns > li > a > div > span").removeClass("on5");
		$(this).children("a").find("span").addClass("on"+quick_nums+"");
	});

	$(".quick_btn2").click(function(){
		$(".quick_cnt_kakao").show();
	});
	$(".quick_btn3").click(function(){
		$(".quick_cnt_payment").show();
	});

	$(".quick_close_btn, .quick_counsel_close").click(function(){
		$(".quick_group").removeClass("quick_open");
		$(".quick_cnt_group").removeClass("quick_open");
		$(".quick_opacity").fadeOut("700");
	});

	/**************移댄넚�곷떞 �곷떞�좎껌**********************/
	$('.btn_kcounsel_quick').click(function(){
		qcounsel_chk('kakao');
	});
	/**************鍮꾩슜�곷떞 �좎껌**********************/
	$('.btn_ccounsel_quick').click(function(){
		qcounsel_chk('cost');
	});


})

//移댁뭅�ㅽ넚 �좏슚�깆껜��
function qcounsel_chk(type){
	var q_pagree = ''; //媛쒖씤�뺣낫�숈쓽
	var q_sagree = ''; //sms泥댄겕

	if(type == 'kakao'){
		//移댄넚�곷떞
		var username = $.trim($('#quick_katalk_username').val());
		var part = $.trim($('#quick_katalk_part').val());
		var hp = $.trim($('#quick_katalk_hp').val());
		var messenger_id = "";
		var area = "";

		if($('.kakao_qpersonInfo').is(':checked')){
			q_pagree = 'Y';
		}else{
			q_pagree = 'N';
		}
		if($('.kakao_qsms').is(':checked')){
			q_sagree = 'Y';
		}else{
			q_sagree = 'N';
		}
		//var url = "/tools/messenger/kakao_add";
		//var param = 'username='+username+'&part='+part+'&hp1='+hp1+'&hp2='+hp2+'&hp3='+hp3+'&sex='+sex+'&age='+age+'&agree_sms='+agree_sms;
	}else{
		//鍮꾩슜�곷떞
		var username = $.trim($('#quick_realpay_username').val());
		var part = $.trim($('#quick_realpay_part').val());
		var hp = $.trim($('#quick_realpay_hp').val());
		var area = "";
		if($('.cost_qpersonInfo').is(':checked')){
			q_pagree = 'Y';
		}else{
			q_pagree = 'N';
		}
		if($('.cost_qsms').is(':checked')){
			q_sagree = 'Y';
		}else{
			q_sagree = 'N';
		}
	}
	//var url = "/tools/realpay/add";
	//var param = 'username='+username+'&part='+part+'&hp1='+hp1+'&hp2='+hp2+'&hp3='+hp3+'&area='+area+'&sex='+sex+'&age='+age+'&agree_sms='+agree_sms;
	
	if(username == ''){
		alert('�대쫫�� �낅젰�댁＜�몄슂.');
		return false;
	}
	if(hp == '' || hp.length<10){
		alert('�곕씫泥섎� �낅젰�댁＜�몄슂.');
		return false;
	}
	/*
	if(area == ''){
		alert('嫄곗＜吏���쓣 �좏깮�댁＜�몄슂.');
		return false;
	}
	if(type == 'kakao'){
		if(messenger_id == ''){
			alert('移댄넚 ID瑜� �낅젰�댁＜�몄슂');
			return false;
		}
	}
	*/
	if(part == ''){
		alert('�곷떞怨쇰ぉ�� �좏깮�댁＜�몄슂.');
		return false;
	}
	if(q_pagree == 'N'){
		alert('媛쒖씤�뺣낫 �섏쭛 諛� �댁슜�� ���� �덈궡瑜� �쎄퀬 �숈쓽 �� 二쇱꽭��.');
		return false;
	}
	if(q_sagree == 'N'){
		alert('�곷떞湲곕뒫�� �댁슜�섏떆�ㅻ㈃ SMS�섏떊�숈쓽媛� �꾩슂�⑸땲��.');
		return false;
	}
	
	var agree_sms =q_sagree ;

	// �꾪솕踰덊샇 - �ы븿�섏뿀�꾧꼍��
	if(hp.indexOf('-') != -1){
		var ph_str = hp.split('-');
		var hp1 = ph_str[0];
		var hp2 = ph_str[1];
		var hp3 = ph_str[2];
	}else{
		var hp1 = hp.substr(0,3);
		if(hp.length == 11){
			var hp2 = hp.substr(3,4);
		}else if(hp.length == 10){
			var hp2 = hp.substr(3,3);
		}
		var hp3 = hp.substr(hp.length-4,4);
	}
	if(type == 'kakao'){
		//移댁뭅�ㅽ넚
		$.ajax({
			url:"/tools/messenger/kakao_add",
			type:"POST",
			data:'username='+username+'&part='+part+'&hp1='+hp1+'&hp2='+hp2+'&hp3='+hp3+'&area='+area+'&messenger_id='+messenger_id+'&agree_sms='+agree_sms,
			success: function(ret){
				if (ret) {
					var ret = $.parseJSON(ret);
					if (ret.result == 'false') {
						alert(ret.msg);
						return false;
					} else {
						$('#nullform').attr('action','/promotion/promotionCounter');
						$('#nullform').submit();
						$('#nullform').removeAttr('action');

						$('#quick_katalk_username').val('');
						$('#quick_katalk_hp').val('');
						$('.kakao_qpersonInfo').prop("checked",false);
						$('.kakao_qsms').prop("checked",false);
						alert(ret.msg);
					}
				} else {
					alert('�ㅻ쪟�낅땲��. 愿�由ъ옄�먭쾶 臾몄쓽�섏꽭��.');
					return false;
				}
			}
		});
	}else{
		//鍮꾩슜�곷떞
		$.ajax({
			url:"/tools/realpay/add",
			type:"POST",
			data:'username='+username+'&part='+part+'&hp1='+hp1+'&hp2='+hp2+'&hp3='+hp3+'&area='+area+'&agree_sms='+agree_sms,
			//data:'username='+username+'&part='+part+'&hp1='+hp1+'&hp2='+hp2+'&hp3='+hp3+'&area='+area+'&sex='+sex+'&age='+age+'&agree_sms='+agree_sms,
			success: function(ret){
				if (ret) {
					var ret = $.parseJSON(ret);
					if (ret.result == 'false') {
						alert(ret.msg);
						return false;
					} else {
						$('#nullform').attr('action','/promotion/promotionCounter');
						$('#nullform').submit();
						$('#nullform').removeAttr('action');

						$('#quick_realpay_username').val('');
						$('#quick_realpay_hp').val('');
						$('.cost_qpersonInfo').prop("checked",false);
						$('.cost_qsms').prop("checked",false);
						alert(ret.msg);
					}
				} else {
					alert('�ㅻ쪟�낅땲��. 愿�由ъ옄�먭쾶 臾몄쓽�섏꽭��.');
					return false;
				}
			}
		});
	}
}
$(document).ready(function(){
	/*
    $('[data-role=prom_ok]').bind("click", function(event) {
        if ($.trim($('#footerName').val()) == '') {
            alert('�대쫫�� �낅젰�� 二쇱꽭��.');
            $('#footerName').focus();
            return false;
        }

        if ($.trim($('#footerMobile2').val()) == '' || $.trim($('#footerMobile3').val()) == '') {
            alert('�몃뱶�� 踰덊샇瑜� �낅젰�� 二쇱꽭��.');
            return false;
        }    

        if($(":checkbox[name='footerAgreePolicy']:checked").length == 0) {
            alert('媛쒖씤�뺣낫 痍④툒 諛⑹묠�� �숈쓽�섏뀛�� �⑸땲��.');
            return false;
        }

        var agreesms = 'Y';
        if($(":checkbox[name='footerAgreeSms']:checked").length == 0) {
            agreesms = 'N';
        }

        var url = '/promotion/footer_counsel_dao';
        $.post(url, {
            name : $.trim($('#footerName').val()),
            mobile1 : $('#footerMobile1').val(),
            mobile2 : $.trim($('#footerMobile2').val()),
            mobile3 : $.trim($('#footerMobile3').val()),
            category : $('#footerCategory').val(),
            comment : $.trim($('#footerComment').val()),
            agreesms : agreesms
        }, function(ret) {
            if (ret == '1111') {
                // �깃났
                $('#nullform').attr('action','/promotion/promotionCounter');
                $('#nullform').submit();
                $('#nullform').removeAttr('action');
                alert('�곷떞�좎껌�� �꾨즺 �섏뿀�듬땲��.');
                $("form").each(function() {  
                    this.reset();  
                });
                return false;
            } else {
                alert('�낅젰��ぉ�� �щ컮瑜댁� �딆뒿�덈떎');
                return false;                                            
            }
        });                                
    });
	
	
	*/
	

	$(".main_submit_map").click(function(){
		$(".main_counsel_opacity, .main_counsel_input_wrap").fadeIn();
	});
	$(".main_counsel_opacity").click(function(){
		$(".main_counsel_opacity, .main_counsel_input_wrap").fadeOut();
	});
	
	$('.main_quick_counsel').draggable();
	
	$('.main_quick_counsel_btn').click(function(e) {
        footer_dbinput();
    });
	
	$('.main_counsel_submit').click(function(){
		send_map_sms();
	});
	//getDaumMap();
});



function getDaumMap() {
	var map;

	map = new daum.maps.Map(document.getElementById('daumRoughmapContainer1563787915288'), {
			center: new daum.maps.LatLng(37.516935, 127.024159),
	});

	var marker = new daum.maps.Marker({
			position: new daum.maps.LatLng(37.516935, 127.024159)
	});
	marker.setMap(map);
	map.setZoomable(false);
}

function send_map_sms(){
	var ph = $.trim($('#map_hp').val());
	
	if(ph == '' || ph.length < 10){
		alert('�꾪솕踰덊샇瑜� �낅젰�댁＜�몄슂');
		$('#map_hp').focus();
		return false;

	}	
	var querystrings =serialize2segment( $("form").serialize() );
	var html = loadAjaxContent( "/intro/map_sendmmsimg_main/"+querystrings, "" );
	alert( html );
	$(".main_counsel_opacity, .main_counsel_input_wrap").fadeOut();
	return false;
}

function footer_dbinput(){
	var name = $.trim($('#footer_counsel_name').val());
	var ph = $.trim($('#footer_counsel_mobile').val());
	
	if (name == '') {
	  alert('�대쫫�� �낅젰�� 二쇱꽭��.');
	  return false;
	}
	
	if (ph == '' || ph.length < 10) {
	  alert('�몃뱶�� 踰덊샇瑜� �낅젰�� 二쇱꽭��.');
	  return false;
	}    
	
	var agreesms = 'Y';
	if($(":checkbox[id='footer_counsel_sms_agree']:checked").length == 0) {
	  agreesms = 'N';
	}
	  
	if(ph.indexOf('-') != -1){
		var ph_str = ph.split('-');
		var ph1 = ph_str[0];
		var ph2 = ph_str[1];
		var ph3 = ph_str[2];
	}else{
		var ph1 = ph.substr(0,3);
		if(ph.length == 11){
			var ph2 = ph.substr(3,4);
		}else if(ph.length == 10){
			var ph2 = ph.substr(3,3);
		}
		var ph3 = ph.substr(ph.length-4,4);
	}
	  var surgery = $('#tag1').val();
	  var skin_center = $('#cno').val();
	  var url = '/promotion/promotion_dao';
	  $.post(url, {
		  name : name,
		  category : 'wcenter',
		  surgery : surgery,
		  mobile1 : ph1,
		  mobile2 : ph2,
		  mobile3 : ph3,
		  email : '',
		  skin_center: skin_center,
		  comment : "",
		  agreesms : agreesms
	  }, function(ret) {
		  if (ret) {
			  var ret = $.parseJSON(ret);
			  if (ret.result == 'false') {
				  alert(ret.msg);
			  } else {

				$('#nullform').attr('action','/promotion/quickCounselCounter');
				$('#nullform').submit();
				$('#nullform').removeAttr('action');

				  alert('�좎껌�� �꾨즺 �섏뿀�듬땲��.');
			  }
		  } else {
			  alert('�ㅻ쪟�낅땲��. 愿�由ъ옄�먭쾶 臾몄쓽�섏꽭��.')
		  }
	  });
	  return false;
}


function serialize2segment( data ) {
	var rtndata = "";
	var repStr1 = /[\=,&]/g;
	var repStr2 = /[\=+]/g;

	data = data.replace( repStr1, "/" );
	data = data.replace( repStr2, " " );
	rtndata = escape(data);
	
	return rtndata;
}
JESTER.init('COMMON_BOTTOM', ['util'], function(dom, jes) {
    var slim_html = '<option value="">愿��щ텇�� �좏깮</option><option value="�щ┝�ㅽ� �꾨줈洹몃옩">�щ┝�ㅽ� �꾨줈洹몃옩</option><option value="諛붾뵒�� 肄붾뵒�ㅼ씠��">諛붾뵒�� 肄붾뵒�ㅼ씠��</option><option value="�ㅽ��� 二쇱궗">�ㅽ��� 二쇱궗</option>';
    var now_url=location.href.split('/');

	var publicObj, view;
    
    /**
     * �몃��먯꽌 李몄“ �댁빞 �� �⑥닔媛� �덈뒗 寃쎌슦 �닿납�� �뺤쓽 �섏떗�쒖삤.
     * ex) jes.get('GNB_1DEPTH').initView();
     */
    publicObj = {
        showWholeBg : showWholeBg,
        hideWholeBg : hideWholeBg,
        showPopupLayer : showPopupLayer,
        hidePopupLayer : hidePopupLayer,
        movetocenterPopupLayer : movetocenterPopupLayer,
        setcontentPopupLayer : setcontentPopupLayer,
        setsizePopupLayer : setsizePopupLayer,
        printNullframe : printNullframe
    };    

    function initialize() {
        initView();
        attachEventHandler();
    }
    
    function initView()
    {
        view = {
            layer : {
                wholebg  : $("#wholebg"),
                popuplayer  : $("#popuplayer")
            },
			 imgs : {
                main_counsel_img  : $("#main_counsel_img"),
                main_kakao_img  : $("#kakao_counsel_img"),
                realpay_counsel_img  : $(".realpay_counsel_img"),
				main_ckakao_img :  $(".ckakao_counsel_img")
               /* sub_counsel_img  : $("#img_leftCon"),
                sub_kakao_img  : $("#img_leftKaka"),
                counsel_img  : $("#img_leftCon")*/
            },
            frame : {
                nullframe  : $("#nullframe")
            }
        };
    }
    
    function attachEventHandler()
    {
        view.layer.wholebg.bind("click", function(event) {
            setcontentPopupLayer( "" );
            hidePopupLayer();
            hideWholeBg();
        });
		view.imgs.main_kakao_img.bind("click", function(event) {
			//$('.main_button_group').attr('css','z-index:0');
            var html = jes.get('COMMON').loadAjaxContent( "/promotion/kakao", "" );
            jes.get('COMMON_BOTTOM').showWholeBg();
            jes.get('COMMON_BOTTOM').showPopupLayer();
            jes.get('COMMON_BOTTOM').setcontentPopupLayer( html );
			// jes.get('COMMON_BOTTOM').movetocenterPopupLayer();
			counsel_val_change();
			if(now_url[4] == 'starfit'){
				$('#realpay_part').html('');
				$('#realpay_part').html(slim_html);
			}
           
        });
		view.imgs.realpay_counsel_img.bind("click", function(event) {
			//$('.main_button_group').attr('css','z-index:0');
            var html = jes.get('COMMON').loadAjaxContent( "/promotion/realpay", "" );
            jes.get('COMMON_BOTTOM').showWholeBg();
            jes.get('COMMON_BOTTOM').showPopupLayer();
            jes.get('COMMON_BOTTOM').setcontentPopupLayer( html );
			realpay_val_change();
           
        });
		view.imgs.main_ckakao_img.bind("click", function(event) {
			//$('.main_button_group').attr('css','z-index:0');
            var html = jes.get('COMMON').loadAjaxContent( "/promotion/kakao", "" );
            jes.get('COMMON_BOTTOM').showWholeBg();
            jes.get('COMMON_BOTTOM').showPopupLayer();
            jes.get('COMMON_BOTTOM').setcontentPopupLayer( html );
			// jes.get('COMMON_BOTTOM').movetocenterPopupLayer();
			counsel_val_change();
			if(now_url[4] == 'starfit'){
				$('#realpay_part').html('');
				$('#realpay_part').html(slim_html);
			}
           
        });
		view.imgs.main_counsel_img.bind("click", function(event) {
            var html = jes.get('COMMON').loadAjaxContent( "/promotion/counsel", "" );
            jes.get('COMMON_BOTTOM').showWholeBg();
            jes.get('COMMON_BOTTOM').showPopupLayer();
            jes.get('COMMON_BOTTOM').setcontentPopupLayer( html );
          //  jes.get('COMMON_BOTTOM').movetocenterPopupLayer();
			counsel_val_change();
		  if(now_url[4] == 'starfit'){
				$('#realpay_part').html('');
				$('#realpay_part').html(slim_html);
			}
        });
    }
    
    function showWholeBg()
    {
        var clientheight = $(document).height();
        view.layer.wholebg.show();
        view.layer.wholebg.height( clientheight );
    }
    
    function hideWholeBg()
    {
        // �듬찓�닿� �대젮�덉쑝硫� �ル뒗��.
        //if( jes.get('COMMON_QUICK').getQuickStatus() == "open" ) jes.get('COMMON_QUICK').initQuick();
        
        view.layer.wholebg.hide();
    }
    
    function showPopupLayer()
    {
        view.layer.popuplayer.show();
    }
    
    function hidePopupLayer()
    {
        view.layer.popuplayer.hide();
    }
    
    function movetocenterPopupLayer()
    {
        jes.get('COMMON').layerMoveToCenter( view.layer.popuplayer );
    }
    
    function setcontentPopupLayer( content )
    {
        view.layer.popuplayer.html( content );
    }
    
    function setsizePopupLayer( w, h )
    {
        view.layer.popuplayer.width( w );
        view.layer.popuplayer.height( h );
    }
    
    function printNullframe( str )
    {
        view.frame.nullframe.html( str );
    }
    
    // 珥덇린�� �⑥닔 �ㅽ뻾
    initialize();
    
    return publicObj;
});

function strToHex1(str) {
	var hex = '';
	for (var i = 0, len = str.length; i < len; i++) {
		hex += (0x100 + str.charCodeAt(i)).toString(16).slice(1);
	}
	return hex;
}

function show_popup_login(){
	var u = window.location.href;
	var r = '/auth/login/rtnurl/'+strToHex1(u);
	window.location.href=r;
}

$(document).ready(function(e) {
	$('.login_before18, .img_before18').click(function(e) {
		if($('#login_sess_id').val() === ''){
			show_popup_login();
		}
	});
	
	if($('#login_sess_id').val() === ''){
		$('.img_before18').each(function(index, element) {
			var org_src = $(this).attr('src');
			var tmp_arr = org_src.split('.');
			var ext = "."+tmp_arr[tmp_arr.length - 1];
			org_src = org_src.replace(ext,'');
			
			var new_src = org_src+'_login'+ext;
			$(this).attr('src','');
			$(this).attr('src',new_src);
			$(this).css('visibility','visible');
		});
	}else{
		$('.img_before18').css('visibility','visible');
	}
});
function loadAjaxContent( url, data ) {
    var html;
    url = encodeURI(url);
    data = encodeURI(data);
    $.ajax({ type:"POST", url:url, data:data, async:false, success:function( rtndata ) { html = rtndata; } });
    return html;
}