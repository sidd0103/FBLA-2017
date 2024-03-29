//temp data is the data used for the website currently- in the future, this data will be dynamic and user generated, however we don't have a user base yet so we made our own.



var tempdata = {
    'dishes' : {'formalName' : 'Dish', 'items': [
       {
            'itemName' : 'Tofu and Eggplant with Basil', 
           'itemImage' : '/media/items/dishes/tofu.jpg',
            'itemPrice' : 10, 
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
            'ingredients':['Tofu','Eggplant','Onion', 'Bellpepper', 'Sauce', 'Basil'], 
            'itemDescription' : 'A Delicious Mix of Eggplant and Tofu',
            'itemAvailability' : 110,
            'orgin' : 'Thai Palace',
        },
        {
            'itemName' : 'Jalapeno Bagel', 
            'itemImage' : '/media/items/dishes/bagel.jpg',
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'itemPrice' : 8, 
            'itemDetails' : ['Vegetarian','Pescitarian'], 
            'ingredients':['Eggs','Wheat','Milk', 'Jalapeno Spread'], 
            'itemDescription' : 'A Toasted Bagel served with Jalapeno Spread',
            'itemAvailability' : 160,
            'orgin' : 'Posh Bagel',
        },
        {
            'itemName' : 'Enchiladas with Verde Sauce', 
            'itemImage' : '/media/items/dishes/enchilada.jpg',
            'itemPrice' : 15, 
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
            'ingredients':['Tortilla','Cheese', 'Verde Sauce'], 
            'itemDescription' : 'Fresh Enchiladas served with Verde Sauce',
            'itemAvailability' : 83,
            'orgin' : 'La Taqueria',
        },
        {
            'itemName' : 'BBQ Chicken Pizza', 
            'itemImage' : '/media/items/dishes/bbq.jpeg',
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'itemPrice' : 10, 
            'itemDetails' : ['Non-Vegetarian'], 
            'ingredients':['Chicken','BBQ Sauce','Onions', 'Pizza Dough'], 
            'itemDescription' : 'A Delicious BBQ Pizza',
            'itemAvailability' : 100,
            'orgin' : 'Spots Pizza',
        },
        {
            'itemName' : 'French Toast', 
            'itemImage' : '/media/items/dishes/french.jpeg',
            'itemPrice' : 13, 
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
            'ingredients':['Eggs','Wheat','Milk', 'Cinnamon'], 
            'itemDescription' : 'Crispy, yet Fluffy French Toast Served with a side of Maple Syrup',
            'itemAvailability' : 34,
            'orgin' : 'Ricks Cafe',
        },
        {
            'itemName' : 'Tomato Soup', 
            'itemImage' : '/media/items/dishes/soup.jpeg',
            'itemPrice' : 8, 
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
            'ingredients':['Broth', 'Tomato Mix', 'Assorted Vegetables'], 
            'itemDescription' : 'A Piping Hot Cup of Tomato Soup.',
            'itemAvailability' : 88,
            'orgin' : 'Posh Bagel',
        },
    ]},
    'restraunts' : {'formalName' : 'Restraunt', 'items': [
        {
            'itemName' : 'Ricks Cafe',
            'itemImage' : '/media/items/restraunts/ricks.jpeg',
            'itemDescription' : 'We are a family owned business offering a family friendly atmosphere for locals and visitors alike.',
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'menu' : {
                'Popular' : [
                    {
                        'itemName' : 'Eggs and Waffles', 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemPrice' : 10, 
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Hot sunny side up eggs and whole wheat waffles and maple syrup ',
                        'itemAvailability' : 100,
                        'orgin' : 'Ricks Cafe',
                    },
                    {
                        'itemName' : 'Chicken Tenders', 
                        'itemPrice' : 11, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Veg'], 
                        'ingredients':['Chicken', 'Basic Other Ingredients'], 
                        'itemDescription' : 'A Crisp Plate of Chicken Tenders and Ranch Sauce',
                        'itemAvailability' : 75,
                        'orgin' : 'Ricks Cafe',
                    },
                    {
                        'itemName' : 'Pancakes', 
                        'itemPrice' : 8, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Warm and Fluffy Pancakes served with a side of Maple Syrump',
                        'itemAvailability' : 110,
                        'orgin' : 'Ricks Cafe',
                    },
                    {
                        'itemName' : 'French Toast', 
                        'itemPrice' : 13, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk', 'Cinnamon'], 
                        'itemDescription' : 'Crispy, yet Fluffy French Toast Served with a side of Maple Syrup',
                        'itemAvailability' : 34,
                        'orgin' : 'Ricks Cafe',
                    },
                ],
                'Appetizers' : [
                    {
                        'itemName' : 'Fruit Bowl', 
                        'itemPrice' : 4, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Cantelope','Strawberries','Watermelon','Pineapple','Apples','Blueberries'], 
                        'itemDescription' : 'Cantelope, Strawberries, Watermelon, Pinapple, Apples, Blueberries. ',
                        'itemAvailability' : 100,
                        'orgin' : 'Ricks Cafe',
                    },
                    {
                        'itemName' : 'Assorted Snacks', 
                        'itemPrice' : 7, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Carrots', 'Celery', 'Basic Baking Ingredients', 'Cajun Seasoning'], 
                        'itemDescription' : 'An assortment of snacks such as a Fruit plate, a Vegetable Plate, and a Tater Tot Plate',
                        'itemAvailability' : 130,
                        'orgin' : 'Ricks Cafe',
                    },
                ],
                'Entrees' : [
                    {
                        'itemName' : 'Huevos Rancheros', 
                        'itemPrice' : 12, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk', 'Salsa', 'Onions'], 
                        'itemDescription' : 'A Spicy Deluxe Omelette with Salsa, A Classic Mexican Breakfast Delicacy',
                        'itemAvailability' : 100,
                        'orgin' : 'Ricks Cafe',
                    },
                    {
                        'itemName' : 'Eggs Benedict', 
                        'itemPrice' : 10, 
                        'itemDetails' : ['Non-Vegeterian'], 
                        'ingredients':['Eggs','Ham','Toast'], 
                        'itemDescription' : 'Classic eggs benedict with Hollandaise sauce',
                        'itemAvailability' : 100,
                        'orgin' : 'Ricks Cafe',
                    },
                ],
                'Sides/Drinks' : [
                    {
                        'itemName' : 'Shirley Temple', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Soda'], 
                        'ingredients':['Cherry','Sprite','Food Coloring'], 
                        'itemDescription' : 'Sprite with cherry flavor.',
                        'itemAvailability' : 250,
                        'orgin' : 'Ricks Cafe',
                    },
                    {
                        'itemName' : 'Banana Milkshake', 
                        'itemPrice' : 3, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegan'], 
                        'ingredients':['Banana','Milk','Strawberries'], 
                        'itemDescription' : 'Organic milkshake made every morning.  Made with Fresh Bananas.',
                        'itemAvailability' : 150,
                        'orgin' : 'Ricks Cafe',
                    },
                ],
                'Desserts' : [
                    {
                        'itemName' : 'Vanilla Ice Cream', 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'static' : 100,
                        'itemPrice' : 2, 
                        'itemDetails' : ['Vegetarian','Vegan'], 
                        'ingredients':['Vanilla Ice Cream'], 
                        'itemDescription' : 'A Scoop French Vanilla Ice Cream with Rainbow Sprinkles.',
                        'itemAvailability' : 80,
                        'orgin' : 'Ricks Cafe',
                    },
                    {
                        'itemName' : 'Root Beer Float', 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemPrice' : 5, 
                        'itemDetails' : ['Organic','Non-Vegan'], 
                        'ingredients':['Soda', 'Vanilla Ice Cream', 'Chocolate Sauce'], 
                        'itemDescription' : 'A Delicious Vanilla Ice Cream - Root Beer Float with added Chocolate Sauce',
                        'itemAvailability' : 82,
                        'orgin' : 'Ricks Cafe',
                    },
                ],
            }
        },
        {
            'itemName' : 'Posh Bagel',
            'itemImage' : '/media/items/restraunts/posh.jpeg',
            'itemDescription' : 'We are a family owned business offering a family friendly atmosphere for locals and visitors alike.',
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'menu' : {
                'Popular' : [
                    {
                        'itemName' : 'Jalapeno Bagel', 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemPrice' : 8, 
                        'itemDetails' : ['Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk', 'Jalapeno Spread'], 
                        'itemDescription' : 'A Toasted Bagel served with Jalapeno Spread',
                        'itemAvailability' : 160,
                        'orgin' : 'Posh Bagel',
                    },
                    {
                        'itemName' : 'Chicken Salad Sandwich', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegetarian'], 
                        'ingredients':['Eggs','Wheat','Milk', 'Chicken', 'Onion', 'Pickles', 'Cream'], 
                        'itemDescription' : 'A Chicken Salad Sandwich served on a Whole Wheat Bagel',
                        'itemAvailability' : 100,
                        'orgin' : 'Posh Bagel',
                    },
                    {
                        'itemName' : 'Tuna Sandwich', 
                        'itemPrice' : 8, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk', 'Cream', 'Tuna', 'Onion', 'Spices'], 
                        'itemDescription' : 'A Tuna Sandwich served on the Bagel of Your Choice',
                        'itemAvailability' : 66,
                        'orgin' : 'Posh Bagel',
                    },
                    {
                        'itemName' : 'Croissant Sandwich with Ham', 
                        'itemPrice' : 12, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegetarian'], 
                        'ingredients':['Eggs','Wheat','Milk', 'Ham', 'Spices'], 
                        'itemDescription' : 'A Ham Sandwich served on a Toasted Croissant',
                        'itemAvailability' : 80,
                        'orgin' : 'Posh Bagel',
                    },
                ],
                'Appetizers' : [
                    {
                        'itemName' : 'Bag of Chips', 
                        'itemPrice' : 3, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegetarian'], 
                        'ingredients':['Chips'], 
                        'itemDescription' : 'A Bag of Potato Chips in the Flavor of Your Choice',
                        'itemAvailability' : 500,
                        'orgin' : 'Posh Bagel',
                    },
                    {
                        'itemName' : 'Fresh Bananas', 
                        'itemPrice' : 1, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Bananas'], 
                        'itemDescription' : 'A Fresh Banana as a Snack',
                        'itemAvailability' : 203,
                        'orgin' : 'Posh Bagel',
                    },
                ],
                'Entrees' : [
                    {
                        'itemName' : 'Minestrone Soup', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Broth', 'Lentils with Spice Mix', 'Assorted Vegetables'], 
                        'itemDescription' : 'A Piping Hot Cup of Minestrone Soup.',
                        'itemAvailability' : 50,
                        'orgin' : 'Posh Bagel',
                    },
                    {
                        'itemName' : 'Tomato Soup', 
                        'itemPrice' : 8, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Broth', 'Tomato Mix', 'Assorted Vegetables'], 
                        'itemDescription' : 'A Piping Hot Cup of Tomato Soup.',
                        'itemAvailability' : 88,
                        'orgin' : 'Posh Bagel',
                    },
                ],
                'Sides/Drinks' : [
                    {
                        'itemName' : 'Ginger Ale', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Soda'], 
                        'ingredients':['Ginger Ale Soda'], 
                        'itemDescription' : 'Ginger Ale',
                        'itemAvailability' : 200,
                        'orgin' : 'Posh Bagel',
                    },
                    {
                        'itemName' : 'Chocolate Milkshake', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegan'], 
                        'ingredients':['Ice Cream','Milk','Chocolate'], 
                        'itemDescription' : 'Chocolate milkshake.',
                        'itemAvailability' : 64,
                        'orgin' : 'Posh Bagel',
                    },
                ],
                'Desserts' : [
                    {
                        'itemName' : 'Ice Cream Sundae', 
                        'static' : 100,
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemPrice' : 2, 
                        'itemDetails' : ['Vegetarian','Vegan'], 
                        'ingredients':['Vanilla Ice Cream', 'Fudge'], 
                        'itemDescription' : 'Some Vanilla Ice Cream with Hot Fudge.',
                        'itemAvailability' : 165,
                        'orgin' : 'Posh Bagel',
                    },
                    {
                        'itemName' : 'Brownies', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Organic','Non-Vegan'], 
                        'ingredients':['Baking Ingredients', 'Chocolate'], 
                        'itemDescription' : 'Homemade Brownies',
                        'itemAvailability' : 205,
                        'orgin' : 'Posh Bagel',
                    },
                ],
            }
        },
        {
            'itemName' : 'La Taqueria',
            'itemImage' : '/media/items/restraunts/taqueria.jpeg',
            'itemDescription' : 'We are a family owned business offering authentic Mexican cuisine',
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'menu' : {
                'Popular' : [
                    {
                        'itemName' : 'Deluxe Shrimp Tacos', 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemPrice' : 10, 
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Tortillas', 'Shrimp', 'Salsa', 'Lettuce'], 
                        'itemDescription' : 'A Pair of Deluxe Shrimp Tacos',
                        'itemAvailability' : 120,
                        'orgin' : 'La Taqueria',
                    },
                    {
                        'itemName' : 'Chicken Tostada', 
                        'itemPrice' : 11, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegetarian'], 
                        'ingredients':['Chicken','Tostada Mix','Spices'], 
                        'itemDescription' : 'A Mexican Tostada',
                        'itemAvailability' : 100,
                        'orgin' : 'La Taqueria',
                    },
                    {
                        'itemName' : 'Enchiladas with Verde Sauce', 
                        'itemPrice' : 15, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Tortilla','Cheese', 'Verde Sauce'], 
                        'itemDescription' : 'Fresh Enchiladas served with Verde Sauce',
                        'itemAvailability' : 83,
                        'orgin' : 'La Taqueria',
                    },
                    {
                        'itemName' : 'Taquitos', 
                        'itemPrice' : 8, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegetarian'], 
                        'ingredients':['Taquito Shell Mix','Chicken','Spice Mix', 'Lettuce', 'Sour Cream'], 
                        'itemDescription' : '6 Chicken Taquitos served with Lettuce and Sour Cream',
                        'itemAvailability' : 58,
                        'orgin' : 'La Taqueria',
                    },
                ],
                'Appetizers' : [
                    {
                        'itemName' : 'Chips and Salsa', 
                        'itemPrice' : 3, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Chips', 'Salsa'], 
                        'itemDescription' : 'An Order of Chips and Salsa',
                        'itemAvailability' : 132,
                        'orgin' : 'La Taqueria',
                    },
                    {
                        'itemName' : 'Tortilla Soup', 
                        'itemPrice' : 9, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Tortilla (Shredded)', 'Beans and Vegetables', 'Spice Blend'], 
                        'itemDescription' : 'A Spicy Mexican Tortilla Soup',
                        'itemAvailability' : 68,
                        'orgin' : 'La Taqueria',
                    },
                ],
                'Entrees' : [
                    {
                        'itemName' : 'Supreme Beef Burrito', 
                        'itemPrice' : 15, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegetarian'], 
                        'ingredients':['Beef','Rice','Beans', 'Vegetables', 'Salsa'], 
                        'itemDescription' : 'A Supreme Beef Burrito',
                        'itemAvailability' : 120,
                        'orgin' : 'La Taqueria',
                    },
                    {
                        'itemName' : 'Vegetable Fajitas', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegetarian'], 
                        'ingredients':['Vegetables','Tortillas','Beans and Rice'], 
                        'itemDescription' : 'Make Your Own Tacos with Our Fajita Dish',
                        'itemAvailability' : 85,
                        'orgin' : 'La Taqueria',
                    },
                ],
                'Sides/Drinks' : [
                    {
                        'itemName' : 'Horchata', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegetarian'], 
                        'ingredients':['Rice and Spice Mix'], 
                        'itemDescription' : 'A Mexican Rice Drink',
                        'itemAvailability' : 95,
                        'orgin' : 'La Taqueria',
                    },
                    {
                        'itemName' : 'Coke', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegetarian'], 
                        'ingredients':['Soda'], 
                        'itemDescription' : 'Refreshing Coke',
                        'itemAvailability' : 230,
                        'orgin' : 'La Taqueria',
                    },
                ],
                'Desserts' : [
                    {
                        'itemName' : 'Churros', 
                        'static' : 100,
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemPrice' : 2, 
                        'itemDetails' : ['Vegetarian'], 
                        'ingredients':['Cinnamon and Churro Mix'], 
                        'itemDescription' : 'Delicious Churros',
                        'itemAvailability' : 170,
                        'orgin' : 'La Taqueria',
                    },
                    {
                        'itemName' : 'Tres Leches Cake', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegetarian'], 
                        'ingredients':['Milk','Cake Mix'], 
                        'itemDescription' : 'A delicious Mexican "Three Milk" Cake',
                        'itemAvailability' : 49,
                        'orgin' : 'La Taqueria',
                    },
                ],
            }
        },
        {
            'itemName' : 'Spots Pizza',
            'itemImage' : '/media/items/restraunts/spots.jpeg',
            'itemDescription' : 'We are a family owned business serving delicious pizza for the last 20 years',
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'menu' : {
                'Popular' : [
                    {
                        'itemName' : 'BBQ Chicken Pizza', 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemPrice' : 10, 
                        'itemDetails' : ['Non-Vegetarian'], 
                        'ingredients':['Chicken','BBQ Sauce','Onions', 'Pizza Dough'], 
                        'itemDescription' : 'A Delicious BBQ Pizza',
                        'itemAvailability' : 100,
                        'orgin' : 'Spots Pizza',
                    },
                    {
                        'itemName' : 'Cheese Pizza', 
                        'itemPrice' : 9, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegetarian','Pescitarian'], 
                        'ingredients':['Cheese','Pizza Sauce','Pizza Dough'], 
                        'itemDescription' : 'Regular Cheeze Pizza, a Classic',
                        'itemAvailability' : 74,
                        'orgin' : 'Spots Pizza',
                    },
                    {
                        'itemName' : 'Pepperoni Pizza', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegetarian'], 
                        'ingredients':['Cheese','Pizza Sauce','Pizza Dough', 'Pepperoni'], 
                        'itemDescription' : 'Regular Pepperoni Pizza',
                        'itemAvailability' : 84,
                        'orgin' : 'Spots Pizza',
                    },
                    {
                        'itemName' : 'Basic Vegetarian Pizza', 
                        'itemPrice' : 8, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegetarian','Pescitarian'], 
                        'ingredients':['Cheese','Pizza Sauce','Pizza Dough', 'Vegetables'], 
                        'itemDescription' : 'A Regular Vegetarian Pizza',
                        'itemAvailability' : 123,
                        'orgin' : 'Spots Pizza',
                    },
                ],
                'Appetizers' : [
                    {
                        'itemName' : 'Fruit Bowl', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Cantelope','Strawberries','Watermelon','Pineapple','Apples','Blueberries'], 
                        'itemDescription' : 'Cantelope, Strawberries, Watermelon, Pinapple, Apples, Blueberries. ',
                        'itemAvailability' : 100,
                        'orgin' : 'Spots Pizza',
                    },
                    {
                        'itemName' : 'Breadsticks', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['BreadSticks Baking Ingredients', 'Ranch Sauce'], 
                        'itemDescription' : 'An Order of Piping Hot Breadsticks with Dipping Sauce',
                        'itemAvailability' : 113,
                        'orgin' : 'Spots Pizza',
                    },
                ],
                'Entrees' : [
                    {
                        'itemName' : 'BBQ Chicken Pizza', 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemPrice' : 10, 
                        'itemDetails' : ['Non-Vegetarian'], 
                        'ingredients':['Chicken','BBQ Sauce','Onions', 'Pizza Dough'], 
                        'itemDescription' : 'A Delicious BBQ Pizza',
                        'itemAvailability' : 100,
                        'orgin' : 'Spots Pizza',
                    },
                    {
                        'itemName' : 'Garden Salad', 
                        'itemPrice' : 7, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan', 'Vegetarian'], 
                        'ingredients':['Salad Mix','Olive Oil'], 
                        'itemDescription' : 'Garden Salad with a simple Olive Oil Dressing',
                        'itemAvailability' : 78,
                        'orgin' : 'Spots Pizza',
                    },
                ],
                'Sides/Drinks' : [
                    {
                        'itemName' : 'Pepsi', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Soda'], 
                        'ingredients':['Soda'], 
                        'itemDescription' : 'Pepsi Soda',
                        'itemAvailability' : 230,
                        'orgin' : 'Spots Pizza',
                    },
                    {
                        'itemName' : 'Bottle of Soda Water', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Soda'], 
                        'ingredients':['Soda Water'], 
                        'itemDescription' : 'Refreshing Soda Water',
                        'itemAvailability' : 114,
                        'orgin' : 'Spots Pizza',
                    },
                ],
                'Desserts' : [
                    {
                        'itemName' : 'Vanilla Ice Cream', 
                        'static' : 100,
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemPrice' : 2, 
                        'itemDetails' : ['Vegetarian','Vegan'], 
                        'ingredients':['Vanilla Ice Cream'], 
                        'itemDescription' : 'Some Vanilla Ice Cream.',
                        'itemAvailability' : 100,
                        'orgin' : 'Spots Pizza',
                    },
                    {
                        'itemName' : 'Cream Puffs', 
                        'itemPrice' : 4, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegetarian'], 
                        'ingredients':['Puff-Pastry Mix','Cream'], 
                        'itemDescription' : 'Delicious Cream Puffs, 4 per order',
                        'itemAvailability' : 400,
                        'orgin' : 'Spots Pizza',
                    },
                ],
            }
        },
        {
            'itemName' : 'Thai Palace',
            'itemImage' : '/media/items/restraunts/thaipalace.jpeg',
            'itemDescription' : 'We are a popular and delicious Thai restaurant also serving some delicacies from other Asian cuisines',
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'menu' : {
                'Popular' : [
                    {
                        'itemName' : 'Red Curry Chicken', 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemPrice' : 11, 
                        'itemDetails' : ['Non-Vegetarian'], 
                        'ingredients':['Chicken','Coconut Cream','Spice Mix'], 
                        'itemDescription' : 'Delicious Red Curry Chicken With Rice',
                        'itemAvailability' : 38,
                        'orgin' : 'Thai Palace',
                    },
                    {
                        'itemName' : 'Chicken Satay', 
                        'itemPrice' : 8, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegetarian'], 
                        'ingredients':['Chicken with Spices'], 
                        'itemDescription' : 'A Delicious Order of Chicken Satay served on Skewers, 4 per order',
                        'itemAvailability' : 129,
                        'orgin' : 'Thai Palace',
                    },
                    {
                        'itemName' : 'Tofu and Eggplant with Basil', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Tofu','Eggplant','Onion', 'Bellpepper', 'Sauce', 'Basil'], 
                        'itemDescription' : 'A Delicious Mix of Eggplant and Tofu',
                        'itemAvailability' : 110,
                        'orgin' : 'Thai Palace',
                    },
                    {
                        'itemName' : 'Pad Thai', 
                        'itemPrice' : 12, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Noodles','Spices'], 
                        'itemDescription' : 'Delicious noodles served with egg and other spices',
                        'itemAvailability' : 128,
                        'orgin' : 'Thai Palace',
                    },
                ],
                'Appetizers' : [
                    {
                        'itemName' : 'Spring Rolls', 
                        'itemPrice' : 6, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegetarian','Pescitarian'], 
                        'ingredients':['Cabbage', 'Spices', 'Carrots', 'Spring Roll Shell Mix'], 
                        'itemDescription' : 'A Delicious Order of Spring Rolls (4 per order)',
                        'itemAvailability' : 230,
                        'orgin' : 'Thai Palace',
                    },
                    {
                        'itemName' : 'Pinneaple Fried Rice', 
                        'itemPrice' : 5, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegetarian','Pescitarian'], 
                        'ingredients':['Pinneaple','Rice','Egg','Spices'], 
                        'itemDescription' : 'A delicious order of fried rice with pinneaple',
                        'itemAvailability' : 138,
                        'orgin' : 'Thai Palace',
                    },
                ],
                'Entrees' : [
                    {
                        'itemName' : 'Tofu and Eggplant with Basil', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Tofu','Eggplant','Onion', 'Bellpepper', 'Sauce', 'Basil'], 
                        'itemDescription' : 'A Delicious Mix of Eggplant and Tofu',
                        'itemAvailability' : 110,
                        'orgin' : 'Thai Palace',
                    },
                    {
                        'itemName' : 'Chicken Satay', 
                        'itemPrice' : 8, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegetarian'], 
                        'ingredients':['Chicken with Spices'], 
                        'itemDescription' : 'A Delicious Order of Chicken Satay served on Skewers, 4 per order',
                        'itemAvailability' : 129,
                        'orgin' : 'Thai Palace',
                    },
                ],
                'Sides/Drinks' : [
                    {
                        'itemName' : 'Green Tea', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Tea'], 
                        'ingredients':['Green Tea Mix'], 
                        'itemDescription' : 'Warm Cup of Green Tea',
                        'itemAvailability' : 149,
                        'orgin' : 'Thai Palace',
                    },
                    {
                        'itemName' : 'Sprite', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Soda'], 
                        'ingredients':['Soda'], 
                        'itemDescription' : 'Refreshing Sprite',
                        'itemAvailability' : 500,
                        'orgin' : 'Thai Palace',
                    },
                ],
                'Desserts' : [
                    {
                        'itemName' : 'Red Bean Ice Cream', 
                        'static' : 100,
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemPrice' : 2, 
                        'itemDetails' : ['Vegetarian','Vegan'], 
                        'ingredients':['Red Bean Ice Cream'], 
                        'itemDescription' : 'Some Red Bean-flavored Ice Cream.',
                        'itemAvailability' : 300,
                        'orgin' : 'Thai Palace',
                    },
                    {
                        'itemName' : 'Vanilla Ice Cream', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegetarian'], 
                        'ingredients':['Vanilla Ice Cream'], 
                        'itemDescription' : 'Some Vanilla Ice Cream',
                        'itemAvailability' : 228,
                        'orgin' : 'Thai Palace',
                    },
                ],
            }
        },
        {
            'itemName' : 'Noodle Talk',
            'itemImage' : '/media/items/restraunts/noodletalk.jpg',
            'itemDescription' : 'We are a local Chinese restaurant',
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'menu' : {
                'Popular' : [
                    {
                        'itemName' : 'Chow Mein', 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemPrice' : 9, 
                        'itemDetails' : ['Vegetarian','Pescitarian'], 
                        'ingredients':['Fried Noodles','Soy Sauce','Vegetables'], 
                        'itemDescription' : 'A Popular Chinese Noodle Dish',
                        'itemAvailability' : 256,
                        'orgin' : 'Noodle Talk',
                    },
                    {
                        'itemName' : 'Egg Fried Rice', 
                        'itemPrice' : 7, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Rice','Spices'], 
                        'itemDescription' : 'Egg Fried Rice',
                        'itemAvailability' : 148,
                        'orgin' : 'Noodle Talk',
                    },
                    {
                        'itemName' : 'Kung Pao Chicken', 
                        'itemPrice' : 13, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegetarian'], 
                        'ingredients':['Chicken','Peanuts','Vegetables', 'Spice Mix'], 
                        'itemDescription' : 'A Delicious Order of Kung Pao Chicken',
                        'itemAvailability' : 137,
                        'orgin' : 'Noodle Talk',
                    },
                    {
                        'itemName' : 'Black Pepper Chicken', 
                        'itemPrice' : 12, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegetarian'], 
                        'ingredients':['Chicken','Black Pepper','Vegetables', 'Spice Mix'], 
                        'itemDescription' : 'A Delicious Order of Black Pepper Chicken',
                        'itemAvailability' : 126,
                        'orgin' : 'Noodle Talk',
                    },
                ],
                'Appetizers' : [
                    {
                        'itemName' : 'Spring Rolls', 
                        'itemPrice' : 6, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegetarian','Pescitarian'], 
                        'ingredients':['Cabbage', 'Spices', 'Carrots', 'Spring Roll Shell Mix'], 
                        'itemDescription' : 'A Delicious Order of Spring Rolls (4 per order)',
                        'itemAvailability' : 232,
                        'orgin' : 'Noodle Talk',
                    },
                    {
                        'itemName' : 'Chicken Fried Rice', 
                        'itemPrice' : 9, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegetarian'], 
                        'ingredients':['Chicken','Rice','Spices'], 
                        'itemDescription' : 'Chicken Fried Rice',
                        'itemAvailability' : 187,
                        'orgin' : 'Noodle Talk',
                    },
                ],
                'Entrees' : [
                    {
                        'itemName' : 'Kung Pao Chicken', 
                        'itemPrice' : 13, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegetarian'], 
                        'ingredients':['Chicken','Peanuts','Vegetables', 'Spice Mix'], 
                        'itemDescription' : 'A Delicious Order of Kung Pao Chicken',
                        'itemAvailability' : 137,
                        'orgin' : 'Noodle Talk',
                    },
                    {
                        'itemName' : 'Chow Mein', 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemPrice' : 9, 
                        'itemDetails' : ['Vegetarian','Pescitarian'], 
                        'ingredients':['Fried Noodles','Soy Sauce','Vegetables'], 
                        'itemDescription' : 'A Popular Chinese Noodle Dish',
                        'itemAvailability' : 256,
                        'orgin' : 'Noodle Talk',
                    },
                ],
                'Sides/Drinks' : [
                    {
                        'itemName' : 'Black Tea', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Tea'], 
                        'ingredients':['Black Tea Mix'], 
                        'itemDescription' : 'Warm Cup of Black Tea',
                        'itemAvailability' : 149,
                        'orgin' : 'Noodle Talk',
                    },
                    {
                        'itemName' : 'Orange Cream Soda', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Soda'], 
                        'ingredients':['Orange Cream Soda'], 
                        'itemDescription' : 'Delicious Orange Cream Soda',
                        'itemAvailability' : 287,
                        'orgin' : 'Noodle Talk',
                    },
                ],
                'Desserts' : [
                    {
                        'itemName' : 'Fortune Cookie', 
                        'static' : 100,
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemPrice' : 0.2, 
                        'itemDetails' : ['Vegetarian'], 
                        'ingredients':['Vanilla Ice Cream'], 
                        'itemDescription' : 'A Crunchy Fortune Cookie',
                        'itemAvailability' : 8034,
                        'orgin' : 'Noodle Talk',
                    },
                    {
                        'itemName' : 'Chocolate Chip Cookies', 
                        'itemPrice' : 1, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegetarian'], 
                        'ingredients':['Chocolate Chips','Cookie Mix Ingredients',], 
                        'itemDescription' : 'Delicious Chocolate Chip Cookies baked every morning. 2 per order.',
                        'itemAvailability' : 172,
                        'orgin' : 'Noodle Talk',
                    },
                ],
            }
        },
    ]},
    'produce' : {'formalName' : 'Produce', 'items': [
        {
            'itemName' : 'Apples',
            'itemImage' : '/media/items/produce/apples.jpg',
            'itemDescription' : "Local apples from De Martenelis Farmers Market.",
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'itemPrice' : 1,
            'itemDetails' : [],
            'itemAvailability' : 100,
            'orgin' : 'De Martenelis',
        },
        {
            'itemName' : 'Pears',
            'itemImage' : '/media/items/produce/pears.jpeg',
            'itemDescription' : "Local pears from De Martenelis Farmers Market.",
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'itemPrice' : 1,
            'itemDetails' : [],
            'itemAvailability' : 200,
            'orgin' : 'De Martenelis',
        },
        {
            'itemName' : 'Oranges',
            'itemImage' : '/media/items/produce/oranges.jpeg',
            'itemDescription' : "Local oranges from De Martenelis Farmers Market.",
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'itemPrice' : 1,
            'itemDetails' : [],
            'itemAvailability' : 400,
            'orgin' : 'De Martenelis',
        },
        {
            'itemName' : 'Grapefruits',
            'itemImage' : '/media/items/produce/grapefruit.jpeg',
            'itemDescription' : "Local Grapefruit from De Martenelis Farmers Market.",
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'itemPrice' : 2,
            'itemDetails' : [],
            'itemAvailability' : 150,
            'orgin' : 'De Martenelis',
        },
        {
            'itemName' : 'Squash',
            'itemImage' : '/media/items/produce/squash.jpeg',
            'itemDescription' : "Local squash from De Martenelis Farmers Market.",
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'itemPrice' : 2,
            'itemDetails' : [],
            'itemAvailability' : 120,
            'orgin' : 'De Martenelis',
        },
        {
            'itemName' : 'Plums',
            'itemImage' : '/media/items/produce/plums.jpeg',
            'itemDescription' : "Local apples from De Martenelis Farmers Market.",
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'itemPrice' : 1,
            'itemDetails' : [],
            'itemAvailability' : 300,
            'orgin' : 'De Martenelis',
        },
    ]}
    
}

