$( function () {

    particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#0990bb"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#0990bb",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#fff",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        }
    );

    $('.hero-slider').slick({
        dots: true,
        autoplay: true
    });

    $('input[name*="phone"]').inputmask({
        mask: '+7(999)999-99-99',
        showMaskOnHover: false
    });

    $(window).scroll(function () {

        if($(window).scrollTop()+$(window).height()>=$(document).height()){
            $('.footer-eq__eq-img').addClass('active');
        } else {
            $('.footer-eq__eq-img').removeClass('active');}

        if($(window).scrollTop()+$(window).height()>=$(document).height()-$('.footer').height()-10){
            $('.footer').addClass('active');
        } else {
            $('.footer').removeClass('active');
        }

    });

    setInterval(function(){

        var rand = Math.floor(Math.random() * 4);
        var items = [$('#it1'), $('#it2'), $('#it3'), $('#it4')];
        var effect = items[rand];
        $(effect).toggleClass('active');

    }, 2500);

    var validatePhone = function(phone) {
        var re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{3,10}$/;
        return re.test(phone);
    };

    $('.callback__form').submit(function(e){

        var phone = $('.callback__input').val(),
            errorFlag1 = false,
            data = $(this).serializeArray();

        e.preventDefault();

        if ( !validatePhone(phone) || phone == '' ) {
            $(this).find('input[name="phone"]').closest('.callback__input').addClass('error');
            errorFlag1 = true;
        } else{
            $(this).find('input[name="phone"]').closest('.callback__input').removeClass('error');
            errorFlag1 = false;
        }

        if ( !errorFlag1 ) {
            $.ajax({
                url: "/",
                type: "post",
                dataType: "json",
                data: data,

                success: function (ans) {
                    $('.callback__form')[0].reset();

                    $.magnificPopup.open({
                        items: {
                            src: '#success'
                        }
                    });
                }


                // }).done(function (msg) {
                //     $('.callback__form')[0].reset();
                //     $.magnificPopup.open({
                //         items: {
                //             src: '#success'
                //         }
                //     });
            });
        }
    });


    // var validatePhone = function(phone) {
    //     var re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{3,10}$/;
    //     return re.test(phone);
    // };
    //
    // $('.callback__form').submit(function(e){
    //
    //     var phone = $('.callback__input').val(),
    //         errorFlag1 = false,
    //         data = $(this).serializeArray();
    //
    //     e.preventDefault();
    //
    //     if ( !validatePhone(phone) || phone == '' ) {
    //         $(this).find('input[name="phone"]').closest('.callback__input').addClass('error');
    //         errorFlag1 = true;
    //     } else{
    //         $(this).find('input[name="phone"]').closest('.callback__input').removeClass('error');
    //         errorFlag1 = false;
    //     }
    //
    //     if ( !errorFlag1 ) {
    //         $.ajax({
    //             url: "send.php",
    //             type: "post",
    //             dataType: "json",
    //             data: data
    //         }).done(function (msg) {
    //             $('.callback__form')[0].reset();
    //             $.magnificPopup.open({
    //                 items: {
    //                     src: '#success'
    //                 }
    //             });
    //         });
    //     }
    // });

    ymaps.ready(init);
    var myMap;

    function init(){
        myMap = new ymaps.Map("map", {
            center: [59.82389067, 30.08299404],
            zoom: 15
        });

        myPlacemark = new ymaps.Placemark([59.82389067, 30.08299404], {
            hintContent: 'РЕМТЕХ',
            balloonContent: 'Санкт-Петербург, ул. Садовая, д.3'
        });

        myMap.geoObjects.add(myPlacemark);

        myMap.controls
            .remove('Button')
            .remove('fullscreenControl')
            .remove('typeSelector')
            .remove('geolocationControl')
            .remove('searchControl')
            .remove('trafficControl')
            .remove('rulerControl')
            .remove('zoomControl');

        myMap.behaviors.disable([
            'drag'
            //'scrollZoom'
        ])
    }

});

