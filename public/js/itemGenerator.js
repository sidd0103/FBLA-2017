function initItems() {
    //get the data from the database
    var restraunts = restrauntJSONGenerator(6);
    var dishes = dishesJSONGenerator(6);
    var produce = produceJSONGenerator(6);
    //build the tile structures
    initRestraunts(restraunts);
    initDishes(dishes);
    initProduce(produce);
}





function initRestraunts(data) {
    var totalHTML = '';
    for (var x in data) {
        //get the data for each restraunt entry.
        var itemID = x;
        var name = data[x].itemName;
        var itemImage = data[x].itemImage;
        var itemDescription = data[x].itemDescription;
        var itemRating = data[x].itemRating;
        //convert the itemrating into html
        var ratingHTML = ratingToHTML(itemRating);
        var html = '<div style="background-image: url('+itemImage+')" id="'+itemID+'" class="lazy waves-effect waves-light z-depth-2 tastery-item"> <div class="darken"> <div class="item-title">'+name+'</div> <div class="item-description">'+itemDescription+'</div> <div class="item-rating">'+ratingHTML+'</div> </div> </div>';
        totalHTML += html;
    }
    $('#restraunt-items').html(totalHTML);
}
function initDishes(data) {
    var totalHTML = '';
    for (var x in data) {
        //get the data for each restraunt entry.
        var itemID = x;
        var name = data[x].itemName;
        var itemImage = data[x].itemImage;
        var itemDescription = data[x].itemDescription;
        var itemPrice = data[x].itemPrice;
        var itemDetails = data[x].itemDetails;
        //create our details tab 
        var detailsHTML = detailsToHTML(itemPrice, itemDetails);
        //get the item rating
        var itemRating = data[x].itemRating;
        //convert the itemrating into html
        var ratingHTML = ratingToHTML(itemRating);
        var html = '<div style="background-image: url('+itemImage+')" id="'+itemID+'" class="lazy waves-effect waves-light z-depth-2 tastery-item"> <div class="darken"> <div class="item-details">'+detailsHTML+'</div> <div class="item-title">'+name+'</div> <div class="item-description">'+itemDescription+'</div> <div class="item-rating">'+ratingHTML+'</div> </div> </div>';
        totalHTML += html;
    }
    $('#dish-items').html(totalHTML);
    $('.tooltipped').tooltip();
}
function initProduce(data) {
    var totalHTML = '';
    for (var x in data) {
        //get the data for each restraunt entry.
        var itemID = x;
        var name = data[x].itemName;
        var itemImage = data[x].itemImage;
        var itemDescription = data[x].itemDescription;
        var itemPrice = data[x].itemPrice;
        var itemDetails = data[x].itemDetails;
        //create our details tab 
        var detailsHTML = detailsToHTML(itemPrice, itemDetails);
        //get the item rating
        var itemRating = data[x].itemRating;
        //convert the itemrating into html
        var ratingHTML = ratingToHTML(itemRating);
        var html = '<div style="background-image: url('+itemImage+')" id="'+itemID+'" class="lazy waves-effect waves-light z-depth-2 tastery-item"> <div class="darken"> <div class="item-details">'+detailsHTML+'</div> <div class="item-title">'+name+'</div> <div class="item-description">'+itemDescription+'</div> <div class="item-rating">'+ratingHTML+'</div> </div> </div>';
        totalHTML += html;
    }
    $('#produce-items').html(totalHTML);
    $('.tooltipped').tooltip();
}


function ratingToHTML(rating) {
    var totalHTML = '';
    for (var i = 0; i < 5; i ++) {
        if (rating - i > 0) {
            totalHTML += '<i class="ratingStar filledIn material-icons">star</i>'
        }
        else {
            totalHTML += '<i class="ratingStar material-icons">star</i>'
        }
    }
    return totalHTML;
}


function detailsToHTML(price, details) {
    var detailsIcons = {
        'vegan' : ['local_florist','Vegan'],
        'diet-flexible' : ['shuffle','Editable Ingredients']
    }
    
    var totalHTML = ''
    
    for (var i in details) {
        if (detailsIcons[details[i]]) {
            var detailName = detailsIcons[details[i]][1];
            var detailIcon = detailsIcons[details[i]][0];
            var iconHTML = '<div data-position="bottom" data-tooltip="'+detailName+'" class="tooltipped item-detail"><i class="material-icons">'+detailIcon+'</i></div>';
            totalHTML += iconHTML;
        }
    }
    totalHTML += '<div data-position="bottom" data-tooltip="Price" class="tooltipped item-detail">$'+price+'</div>';
    return totalHTML;
}





//these functions are just used for testing, they return an object containing copies of a frame.
function restrauntJSONGenerator(num) {
    var collection = {}
    for (var i = 0; i < num; i ++) {
        collection[i] = {
            'itemName' : 'Ricks Cafe',
            'itemImage' : '/media/items/restraunts/raclette.jpg',
            'itemDescription' : 'We are a family owned business offering a family friendly atmosphere for locals and visitors alike.',
            'itemRating' : 3
        }
    }
    return collection;
}
function dishesJSONGenerator(num) {
    var collection = {}
    for (var i = 0; i < num; i ++) {
        collection[i] = {
            'itemName' : 'Udon',
            'itemImage' : '/media/items/dishes/udon.jpg',
            'itemDescription' : 'A traditional Japanese noodle dish served with broth and vegetables.',
            'itemRating' : 5,
            'itemPrice' : 10,
            'itemDetails' : ['vegan']
        }
    }
    return collection;
}
function produceJSONGenerator(num) {
    var collection = {}
    for (var i = 0; i < num; i ++) {
        collection[i] = {
            'itemName' : 'Apples',
            'itemImage' : '/media/items/produce/apples.jpg',
            'itemDescription' : "Local apples from De Martenelis Farmers Market.",
            'itemRating' : 4,
            'itemPrice' : 4,
            'itemDetails' : []
        }
    }
    return collection;
}