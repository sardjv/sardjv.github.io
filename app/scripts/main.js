'use strict';

//console.log('\'Allo \'Allo!');
$(document).ready(function(){
    $(this).scroll(function(){
        if ($(this).scrollTop() > 90) {
            console.log($(this).scrollTop());
            $('#navbar2 .hidden-xs').hide();
            $('#navbar2 .visible-xs').addClass('visible-sm visible-md visible-lg');
        }
    });
});