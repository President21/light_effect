
 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
	 autoplay: true
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
    variableWidth: true,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true

});
		

window.addEventListener("load", function() {
    var btn = document.querySelector("#scrol");
    btn.addEventListener("click", function() {
        var idTimer = setInterval(function() {
            var posScroll  = getScrollOffsets(window);
            var posScrollY = posScroll.y;
 
            if (posScrollY >= 780)
                clearInterval(idTimer);
            else {
                posScrollY = posScrollY + 7;
                window.scrollTo(0, posScrollY);
            }
        }, 15);
    }, false);
}, false);
 
function getScrollOffsets(w) {
    w = w || window;
    if (w.pageXOffset != null)
        return {x:w.pageXOffset, y:w.pageYOffset};
}


var cssSelector = anime({
  targets: '#cssSelector .menu_mobail',
  translateX: -250
});