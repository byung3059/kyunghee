$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        // console.log(sct);
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
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
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


    const main_media = new Swiper('.main_media_slide_box', {

        loop: true,
        loopedSlides: 2,
        speed: 500,
        spaceBetween: 30,
        slidesPerView: 'auto',
        slidesPerGroup: 1,

        navigation: {
            nextEl: ".main_media_nav .arrow_next",
            prevEl: ".main_media_nav .arrow_prev",
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

    });

    const main_focus = new Swiper('.main_focus_slide_box', {

        loop: true,
        speed: 500,
        spaceBetween: 30,
        slidesPerView: 1,
        slidesPerGroup: 1,

        navigation: {
            nextEl: ".main_focus_nav .arrow_next",
            prevEl: ".main_focus_nav .arrow_prev",
        },

        breakpoints: {
            1400: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },

    });

    var $target = $('.main_count');
    var counted = false;

    $(window).on('scroll', function () {
        var winTop = $(window).scrollTop();
        var offsetTop = $target.offset().top - $(window).height() + 100;

        if (winTop > offsetTop && !counted) {
            $target.addClass('on');

            $('.count').each(function () {
                var $this = $(this);
                var rawText = $this.text().replace(/,/g, ''); // 쉼표 제거
                var isFloat = rawText.includes(".");
                var countTo = parseFloat(rawText);

                $this.prop('Counter', 0).animate({
                    Counter: countTo
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        if (isFloat) {
                            $this.text(now.toFixed(1)); // 소수 한 자리
                        } else {
                            $this.text(Math.floor(now).toLocaleString()); // 쉼표 포함 정수
                        }
                    }
                });
            });

            counted = true;
        }
    });
    $('#footer .link_box').on('click', function () {
        var $this = $(this);

        if ($this.hasClass('on')) {
            // 이미 on 상태라면 꺼줌
            $this.removeClass('on');
        } else {
            // 켜고, 다른 형제들은 꺼줌
            $this.addClass('on').siblings().removeClass('on');
        }
    });


});
