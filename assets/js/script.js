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

$('.slider_news').slick({
        slidesToShow:3,
        slidesToScroll:1,
        arrows:true,
        dots: false,
        autoplay: false
    });

    $('.value_circle').counterUp({
        delay: 1,
        time: 550
    });
new WOW().init();

    $('.gameon_slider').slick({
        slidesToShow:1,
        slidesToScroll:1,
        arrows:true,
        dots: true,
        autoplay: false
    });
    
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

$('.next_section').mPageScroll2id({
    scrollSpeed: 1500,
    scrollEasing: 'easeInOutQuint'
});
    
});
