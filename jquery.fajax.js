;(function ($) {

    $.fn.fajax = function (options) {

        var settings = $.extend({
            beforeSend: function(){},
            success: function(){},
            error: function(){},
            complete: function(){},
        }, options);

        return this.each(function() {

            $(this).on('submit', function(e){

                e.preventDefault();

                var action = $(this).attr('action');
                var method = $(this).attr('method');
                
                var data = $(this).serialize();

                $.ajax({
                    url: action,
                    method: method,
                    data: data,
                    beforeSend: function(){
                        settings.beforeSend();
                    },
                    success: function(){
                        settings.success();
                    },
                    error: function(){
                        settings.error();
                    },
                    complete: function(){
                        settings.complete();
                    },
                });

            });

        });

    };

})(jQuery);
