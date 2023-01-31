  setTimeout(async ()=>{
    // addon in this script means the added product "soft-winter-jacket" -->
         let url = '/cart.js';
        let res = await fetch(url);
        let cartData = await res.json();
        let cartItems = await cartData.items;
        console.log(cartItems);
    // check if addon item has already been added to cart
         let addOnExist = await cartItems.filter(el =>{
          return el.handle === 'dark-winter-jacket';
        });
  // check if handbag, black and medium also exist in cart
        let index = await cartItems.findIndex(el =>{
          return el.product_title === 'Handbag'
          && el.variant_options.includes('Black') 
          && el.variant_options.includes('Medium')
        });
      // get the index / position of the delete button tied to the handbag-->
        let btnId = await cartItems[index].key;
        console.log(document.getElementById(await btnId))
        if(document.getElementById(await btnId)){
      // listen to click event from the delete button -->
           document.getElementById(await btnId).addEventListener("click", () => {
              console.log('button clicked');
              setTimeout(async ()=>{
               let addOnExist_ = await cartItems.filter(el =>{
                return el.handle === 'dark-winter-jacket';
              });
              console.log(addOnExist);
              // if handbag is deleted  -->
              if(await addOnExist_.length > 0){
                console.log('add on exist');
                console.log('execue delete');
                 await fetch('/cart/change.js', {
                  method: "POST",
                  body: JSON.stringify({
                    id: await addOnExist[0].key,
                    quantity: 0
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8"
                  }
                });
                await location.reload();
              }
            }, 500);
        }, false);
      };
    }, 1500);