$(document).ready(function(){
    //side nav
    $('#menuButton').sideNav({
        menuWidth: 250, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        onOpen: function (el) { /* Do Stuff*/ }, // A function to be called when sideNav is opened
        onClose: function (el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
    });
    $('.login-box').click(function(){
        if (tasteAuth.loggedIn) {
            
        }
        else {
            document.location.href = "login.html";
        }
    })
    //handle locations modal
    var locationModalOn = false;
    $('.location-link').click(function(){
        $('.locations-modal').addClass('active');
        locationModalOn = true;
    });
    $('.locations-modal').click(function(){
        $('.locations-modal').removeClass('active');
        locationModalOn = false;
    });
    $(document).scroll(function(){
        if (locationModalOn) {
            $('.locations-modal').removeClass('active');
            locationModalOn = false;
        }
    });
})

//this callback function runs once the google maps library is fetched. 
function initAutoComplete(){
    //set the input and initialize the autofill
    var input = document.getElementById('enterLocation');
    var autocomplete = new google.maps.places.Autocomplete(input);
    //when the submit button is clicked, we filter through the address to make sure its valid. 
    $('.location-submit').click(function(){
        var place = autocomplete.getPlace();
        console.log(place);
        if (place == null) {
            Materialize.toast('<span class="error-icon material-icons">error</span>Please Enter a Location!',500,'toast-style');
        }
        else {
            if (place['types'][0] == 'street_address' || place['types'][0] == 'premise') {
                sessionStorage.setItem('deliveryLocation', place['formatted_address']);
                window.location.href = 'marketplace.html'
            }
            else {
                Materialize.toast('<span class="error-icon material-icons">error</span>We cannot deliver to this location.',500,'toast-style');
            }
        }
    });
}