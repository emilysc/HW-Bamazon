var mysql = require('mysql');
var inquirer = require('inquirer');
var process = require('process');

// Create a connection to the MYSQL database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "",
    database: "bamazon"
});

connection.connect(function (error) {
    if (error) throw error;

    queryAllProducts();
});

function queryAllProducts() {
    connection.query("SELECT * FROM products", function (error, response) {
        console.log('Item ID', 'Product Name', 'Price');
        for (var item of response) {
            console.log(item['item_id'], item['product_name'], item['price']);
        }

        /*
        The app should then prompt users with two messages.
        
        The first should ask them the ID of the product they would like to buy.
        The second message should ask how many units of the product they would like to buy.
        */
        inquirer.prompt([
            {
                name: "id",
                type: "input",
                message: "ID of the product you would like to buy: ",
                validate: function (value) {
                    return !isNaN(value);
                }
            },
            {
                name: "quantity",
                type: "input",
                message: "how many units of the product they would like to buy: ",
                validate: function (value) {
                    return !isNaN(value);
                }
            }
        ]).then(function (answer) {
            //console.log(answer);
            // Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
            connection.query(
                "SELECT * FROM products WHERE item_id = ? LIMIT 1",
                [answer.id],
                function (error, result) {
                    if (error) throw error;

                    if (result.length === 0) {
                        console.log("Can not find the product with this id.");
                        process.exit();
                        return;
                    }
                    var item = result[0];

                    if (item['stock_quantity'] < answer.quantity) {
                        console.log("Insufficient quantity!");
                        process.exit();
                        return;
                    }
        
                    /*
                    However, if your store does have enough of the product, you should fulfill the customer's order.
                    
                    This means updating the SQL database to reflect the remaining quantity.
                    Once the update goes through, show the customer the total cost of their purchase.
                    */

                    connection.query(
                        "UPDATE bamazon.products SET `stock_quantity` = `stock_quantity` - ? WHERE `item_id` = ?",
                        [answer.quantity, answer.id],
                        function (error, result) {
                            if (error) throw error;
                            console.log(" total cost of the purchase:", answer.quantity *item['price']);
                            process.exit();
                        }
                    );
                });

        });
    });
}
