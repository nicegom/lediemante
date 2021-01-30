<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>

<jsp:include page="header.jsp" />

<style>
    /* The Modal (background) */
    .modal {
        display: none;
        /* Hidden by default */
        position: fixed;
        /* Stay in place */
        z-index: 999;
        /* Sit on top */
        left: 0;
        top: 0;
        width: 100%;
        /* Full width */
        height: 100%;
        /* Full height */
        overflow: auto;
        /* Enable scroll if needed */
        background-color: rgb(0, 0, 0);
        /* Fallback color */
        background-color: rgba(0, 0, 0, 0.3);
        /* Black w/ opacity */
    }

    /* Modal Content/Box */
    .modal-content {
        background-color: #fff;
        margin: 5% auto;
        padding: 0px;
        border: 0px solid #fff;
        width: 320px;
        /* Could be more or less, depending on screen size */
        /*height: 460px; 20210119 kej 수직센터 정렬을 위한 제거*/
        /* Full height */
    }

    /* Slideshow container */
    .slideshow-container {
        max-width: 1000px;
        height: 380px;
        position: relative;
        margin: auto;
    }

    /* Caption text */
    .text {
        color: #f2f2f2;
        font-size: 15px;
        padding: 8px 12px;
        position: absolute;
        bottom: 8px;
        width: 100%;
        text-align: center;
    }

    /* Number text (1/3 etc) */
    .numbertext {
        color: #f2f2f2;
        font-size: 12px;
        padding: 8px 12px;
        position: absolute;
        top: 0;
    }

    /* The dots/bullets/indicators */
    .dot {
        height: 12px;
        width: 12px;
        margin: 0 2px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
    }

    .active {
        background-color: #717171;
    }

    /* Fading animation */
    .fade {
        -webkit-animation-name: fade;
        -webkit-animation-duration: 1.5s;
        animation-name: fade;
        animation-duration: 1.5s;
    }

</style>

<!-- The Modal  20210128 르디아망 요청 - 팝업 제거-->
 
 <!-- <div id="myModal" class="modal" style="display: flex;justify-content: center; align-items:center;">  <!-- 20210119 센터 정렬을 위한 인라인 스타일 추가-->


    <!-- Modal content -->
    <!-- <div class="modal-content">


        <div style="cursor:pointer;background-color:#DDDDDD;text-align: right;padding-bottom: 0px;padding-top: 0px;" onClick="close_pop();">
            <span class="pop_bt" style="font-size: 12px;padding-right:20px;padding-bottom:0px;padding-top: 0px">
                CLOSE
            </span>
        </div>

        <div class="slideshow-container">

            <div class="mySlides fade">

                <img src="/images/popup01.jpg" style="width:100%">

            </div>

            <div class="mySlides fade">

                <img src="/images/popup02.jpg" style="width:100%">

            </div>

            <div class="mySlides fade">

                <img src="/images/popup03.jpg" style="width:100%">

            </div>

        </div>

        <div style="text-align:center;padding:6px">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>


    </div>

</div> -->
<!--End Modal-->
   <!-- reservation -->
   


 
       <!-- NAVER SCRIPT -->
    <script type="text/javascript" src="//wcs.naver.net/wcslog.js"></script>
    <script type="text/javascript">
        if (!wcs_add) var wcs_add = {};
        wcs_add["wa"] = "s_585d90404a48";
        if (!_nasa) var _nasa = {};
        wcs.inflow("lediamantmedi.co.kr");
        wcs_do(_nasa);
    </script>

<div class="key_visual slide">
    <!--키비쥬얼 슬라이드-->
    <div class="swiper-container visual-swiper">
        <ul class="swiper-wrapper">



            <li class="swiper-slide" style="background-image:url('/img2/main1_mb.png')">
                <!--<div class="con_wrap">
							<div style="color:#fefefe">르디아망</div>
						</div>-->
            </li>



            <li class="swiper-slide" style="background-image:url('/img2/main2_mb.png')">
                <!--<div class="con_wrap">
							
						</div>-->
            </li>



            <li class="swiper-slide" style="background-image:url('/img2/main3_mb.png')">
                <!--<div class="con_wrap">
							
						</div>-->
            </li>


        </ul>

        
    </div>
