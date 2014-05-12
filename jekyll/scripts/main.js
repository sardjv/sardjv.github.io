'use strict';

$(document).ready(function(){
    $(this).scroll(function(){
        if ($(this).scrollTop() > 30) {
            $('#navbar2 .desktop').addClass('hidden-sm hidden-md hidden-lg');
            $('#navbar2 .mobile').addClass('visible-sm visible-md visible-lg');
        } else {
            $('#navbar2 .desktop').removeClass('hidden-sm hidden-md hidden-lg');
            $('#navbar2 .mobile').removeClass('visible-sm visible-md visible-lg');
        }
    });
});