$(document).ready(function () {

   
    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
                targetOffset = $(id).offset().top;
                
        $('html, body').animate({ 
            scrollTop: targetOffset - 100
        }, 500);
    });

    var alturas = {};
    $('.section').each(function () {
    alturas[$(this).prop('id')] = $(this).offset().top - 300; // ex: alturas['section_2'] = 600
    });
    console.log(alturas);

    // quando fazemos scoll vamos percorrer o nosso obj alturas e comparar a altura de cada secção com o que já andamos em scroll
    $(window).on('scroll', function() {
    for(var seccao in alturas) {
        if($(window).scrollTop() >= alturas[seccao]) {
        $('.nav-item').removeClass('active'); // removemos a classe ative
        $('.nav-link[href="#' +seccao+ '"]').parent().addClass('active'); // adicionamos a class active ao item do menu cuja data-section é igual ao id da secção que está a uma maior ou igual distancia do topo do que aquela que percorremos com o scroll
        }
    }
    });

});

$(window).on('load', function () {
    $("#loading").fadeOut("slow");
});