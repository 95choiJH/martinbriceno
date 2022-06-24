$(function(){
    $(document).mousemove(function(e){
        mouseX = e.clientX + "px";
        mouseY = e.clientY + "px";
        gsap.to('.cursor', {
            x: mouseX,
            y: mouseY
        })
        if(e.target.closest('.work-area') != null) {
            $('.cursor').addClass('cursor-work').children('.cursor-work').removeClass('hide')
            gsap.to('.cursor', {
                x: mouseX,
                y: mouseY
            })
        } else if (e.target.closest('.link-talk') != null) {
            $('.cursor').addClass('cursor-talk').children('.cursor-talk').removeClass('hide')

        } else if(e.target.closest('a, button') != null) {
            gsap.to('.cursor', {
                scale: 3,
            })
        }else {
            $('.cursor').removeClass('cursor-talk')
            $('.cursor').removeClass('cursor-work')
            $('.cursor span').addClass('hide');
            gsap.to('.cursor', {
                scale: 1,
            })
        }
    })
    
    if (matchMedia("screen and (max-width: 830px)").matches) {
        workItem = gsap.utils.toArray('.work-item');
        workItem.forEach((workItem) => {
            gsap.fromTo(workItem, {
                y: 100,
                scale: .75
            }, {
                y: 0,
                scale: 1,
                transformOrigin:"center",
                scrollTrigger: {
                    trigger: '.work-area',
                    start:"top bottom",
                    scrub: .5,
                    markers: true,
                }
            })
        })
    } 

    
    gsap.to('.sc-work .work-area', {
        scrollTrigger: {
            trigger:'.work-item',
            start:"top top",
            end:"+=900%",
            //
            scrub: .5,

            pin: '.sc-work',
        },
        xPercent: -366
    })
    

    $('.btn').hover(function(){
        $(this).toggleClass('hover');
    })

    $('.scroll-about').click(function(){
        $('html,body').animate({
            scrollTop: $(".sc-about").offset().top}, 1000, 'easeInOutQuart');
    })
    $('.scroll-work').click(function(){
        $('html,body').animate({
            scrollTop: $(".work-area").offset().top}, 1000, 'easeInOutQuart');
    })
    $('.btn-top').click(function(){
        $('html, body').animate({scrollTop:0}, 2000)
    })

    show = gsap.utils.toArray('.show'); 
    show.forEach((show) => {
        gsap.fromTo(show,{
            y: 50,
            opacity: 0
        },{
            y: 0,
            opacity: 1,
            duration: .5,
            scrollTrigger: {
                trigger: show,
                start: 'top bottom',
                end: 'bottom-=20% top',
                // markers: true,
                toggleActions: 'play reverse play reverse'
            },
        })
    })
    rotateShow = gsap.utils.toArray('.rotate-show'); 
    rotateShow.forEach((rotateShow, i) => {
        gsap.fromTo(rotateShow,{
            y: 50,
            transform: 'rotate(5deg)',
            opacity: 0
        },{
            y: 0,
            transform: 'none',
            opacity: 1,
            duration: .5,
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
            delay: .5,
            scrollTrigger: {
                trigger: line,
                start: '7000% bottom',
                // maekers: true,
            }
        })
    })

    

    $('.playing-item').hover(function(e){
        var ratio = 100 / $(this).width();
        var imgX = e.offsetX * ratio * .4 - 20;
        gsap.to($(this).children('img'), {
            xPercent: imgX,
            ease: Power1.easeOut,
        })
    }, function(){
        gsap.to($(this).children('img'), {
            xPercent: 0,
            ease: Power1.easeOut,
        })
    })

    $('.playing-item').mousemove(function(e){
        var ratio = 100 / $(this).width();
        var imgX = e.offsetX * ratio * .4 - 20;
        gsap.to($(this).children('img'), {
            xPercent: imgX,
            ease: Power1.easeOut,
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