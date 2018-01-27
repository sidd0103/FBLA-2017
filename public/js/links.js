$(document).ready(function(){
    $('.link').css('cursor','pointer');
    $('.link').click(function(){
        var location = $(this).attr('data-to');
        document.location.href = location;
    });
})