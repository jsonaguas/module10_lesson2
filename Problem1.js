const loggedIn = true;
let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 
    'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)',
     'Tomato']
    
if (loggedIn) {
    console.log('You are logged in and can now shop!');
    console.log('Here is a list of items you can add to your cart:');
    for (item in cart) {
        console.log(cart[item]);
    }
    }
    
 else if (!loggedIn) {
  console.log('You are not logged in');}



