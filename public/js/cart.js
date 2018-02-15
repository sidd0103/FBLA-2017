//this is the cart handler for the marketplace
class ShoppingCart {
    constructor() {
        this.items = {};
        this.counter = 0;
        this.initCart();
    }
    initCart() {
        //we check to see if any items stored to session, if true, we add these to the cart
        if (window.sessionStorage.getItem('cart') != null) {
            var data = JSON.parse(window.sessionStorage.getItem('cart'));
            var items = data.items;
            for (var item in items) {
                if (items[item] != null) {
                    this.addItem(items[item]['options'],items[item]['data'], false);   
                }
            }
        }
    }
    addItem(options, data, toast) {
        //this fucntion adds an item to the cart, the state of the shopping cart object, and the session. 
        var id = data.itemName.replace(/ /g,"_") + this.counter;
        this.counter ++;
        this.items[id] = {'options':options,'data':data};
        $('.cart').html($('.cart').html() + '<div id="'+id+'" class="z-depth-2 item"> <div class="waves-effect material-icons z-depth-1 delete-btn">close</div> <div class="thumbnail"> <div class="darken-layer"></div> <div class="text"><div class="truncate name">'+data.itemName+'</div><div class="from">'+data.orgin+'</div></div> </div> <div class="priceinfo"><div class="num"><i class="material-icons">close</i>'+options.num+'</div><div class="total">$'+data.itemPrice * options.num+'</div></div> </div>');
        var thumbsrc = {'className':'','src':''};
        if (data.itemImage != null) {
            $('#'+id + ' .thumbnail').addClass('bg').css('background-image','url('+data.itemImage+')');
        }
        if (toast == true) {
            Materialize.toast("Added "+data.itemName+" to shopping cart!",2000,'toast-style');   
        }
        this.updateTotal();
        //save payload to session
        var payload = {'items':this.items,'counter':this.counter};
        window.sessionStorage.setItem('cart',JSON.stringify(payload));

    }
    removeItem(id) {
        this.items[id] = null;
        $('#'+id).remove();
        this.updateTotal();
        //save payload to session
        var payload = {'items':this.items,'counter':this.counter};
        window.sessionStorage.setItem('cart',JSON.stringify(payload));
    }
    updateTotal() {
        var totalPrice = 0;
        for (var item in this.items) {
            if (this.items[item] != null) {
                totalPrice += this.items[item].data.itemPrice * this.items[item].options.num  ;   
            }
        }
        $('li .total').text('$'+totalPrice);
    }
}


//this is the cart handler for the checkout page
class CheckOutCart {
    constructor() {
        this.items = {};
        this.counter = 0;
        this.initCart();
    }
    initCart() {
        //we check to see if any items stored to session, if true, we add these to the cart
        if (window.sessionStorage.getItem('cart') != null) {
            var data = JSON.parse(window.sessionStorage.getItem('cart'));
            var items = data.items;
            for (var item in items) {
                if (items[item] != null) {
                    this.addItem(items[item]['options'],items[item]['data'], false);   
                }
            }
        }
    }
    addItem(options, data, toast) {
        //this fucntion adds an item to the cart, the state of the shopping cart object, and the session. 
        var id = data.itemName.replace(/ /g,"_") + this.counter;
        this.counter ++;
        this.items[id] = {'options':options,'data':data};
        if (options.requests.length  == 0) {
            options.requests = 'None';
        }
        $('.item-container').html('<div id="'+id+'" class="z-depth-2 item"> <div class="waves-effect z-depth-1 del-item material-icons">close</div> <div class="thumbnail"> <div class="darker"></div> <div> <div class="item-title">'+data.itemName+'</div> <div class="sub">'+data.orgin+'</div> </div> </div> <div class="description"> <label>Instructions</label> <div class="instructions">'+options.requests+'</div> </div> <div class="price-details"> <div class="num">x'+options.num+'</div> <div class="price">$'+data.itemPrice * options.num+'</div> </div></div>' + $('.item-container').html());
        var thumbsrc = {'className':'','src':''};
        if (data.itemImage != null) {
            $('#'+id + ' .thumbnail').addClass('bg').css('background-image','url('+data.itemImage+')');
        }
        if (toast == true) {
            Materialize.toast("Added "+data.itemName+" to shopping cart!",2000,'toast-style');   
        }
        this.updateTotal();
        //save payload to session
        var payload = {'items':this.items,'counter':this.counter};
        window.sessionStorage.setItem('cart',JSON.stringify(payload));

    }
    removeItem(id) {
        this.items[id] = null;
        $('#'+id).remove();
        this.updateTotal();
        //save payload to session
        var payload = {'items':this.items,'counter':this.counter};
        window.sessionStorage.setItem('cart',JSON.stringify(payload));
    }
    updateTotal() {
        var totalPrice = 0;
        for (var item in this.items) {
            if (this.items[item] != null) {
                totalPrice += this.items[item].data.itemPrice * this.items[item].options.num  ;   
            }
        }
        $('.mon').text('$'+totalPrice);
    }
}