</div>





<style>
    .qreserve {
        position: fixed;
        right: 20px;
        height: 50px;
        width: 180px;
        z-index: 199;
        bottom: 20px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .qreserve .box {
        width: 100%;
        height: 100%;
        border: 1px solid #874843;
        background: #874843;
        border-radius: 15px 15px 0;
        box-sizing: border-box;
    }


    .qreserve .txt:last-child {
        content: '';
        display: block;
        clear: both;
    }

    .qreserve .txt img {
        float: left;
        width: 24px;
        height: 24px;
    }

    .qreserve .box .txt {
        padding: 13px 12px 12px 14px;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }

    .qreserve .txt p {
        float: left;
        padding-left: 10px;
        font-size: 16px;
        line-height: 22px;
        color: #fff;
    }

    .span_btn {
        background-color: #5B3532;
        font-size: 13px;
        margin-top: 16px;
        font-weight: 500;
        color: #fefefe;
        width: 140px;
        border: 1px solid #5B3532;
        padding: 10px;
        border-radius: 35px;
        cursor: pointer;
    }

    .span_btn2 {
        background-color: #fbf2eb;
        font-size: 13px;
        margin-top: 16px;
        font-weight: 500;
        color: #5B3532;
        width: 110px;
        border: 1px solid #5B3532;
        padding: 10px 30px;
        border-radius: 35px;
        cursor: pointer;
    }

    /*예약팝업시작*/
        .qpopup {
            position: fixed;
            z-index: 999;
            top: 45%;
            left: -50%;
            margin-top: -50%;
            margin-left: -160px;
            transition: all 0.45s ease;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        .qpopup .popup_layer {
            width: 320px;
            height: 541px;
        }

        .popup_layer .top {
            position: relative;
            height: 100px;
            background: #874843;
            border-radius: 10px 10px 0 0;
            text-align: left
        }

        .popup_layer .top .txt {
            text-align: left;
            padding: 26px 0 26px 36px;
        }

        .qpopup .popup_layer p {
            font-size: 18px;
            line-height: 1.58;
            color: #fff;
        }

        .popup_layer .top h1 {
            font-size: 20px;
            color: #fff;
        }

        .popup_layer .top .close {
            position: absolute;
            font-size: 25px;
            top: 5px;
            right: 24px;

        }

        .popup_layer .cont {
            height: 344px;
            background: #fff;
            box-sizing: border-box;
            padding: 20px;
        }

        .popup_layer .cont .name {
            font-weight: bold;
            color: #874843;
            margin-bottom: 13px;
        }

        .popup_layer .cont>.txt {
            font-size: 14px;
            text-align: center;
            color: #646362;
            line-height: 1.57;
            background: #f5f5f5;
            padding: 20px;
            margin-bottom: 16px;
        }

        .popup_layer .cont input[type='text'] {
            width: 280px;
            height: 45px;
            border-radius: 3px;
            border: 1px solid #dedada;
            box-sizing: border-box;
            margin-bottom: 13px;
            font-size: 14px;
            line-height: 1.25;
            padding: 14px 12px;
        }



        .popup_layer .bottom {
            position: relative;
            height: 58px;
            background: #544543;
            border-radius: 0 0 10px 10px;
        }

        .popup_layer .bottom p {
            line-height: 58px;
        }

        .popup_layer .bottom i {
            position: absolute;
            top: 23px;
            right: 145.5px;
            color: #fff;
            font-size: 29px;
        }

        /* 체크박스커스텀시작 */

        .popup_layer .ck_custom {
            display: block;
            position: relative;
            padding-left: 21px;
            margin-bottom: 6px;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            text-align: left;
            vertical-align: top;
        }

        .popup_layer .ck_custom .txt {
            font-size: 14px;
            line-height: 1.43;
            color: #646362;
            vertical-align: text-top;
        }

        .ck_custom input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }

        .ck_custom .checkmark {
            position: absolute;
            top: 3px;
            left: 0;
            height: 14px;
            width: 14px;
            border: 1px solid #dedada;
        }

        .ck_custom:hover input~.checkmark {
            background-color: #f5f5f5;
        }

        .ck_custom input:checked+.checkmark {
            background-color: #2196f3;
        }

        .checkmark:after {
            content: '';
            position: absolute;
            display: none;
        }

        .ck_custom input:checked~.checkmark:after {
            display: block;
        }

        .ck_custom .checkmark:after {
            left: 4px;
            top: 3px;
            height: 4px;
            width: 3px;
            border: solid white;
            border-width: 0 2px 2px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }

        /* 체크커스텀end */
        .popup_layer input::placeholder {
            color: #999;
            font-size: 15px;
        }

        /*  popup end */
</style>

<div style="height:5px; background-color:#fbf2eb;">&nbsp;</div>

<div style=" background-color:#fbf2eb;height:1270px;margin-bottom:-20px">
    <div style="margin-top:0px;width:100%;text-align:center; padding-top:60px; padding-bottom:20px;">
        <img src="/img2/main1.png">
        <dt style="font-size:24px; font-family: 'Sitka Banner'; color:#5b3532; padding-top:15px;padding-bottom:5px;">Signature Therapy</dt>
        <dt style="font-size:12.5px; color:#5b3532;padding-top:8px; padding-bottom:20px;">전문의의 1:1 상담으로<br>르디아망의 시그니처 테라피를 제공해드립니다.<br>차별화된 테라피로 몸의 감각을 깨워보세요.</dt>
        <li style="font-size:13px; color:#5b3532;margin-top:20px;"><span class="span_btn" style="padding-left:36px;padding-right:36px;" onclick="location.href='cp2.jsp'">발광 테라피</span></li>
        <li style="font-size:13px; color:#5b3532;margin-top:30px;"><span class="span_btn" style="padding-left:34px;padding-right:34px;" onclick="location.href='cp3.jsp'">벡소좀 테라피</span></li>
        <li style="font-size:13px; color:#5b3532;margin-top:30px;"><span class="span_btn" style="padding-left:34px;padding-right:34px;" onclick="location.href='cp4.jsp'">메디컬 테라피</span></li>
    </div>

    <div style="margin-top:35px;width:100%;text-align:center;">
        <img src="/img2/main2.png">
        <dt style="font-size:24px; font-family: 'Sitka Banner'; color:#5b3532; padding-top:15px;padding-bottom:15px;">Special Program</dt>
        <dt style="font-size:12.5px; color:#5b3532;padding-top:8px; padding-bottom:20px;">르디아망 의원은 세분화된 메디컬과 스파가<br>결합된 패키지 프로그램으로 고객님의 페이셜 및 바디<br>피부 고민을 디테일하게 해소시켜줍니다.</dt>
        <li style="font-size:13px; color:#5b3532;margin-top:20px;"><span class="span_btn" style="padding-left:30px;padding-right:30px;" onclick="location.href='cp5.jsp'">시그니처 프로그램</span></li>
        <li style="font-size:13px; color:#5b3532;margin-top:30px;"><span class="span_btn" style="padding-left:34px;padding-right:34px;" onclick="location.href='cp6.jsp'">자연성형 프로그램</span></li>
        <li style="font-size:13px; color:#5b3532;margin-top:30px;"><span class="span_btn" style="padding-left:34px;padding-right:34px;" onclick="location.href='cp7.jsp'">전신 프로그램</span></li>
        <li style="font-size:13px; color:#5b3532;margin-top:30px;"><span class="span_btn" style="padding-left:25px;padding-right:25px;" onclick="location.href='cp8.jsp'">르 아유르베다 프로그램</span></li>
    </div>
</div>

<div class="qreserve">
    <div class="box">
        <div class="txt">
            <img src="/images/icon@2x.png" alt="">
            <p>쉽고 빠르게 예약</p>
        </div>
    </div>
</div>

<!-- 모달창 -->
<div class="qpopup">
    <div class="popup_layer">
        <div class="top">
            <div class="txt">
                <p>상담 및 진료예약</p>
                <h1>02. 6480. 7800</h1>
            </div>
            <p class="close">x</p>
        </div>
        <div class="cont">
            <p class="name">르디아망의원</p>
            <div class="txt">
                이름과 연락처를 남겨주시면<br>
                빠르고 정확하게 상담해드리겠습니다.
            </div>
            <form action="http://admin.lediamantmedi.co.kr/adminle/mcSave2" name="mcsave_post" target="hid_mcsave_post">
                <input type="text" placeholder="이름" name="uname">
                <input type="text" placeholder="연락처" name="uphone"><br>

                <label class="ck_custom"><span class="txt">개인정보취급방침에 동의합니다.</span>
                    <input type="checkbox" name="check_mc_1" id="personal_data" value="1">
                    <span class="checkmark"></span>
                </label>

                <label class="ck_custom"><span class="txt">SMS 수신동의</span>
                    <input type="checkbox" name="check_mc_2" id="sms" value="1">
                    <span class="checkmark"></span>
                </label>
            </form>
        </div>
        <div class="bottom" onclick="chkform_mcsave()">
            <div class="bottom" onclick="chkform_mcsave()">
                <p>상담신청</p>
                <i class="fas fa-angle-right"></i>
            </div>
        </div>
    </div>
</div>


<script>
       var btn = document.querySelector(".qreserve");
       var modal = document.querySelector(".qpopup");
       var close = document.querySelector(".close");

       btn.onclick = function() {
           modal.style.left = "50%";
           btn.style.display = "none"
       }

       close.onclick = function() {
           modal.style.left = "-500px";
           btn.style.display = "block";
       }

       window.onclick = function(event) {
           if (event.target == modal)
               modal.style.display = "none";
       }
   </script>
   
<script type="text/javascript">
    jQuery(document).ready(function() {
        $('#myModal').show();
    });

    function close_pop(flag) {
        $('#myModal').hide();
    };

</script>

<script>
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 3300);
    }

