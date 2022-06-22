$(function(){

    gsap.to('.sc-work .work-area', {
        scrollTrigger: {
            trigger:'.work-item',
            start:"top top", // ['트리거', '윈도우']
            // end:"bottom bottom", // ['트리거', '윈도우']
            end:"+=900%", // 5배 영역 크게
            // markers: true,
            scrub: .5, // 반복효과

            pin: '.sc-work',
        },
        xPercent: -366
    })

    $('.btn').hover(function(){
        $(this).toggleClass('hover');
    })
    show = gsap.utils.toArray('.show'); 
    show.forEach((show, i) => {
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
            scrollTrigger: {
                trigger: line,
                start: '5000% bottom',
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



})