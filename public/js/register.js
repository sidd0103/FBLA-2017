$(document).ready(function(){
    $('#menuButton').sideNav({
        menuWidth: 250, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        onOpen: function (el) { /* Do Stuff*/ }, // A function to be called when sideNav is opened
        onClose: function (el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
    });
    $('.contactUs').click(function(){
        document.location.href = 'contact.html';
    });
    //login link
    $('.login-box').click(function(){
        if (tasteAuth.loggedIn == false) {
            document.location.href = 'login.html';
        }
    });
    $('.register-btn').click(function(){
        var type = $('.active').attr('href').replace('#','');
        var payload = {};
        var valid = true;
        var error = "";
        $('#'+type+' input').each(function(){
            var id = $(this).attr('id');
            if (id.includes('vpassword')) {
                if (payload['password'] != $(this).val()) {
                    valid = false;
                    error = "Your passwords don't match!";
                    return false;
                }
            }
            payload[id.replace(/[0-9]/g, "")] = $(this).val();  
        })
        console.log(payload);
        if (valid) {
            tasteAuth.createUserAccount(payload);
        }
        else {
            Materialize.toast('<span class="error-icon material-icons">error</span>'+error,800,'toast-style');
        }
    })
})