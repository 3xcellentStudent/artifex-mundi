$(document).ready(function() {
    $('.slider_cont').slick({
        slidesToShow:1,
        slidesToScroll:1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus:false,
        pauseOnHover:false
    });
/*Main Slider*/
    
/*Slider GameOn*/
$('.slider_news').slick({
        slidesToShow:3,
        slidesToScroll:1,
        arrows:true,
        dots: false,
        autoplay: false
    });
/*Slider GameOn*/
    
/*Counter*/
    $('.value_circle').counterUp({
        delay: 1,
        time: 550
    });
/*Counter*/
    
/*WOW*/
new WOW().init();
/*WOW*/

/*Slider GameOn*/
    $('.gameon_slider').slick({
        slidesToShow:1,
        slidesToScroll:1,
        arrows:true,
        dots: true,
        autoplay: false
    });
/*Slider GameOn*/
    
/*Slider News*/
    $('.slide_news').slick({
        slidesToShow:3,
        slidesToScroll:1,
        arrows:true,
        dots: false,
        autoplay: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:1,
                }
            },
            {
                breakpoint: 889,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                }
            }
        ]
    });
/*Slider News*/
    
/*GameOn Tumbler*/ 
/*Counter Circles*/
function onEntry(entry) {
entry.forEach(change => {
if (change.isIntersecting) {
  change.target.classList.add('active');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.small_circle, .switch');
for (let elm of elements) {
  observer.observe(elm)
};
/*Counter Circles*/

$('.next_section').mPageScroll2id({
    scrollSpeed: 1500,
    scrollEasing: 'easeInOutQuint'
});
    
});
