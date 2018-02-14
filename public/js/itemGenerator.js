//temp data is the data used for the website currently- in the future, this data will be dynamic and user generated, however we don't have a user base yet so we made our own.
var tempdata = {
    'dishes' : {'formalName' : 'Dish', 'items': [
        {
            'itemName' : 'Udon',
            'itemImage' : '/media/items/dishes/udon.jpg',
            'itemDescription' : 'A traditional Japanese noodle dish served with broth and vegetables.',
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'itemPrice' : 10,
            'itemDetails' : ['Vegan'],
            'itemAvailability' : 100,
        },
        {
            'itemName' : 'Baja Fish Tacos',
            'itemImage' : '/media/items/dishes/udon.jpg',
            'itemDescription' : 'A savory pair of Mahi-Mahi tacos served with coleslaw, beans, lettuce.',
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'itemPrice' : 12,
            'itemDetails' : ['Non-veg'],
            'itemAvailability' : 90,
        },
        {
            'itemName' : 'Fettuccine Alfredo',
            'itemImage' : '/media/items/dishes/udon.jpg',
            'itemDescription' : 'A rich Italian Pasta made with a creamy white sauce.',
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'itemPrice' : 12,
            'itemDetails' : ['Vegetarian'],
            'itemAvailability' : 52,
        },
        {
            'itemName' : 'Chicken Curry',
            'itemImage' : '/media/items/dishes/udon.jpg',
            'itemDescription' : 'A traditional Indian dish made with chicken and masalas, served with rice',
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'itemPrice' : 9,
            'itemDetails' : ['Non-veg'],
            'itemAvailability' : 100,
        },
        {
            'itemName' : 'Margarita Pizza',
            'itemImage' : '/media/items/dishes/udon.jpg',
            'itemDescription' : 'A traditional Margarita Pizza served hot and fresh',
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'itemPrice' : 15,
            'itemDetails' : ['Vegetarian'],
            'itemAvailability' : 120,
        },
        {
            'itemName' : 'Bean and Cheese Burrito',
            'itemImage' : '/media/items/dishes/udon.jpg',
            'itemDescription' : 'A simple but delicious Bean and Cheese Burrito with some lettuce and salsa',
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'itemPrice' : 7,
            'itemDetails' : ['Vegetarian'],
            'itemAvailability' : 70,
        },
    ]},
    'restraunts' : {'formalName' : 'Restraunt', 'items': [
        {
            'itemName' : 'Ricks Cafe',
            'itemImage' : '/media/items/restraunts/raclette.jpg',
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
                    },
                    {
                        'itemName' : 'Chicken Tenders', 
                        'itemPrice' : 11, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Veg'], 
                        'ingredients':['Chicken', 'Basic Other Ingredients'], 
                        'itemDescription' : 'A Crisp Plate of Chicken Tenders and Ranch Sauce',
                        'itemAvailability' : 75,
                    },
                    {
                        'itemName' : 'Pancakes', 
                        'itemPrice' : 8, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Warm and Fluffy Pancakes served with a side of Maple Syrump',
                        'itemAvailability' : 110,
                    },
                    {
                        'itemName' : 'French Toast', 
                        'itemPrice' : 13, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk', 'Cinnamon'], 
                        'itemDescription' : 'Crispy, yet Fluffy French Toast Served with a side of Maple Syrup',
                        'itemAvailability' : 34,
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
                    },
                    {
                        'itemName' : 'Assorted Snacks', 
                        'itemPrice' : 7, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Carrots', 'Celery', 'Basic Baking Ingredients', 'Cajun Seasoning'], 
                        'itemDescription' : 'An assortment of snacks such as a Fruit plate, a Vegetable Plate, and a Tater Tot Plate',
                        'itemAvailability' : 130,
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
                    },
                    {
                        'itemName' : 'Eggs Benedict', 
                        'itemPrice' : 10, 
                        'itemDetails' : ['Non-Vegeterian'], 
                        'ingredients':['Eggs','Ham','Toast'], 
                        'itemDescription' : 'Classic eggs benedict with Hollandaise sauce',
                        'itemAvailability' : 100,
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
                    },
                    {
                        'itemName' : 'Banana Milkshake', 
                        'itemPrice' : 3, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegan'], 
                        'ingredients':['Banana','Milk','Strawberries'], 
                        'itemDescription' : 'Organic milkshake made every morning.  Made with Fresh Bananas.',
                        'itemAvailability' : 150,
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
                    },
                    {
                        'itemName' : 'Root Beer Float', 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemPrice' : 5, 
                        'itemDetails' : ['Organic','Non-Vegan'], 
                        'ingredients':['Soda', 'Vanilla Ice Cream', 'Chocolate Sauce'], 
                        'itemDescription' : 'A Delicious Vanilla Ice Cream - Root Beer Float with added Chocolate Sauce',
                        'itemAvailability' : 82,
                    },
                ],
            }
        },
        {
            'itemName' : 'Posh Bagel',
            'itemImage' : '/media/items/restraunts/raclette.jpg',
            'itemDescription' : 'We are a family owned business offering a family friendly atmosphere for locals and visitors alike.',
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'menu' : {
                'Popular' : [
                    {
                        'itemName' : 'Jalapeno Bagel', 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemPrice' : 10, 
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Hot sunny side up eggs and whole wheat waffles and maple syrup ',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Chicken Salad Sandwich', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Hot sunny side up eggs and whole wheat waffles and maple syrup ',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Tuna Sandwich', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Hot sunny side up eggs and whole wheat waffles and maple syrup ',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Croissant Sandwich with Ham', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Hot sunny side up eggs and whole wheat waffles and maple syrup ',
                        'itemAvailability' : 100,
                    },
                ],
                'Appetizers' : [
                    {
                        'itemName' : 'Bag of Chips', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Cantelope','Strawberries','Watermelon','Pineapple','Apples','Blueberries'], 
                        'itemDescription' : 'Cantelope, Strawberries, Watermelon, Pinapple, Apples, Blueberries. ',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Fresh Bananas', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Cantelope','Strawberries','Watermelon','Pineapple','Apples','Blueberries'], 
                        'itemDescription' : 'Cantelope, Strawberries, Watermelon, Pinapple, Apples, Blueberries. ',
                        'itemAvailability' : 100,
                    },
                ],
                'Entrees' : [
                    {
                        'itemName' : 'Minestrone Soup', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Hot sunny side up eggs and whole wheat waffles and maple syrup ',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Tomato Soup', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegeterian'], 
                        'ingredients':['Eggs','Ham','Toast'], 
                        'itemDescription' : 'Classic eggs benedict with Hollandaise sauce',
                        'itemAvailability' : 100,
                    },
                ],
                'Sides/Drinks' : [
                    {
                        'itemName' : 'Ginger Ale', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Soda'], 
                        'ingredients':['Cherry','Sprite','Food Coloring'], 
                        'itemDescription' : 'Sprite with cherry food coloring.',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Chocolate Milkshake', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegan'], 
                        'ingredients':['Banana','Milk','Strawberries'], 
                        'itemDescription' : 'Organic milkshake made every morning.  Made with fresh Bananas.',
                        'itemAvailability' : 100,
                    },
                ],
                'Desserts' : [
                    {
                        'itemName' : 'Ice Cream Sundae', 
                        'static' : 100,
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemPrice' : 2, 
                        'itemDetails' : ['Vegetarian','Vegan'], 
                        'ingredients':['Vanilla Ice Cream'], 
                        'itemDescription' : 'Some Vanilla Ice Cream.',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Brownies', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Organic','Non-Vegan'], 
                        'ingredients':['Banana','Milk','Strawberries'], 
                        'itemDescription' : 'Organic milkshake made every morning.  Made with fresh Bananas.',
                        'itemAvailability' : 100,
                    },
                ],
            }
        },
        {
            'itemName' : 'La Taqueria',
            'itemImage' : '/media/items/restraunts/raclette.jpg',
            'itemDescription' : 'We are a family owned business offering authentic Mexican cuisine',
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'menu' : {
                'Popular' : [
                    {
                        'itemName' : 'Deluxe Shrimp Tacos', 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemPrice' : 10, 
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Hot sunny side up eggs and whole wheat waffles and maple syrup ',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Chicken Tostada', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Hot sunny side up eggs and whole wheat waffles and maple syrup ',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Enchiladas with Verde Sauce', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Hot sunny side up eggs and whole wheat waffles and maple syrup ',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Taquitos', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Hot sunny side up eggs and whole wheat waffles and maple syrup ',
                        'itemAvailability' : 100,
                    },
                ],
                'Appetizers' : [
                    {
                        'itemName' : 'Chips and Salsa', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Cantelope','Strawberries','Watermelon','Pineapple','Apples','Blueberries'], 
                        'itemDescription' : 'Cantelope, Strawberries, Watermelon, Pinapple, Apples, Blueberries. ',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Tortilla Soup', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Cantelope','Strawberries','Watermelon','Pineapple','Apples','Blueberries'], 
                        'itemDescription' : 'Cantelope, Strawberries, Watermelon, Pinapple, Apples, Blueberries. ',
                        'itemAvailability' : 100,
                    },
                ],
                'Entrees' : [
                    {
                        'itemName' : 'Eggs and Waffles', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Hot sunny side up eggs and whole wheat waffles and maple syrup ',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Eggs Benedict', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegeterian'], 
                        'ingredients':['Eggs','Ham','Toast'], 
                        'itemDescription' : 'Classic eggs benedict with Hollandaise sauce',
                        'itemAvailability' : 100,
                    },
                ],
                'Sides/Drinks' : [
                    {
                        'itemName' : 'Shirly Temple', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Soda'], 
                        'ingredients':['Cherry','Sprite','Food Coloring'], 
                        'itemDescription' : 'Sprite with cherry food coloring.',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Banana Milkshake', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegan'], 
                        'ingredients':['Banana','Milk','Strawberries'], 
                        'itemDescription' : 'Organic milkshake made every morning.  Made with fresh Bananas.',
                        'itemAvailability' : 100,
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
                    },
                    {
                        'itemName' : 'Banana Milkshake', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Organic','Non-Vegan'], 
                        'ingredients':['Banana','Milk','Strawberries'], 
                        'itemDescription' : 'Organic milkshake made every morning.  Made with fresh Bananas.',
                        'itemAvailability' : 100,
                    },
                ],
            }
        },
        {
            'itemName' : 'Ricks Cafe',
            'itemImage' : '/media/items/restraunts/raclette.jpg',
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
                    },
                    {
                        'itemName' : 'Eggs and Waffles', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Hot sunny side up eggs and whole wheat waffles and maple syrup ',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Eggs and Waffles', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Hot sunny side up eggs and whole wheat waffles and maple syrup ',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Eggs and Waffles', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Hot sunny side up eggs and whole wheat waffles and maple syrup ',
                        'itemAvailability' : 100,
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
                    },
                    {
                        'itemName' : 'Fruit Bowl', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Cantelope','Strawberries','Watermelon','Pineapple','Apples','Blueberries'], 
                        'itemDescription' : 'Cantelope, Strawberries, Watermelon, Pinapple, Apples, Blueberries. ',
                        'itemAvailability' : 100,
                    },
                ],
                'Entrees' : [
                    {
                        'itemName' : 'Eggs and Waffles', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Hot sunny side up eggs and whole wheat waffles and maple syrup ',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Eggs Benedict', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegeterian'], 
                        'ingredients':['Eggs','Ham','Toast'], 
                        'itemDescription' : 'Classic eggs benedict with Hollandaise sauce',
                        'itemAvailability' : 100,
                    },
                ],
                'Sides/Drinks' : [
                    {
                        'itemName' : 'Shirly Temple', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Soda'], 
                        'ingredients':['Cherry','Sprite','Food Coloring'], 
                        'itemDescription' : 'Sprite with cherry food coloring.',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Banana Milkshake', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegan'], 
                        'ingredients':['Banana','Milk','Strawberries'], 
                        'itemDescription' : 'Organic milkshake made every morning.  Made with fresh Bananas.',
                        'itemAvailability' : 100,
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
                    },
                    {
                        'itemName' : 'Banana Milkshake', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Organic','Non-Vegan'], 
                        'ingredients':['Banana','Milk','Strawberries'], 
                        'itemDescription' : 'Organic milkshake made every morning.  Made with fresh Bananas.',
                        'itemAvailability' : 100,
                    },
                ],
            }
        },
        {
            'itemName' : 'Ricks Cafe',
            'itemImage' : '/media/items/restraunts/raclette.jpg',
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
                    },
                    {
                        'itemName' : 'Eggs and Waffles', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Hot sunny side up eggs and whole wheat waffles and maple syrup ',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Eggs and Waffles', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Hot sunny side up eggs and whole wheat waffles and maple syrup ',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Eggs and Waffles', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Hot sunny side up eggs and whole wheat waffles and maple syrup ',
                        'itemAvailability' : 100,
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
                    },
                    {
                        'itemName' : 'Fruit Bowl', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Cantelope','Strawberries','Watermelon','Pineapple','Apples','Blueberries'], 
                        'itemDescription' : 'Cantelope, Strawberries, Watermelon, Pinapple, Apples, Blueberries. ',
                        'itemAvailability' : 100,
                    },
                ],
                'Entrees' : [
                    {
                        'itemName' : 'Eggs and Waffles', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Hot sunny side up eggs and whole wheat waffles and maple syrup ',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Eggs Benedict', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegeterian'], 
                        'ingredients':['Eggs','Ham','Toast'], 
                        'itemDescription' : 'Classic eggs benedict with Hollandaise sauce',
                        'itemAvailability' : 100,
                    },
                ],
                'Sides/Drinks' : [
                    {
                        'itemName' : 'Shirly Temple', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Soda'], 
                        'ingredients':['Cherry','Sprite','Food Coloring'], 
                        'itemDescription' : 'Sprite with cherry food coloring.',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Banana Milkshake', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegan'], 
                        'ingredients':['Banana','Milk','Strawberries'], 
                        'itemDescription' : 'Organic milkshake made every morning.  Made with fresh Bananas.',
                        'itemAvailability' : 100,
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
                    },
                    {
                        'itemName' : 'Banana Milkshake', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Organic','Non-Vegan'], 
                        'ingredients':['Banana','Milk','Strawberries'], 
                        'itemDescription' : 'Organic milkshake made every morning.  Made with fresh Bananas.',
                        'itemAvailability' : 100,
                    },
                ],
            }
        },
        {
            'itemName' : 'Ricks Cafe',
            'itemImage' : '/media/items/restraunts/raclette.jpg',
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
                    },
                    {
                        'itemName' : 'Eggs and Waffles', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Hot sunny side up eggs and whole wheat waffles and maple syrup ',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Eggs and Waffles', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Hot sunny side up eggs and whole wheat waffles and maple syrup ',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Eggs and Waffles', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Hot sunny side up eggs and whole wheat waffles and maple syrup ',
                        'itemAvailability' : 100,
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
                    },
                    {
                        'itemName' : 'Fruit Bowl', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Cantelope','Strawberries','Watermelon','Pineapple','Apples','Blueberries'], 
                        'itemDescription' : 'Cantelope, Strawberries, Watermelon, Pinapple, Apples, Blueberries. ',
                        'itemAvailability' : 100,
                    },
                ],
                'Entrees' : [
                    {
                        'itemName' : 'Eggs and Waffles', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Vegan','Vegetarian','Pescitarian'], 
                        'ingredients':['Eggs','Wheat','Milk'], 
                        'itemDescription' : 'Hot sunny side up eggs and whole wheat waffles and maple syrup ',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Eggs Benedict', 
                        'itemPrice' : 10, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegeterian'], 
                        'ingredients':['Eggs','Ham','Toast'], 
                        'itemDescription' : 'Classic eggs benedict with Hollandaise sauce',
                        'itemAvailability' : 100,
                    },
                ],
                'Sides/Drinks' : [
                    {
                        'itemName' : 'Shirly Temple', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Soda'], 
                        'ingredients':['Cherry','Sprite','Food Coloring'], 
                        'itemDescription' : 'Sprite with cherry food coloring.',
                        'itemAvailability' : 100,
                    },
                    {
                        'itemName' : 'Banana Milkshake', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Non-Vegan'], 
                        'ingredients':['Banana','Milk','Strawberries'], 
                        'itemDescription' : 'Organic milkshake made every morning.  Made with fresh Bananas.',
                        'itemAvailability' : 100,
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
                    },
                    {
                        'itemName' : 'Banana Milkshake', 
                        'itemPrice' : 2, 
                        'rating' : {5:100,4:100,3:100,2:100,1:100},
                        'itemDetails' : ['Organic','Non-Vegan'], 
                        'ingredients':['Banana','Milk','Strawberries'], 
                        'itemDescription' : 'Organic milkshake made every morning.  Made with fresh Bananas.',
                        'itemAvailability' : 100,
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
            'itemPrice' : 4,
            'itemDetails' : [],
            'itemAvailability' : 100,
        },
        {
            'itemName' : 'Apples',
            'itemImage' : '/media/items/produce/apples.jpg',
            'itemDescription' : "Local apples from De Martenelis Farmers Market.",
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'itemPrice' : 4,
            'itemDetails' : [],
            'itemAvailability' : 100,
        },
        {
            'itemName' : 'Apples',
            'itemImage' : '/media/items/produce/apples.jpg',
            'itemDescription' : "Local apples from De Martenelis Farmers Market.",
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'itemPrice' : 4,
            'itemDetails' : [],
            'itemAvailability' : 100,
        },
        {
            'itemName' : 'Apples',
            'itemImage' : '/media/items/produce/apples.jpg',
            'itemDescription' : "Local apples from De Martenelis Farmers Market.",
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'itemPrice' : 4,
            'itemDetails' : [],
            'itemAvailability' : 100,
        },
        {
            'itemName' : 'Apples',
            'itemImage' : '/media/items/produce/apples.jpg',
            'itemDescription' : "Local apples from De Martenelis Farmers Market.",
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'itemPrice' : 4,
            'itemDetails' : [],
            'itemAvailability' : 100,
        },
        {
            'itemName' : 'Apples',
            'itemImage' : '/media/items/produce/apples.jpg',
            'itemDescription' : "Local apples from De Martenelis Farmers Market.",
            'rating' : {5:100,4:100,3:100,2:100,1:100},
            'itemPrice' : 4,
            'itemDetails' : [],
            'itemAvailability' : 100,
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
        var html = '<div data-itemtype="restraunts" data-itemID="'+name.toLowerCase().replace(" ","_")+'" style="background-image: url('+itemImage+')" id="'+itemID+'" class="lazy  z-depth-2 tastery-item"> <div class="darken"> <div class="item-title">'+name+'</div> <div class="item-description">'+itemDescription+'</div> <div class="item-rating">'+ratingHTML+'</div> </div> </div>';
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
        var itemRating = data[x].rating;
        //convert the itemrating into html
        var ratingHTML = ratingToHTML(itemRating);
        var html = '<div data-itemtype="produce" data-itemID="'+name.toLowerCase().replace(" ","_")+'" style="background-image: url('+itemImage+')" id="'+itemID+'" class="lazy  z-depth-2 tastery-item"> <div class="darken"> <div class="item-details">'+detailsHTML+'</div> <div class="item-title">'+name+'</div> <div class="item-description">'+itemDescription+'</div> <div class="item-rating">'+ratingHTML+'</div> </div> </div>';
        totalHTML += html;
    }
    $('#produce-items').html(totalHTML);
    $('.tooltipped').tooltip();
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
