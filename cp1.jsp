<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>

<jsp:include page="header.jsp" />



	<section class="main_about" 
	style="width:100%; height:400px;background:url('/images/main2.png') center no-repeat; background-size:cover; padding: 0px; margin:0px;margin-top:40px";>
		
		<dl class="main_about_txt" style="display:block; position:relative; width:100%;padding-top:150px ">
			
			
			<dt style="font-size:18px; color:#fff;font-weight:500;text-align:center;margin-bottom:12px ">르디아망 의원<dt>
			<dt style="font-size:12.5px; font-weight:500;color:#fff;line-height:20px;text-align:center;padding-left:10px">바쁜 현대인의 라이프스타일에 맞춘 Medical in Spa<br>서비스를 제공하는 르디아망 의원 입니다.
			<br>전문의의 1:1 상담을 통한 메디컬 서비스를 제공합니다.
		</dl>
	</section>




<div >
	<div class="main_about" style="width:100%; height:550px;background:url('/img2/main4.png') center no-repeat; background-size:cover; padding: 0px; margin:0px;"></div>
</div>





<div class="top_visual" style="width:100%; height:400px;background-color:#e9ddcd; background-size:cover; padding: 0px; margin:0px;margin-top:-20px">

<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">	
	<div style="width:100%; text-align:center; padding:0px">
			
			<dl class="main_about_txt" style="display:block; position:relative; width:100%; ">

				<dt style="font-size:24px; font-family: 'Sitka Banner'; color:#5b3532; padding-top:40px;text-align:center;">About Le Diamant<dt>
				<dt style="font-size:12.5px;font-weight:500; color:#514c4c;text-align:center;color:#5b3532;padding-bottom:20px;">지친 일상 속에서 편안하게 휴식할 수 있는 힐링공간,<br>고객 중심의 럭셔리를 선사하는 르디아망 의원입니다</dt>
			</dl>
		
		<div class="w3-content w3-display-container" style="width:100%x;position:relative;margin:0px;">
		  <img class="mySlides" src="/images/lediamantmedi2.png" style="width:100%">
		  <img class="mySlides" src="/images/lediamantmedi4.png" style="width:100%">
		  <img class="mySlides" src="/images/lediamantmedi1.png" style="width:100%">
		  <img class="mySlides" src="/images/lediamantmedi3.png" style="width:100%">
		  

		  <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
		  <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>

		</div>
		
	</div>
		


</div>

<script>
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
</script>




<jsp:include page="footer.jsp" />
	

