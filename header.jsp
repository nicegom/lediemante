<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <title>르디아망의원</title>
	<meta name="naver-site-verification" content="052a4f6c6ea3b46d64dad911a0469dd0085b1e8c" />
	<meta name="description" content="1:1 개인별 맞춤 진료, 섬세한 시술로 책임을 다하는 의료진">
<meta property="og:type" content="르디아망의원"> 
<meta property="og:title" content="르디아망의원">
<meta property="og:description" content="1:1 개인별 맞춤 진료, 섬세한 시술로 책임을 다하는 의료진">
<meta property="og:image" content="http://www.lediamantmedi.co.kr/webapps2/ROOT/images/lediamant.jpg">
<meta property="og:url" content="http://www.lediamantmedi.co.kr">
    <meta charset="utf-8">
    
	
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0" name="viewport" />
	<meta http-equiv="Pragma" content="no-cache"> 
	<meta http-equiv="Cache-Control" content="no-cache">
	<meta http-equiv="Expires" content="0"/>
 
    
    <link rel="shortcut icon" href="/images/favicon.png">
    <script src="/js/jquery-3.4.1.min.js"></script>
	<script src="/js/plugin/swiper.min.js"></script>
    
    <script src="/js/notion.js"></script>
    <script src="/js/common.js"></script>
    <link rel="stylesheet" href="/css/common.css">
	<link rel="stylesheet" href="/js/plugin/swiper.min.css">
	

    
</head>



<body class="main">



<style>
.video-container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 600px;
	/* height: 80%; */
    overflow: hidden;
}
.video-container video {
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.sub_menu_ledi{ padding-left:20px; margin-top:15px ; font-size:18px; width:85%; line-height:15px;}
.sub_menu_ledi a {display: block; width: 100%; font-size: 16px;}
.sub_menu_ledi ul.dtp3 {width: 100% ; overflow: hidden; content: ''; clear: both;
padding: 10px ;  }
.sub_menu_ledi ul.dtp3 li {width: 100%;color: #ffffff94; line-height: 1.5;font-size: 15px; display: block; margin-bottom: 12px;}
.gnb a.dtp2 {width: 100%; display: block; border-bottom: 1px solid #a08482; font-size: 16px;}
.sub_menu_ledi ul.dtp3 > a { font-size: 18px;}

header .gnb li{font-size: 20px;   margin-bottom: 15px; }
header .gnb{min-height: 100%; background-color: #5b3532;}
header .gnb a {display: inline-block;}
@media (max-width: 768px){
header h1 img {margin-bottom: 40px;}
header { overflow: auto; max-height: 100%; }
}
html, body {
max-width: 100%;
overflow-x: hidden;
}
/* .scbox{position: absolute;} */

</style>
    
	<header>	
        <div class="container_header" style=" min-height:700px; background-color:#5b3532; ">
            <button class="btn_hamburger"></button>
            <h1 ><a href="index.jsp" style="padding-bottom:10px;"><img src="/img2/logo.svg" alt=""></a></h1>
							<div class="scbox">	
								<ul class="gnb cb">
									<li>
										<div style="margin-bottom:0px; font-family: 'Sitka Banner'; "><a href="cp1.jsp">About Lediamant</a></div>
									</li>
													
									<li style="margin-top:0px">
										<div style="font-family: 'Sitka Banner'; padding-bottom:0px;" >
											<a style="width: 53%;" href="javascript:vw1000()">Signature Therapy</a>
										<a href="javascript:vw1000()" style="font-weight:700">+</a></div>
										<div id="sub1000" class="sub_menu_ledi" style="display:none; margin-top: 5px; ">
											<a href="cp4.jsp">메디컬 스파 프로그램</a>
											<a href="cp2.jsp">발광 테라피</a>
											<a href="cp3.jsp">벡소좀 테라피</a>
											
										</div>
									</li>
													
									<li style="margin-top:0px">
										<div style="margin-bottom:0px; font-family: 'Sitka Banner'; padding-bottom:0px; margin-bottom:-10px" >
										<a style="width: 53%;" href="javascript:vw2000()"> medical Therapy</a>
										<a href="javascript:vw2000()" style="font-weight:700">+</a></div>
										<div id="sub2000" class="sub_menu_ledi"  style="display:none;">
											<a class="dtp2" href="cp5.jsp">리프팅</a>
												<ul class="dtp3">
													<li>울쎄라</li>
													<li>인모드</li>
													<li>리프테라</li>
													<li>스킨아우라</li>
													<li>LDM 물방울 리프팅</li>
													<li>실리프팅</li>
												</ul>
											<a class="dtp2" href="cp9.jsp">쁘띠시술</a>
												<ul class="dtp3">
													<li>보톡스</li>
													<li>필러</li>
													<li>하이코/바비코</li>
													<li>벡소좀/샤넬/리쥬란/물광</li>
													<li>윤곽주사</li>
												</ul>
											<a class="dtp2" href="cp7.jsp">피부관리</a>
													<ul class="dtp3">
														<li>진정관리</li>
														<li>미백관리</li>
														<li>여드름 바디</li>
													</ul>
											<a class="dtp2" href="cp8.jsp">체형관리</a>
												<ul class="dtp3">
													<li>울핏</li>
													<li>인디바</li>
												</ul>
										</div>
									</li>

									<li style="margin-top:10px">
										<div style="margin-bottom:0px; font-family: 'Sitka Banner'; padding-bottom:0px;" >
										<a style="width: 53%;" href="javascript:vw3000()"> Spa Program</a>
										<a href="javascript:vw3000()" style="font-weight:700">+</a></div>
										<div id="sub3000" class="sub_menu_ledi"  style="display:none;">
											<a  class="dtp2" href="cp5.jsp">Face</a>
												<ul class="dtp3">
													<li>벡소좀 밀리언즈 페이셜 케어</li>
													<li>자연성형 페이셜 케어</li>
													<li>인텐시브 뉴트리셔널 리프팅 케어</li>
												</ul>
											<a class="dtp2" href="cp9.jsp">Body</a>
												<ul class="dtp3">
													<li>르디아망 전신테라피</li>
													<li>르 아유베다 관리</li>
												</ul>
										</div>
									</li>
									
									
									<li style="margin-top:10px">
										<div style="margin-bottom:10px; font-family: 'Sitka Banner';"><a href="cp6.jsp">Contact Us</a></div>
										<div><a href="https://pf.kakao.com/_xfRxewT" style="width:147px;"><img src="/img2/icon1.svg"></a></div>
									</li>
								</ul>
        	</div>
        </div>
		
		
		
		
		
    </header>
	
	

	
	<script>
	function vw1000(){

		  var x = document.getElementById('sub1000');
		  if (x.style.display === 'none') {
			x.style.display = 'block';
		  } else {
			x.style.display = 'none';
		  }

	}
	
	function vw2000(){
		
		var x = document.getElementById('sub2000');
		  if (x.style.display === 'none') {
			x.style.display = 'block';
		  } else {
			x.style.display = 'none';
		  }
	}
	
	function vw3000(){
		
		var x = document.getElementById('sub3000');
		  if (x.style.display === 'none') {
			x.style.display = 'block';
		  } else {
			x.style.display = 'none';
		  }
	}

	</script>
	
	
	