</script>

<script>

function chkform_mcsave(){
	
	if ( document.mcsave_post.uname.value == "" || 
	 
	document.mcsave_post.uphone.value == "" || 
	document.mcsave_post.uphone.value.length > 10 || 
	document.mcsave_post.check_mc_1.checked == false ||
	document.mcsave_post.check_mc_2.checked == false ) {
		
		alert("이름, 연락처, 개인정보이용에 동의하셔야 상담신청 됩니다.");
		
	} else {
		
		document.mcsave_post.submit();
		
	}
}

</script>


<section style="width:100%; height:330px;background:url('/img2/main3.png') center no-repeat; background-size:cover; padding: 0px; margin:0px; margin-top:0px;">

    <dl class="main_about_txt" style="display:block; position:relative; width:100%;padding-top:100px ">


        <dt style="font-size:18px; color:#fff;font-weight:500;text-align:center;margin-bottom:12px ">르디아망 의원
        </dt>
        <dt style="font-size:12.5px; font-weight:500;color:#fff;line-height:20px;text-align:center;padding-left:10px">바쁜 현대인의 라이프스타일에 맞춘 Medical in Spa<br>서비스를 제공하는 르디아망 의원 입니다.<br>100% 예약 시술로 운영되며, 전문의의 1:1 상담을 통한<br>메디컬 서비스를 제공합니다.</dt>
    </dl>
</section>
<jsp:include page="footer.jsp" />
