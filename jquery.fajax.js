;(function($) {

    $.fn.fajax = function(options) {

        return this.each(function() {

            $(this).on('submit', function(e) {

                var $form = $(this);
                var action = $form.attr('action');
                var method;
                var data;

                e.preventDefault();

                if ($form.attr('method') === undefined) {
                    method = 'GET';
                } else {
                    method = $form.attr('method').toUpperCase();
                }

                if (method === 'GET') {
                    data = $form.serialize();
                } else {
                    data = new FormData(this);
                }

                $.extend(options, {
                    url: action,
                    type: method,
                    data: data,
                    processData: false,
                    contentType: false,
                });

                $.ajax(options);

                this.reset();
            });

        });

    };

})(jQuery);
