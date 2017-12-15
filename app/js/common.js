$(function() {

	// Пользовательские функции

    $(function() {

        // Пользовательские функции
        $(document).scroll( function() {
            var top = $(this).scrollTop();

            if(top > 100) {
                $('.main-nav').addClass('border-off');
                $('.main-header').addClass('bg-header');

            } else {
                $('.main-nav').removeClass('border-off');
                $('.main-header').removeClass('bg-header');
            }
        });

        $('.open').click(function () {
            var btn = $(this).find('.fa');
            btn.toggleClass('fa-bars fa-power-off');
        });

        $(function () {
            $('.works-item').on('click', function () {
                var imgFull = $(this).find('img').clone();
                var popWrapper = $('.pop-wrapper');
                var closeImg = function (e) {
                    if(e.target === popWrapper[0] || e.target === $('.pop-icon')[0] || e.target === $('.pop-icon').find('i')[0]) {
                        popWrapper.removeClass('active');
                        imgFull.remove();
                    }
                };

                imgFull.appendTo($('.pop-img'));
                popWrapper.addClass('active');

                popWrapper.on('click', closeImg);
            })
        });

        $(function () {

            $('.navbar-toggler').on('click', function () {
                // $(this).find(".open").toggleClass("active");
                $('.navbar-nav').toggleClass('active');
            })
        });






    });

});