function initItems() {
    //get the data from the database
    var data = getData();
    //build the tile structures
    initRestraunts(data['restraunts']['items']);
    initDishes(data['dishes']['items']);
    initProduce(data['produce']['items']);
}


function getData() {
    return tempdata;
}


function initRestraunts(data) {
    var totalHTML = '';
    for (var x in data) {
        //get the data for each restraunt entry.
        var itemID = x;
        var name = data[x].itemName;
        var itemImage = data[x].itemImage;
        var itemDescription = data[x].itemDescription;
        var itemRating = data[x].rating;
        //convert the itemrating into html
        var ratingHTML = ratingToHTML(itemRating);
        var html = '<div data-itemtype="restraunts" data-itemID="'+name.toLowerCase().replace(" ","_")+'" style="background-image: url('+itemImage+')" id="'+itemID+'" class="lazy  z-depth-2 tastery-item"> <div class="darken"> <div class="truncate item-title">'+name+'</div> <div class="item-description">'+itemDescription+'</div> <div class="item-rating">'+ratingHTML+'</div> </div> </div>';
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
        var itemRating = data[x].rating;
        //convert the itemrating into html
        var ratingHTML = ratingToHTML(itemRating);
        var html = '<div data-itemtype="dishes" data-itemID="'+name.toLowerCase().replace(" ","_")+'" style="background-image: url('+itemImage+')" id="'+itemID+'" class="lazy  z-depth-2 tastery-item"> <div class="darken"> <div class="item-details">'+detailsHTML+'</div> <div class="item-title">'+name+'</div> <div class="item-description">'+itemDescription+'</div> <div class="item-rating">'+ratingHTML+'</div> </div> </div>';
        totalHTML += html;
    }
    $('#dish-items').html(totalHTML);
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
        var itemRating = data[x].rating;
        //convert the itemrating into html
        var ratingHTML = ratingToHTML(itemRating);
        var html = '<div data-itemtype="produce" data-itemID="'+name.toLowerCase().replace(" ","_")+'" style="background-image: url('+itemImage+')" id="'+itemID+'" class="lazy  z-depth-2 tastery-item"> <div class="darken"> <div class="item-details">'+detailsHTML+'</div> <div class="item-title">'+name+'</div> <div class="item-description">'+itemDescription+'</div> <div class="item-rating">'+ratingHTML+'</div> </div> </div>';
        totalHTML += html;
    }
    $('#produce-items').html(totalHTML);
}


function ratingToHTML(rating) {
    var totalHTML = '';
    var sums = {'total':0,'items':0};
    rating = ratingToNumber(rating);
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
function ratingToHTMLDiv(rating) {
    var totalHTML = '';
    var sums = {'total':0,'items':0};
    rating = ratingToNumber(rating);
    for (var i = 0; i < 5; i ++) {
        if (rating - i > 0) {
            totalHTML += '<div class="filledIn material-icons">star</div>'
        }
        else {
            totalHTML += '<div class="material-icons">star</div>'
        }
    }
    return totalHTML;
}
function ratingToNumber(rating) {
    var sums = {'total':0,'items':0};
    for (var category in rating) {
        sums.total += category * rating[category];
        sums.items += rating[category];
    }
    return sums.total / sums.items;
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
            var iconHTML = '<div data-position="bottom" data-tooltip="'+detailName+'" class="item-detail"><i class="material-icons">'+detailIcon+'</i></div>';
            totalHTML += iconHTML;
        }
    }
    totalHTML += '<div data-position="bottom" data-tooltip="Price" class="item-detail">$'+price+'</div>';
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
