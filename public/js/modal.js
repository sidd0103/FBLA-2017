class Modal {
    open() {
        this.container.addClass('active');
        $('body').css('overflow','hidden');
    }
    close() {
        this.container.removeClass('active');
        $('body').css('overflow','');
    }
}

class RestaurantMenu extends Modal{
    constructor(element) {
        super();
        this.element = element;
        this.tabs = $('.menu-nav .tabs');
        this.thumbnail = $('.menu-thumb');
        this.tabsHTML = '';
        $('.menu-modal-container .rating').html(ratingToHTMLDiv(this.element.rating));
        this.menuElement = $('.menu-container');
        this.menuHTML = '';
        this.title = $('.menu-title-name');
        this.container = $('.menu-modal-container');
        this.initUI();
    }
    initUI() {
        this.thumbnail.css('background-image','url(..'+this.element.itemImage+')');
        this.title.text(this.element.itemName);
        for (var catagory in this.element.menu) {
            this.tabsHTML += '<li class="tab col s3"><a>'+catagory+'</a></li>';
            var catagoryHTML = '';
            for (var item in this.element.menu[catagory]) {
                var thisItem = this.element.menu[catagory][item];
                var tagsHTML = '';
                for (var tag in thisItem.tags) {
                    tagsHTML += '<div class="attr">'+thisItem.tags[tag]+'</div>'
                }
                var id = catagory + '_' + item;
                catagoryHTML += '<div id="'+id+'" class="waves-effect menu-item"> <div class="item-header"><div>'+thisItem.name+'</div><div class="price">$'+thisItem.price+'</div></div> <div class="attributes">'+tagsHTML+'</div> <div class="description">'+thisItem.desc+'</div> </div>';
            }
            this.menuHTML += '<div class="text-header">'+catagory+'</div> <div class="menu-items-container">'+catagoryHTML+'</div>';
        }
        this.menuElement.html(this.menuHTML);
        this.tabs.html(this.tabsHTML).tabs();
    }
}