

class RestaurantMenu {
    constructor(data) {
        this.data = data;
        this.on = false;
        this.tabs = $('.menu-nav .tabs');
        this.thumbnail = $('.menu-thumb');
        this.tabsHTML = '';
        $('.menu-modal-container .rating').html(ratingToHTMLDiv(this.data.rating));
        this.menuElement = $('.menu-container');
        this.menuHTML = '';
        this.title = $('.menu-title-name');
        this.container = $('.menu-modal-container');
        this.initUI();
    }
    initUI() {
        this.thumbnail.css('background-image','url(..'+this.data.itemImage+')');
        this.title.text(this.data.itemName);
        for (var catagory in this.data.menu) {
            this.tabsHTML += '<li class="tab col s3"><a>'+catagory+'</a></li>';
            var catagoryHTML = '';
            for (var item in this.data.menu[catagory]) {
                var thisItem = this.data.menu[catagory][item];
                var tagsHTML = '';
                for (var tag in thisItem.itemDetails) {
                    tagsHTML += '<div class="attr">'+thisItem.itemDetails[tag]+'</div>'
                }
                var id = catagory + '_' + item;
                catagoryHTML += '<div id="'+id+'" class="waves-effect menu-item"> <div class="item-header"><div>'+thisItem.itemName+'</div><div class="price">$'+thisItem.itemPrice+'</div></div> <div class="attributes">'+tagsHTML+'</div> <div class="description">'+thisItem.itemDescription+'</div> </div>';
            }
            this.menuHTML += '<div class="text-header">'+catagory+'</div> <div class="menu-items-container">'+catagoryHTML+'</div>';
        }
        this.menuElement.html(this.menuHTML);
        this.tabs.html(this.tabsHTML).tabs();
    }
    open() {
        this.on = true;
        this.container.addClass('active');
        $('body').css('overflow','hidden');
    }
    close() {
        this.on = false;
        this.container.removeClass('active');
        $('body').css('overflow','');
    }
}

class ItemModal  {
    constructor(data) {
        this.data = data;
        this.on = false;
        this.container = $('.item-modal-container');
        this.initUI();
    }
    initUI() {
        if (this.data['itemImage'] != null) {
            $('.item-modal-header').css('background-image','url('+this.data['itemImage']+')').addClass('bg');  
        }
        else {
            $('.item-modal-header').css('background-image','').removeClass('bg');  
        }
        $('.item-modal-container .desc').text(this.data['itemDescription']);
        $('.item-modal-container .price').text('$' + this.data['itemPrice']);
        $('.item-header-title .data').text(this.data['itemName']);
        $('.item-modal-container .numeric-rating').text(ratingToNumber(this.data['rating']) + '/5');
        if (this.data['itemDetails'].length == 0) {
            $('.item-modal-container .tags').html('<div class="none">No Tags</div>')
        }
        else {
            var tagHTML = '';
            for (var tag in this.data['itemDetails']) {
                tagHTML += '<div class="tag">'+this.data['itemDetails'][tag]+'</div>'
            }
            $('.item-modal-container .tags').html(tagHTML)
        }
    }
    open() {
        this.on = true;
        this.container.addClass('active');
        $('body').css('overflow','hidden');
    }
    close(noOverflow) {
        this.on = false;
        this.container.removeClass('active');
        if (noOverflow == false) {
            $('body').css('overflow','');   
        }
        $('.num-display').text('1');
    }
}

class locationModal {
    constructor() {
        this.deliverLocation;
        this.container = $('.location-modal-container');
        this.initLocation();
    }
    initLocation() {
        var loc = sessionStorage.getItem('deliveryLocation');
        if (loc == null) {
            window.location.href = 'index.html';
        }
        else {
            this.setLocation(loc);
        }
    }
    setLocation(location) {
        this.deliverLocation = location;
        $('.location-display').text(location);
        sessionStorage.setItem('deliveryLocation', location);
    }
    open() {
        this.container.addClass('active');
        $('#enterLocation').val(this.deliverLocation);
    }
    close(noOverflow) {
        this.container.removeClass('active');
    }
}