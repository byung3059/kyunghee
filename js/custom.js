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
                var rawText = $this.text().replace(/,/g, '');
                var isFloat = rawText.includes(".");
                var countTo = parseFloat(rawText);

                $this.prop('Counter', 0).animate({
                    Counter: countTo
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        if (isFloat) {
                            $this.text(now.toFixed(1));
                        } else {
                            $this.text(Math.floor(now).toLocaleString());
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
            $this.removeClass('on');
        } else {
            $this.addClass('on').siblings().removeClass('on');
        }
    });

    // 반응형 메뉴//
    $('#header_bottom .util .m_menu_btn').on('click', function () {
        $('#header_bottom .gnb').addClass('on');
    })
    $('#header_bottom .m_gnb_top_box .m_menu_btn').on('click', function () {
        $('#header_bottom .gnb').removeClass('on');
    })

    $('#header_bottom .gnb>ul>li>a').on('click', function (e) {

        if ($('#header_bottom .gnb').hasClass('on')) {
            e.preventDefault();
            $('#header_bottom .sub_box').addClass('on');
            $(this).parent().siblings().find('.sub_box').removeClass('on');
        };

    });

    $('#header_bottom .sub>li>a').on('click', function (e) {
        $(this).parent().siblings().find('.sub_list').stop().slideUp(0);
        if ($(this).next().hasClass('sub_list') && $('#header .inner .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle(0);
        }

    });


});
