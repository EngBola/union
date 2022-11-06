
$(document).ready(function(){




    $('.centeral').animate({width:'100%'},1000);
    $('.centeral').animate({height:'210px'},1000,function(){
        $('.centeral h1').fadeIn(1000,function(){
            $('.centeral h2').slideDown(1000,"swing")
        })
    });
    
    let aboutOffset = $('#about').offset().top-50;

    $(window).scroll(function (){
        let windowScroll = $(window).scrollTop();
        if(windowScroll > aboutOffset ){
            $('.goToUp').fadeIn(1000);
            $('.navbar').css('backgroundColor', 'rgba(0,0,0,0.8)')
        }else{
            $('.navbar').css('backgroundColor', 'transparent');
            $('.goToUp').fadeOut(1000);
        }
    });
    $('.goToUp').click(1000,function(){
        $('html , body').animate({scrollTop:0})
    });

    let activeLink = $('.nav-link');
    activeLink.click(function(e){
        activeLink.removeClass('active');
        $(e.target).addClass('active');

    })



    $('#loading .sk-folding-cube').fadeOut(1000, function(){
        $('#loading').fadeOut(500,function(){
            $('#loading').remove();
            $('body').css('overflow','auto');
        });
    });
})

