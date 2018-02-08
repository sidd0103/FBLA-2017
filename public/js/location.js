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
            Materialize.toast('Please Enter a Location!',500);
        }
        else {
            if (place['types'][0] == 'street_address' || place['types'][0] == 'premise') {
                sessionStorage.setItem('deliveryLocation', place['formatted_address']);
                window.location.href = 'marketplace.html'
            }
            else {
                Materialize.toast('Please Enter a valid Location!',800);
            }
        }
    });
}