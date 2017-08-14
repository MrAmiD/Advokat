$(function() {

    $('#main-slider').owlCarousel({
        loop:true,
        nav:true,
        items: 1,
        navContainer: '#customNavMain-slider',
        navText: ['<div href="" class="control-btn owl-prev left-btn"><svg width="13px" height="22px">  <path fill-rule="evenodd"  fill="rgb(255, 255, 255)" d="M13.005,2.422 C12.955,2.462 12.902,2.498 12.856,2.542 C9.827,5.424 6.798,8.307 3.770,11.190 C3.723,11.234 3.679,11.280 3.619,11.340 C3.676,11.398 3.727,11.455 3.782,11.507 C6.800,14.380 9.818,17.253 12.837,20.125 C12.887,20.173 12.949,20.209 13.005,20.251 C13.005,20.293 13.005,20.336 13.005,20.378 C12.793,20.569 12.578,20.757 12.370,20.953 C11.994,21.307 11.622,21.666 11.272,22.001 C7.522,18.433 3.783,14.875 -0.010,11.266 C0.021,11.250 0.105,11.223 0.161,11.170 C3.672,7.833 7.180,4.494 10.688,1.155 C10.932,0.923 11.512,0.920 11.754,1.150 C12.171,1.546 12.588,1.942 13.005,2.338 C13.005,2.366 13.005,2.394 13.005,2.422 Z"/></svg></div>', '<div href="" class="control-btn owl-next right-btn"><svg width="13px" height="22px"><path fill-rule="evenodd"  fill="rgb(255, 255, 255)" d="M0.005,19.581 C0.055,19.541 0.108,19.505 0.154,19.461 C3.171,16.583 6.187,13.704 9.203,10.826 C9.250,10.782 9.293,10.735 9.353,10.675 C9.296,10.617 9.246,10.561 9.191,10.509 C6.185,7.640 3.179,4.771 0.172,1.903 C0.122,1.855 0.061,1.819 0.005,1.777 C0.005,1.735 0.005,1.693 0.005,1.651 C0.216,1.460 0.431,1.272 0.638,1.076 C1.012,0.722 1.382,0.364 1.731,0.030 C5.466,3.593 9.190,7.145 12.968,10.749 C12.937,10.766 12.853,10.792 12.797,10.845 C9.301,14.177 5.807,17.511 2.313,20.845 C2.069,21.078 1.492,21.080 1.251,20.851 C0.836,20.455 0.420,20.060 0.005,19.665 C0.005,19.637 0.005,19.609 0.005,19.581 Z"/></svg></div>'],
        smartSpeed: 700
    });
    $('#license-gallery').owlCarousel({
        loop:true,
        nav:true,
        items: 3,
        navContainer: '#customNavLicense',
        navText: ['<div href="" class="control-btn owl-prev left-btn"><svg width="13px" height="22px">  <path fill-rule="evenodd"  fill="rgb(255, 255, 255)" d="M13.005,2.422 C12.955,2.462 12.902,2.498 12.856,2.542 C9.827,5.424 6.798,8.307 3.770,11.190 C3.723,11.234 3.679,11.280 3.619,11.340 C3.676,11.398 3.727,11.455 3.782,11.507 C6.800,14.380 9.818,17.253 12.837,20.125 C12.887,20.173 12.949,20.209 13.005,20.251 C13.005,20.293 13.005,20.336 13.005,20.378 C12.793,20.569 12.578,20.757 12.370,20.953 C11.994,21.307 11.622,21.666 11.272,22.001 C7.522,18.433 3.783,14.875 -0.010,11.266 C0.021,11.250 0.105,11.223 0.161,11.170 C3.672,7.833 7.180,4.494 10.688,1.155 C10.932,0.923 11.512,0.920 11.754,1.150 C12.171,1.546 12.588,1.942 13.005,2.338 C13.005,2.366 13.005,2.394 13.005,2.422 Z"/></svg></div>', '<div href="" class="control-btn owl-next right-btn"><svg width="13px" height="22px"><path fill-rule="evenodd"  fill="rgb(255, 255, 255)" d="M0.005,19.581 C0.055,19.541 0.108,19.505 0.154,19.461 C3.171,16.583 6.187,13.704 9.203,10.826 C9.250,10.782 9.293,10.735 9.353,10.675 C9.296,10.617 9.246,10.561 9.191,10.509 C6.185,7.640 3.179,4.771 0.172,1.903 C0.122,1.855 0.061,1.819 0.005,1.777 C0.005,1.735 0.005,1.693 0.005,1.651 C0.216,1.460 0.431,1.272 0.638,1.076 C1.012,0.722 1.382,0.364 1.731,0.030 C5.466,3.593 9.190,7.145 12.968,10.749 C12.937,10.766 12.853,10.792 12.797,10.845 C9.301,14.177 5.807,17.511 2.313,20.845 C2.069,21.078 1.492,21.080 1.251,20.851 C0.836,20.455 0.420,20.060 0.005,19.665 C0.005,19.637 0.005,19.609 0.005,19.581 Z"/></svg></div>'],
        smartSpeed: 700,
        margin:15,
        responsive:{
            0:{
                items:2,
                nav:true,
                margin:0
            },
            600:{
                items:3,
                nav:false,
                margin:15
            },
            1000:{
                items:3,
                nav:true,
                loop:true,
                margin:15
            }
        }
    });
    $(".fancybox").fancybox({
            prevEffect	: 'none',
            nextEffect	: 'none',
            helpers	: {
                title	: {
                    type: 'outside'
                },
                thumbs	: {
                    width	: 50,
                    height	: 50
                }
            }
        }
    );

    $(document).on( "click", ".show-all", function() {
        console.log('gg');
        var sum_h = 0;
        var sum_5 = 0;
        if(!$(this).hasClass('active')){
            $($(this).data().id + ' li').each(function () {
                sum_h = sum_h + $(this).height();
            });
            $($(this).data().id).height(sum_h);
            $(this).addClass('active');
            $(this).html('Свернуть ↑');
        }
        else{
            $(this).removeClass('active');
            $($(this).data().id + ' li').each(function (index) {
                if (index < 5)
                    sum_5 = sum_5 + $(this).height();
            });
            $($(this).data().id).height(sum_5)
            $(this).html('Ещё ↓');
        }
    });

    $(document).on( "click", ".contacts ul li", function() {
        console.log('.con-txt',$(this).find('.con-txt'));
        $('.contacts ul li').find('.con-txt').removeClass('active');
        $(this).find('.con-txt').addClass('active');
    });


    $(document).mouseup(function(e)
    {
        var container = $(".contacts ul li .con-txt");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0)
        {
            $('.contacts ul li').find('.con-txt').removeClass('active');
        }
    });

    //My menu init with burger
    $('#my-menu').html($('.menu-main').html());
    $("#my-menu").mmenu({
        "extensions": [
            "effect-menu-slide"
        ],
        "offCanvas": {
            "position": "bottom"
        },
        "navbar": {
            "title": ""
        },
        "navbars": [
            {
                "position": "bottom",
                "content": [
                    "<a class='fa fa-vk' href='https://vk.com/public98263653'></a>",
                    "<a class='fa fa-envelope-o' href='mailto:stupnikovaelena@bk.ru'></a>",
                    "<a class='fa  fa-phone' href='tel:89028034530'></a>",
                ]
            }
        ]
    });
    var api = $("#my-menu").data( "mmenu" );
    //   Hook into methods
    api.bind( "open:finish", function() {
        $("#menu-btn").addClass('is-active');
    });
    api.bind( "close:finish", function( $panel ) {
        $("#menu-btn").removeClass('is-active');
    });

});
