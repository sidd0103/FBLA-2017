var deliverModal;
$(document).ready(function () {
    //handle filling in the item window
    initItems();
    //contact us link
    $('.contactUs').click(function(){
        document.location.href = 'contact.html';
    });
    //login link
    $('.login-box').click(function(){
        if (tasteAuth.loggedIn == false) {
            document.location.href = 'login.html';
        }
    });
    //handle search bar
    var searchPage = new SearchModal();
    $('.searchInput').keyup(function(){
        var val = $(this).val();
        if (val.length > 0) { 
            searchPage.open();
            searchPage.searchFor(val);
            searchPage.displayResults();
        }
        else {
            searchPage.close();
        }
    })
    $('.search-modal-content ul').on('click','li',function(){
        var path = $(this).attr('data-path');
        searchPage.close();
        var element = searchPage.pathToJSON(path);
        var splitPath = path.split('_');
        if (splitPath[0] == 'produce') { //means its a produce item
            itemModal = new ItemModal(element);
            itemModal.open();
        }
        else if (splitPath.length <= 3) { //means that its the path for a restraunt
            menuModal = new RestaurantMenu(element);
            menuModal.open();
        }
        else { //means its the path for an item in a restraunt. 
            itemModal = new ItemModal(element);
            itemModal.open();
        }
    })
    //handle the selectcl
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
    $('body').on('click','.menu-modal-container',function(){
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
        cart.addItem(options, itemModal.data, true);
    });
    $('body').on('click','.delete-btn',function(){
        var id = $(this).parent('.item').attr('id');
        cart.removeItem(id);
    });
    //handle location modal
    $('.deliver-to').click(function(ev){
        console.log('clicked');
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
    //handle delivery modal
    var time = new timeModal();
    $('.time').click(function(){
        time.open();
    });
    $('.change-time-container').click(function(){
        time.close();
    })
    $('.change-time-modal').click(function(e){
        e.stopPropagation();
        $('.timepicker').dropdown('close');
    });
    $('.day-choice div').click(function(){
        var date = $(this).text();
        time.selectDate(date);
        time.switchToTime();
    });
    $('.timepicker').dropdown();
    $('.timepicker').click(function(e){
        e.stopPropagation();
    });
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
    $('.time-choice').on('click','.save-time-changes',function(){
        Materialize.toast("Changed Delivery Time!",1000,"toast-style");
        time.save();
    });
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
