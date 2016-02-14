/*
* jQuery verticalScroll
* Copyright (c) 2011 SaCaWeb www.sacaweb.com
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:

* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE. 
*/

/*
* Version: V1.0
* Release: 23-02-2011
* Based on jQuery 1.4.2
*/


// Скролл фиша событий

(function ($) {
    $.fn.horizontalScrollPlus = function (options) {
        var options = $.extend({}, { speed: 600, step: 200, leftID: ".gallery-arrow-left", rightID: ".gallery-arrow-right", scrollerID:"#scroller" }, options);

        return this.each(function () {
            obj = $(this);//il wrapper
            obj.css("overflow", "hidden");
            obj.css("position", "relative");
            /*obj.css("width", options.width + "px");*/
            var wrapper_w = obj.outerWidth();

            $(options.scrollerID).css("position", "absolute");

            $(options.rightID).bind('click', function () {

                 var scroller_w = $(options.scrollerID).outerWidth();
                 var scroller_left2 = parseInt($(options.scrollerID).css("right"));

                 if((scroller_left2 - wrapper_w - options.step) < - scroller_w ){
                     var offset2 = scroller_w - wrapper_w;
                     $(options.scrollerID).stop().animate({left:"-" + offset2 + "px"}, options.speed);
                     return;
                 }
                 $(options.scrollerID).stop().animate({
                      left: "-=" + options.step + "px"
                          }, options.speed);


                    var left111 = $('#scroller').css('left');
                        fuck = parseInt(left111.replace(/\D/g, ''), 10);

                     var width = $('#scroller').width();
                        

                    console.log(fuck);
                    console.log(width);

                    if (width-500 < fuck){
                   
                    }

            });
            $(options.leftID).bind('click', function () {

                 var scroller_left = parseInt($(options.scrollerID).css("left"));
                 var offset = scroller_left + wrapper_w;


                 if(offset > 0){
                     $(options.scrollerID).stop().animate({left:0}, options.speed);
                     return;
                 }
                 $(options.scrollerID).stop().animate({
                      left:0
                          }, options.speed);


            });


        });

    };

})(jQuery);




