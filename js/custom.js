$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 1) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });

    const main_visual = new Swiper('.main_visual_slide_box', {
        loop: true,
        speed: 1000,
        effect: 'fade',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        fadeEffect: {
            crossFade: true,
        },
        on: {
            init: function () {
                const total = this.slides.length;
                document.querySelector('.page_num .total').textContent = total < 10 ? '0' + total : total;

                const current = this.realIndex + 1;
                document.querySelector('.page_num .current').textContent = current < 10 ? '0' + current : current;
            },
            slideChange: function () {
                const current = this.realIndex + 1;
                document.querySelector('.page_num .current').textContent = current < 10 ? '0' + current : current;
            }
        },
        pagination: {
            el: ".main_visual_nav .nav_line",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".main_visual_nav .arrow_next",
            prevEl: ".main_visual_nav .arrow_prev",
        },
    });

    const main_focus = new Swiper('.main_focus_slide_box', {

        loop: true,
        speed: 500,
        spaceBetween: 30,
        slidesPerView: 2,
        slidesPerGroup: 1,

        navigation: {
            nextEl: ".main_focus_nav .arrow_next",
            prevEl: ".main_focus_nav .arrow_prev",
        },

    });

    $('.main_notice .notice_tab_box>ul>li>button').on('click', function () {

        let idx = $(this).parent().index();
        $('.main_notice .main_notice_tab_box .notice_tab')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on')


        $(this).parent().addClass('on').siblings().removeClass('on')

    })



    Splitting();

    // IntersectionObserver로 보이면 .animate 클래스 추가
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.3 // 30% 이상 보이면 실행
    });

    document.querySelectorAll('.animate-text').forEach(el => observer.observe(el));

});
