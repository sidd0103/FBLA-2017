class ShoppingCart {
    constructor() {
        this.items = {};
        this.counter = 0;
    }
    addItem(options, data) {
        var id = data.itemName.replace(/ /g,"_") + this.counter;
        this.counter ++;
        console.log(id);
        this.items[id] = {'options':options,'data':data};
        $('.cart').html($('.cart').html() + '<div id="'+id+'" class="z-depth-2 item"> <div class="waves-effect material-icons z-depth-1 delete-btn">close</div> <div class="thumbnail"> <div class="darken-layer"></div> <div class="text"><div class="truncate name">'+data.itemName+'</div><div class="from">Ricks Cafe</div></div> </div> <div class="priceinfo"><div class="num"><i class="material-icons">close</i>'+options.num+'</div><div class="total">$'+data.itemPrice * options.num+'</div></div> </div>');
        var thumbsrc = {'className':'','src':''};
        if (data.itemImage != null) {
            console.log(id);
            $('#'+id + ' .thumbnail').addClass('bg').css('background-image','url('+data.itemImage+')');
        }
        Materialize.toast("Added "+data.itemName+" to shopping cart!",2000,'toast-style');
        this.updateTotal();
    }
    removeItem(id) {
        console.log(this.items[id])
        this.items[id] = null;
        $('#'+id).remove();
        this.updateTotal();
    }
    updateTotal() {
        var totalPrice = 0;
        for (var item in this.items) {
            if (this.items[item] != null) {
                totalPrice += this.items[item].data.itemPrice * this.items[item].options.num  ;   
            }
        }
        console.log(totalPrice);
        $('li .total').text('$'+totalPrice);
    }
}