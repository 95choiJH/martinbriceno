$(function(){
    
    $(window).bind("load resize", function() {
        var width_size = window.outerWidth;
        if (width_size >= 830) {
            $(document).mousemove(function(e){
                mouseX = e.clientX + "px";
                mouseY = e.clientY + "px";
                gsap.set('.cursor', {
                    x: mouseX,
                    y: mouseY
                })
                if(e.target.closest('.work-area') != null) {
                    $('.cursor').addClass('cursor-work').children('.see-case').removeClass('hide')
                } else if (e.target.closest('.link-talk') != null) {
                    $('.cursor').addClass('cursor-talk').children('.email').removeClass('hide')
        
                } else if(e.target.closest('a, button') != null) {
                    gsap.to('.cursor', {
                        scale: 3,
                    })
                } else {
                    $('.cursor').removeClass('cursor-talk')
                    $('.cursor').removeClass('cursor-work')
                    $('.cursor span').addClass('hide');
                    gsap.to('.cursor', {
                        scale: 1,
                    })
                }
                $('.playing-item').mousemove(function(e){
                    var ratio = 100 / $(this).width();
                    var imgX = e.offsetX * ratio *.4 - 20;
                    gsap.to($(this).children('img'), {
                        xPercent: imgX,
                        ease: Power1.easeOut,
                    })
                })
            })
        } else {
            $('.playing-item').click(function(){
                if(!$(this).hasClass('open')) {
                    gsap.to($(this), .8,{
                        height: "auto",
                        ease: Power1.easeInOut,
                        onComplete: function(){ ScrollTrigger.refresh()}
                    })
                    gsap.to($(this).children().find('.vertical-line'), .6,{
                        rotation: 270,
                        ease: Power2.easeIn,
                    })
                    gsap.to($(this).children().find('.horizon-line'), .6,{
                        rotation: 180,
                        ease: Power2.easeIn,
                    })
                } else {
                    gsap.to($(this), .8,{
                        height: "48px",
                        ease: Power1.easeInOut,
                        onComplete: function(){ ScrollTrigger.refresh()}
                    })
                    gsap.to($(this).children().find('.vertical-line'), {
                        rotation: 0,
                        duration: .6,
                        ease: Power2.easeIn,
                    })
                    gsap.to($(this).children().find('.horizon-line'), {
                        rotation: 0,
                        duration: .6,
                        ease: Power2.easeIn,
                    })
                }
                $(this).toggleClass('open')
            })
        }
    }).trigger('load resize');
    
    

    ScrollTrigger.saveStyles(".work-item");
    ScrollTrigger.matchMedia({
        "(min-width: 830px)": function() {
            gsap.to('.sc-work .work-area', {
                xPercent: -92 * ($('.work-item').length - 1), 
                scrollTrigger: {
                    trigger: '.work-area',
                    start:"top top",
                    end: "+=900%",
                    scrub: .5,
                    // markers: true,
                    pin: ".sc-work",
                },
            })
            show = gsap.utils.toArray('.show'); 
            show.forEach((show) => {
                gsap.fromTo(show,{
                    y: 50,
                    opacity: 0
                },{
                    y: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: show,
                        start: 'top bottom',
                        end: 'bottom-=20% top',
                        // markers: true,
                        toggleActions: 'play reverse play reverse',
                    },
                })
            })
            rotateShow = gsap.utils.toArray('.rotate-show'); 
            rotateShow.forEach((rotateShow) => {
                gsap.fromTo(rotateShow,{
                    y: 50,
                    transform: 'rotate(5deg)',
                    opacity: 0
                },{
                    y: 0,
                    transform: 'none',
                    opacity: 1,
                    scrollTrigger: {
                        trigger: rotateShow,
                        start: 'top bottom',
                        end: 'top top',
                        // markers: true,
                        toggleActions: 'play reverse play reverse'
                    },
                })
            })
            
            line = gsap.utils.toArray('.line');
            line.forEach((line, i) => {
                gsap.fromTo(line,{
                    width: '0'
                } ,{
                    width: '100%', 
                    duration: .5,
                    delay: .3,
                    scrollTrigger: {
                        trigger: line,
                        start: '7000% bottom',
                        // maekers: true,
                    }
                })
            })
            gsap.fromTo('.sc-pr .img-cover', {
                height: '100%'
            }, {
                height: '0',
                duration: .5,
                scrollTrigger: {
                    trigger: '.sc-pr',
                    start: '10% bottom',
                    // markers: true,
                }
            })
        
            gsap.fromTo('.sc-talk', {
                yPercent: -50
            }, {
                yPercent: 0,
                scrollTrigger: {
                    trigger: '.sc-talk',
                    start: '50% bottom',
                    end: '150% bottom',
                    // markers: true,
                    scrub: 1
                }
            })
        },
        "(max-width: 829px)": function() {
            workItem = gsap.utils.toArray('.work-item');
            workItem.forEach((workItem) => {
                gsap.fromTo(workItem,{
                    scale: .75
                }, {
                    scale: 1,
                    scrollTrigger: {
                        trigger: workItem,
                        start:"top bottom",
                        scrub: .5,
                        // markers: true,
                    },
                })
            })
            show = gsap.utils.toArray('.show'); 
            show.forEach((show) => {
                gsap.fromTo(show,{
                    y: 50,
                    opacity: 0
                },{
                    y: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: show,
                        start: 'top bottom',
                        end: 'bottom-=20% top',
                        // markers: true,
                        toggleActions: 'play reverse play reverse',
                    },
                })
            })
            rotateShow = gsap.utils.toArray('.rotate-show'); 
            rotateShow.forEach((rotateShow) => {
                gsap.fromTo(rotateShow,{
                    y: 50,
                    transform: 'rotate(5deg)',
                    opacity: 0
                },{
                    y: 0,
                    transform: 'none',
                    opacity: 1,
                    scrollTrigger: {
                        trigger: rotateShow,
                        start: 'top bottom',
                        end: 'top top',
                        // markers: true,
                        toggleActions: 'play reverse play reverse'
                    },
                })
            })
            
            line = gsap.utils.toArray('.line');
            line.forEach((line, i) => {
                gsap.fromTo(line,{
                    width: '0'
                } ,{
                    width: '100%', 
                    duration: .5,
                    delay: .3,
                    scrollTrigger: {
                        trigger: line,
                        start: '7000% bottom',
                        // maekers: true,
                    }
                })
            })
            gsap.fromTo('.sc-pr .img-cover', {
                height: '100%'
            }, {
                height: '0',
                duration: .5,
                scrollTrigger: {
                    trigger: '.sc-pr',
                    start: '10% bottom',
                    // markers: true,
                }
            })
        
            gsap.fromTo('.sc-talk', {
                yPercent: -50
            }, {
                yPercent: 0,
                scrollTrigger: {
                    trigger: '.sc-talk',
                    start: '50% bottom',
                    end: '150% bottom',
                    // markers: true,
                    scrub: 1
                }
            })
        },
    })
    
    
    
        

    $('.btn').hover(function(){
        $(this).toggleClass('hover');
    })

    $('.scroll-about').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(".sc-about").offset().top}, 1000, 'easeInOutQuart');
    })
    $('.scroll-work').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(".work-area").offset().top}, 1000, 'easeInOutQuart');
    })
    $('.btn-top').click(function(){
        $('html, body').animate({scrollTop:0}, 2000)
    })

    

    

    

    t1 = gsap.timeline({
        repeat: -1,
    })
    t1.to('.smile', {
        delay: 2,
        rotation: 220,
        duration: 1,
        ease: Power2.easeInOut,
    })
    .to('.smile', {
        rotation: 140,
        duration: 1,
        ease: Back.easeInOut,
    })
    .to('.smile', {
        rotation: 360,
        duration: 1,
        ease: Back.easeOut
    })
})