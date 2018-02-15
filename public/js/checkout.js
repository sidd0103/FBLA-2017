$(document).ready(function () {
    var time = new timeModal();
    //sidenav init
    $('#menuButton').sideNav({
        menuWidth: 250, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        onOpen: function (el) { /* Do Stuff*/ }, // A function to be called when sideNav is opened
        onClose: function (el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
    });
    //handle the generation of cart items
    var cart = new CheckOutCart();
    $('body').on('click','.del-item',function(){
        var id = $(this).parent('.item').attr('id');
        cart.removeItem(id);
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
    //hande location modal
    $('.location-display').click(function(e){
        time.close();
        deliverModal.open();
        e.stopPropagation();
    });
    $('.change-location-modal').click(function(e){
        e.stopPropagation();
    })
    //handle time modal 
    $('.time-info').click(function(){
        deliverModal.close();
        time.open();
    });
    $('.day-choice div').click(function(){
        var date = $(this).text();
        time.selectDate(date);
        time.switchToTime();
    });
    $('.timepicker').dropdown();
    $('.timetype').click(function(event){
        event.stopPropagation();
        var types = ['AM','PM'];
        var type = $(this).text();
        $(this).text(types[(types.indexOf(type) + 1) % types.length]);
        $(this).parent().attr('data-activates',types[(types.indexOf(type) + 1) % types.length]);
        $('.timepicker').dropdown();
        time.selectTime(null);
    })
    $('#AM li, #PM li').click(function(){
        time.selectTime($(this).text());
    });
    $('body').on('click','.save-time-changes',function(){
        time.save();
    })
    //handle overlay close thing
    $('.overlay').click(function(){
        deliverModal.close();
        time.close();
    });
    //handle courrier cost
    $('.minus').click(function(){
        cart.changeTip(-1);
    });
    $('.plus').click(function(){
        cart.changeTip(1);
    })
    $('body').on('mousedown','.pac-container',function(event){
        event.stopPropagation();
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
    $('.save-location').click(function () {
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
        $('.overlay').addClass('active');
    }
    close(noOverflow) {
        this.container.removeClass('active');
        $('.overlay').removeClass('active');
    }
}

class timeModal {
    constructor() {
        this.time;
        this.container = $('.change-time-modal');
        this.initTime();
    }
    initTime () {
        var time = JSON.parse(sessionStorage.getItem('time'));
        if (time == null) {
            this.time = {'type':'ASAP',date:null,time:null};
        } else {
            this.time = time;
            this.save();
        }
        var twoDays = moment().add(2,'days').format("dddd, MMMM Do YYYY");
        $('.nextDay').text(twoDays);
        
    }
    selectDate(dateSelected) {
        if (dateSelected == 'ASAP') {
            this.time.type = 'ASAP';
            this.time.date = null;
        }
        else {
            this.time.type = 'PLAN';
            this.time.date = dateSelected;
        }
    }
    selectTime(timeSelected) {
        this.time.time = timeSelected;
        if (this.time == null) {
            $('.timedisplay').text('Pick a time');
            $('.save-time-changes').removeClass('active');
        }
        else {
            $('.timedisplay').text(this.time.time.substring(0,this.time.time.indexOf(' ')));   
            $('.save-time-changes').addClass('active');
        }
    }
    switchToTime() {
        this.fixDropdownTimes('reset',$('#AM li'));
        this.fixDropdownTimes('reset',$('#PM li'));
        if (this.time.date == 'Today') {
            this.fixDropdownTimes('disable',$('#AM li'));
            this.fixDropdownTimes('disable',$('#PM li'));
        }
        $('.day-choice').addClass('hidden');
        $('.date-chosen').text(this.time.date);
        $('.time-choice').removeClass('hidden');
    }
    fixDropdownTimes(action, dropdown) {
        dropdown.each(function(index) {
            var tempTimeString = $(this).text().substring($(this).text().indexOf("-") + 1).replace(/ /g,'');
            var optionTime = moment(tempTimeString, 'h:mma');
            var nowTime = moment();
            nowTime.add(45,'minutes');
            if (action == 'disable') {
                if (optionTime.isBefore(nowTime)) {
                    $(this).addClass('disabled');
                }
                else {
                    return false;
                }
            }
            else if (action == 'reset') {
                $(this).removeClass('disabled');
            }
        })
    }
    switchToDate() {
        $('.time-choice').addClass('hidden');
        $('.day-choice').removeClass('hidden');
    }
    save() {
        var payload = JSON.stringify(this.time);
        sessionStorage.setItem('time', payload);
        if (this.time.type == 'ASAP') {
            $('.time-info').html('<span>ASAP</span> 20 - 40 mins');
        }
        else if (this.time.type = 'PLAN') {
            var date = this.time.date;
            if (this.time.date.length > 8) {
                date = this.time.date.substring(0,this.time.date.indexOf(','));
            }
            $('.time-info').html('<span>'+date+'</span>, '+this.time.time);
        }
    }
    open() {
        this.switchToDate();
        $('.save-time-changes').removeClass('active');
        this.container.addClass('active');
        $('.overlay').addClass('active');
    }
    close(noOverflow) {
        this.container.removeClass('active');
        $('.overlay').removeClass('active');
    }
}