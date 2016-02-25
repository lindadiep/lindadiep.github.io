// document.getElementsByTagName("li")[0].addEventListener("click",function(){
// 	if(!this.parentNode.getAttribute("class")){
// 		this.parentNode.setAttribute("class","slideToggle");
// 	}
// 	else{
// 		this.parentNode.removeAttribute("class");
// 	}
// });

$(document).ready(function (){
	$("li").click(displayNav);

	function displayNav (){
		$(this).parent().toggleClass("slideToggle");

	}



});

// CAROUSEL!!!
//$(document).ready(function(){

//var images=[
//    "images/JS-2.jpg",
//    "images/JS-3.jpg",
//    "images/JS-5.jpg",
//    "images/JS-6.jpg"
//    ];

//var i=0;

//function changeImage(){
//	$("#carousel-Img").attr("src",images[i]);
//}

//function previousImage(){
// 	i>0 ? changeImage(i--):0;
//}


//function nextImage(){
//  	i+1<images.length ? changeImage(i++):1;
//}

//$(".carouselBtn[value='Next']").on("click",nextImage);
//$(".carouselBtn[value='Prev']").on("click",previousImage);

//});

// use bootstrap to create a carousel! http://codepen.io/redfrost/pen/dbrgk
// responsive carousel, this one is crazy: http://codepen.io/kqlambert/pen/qLitJ
// http://talkerscode.com/webtricks/basic-image-slideshow-with-previous-and-next-button-using-jquery.php
// http://stackoverflow.com/questions/24091731/i-am-having-trouble-targeting-the-next-and-prev-buttons-in-jquery-for-my-image-s

// Other js code to use:

//Back to top scroll button:

// http://jsfiddle.net/gilbitron/Lt2wH/
// https://codyhouse.co/gem/back-to-top/
// http://html-tuts.com/back-to-top-button-jquery/


// JUMP TO ANCHOR!!!

//var shiftWindow = function() {
//    scrollBy(0, -50
//    );

// <body onload="load()">
//window.addEventListener("hashchange", shiftWindow);

//$('body').onload(function(){
//    if (window.location.hash)
//      shiftWindow();
//    };
