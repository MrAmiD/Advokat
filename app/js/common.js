$(function() {

    $('#main-slider').owlCarousel({
        loop:true,
        nav:true,
        items: 1,
        navContainer: '#customNavMain-slider',
        navText: ['<div href="" class="control-btn owl-prev left-btn"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>', '<div href="" class="control-btn owl-next right-btn"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>'],
        smartSpeed: 700
    });

});
