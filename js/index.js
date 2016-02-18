

// CAROUSEL!!!
$(document).ready(function(){

var images=[
    "images/JS-2.jpg",
    "images/JS-3.jpg",
    "images/JS-5.jpg",
    "images/JS-6.jpg"
    ];

var i=0;

function changeImage(){
	$("#carousel-Img").attr("src",images[i]);
}

function previousImage(){
    /*
     This line below is shorthand for an if statement, but I do not think it's working
     quite right.  I would advise writing out the full if statement.

     Also, a weird quirk about using ++ or -- to add or subtract 1 from a variable.

     If you type --i, it will subtract 1 from i first, and then pass that new number to your function.
     If you type i--, it will pass i to your function and then subtract 1 from i.

     So, if i == 0:

        changeImage(--i) passes -1 to the function
        changeImage(i--) passes 0 to the function

        changeImage(++i) passes 1 to the function
        changeImage(i++) passes 0 to the function

     So, unless you have a specific reason for using --i or ++i, I would normally use i-- or i++

     Weird, but important quirk.
    */

  i>0 ? changeImage(--i):0;
}

function nextImage(){
    /* 
        See massive comment above; applies to this line too. 
    */
    
  i+1<images.length ? changeImage(++i):1;
}

$(".carouselBtn[value='Next']").on("click",nextImage);
$(".carouselBtn[value='Prev']").on("click",previousImage);

});

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
