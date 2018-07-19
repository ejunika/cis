/*====
javascript document
===*/

$(document).ready(function () {
    // close collapsible menu when menu item click on responsive mode
    $('#navb .nav-link').click(function () {
        if(window.innerWidth < 768){
            $('.navbar-toggler').trigger('click');
        }
    });

    // Select all links with hashes
    $('.navbar a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 700, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    // data slider 1
    var slider1Item = $('.plansCustom_dataSlides_sliderData .plansCustom_dataSlides_sliderItem');
    var current1Item = 0; // currently shown div
    slider1Item.hide().first().show();
    $(".plansCustom_dataSlides_sliderData button[name=next]").click(function (e) {
        slider1Item.eq(current1Item).hide();
        current1Item = (current1Item + 1 < slider1Item.length) ? current1Item + 1 : 0;
        slider1Item.eq(current1Item).show(); // show next
        console.log(slider1Item.length, current1Item);
    });
    $(".plansCustom_dataSlides_sliderData button[name=prev]").click(function (e) {
        slider1Item.eq(current1Item).hide();
        current1Item = (current1Item > 0) ? current1Item - 1 : slider1Item.length - 1;
        slider1Item.eq(current1Item).show(); // or .css('display','block');
        console.log(slider1Item.length, current1Item);
    });

    // data slider 2
    var slider2Item = $('.plansCustom_dataSlides_sliderSms .plansCustom_dataSlides_sliderItem');
    var current2Item = 0; // currently shown div
    slider2Item.hide().first().show();
    $(".plansCustom_dataSlides_sliderSms button[name=next]").click(function (e) {
        slider2Item.eq(current2Item).hide();
        current2Item = (current2Item + 1 < slider2Item.length) ? current2Item + 1 : 0;
        slider2Item.eq(current2Item).show(); // show next
        console.log(slider2Item.length, current2Item);
    });
    $(".plansCustom_dataSlides_sliderSms button[name=prev]").click(function (e) {
        slider2Item.eq(current2Item).hide();
        current2Item = (current2Item > 0) ? current2Item - 1 : slider2Item.length - 1;
        slider2Item.eq(current2Item).show(); // or .css('display','block');
        console.log(slider2Item.length, current2Item);
    });

    // data slider 3
    var slider3Item = $('.plansCustom_dataSlides_sliderMinutes .plansCustom_dataSlides_sliderItem');
    var current3Item = 0; // currently shown div
    slider3Item.hide().first().show();
    $(".plansCustom_dataSlides_sliderMinutes button[name=next]").click(function (e) {
        slider3Item.eq(current3Item).hide();
        current3Item = (current3Item + 1 < slider3Item.length) ? current3Item + 1 : 0;
        slider3Item.eq(current3Item).show(); // show next
        console.log(slider3Item.length, current3Item);
    });
    $(".plansCustom_dataSlides_sliderMinutes button[name=prev]").click(function (e) {
        slider3Item.eq(current3Item).hide();
        current3Item = (current3Item > 0) ? current3Item - 1 : slider3Item.length - 1;
        slider3Item.eq(current3Item).show(); // or .css('display','block');
        console.log(slider3Item.length, current3Item);
    });
});
