angular.module('msapApp')
    .directive('setHeight', function(){
        return{
            priority: '3',
            link: function(scope, element) {
                var setElHeight = function() {
                    var windowHeight = $(window).height(),
                        elPositionRelativeDoc = $(element).offset().top,
                        indentSize = 40,
                        calcElHeight = windowHeight - elPositionRelativeDoc - indentSize + "px";
                    $(element).css('height', calcElHeight );
                };

                setElHeight();
                $(window).resize(setElHeight);

                var setInitElHeight = function() {
                    var windowHeight = $(window).height(),
                        elPositionRelativeDoc = $(element).offset().top,
                        indentSize = 40,
                        calcElHeight = windowHeight - elPositionRelativeDoc - indentSize - 50 + "px";
                    $(element).css('height', calcElHeight );
                };
                setInitElHeight();

            }
        }
    });
