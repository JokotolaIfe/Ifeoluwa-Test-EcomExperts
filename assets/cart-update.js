// function updateCartWithAddon(){
//     console.log('updateCartWithAddon');
//     if (cart)
//       var buttons = document.getElementsByTagName("button");
//       console.log(buttons);
//      console.log({{ cart.items }});
//     var cartItems = {{ cart.items | json }};
//     qtyInTheCart = 0;
//     cartUpdates = {};
//     for (var i=0; i<cartItems.length; i++) {
//       if ( cartItems[i].id === {{ variant_i
// d }} ) {
//         qtyInTheCart = cartItems[i].quantity;
//         break;
//       }
//     }
//     console.log(cartItems, 'cartItems');
//      let conditionExist = [];
//     if(cartItems.length > 0){
//        conditionExist = cartItems.filter(el =>{
//         return el.product_title === 'Handbag'
//         && el.variant_options.includes('Black') 
//         && el.variant_options.includes('Medium')
//       });
//       console.log('condition exist', conditionExist);
      
//     }  
//     if ( ( cartItems.length === 1 ) && ( qtyInTheCart > 0 ) ) {
//       cartUpdates = { {{ variant_id }}: 0 }
//     }
//     else if ( ( conditionExist.length > 0 ) && ( qtyInTheCart !== 1 ) ) {
//       cartUpdates = { {{ variant_id }}: 1 }
//     }
//     else { }

//     fetch("/cart.js", {
//       method: "POST",
//       body: JSON.stringify({
//         updates: cartUpdates
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8"
//       }
//     });
//  }