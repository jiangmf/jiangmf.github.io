particlesJS("bg", {"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":3},"image":{"src":"","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":true,"distance":0,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":219.26084732136317,"size":0,"duration":3.5731397341259186,"opacity":0.30858934067451116,"speed":3},"repulse":{"distance":284.2270243054708,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

$(function() {
    $('.tile, .card, #banner .inner > h2, #banner .inner > h2 + p, #banner .inner i, .about h2').css({opacity : 0});
    setTimeout(function(){
        $('.tile, .card, #banner .inner > h2, #banner .inner > h2 + p, #banner .inner i, .about h2').css({
            WebkitTransition : 'opacity 0.6s ease-in-out',
            MozTransition    : 'opacity 0.6s ease-in-out',
            MsTransition     : 'opacity 0.6s ease-in-out',
            OTransition      : 'opacity 0.6s ease-in-out',
            transition       : 'opacity 0.6s ease-in-out'
        });
        var appear = {
            "#banner .inner h2" : 0,
            "#banner .inner p"  : 200,
            "#banner .inner .fa-linkedin"  : 400,
            "#banner .inner .fa-github"  : 600,
            "#banner .inner .fa-stack-overflow"  : 800,
            "#banner .inner .fa-envelope"  : 1000,
            ".about h2"  : 1400,
        }
        
        for (var k in appear){
            (function(k) {
                setTimeout(function(){$(k).css("opacity", "1")}, appear[k]);
            })(k)
        }
    }, 0);



    $('#banner').scrollex({
        bottom: '70%',
        enter: function() {
            $("#header").addClass("alt").removeClass("boxshadow");
        },
        leave: function() {
            $("#header").removeClass("alt").addClass("boxshadow");
        }
    });

    $('.tile, .card').scrollex({
        top: '25%',
        bottom: '-100%',
        enter: function() {
            $(this).css("opacity", "1")
        },
    });

})
