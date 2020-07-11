/**
 * Created by User on 10/07/2020.
 */
(function ($) {
    $(document).ready(function () {

        // Important notice Start Here
        $('.notice-slider').slick({
            dots: false,
            infinite: false,
            nextArrow: '<i class="fas fa-chevron-right"></i>',
            prevArrow: '<i class="fas fa-chevron-left"></i>',
        });
        // Important notice End Here

        //  Experts start Here
        $('.expert-slider').slick({
            dots: false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            nextArrow: '<i class="fas fa-chevron-right"></i>',
            prevArrow: '<i class="fas fa-chevron-left"></i>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
        //  Experts End Here

        //  Partners start Here
        $('.partner-slider').slick({
            dots: false,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            nextArrow: '<i class="fas fa-chevron-right"></i>',
            prevArrow: '<i class="fas fa-chevron-left"></i>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
        //  Partners End Here

    });
})(jQuery);