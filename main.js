//ini smooth scroll
$('.page-scroll').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;
        $('html,body').animate({
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

//ini slider
$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('header').addClass('black');
    } else {
        $('header').removeClass('black');
    }
});

//ini number count
$(".num").counterUp({
    delay: 10,
    time: 1000
});