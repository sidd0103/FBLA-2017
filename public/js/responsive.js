$(document).ready(function(){
    mediaCheck({
        media: '(max-width: 650px)',
        entry: function() {
            if (document.location.href.includes("index.html")) {
                 $('#loginButton').html('<i class="material-icons">account_circle</i>');
            }
            else if (document.location.href.includes("marketplace.html")) {
                $('.stats .rating').html('5/5');
            }
            else if (document.location.href.includes("login.html")) {
                $('#loginButton').html('<i class="material-icons">person_add</i>');
            }
            else if (document.location.href.includes("register.html")) {
                $('#loginButton').html('<i class="material-icons">person</i>');
            }
        },
        exit: function() {
            if (document.location.href.includes("marketplace.html")) {
                $('#loginButton').html('Sign In');
            }
            else if (document.location.href.includes("index.html")) {
                $('#loginButton').html('Sign In');
            }
            else if (document.location.href.includes("login.html")) {
                $('#loginButton').html('Register');
                $('#registerButton').html('Back');   
            }
        }
    });
    
});