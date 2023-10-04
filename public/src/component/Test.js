
script.onload = function () {
    //바닐라



    //추가분
    var bestReviewSwiper = undefined; // Swiper 변수 초기값선언
    var screenWidth = $(window).width(); // 화면 너비 변수

    //리뷰
    function reviewSwiper() {




        if (bestReviewSwiper != undefined) {
            //swiper가 실행된 흔적이 있다.
            bestReviewSwiper.destroy();
            //일단 swiper 찌꺼기 버려
        }
        if (screenWidth > 1150) {
            // 화면너비가 1150이상이면

            bestReviewSwiper = new Swiper('.borderReview.swiper', {

                slidesPerView: 5,
                spaceBetween: 10,
                allowTouchMove: false,
                breakpoints: {
                    1440: {
                        slidesPerView: 5,
                        spaceBetween: 15,
                    },
                },
            })

        } else {
            // 이하라면

            bestReviewSwiper = new Swiper('.borderReview.swiper', {

                slidesPerView: 1.5,
                
                spaceBetween: 10,
                //freeMode: true,
                centeredSlides: true,
                watchOverflow: true,
                stopOnLastSlide: false,
                allowTouchMove: true,
                grabCursor: true,
                loop :true,
                loopedSlides: 1,


                breakpoints: {
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                        centeredSlides: false,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                        centeredSlides: false,
                    }
                },

            })

        }
    }





    var repeat = setInterval(function () {
        //

        if (window.jQuery) {
            //제이쿼리
            clearInterval(repeat);
            $(function () {

                var screenWidth = $(window).width();

                reviewSwiper();


            });


            $(window).on('resize', function () {

                reviewSwiper();



            });

        }

    });

}////onload
