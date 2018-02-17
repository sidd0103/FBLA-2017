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
    //login submit button
    $('.login-btn').click(function(){
        console.log("clicked");
        var email = $('#email').val();
        var pass = $('#password').val();
        tasteAuth.login(email, pass, true);
    });
})