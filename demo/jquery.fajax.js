;(function($) {

    $.fn.fajax = function(options) {

        return this.each(function() {

            $(this).on('submit', function(e) {

                var action = $(this).attr('action');
                var method;
                var data;

                e.preventDefault();

                if ($(this).attr('method') === undefined) {
                    method = 'GET';
                } else {
                    method = $(this).attr('method').toUpperCase();
                }

                if (method === 'GET') {
                    data = $(this).serialize();
                } else {
                    data = new FormData(this);
                }

                var extended_options = $.extend(options, {
                    url: action,
                    type: method,
                    data: data,
                    processData: false,
                    contentType: false,
                });

                $.ajax(extended_options);

                this.reset();
            });

        });

    };

})(jQuery);
