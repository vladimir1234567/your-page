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

            $('.navbar-toggler').on('click', function () {
                // $(this).find(".open").toggleClass("active");
                $('.navbar-nav').toggleClass('active');
            })
        });






    });

});