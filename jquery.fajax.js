;(function($) {

    $.fn.fajax = function(options) {

        options = $.extend({
            resetOnComplete: true,
        }, options);

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

                var complete = options.complete;

                $.extend(options, {
                    url: action,
                    type: method,
                    data: data,
                    processData: false,
                    contentType: false,
                    complete: function(data) {
                        complete(data);
                        if (options.resetOnComplete) {
                            $form[0].reset();
                        }
                    },
                });

                $.ajax(options);
            });

        });

    };

})(jQuery);
