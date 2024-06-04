



const createClickHandler = () => {
    return (e) => {
   
        console.log('purchase-event');
        gtag("event", "purchase", {
            transaction_id: "T_" + new Date().getTime(),
            // Sum of (price * quantity) for all items.
            value: 19.98,
            tax: 0.0,
            shipping: 5.99,
            currency: "EUR",
    
            items: [
             {
              item_id: "SKU-12345",
              item_name: "Product One",
              affiliation: "Google Merchandise Store",
              index: 0,
              item_brand: "Google",
              item_category: "Apparel",
              item_list_id: "search_result",
              item_list_name: "Search Result Page",
              item_variant: "green",
              price: 9.99,
              quantity: 2
            }]
        });
}
}


document.querySelectorAll('#contact').forEach(
    (c) => {
        c.addEventListener('mousedown', createClickHandler());
    });

