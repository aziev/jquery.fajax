;(function ($) {

    $.fn.fajax = function (options) {

        return this.each(function() {

            $(this).on('submit', function(e){

                e.preventDefault();

                var action = $(this).attr('action');
                var method = $(this).attr('method');
                
                if (method.toUpperCase() == 'GET')
                {
                    var data = $(this).serialize();
                }
                else
                {
                    var data = new FormData(this);
                }

                var extended_options = $.extend(options, {
                    url: action,
                    type: method,
                    data: data,
                    processData: false,
                    contentType: false,
                });

                $.ajax(extended_options);

            });

        });

    };

})(jQuery);
