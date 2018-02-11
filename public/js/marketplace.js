var deliverModal;
$(document).ready(function () {
    //handle filling in the item window
    initItems();
    //handle search bar
    $('.searchInput').keyup(function(){
        var val = $(this).val();
        console.log(val);
        if (val.length > 0) {
            $('.search-modal-container').addClass('active');
        }
        else {
            $('.search-modal-container').removeClass('active');
        }
    })
    //handle the select
    $('select').material_select();
    
    /*Handle the Side Navigation Opening*/
    //check to see if the navs have been closed
    var navsClosed = false;
    mediaCheck({
        media: '(max-width: 992px)',
        entry: function () {
            
        },
        exit: function () {
            $('#sidenav-overlay').remove();
        }
    });
    $('#openCartbtn').sideNav({
        menuWidth: 250, // Default is 300
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        onOpen: function (el) {}, // A function to be called when sideNav is opened
        onClose: function (el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
    });
    $('#openNavbtn').sideNav({
        menuWidth: 250, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        onOpen: function (el) { /* Do Stuff*/ }, // A function to be called when sideNav is opened
        onClose: function (el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
    });
    
    /*Handle the Filters*/
    var slider = document.getElementById('test-slider');
    noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        step: 1,
        orientation: 'horizontal', // 'horizontal' or 'vertical'
        range: {
            'min': 0,
            'max': 100
        },
        format: wNumb({
            decimals: 0
        })
    });
    
    //handle clicking on a tile
    var menuModal;
    var itemModal;
    $('body').on('click','.tastery-item',function(){
        var type = $(this).attr('data-itemType');
        var id = $(this).attr('id');
        var data = getData();
        var element = data[type]['items'][id];
        if (type == 'restraunts') {
            menuModal = new RestaurantMenu(element);
            menuModal.open();
        }
        else {
            itemModal = new ItemModal(element);
            itemModal.open();
        }
    });
    $('body').on('click','.menu-modal-container, .searchbox-container',function(){
        menuModal.close();
    });
    $('body').on('click','.menu-page',function(e){
        e.stopPropagation();
    });
    $('body').on('click','.menu-item',function(){
        var id = $(this).attr('id');
        var category = id.substring(0,id.indexOf('_'));
        var index = id.substring(id.indexOf('_') + 1);
        var itemData = menuModal.data.menu[category][index];
        itemModal = new ItemModal(itemData);
        itemModal.open();
    });
    $('.item-modal-container').click(function(){
        if (menuModal != null) {
            itemModal.close(menuModal.on);   
        }
        else {
            itemModal.close(false);
        }
    })
    $('.item-modal-page').click(function(ev){
        ev.stopPropagation();
    })
    //handle the items modal
    $('.plus').click(function(){
        var num = $('.num-display').text() * 1;
        $('.num-display').text(num + 1);
        var newPrice = itemModal.data.itemPrice * $('.num-display').text();
        $('.item-modal-container .price').text('$'+newPrice);
    })
    $('.minus').click(function(){
        var num = $('.num-display').text() * 1;
        if (num > 1) {
            $('.num-display').text(num - 1);
            var newPrice = itemModal.data.itemPrice * $('.num-display').text();
            $('.item-modal-container .price').text('$'+newPrice);
        }
    });
    //handle shopping cart
    var cart = new ShoppingCart();
    $('.addtocart-btn').click(function(){
        console.log(itemModal.data);
        var num = $('.num-display').text();
        var comments = $('#textarea1').val();
        var options = {num: num, requests:comments};
        cart.addItem(options, itemModal.data);
    });
    $('body').on('click','.delete-btn',function(){
        console.log('close');
        var id = $(this).parent('.item').attr('id');
        cart.removeItem(id);
    });
    //handle location modal
    $('.deliver-to').click(function(ev){
        ev.stopPropagation();
        deliverModal.open();
    })
    $('.location-modal').click(function(ev){
        ev.stopPropagation();
    })
    $('.close-location-btn').click(function(){
        deliverModal.close();
    })
    $('.location-modal-container').click(function(){
        deliverModal.close();
    })
    //handle checkout
    $('.checkoutbnt').click(function(){
        document.location.href = "checkout.html";
    })
})

//this callback function runs once the google maps library is fetched. 
function initAutoComplete(){
    deliverModal = new locationModal();
    //set the input and initialize the autofill
    var input = document.getElementById('enterLocation');
    var autocomplete = new google.maps.places.Autocomplete(input);
    //when the submit button is clicked, we filter through the address to make sure its valid. 
    $('#location-submit').click(function(){
        var place = autocomplete.getPlace();
        console.log(place);
        if (place == null) {
            Materialize.toast('Please Enter a Location!',500);
        }
        else {
            if (place['types'][0] == 'street_address' || place['types'][0] == 'premise') {
                deliverModal.setLocation(place['formatted_address']);
                Materialize.toast("Location changed to " + place['formatted_address'],1000,"toast-style");
            }
            else {
                Materialize.toast('<span class="error-icon material-icons">error</span>Please enter a specific location.',800,'toast-style');
            }
        }
    });
}
