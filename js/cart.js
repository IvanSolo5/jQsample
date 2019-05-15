var items = [ 
    "Google home mini.",
    "Sonoff WiFi Switch Pack of 6 Wireless Remote Control plugs.",
    "Sengled Smart LED Daylight (Element Classic) Bulb, 500k, 4 Pack.",
    "NEST Learning Thermostat"
];
// We pass a callback function to jQueries
// ready function. This will be called when
// the document is loaded and ready to process
$(document).ready
( function() {
    // Dynamically create a table and append
    // elements to it using jQuery and JavaScript
    // Make add the cart div to the main div in the HTML file
    var $cart = $("#main").append("<div>");
    $cart.addClass("items");
    $cart.attr("id","cart");

    // Step through the items[] array and add each
    // item to our cart div
    for (var i=0; i<items.length; i++) {
        $cart.append("<div> <p>" + items[i] +"</p></div>" );
    }
    // Finally add the incart class to each item
    // thats in our cart div
    $("#cart div").addClass("incart");
    $cart.show();
    }
);
    