//these objects control most of the major modals we see on the Marketplace website. 
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
        this.thumbnail.css('background-image', 'url(..' + this.data.itemImage + ')');
        this.title.text(this.data.itemName);
        for (var catagory in this.data.menu) {
            this.tabsHTML += '<li class="tab col s3"><a>' + catagory + '</a></li>';
            var catagoryHTML = '';
            for (var item in this.data.menu[catagory]) {
                var thisItem = this.data.menu[catagory][item];
                var tagsHTML = '';
                for (var tag in thisItem.itemDetails) {
                    tagsHTML += '<div class="attr">' + thisItem.itemDetails[tag] + '</div>'
                }
                var id = catagory + '_' + item;
                catagoryHTML += '<div id="' + id + '" class="waves-effect menu-item"> <div class="item-header"><div>' + thisItem.itemName + '</div><div class="price">$' + thisItem.itemPrice + '</div></div> <div class="attributes">' + tagsHTML + '</div> <div class="description">' + thisItem.itemDescription + '</div> </div>';
            }
            this.menuHTML += '<div class="text-header">' + catagory + '</div> <div class="menu-items-container">' + catagoryHTML + '</div>';
        }
        $('.menu-modal-desc').text(this.data.itemDescription)
        this.menuElement.html(this.menuHTML);
        this.tabs.html(this.tabsHTML).tabs();
    }
    open() {
        this.on = true;
        this.container.addClass('active');
        $('body').css('overflow', 'hidden');
    }
    close() {
        this.on = false;
        this.container.removeClass('active');
        $('body').css('overflow', '');
    }
}

class ItemModal {
    constructor(data) {
        this.data = data;
        this.on = false;
        this.container = $('.item-modal-container');
        this.initUI();
    }
    initUI() {
        if (this.data['itemImage'] != null) {
            $('.item-modal-header').css('background-image', 'url(' + this.data['itemImage'] + ')').addClass('bg');
        } else {
            $('.item-modal-header').css('background-image', '').removeClass('bg');
        }
        $('.item-modal-container .desc').text(this.data['itemDescription']);
        $('.item-modal-container .price').text('$' + this.data['itemPrice']);
        $('.item-header-title .data').text(this.data['itemName']);
        $('.numeric-rating-container .numeric-rating').text(ratingToNumber(this.data['rating']) + '/5');
        if (this.data['itemDetails'].length == 0) {
            $('.item-modal-container .tags').html('<div class="none">No Tags</div>')
        } else {
            var tagHTML = '';
            for (var tag in this.data['itemDetails']) {
                tagHTML += '<div class="tag">' + this.data['itemDetails'][tag] + '</div>'
            }
            $('.item-modal-container .tags').html(tagHTML)
        }
        $('.place-link').text(this.data['orgin']);
    }
    open() {
        this.on = true;
        this.container.addClass('active');
        $('body').css('overflow', 'hidden');
    }
    close(noOverflow) {
        this.on = false;
        this.container.removeClass('active');
        if (noOverflow == false) {
            $('body').css('overflow', '');
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
class SearchModal {
    constructor() {
        this.active = false;
        this.container = $('.search-modal-container');
        this.loadingIcon = $('.searchLoader');
        this.data;
    }
    searchFor(str) {
        this.loadingIcon.removeClass('done');
        var data = getData();
        var results = {'restraunts': [],'dishes': [],'produce': []}
        //look through restraunts
        var restraunts = data['restraunts']['items'];
        for (var restraunt in restraunts) {
            var name = restraunts[restraunt]['itemName'];
            if (name.toLowerCase().includes(str.toLocaleLowerCase())) {
                results['restraunts'].push('restraunts_items_' + restraunt);
            }
            var menu = restraunts[restraunt]['menu'];
            for (var catagory in menu) {
                for (var item in menu[catagory]) {
                    if (menu[catagory][item]['itemName'].toLowerCase().includes(str.toLocaleLowerCase())) {
                        (results['dishes']).push('restraunts_items_' + restraunt + '_menu_' + catagory + '_' + item);
                    }
                }
            }
        }
        //look through dishes
        var produce = data['produce']['items'];
        for (var item in produce) {
            var name = produce[item]['itemName'];
            if (name.toLocaleLowerCase().includes(str.toLocaleLowerCase())) {
                results['produce'].push('produce_items_' + item);
            }
        }
        this.loadingIcon.addClass('done');
        this.data = results;
        return results;
    }
    displayResults() {
        var fullData = getData();
        $('.search-modal-content ul').empty();
        for (var type in this.data) {
            if (this.data[type] != null) {
                for (var path in this.data[type]) {
                    var data = this.pathToJSON(this.data[type][path]);
                     $('.search-modal-content ul').append('<li data-path="'+this.data[type][path]+'" class="animated fadeInFast"> <div class="head"> <div class="z-depth-1 thumb"></div> <div class="name">'+data.itemName+'</div> <div class="type">'+fullData[type]['formalName']+'</div> </div> <div class="desc">'+data.itemDescription+'</div> </li>');
                }
            }
         }
    }
    pathToJSON(path) {
        var path = path.split('_');
        var data = getData();
        for (var part in path) {
            data = data[path[part]];
        }
        return data;
    }
    open() {
        if (this.active == false) {
            this.active = true;
            this.container.addClass('active');
        }
    }
    close() {
        if (this.active == true) {
            $('.search-modal-content ul').empty();
            this.active = false;
            this.container.removeClass('active');
        }
    }

}
class timeModal {
    constructor() {
        this.time;
        this.container = $('.change-time-container');
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
            this.close();
            this.save();
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
            $('.time-info').html('<b>ASAP</b> 20 - 40 mins');
            $('.delivery-time').text('ASAP');
        }
        else if (this.time.type = 'PLAN') {
            var date = this.time.date;
            if (this.time.date.length > 8) {
                date = this.time.date.substring(0,this.time.date.indexOf(','));
            }
            $('.time-info').html('<b>'+date+'</b>, '+this.time.time);
            $('.delivery-time').text(date + ', ' + this.time.time);
        }
        this.close();
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