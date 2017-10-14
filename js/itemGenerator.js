function restrauntJSONGenerator(num) {
    var collection = {}
    for (var i = 0; i < num; i ++) {
        collection[i] = {
            'itemName' : 'Ricks Cafe',
            'itemImage' : '/media/items/restraunts/ricks.jpg',
            'itemDescription' : 'We are a family owned business offering a family friendly atmosphere for locals and visitors alike.',
            'itemRating' : 3
        }
    }
    return collection;
}

var restraunts = {
    't1' : {
        'itemName' : 'Ricks Cafe',
        'itemImage' : '/media/items/restraunts/ricks.jpg',
        'itemDescription' : 'We are a family owned business offering a family friendly atmosphere for locals and visitors alike.',
        'itemRating' : 3
    }
}
function initItems() {
    //get the data from the database
    var restraunts = restrauntJSONGenerator(5);
    console.log(restraunts);
    //build the tile structures
    initRestraunts(restraunts);
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
        var html = '<div id="'+itemID+'" class="waves-effect waves-light z-depth-2 tastery-item"> <div class="darken"> <div class="item-title">'+name+'</div> <div class="item-description">'+itemDescription+'</div> <div class="item-rating">'+ratingHTML+'</div> </div> </div>';
        totalHTML += html;
    }
    console.log(totalHTML);
    $('.restraunt-items').html(totalHTML);
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