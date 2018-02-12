$(document).ready(function () {
    //sidenav init
    $('#menuButton').sideNav({
        menuWidth: 250, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        onOpen: function (el) { /* Do Stuff*/ }, // A function to be called when sideNav is opened
        onClose: function (el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
    });

    //stripe checkout init
    var stripe = Stripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
    var elements = stripe.elements({
        fonts: [{cssSrc: 'https://fonts.googleapis.com/css?family=Poppins:400,700,900'}]
    });
    var style = {
        base: {
            color: '#32325d',
            lineHeight: '18px',
            fontFamily: 'Poppins',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': {
                color: '#aab7c4'
            }
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a'
        }
    };
    var card = elements.create('card', {
        style: style
    });
    card.mount('#card-element');
    //hande modal
    $('.location-display').click(function(e){
        deliverModal.open();
        e.stopPropagation();
    });
    $('.change-location-modal').click(function(e){
        e.stopPropagation();
    })
    $('body').click(function(){
        deliverModal.close();
    });
})
//handle location
//this callback function runs once the google maps library is fetched. 
function initAutoComplete() {
    console.log("hi");
    deliverModal = new locationModal();
    //set the input and initialize the autofill
    var input = document.getElementById('enterLocation');
    var autocomplete = new google.maps.places.Autocomplete(input);
    //when the submit button is clicked, we filter through the address to make sure its valid. 
    $('#location-submit').click(function () {
        var place = autocomplete.getPlace();
        console.log(place);
        if (place == null) {
            Materialize.toast('Please Enter a Location!', 500);
        } else {
            if (place['types'][0] == 'street_address' || place['types'][0] == 'premise') {
                deliverModal.setLocation(place['formatted_address']);
                Materialize.toast("Location changed to " + place['formatted_address'], 1000, "toast-style");
            } else {
                Materialize.toast('<span class="error-icon material-icons">error</span>Please enter a specific location.', 800, 'toast-style');
            }
        }
    });
}
class locationModal {
    constructor() {
        this.deliverLocation;
        this.container = $('.change-location-modal');
        this.initLocation();
    }
    initLocation() {
        var loc = sessionStorage.getItem('deliveryLocation');
        if (loc == null) {
            window.location.href = 'index.html';
        } else {
            this.setLocation(loc);
        }
    }
    setLocation(location) {
        this.deliverLocation = location;
        $('.location-display').text(location);
        sessionStorage.setItem('deliveryLocation', location);
        this.close();
    }
    open() {
        this.container.addClass('active');
        $('#enterLocation').val(this.deliverLocation);
    }
    close(noOverflow) {
        this.container.removeClass('active');
    }
}