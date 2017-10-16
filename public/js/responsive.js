$(document).ready(function(){
    mediaCheck({
        media: '(max-width: 650px)',
        entry: function() {
            $('#loginButton').html('<i class="material-icons">account_circle</i>');
            $('#registerButton').html('<i class="material-icons">person_add</i>');
        },
        exit: function() {
            $('#loginButton').html('Sign In');
            $('#registerButton').html('Sign Up');

        }
    });
    
});