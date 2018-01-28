$(document).ready(function(){
    $('.link').css('cursor','pointer');
    $('.link').click(function(){
        var location = $(this).attr('data-to');
        if (location[0] == '#') {
            document.getElementById(location.substring(1)).scrollIntoView({ 
              behavior: 'smooth' 
            });
        }
        else {
            document.location.href = location;   
        }
    });
})