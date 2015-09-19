$(document).ready(function() {

    var owl = $("#gallery-slider");

    owl.owlCarousel({
        items : 4,
        autoWidth:true,
        loop: true
    });

    $(".owl-next").click(function(){
        owl.trigger('next.owl.carousel');
    });
    $(".owl-prev").click(function(){
        owl.trigger('prev.owl.carousel');
    });

    var up_button = $('.scroll-top');
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 700) {
            up_button.show();
        } else {
            up_button.hide();
        }
    });

    $(up_button).click(function(e){
        $("body, html").animate({"scrollTop":0},"slow");
        return false;
    });

    $('#menu a').click(function(){
        var id = $(this).attr('href');
        $("body, html").animate({"scrollTop": $(id).offset().top},"slow");
        return false;
    });

});

GetNoun = function(number, one, two, five) {
    number = Math.abs(number);
    number %= 100;
    if (number >= 5 && number <= 20) {
        return five;
    }
    number %= 10;
    if (number == 1) {
        return one;
    }
    if (number >= 2 && number <= 4) {
        return two;
    }
    return five;
};

timeend = new Date();
timeend= new Date(timeend.getYear()>1900?(timeend.getYear()+1):(timeend.getYear()+1901),0,1);
function time() {
    today = new Date();
    today = Math.floor((timeend-today)/1000);
    tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
    tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
    thour=today%24; today=Math.floor(today/24);
    timestr=today +" дней "+ thour+" часов "+tmin+" минут "+tsec+" секунд";

    var days = $('#days');
    var hours = $('#hours');
    var minutes = $('#minutes');
    var seconds = $('#seconds');

    days.find('span').first().text(today);
    days.find('span').last().text(GetNoun(today, 'день', 'дня', 'дней'));
    hours.find('span').first().text(thour);
    hours.find('span').last().text(GetNoun(thour, 'час', 'часа', 'часов'));
    minutes.find('span').first().text(tmin);
    minutes.find('span').last().text(GetNoun(tmin, 'минута', 'минуты', 'минут'));
    seconds.find('span').first().text(tsec);
    seconds.find('span').last().text(GetNoun(tsec, 'секунда', 'секунды', 'секунд'));
    window.setTimeout("time()",1000);
}