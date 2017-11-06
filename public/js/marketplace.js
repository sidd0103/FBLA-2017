$(document).ready(function () {
    //handle filling in the item window
    initItems();
    
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
    
})