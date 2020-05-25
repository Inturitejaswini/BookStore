import React, { Component } from 'react';



let carts =document.querySelectorAll('.texttag');
let products = [
    {
    logo:"https://tse3.mm.bing.net/th?id=OIP.82BRQTBcpouQxxqtlWT3tQHaJj&pid=Api&P=0&w=300&h=300",
    title: "Don't Make Me Think",
    authorname: "by devid krug",
    price: "Rs.1500"
    }
]

for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        console.log('add to cart');
        cartNumbers();
    })
}
function cartNumbers(){
    let productNumbers = localStorage.getItem('cartnumbers');
    productNumbers=parseInt(productNumbers);
    localStorage.setItem('cartNumbers',1);
}
class AddToCard extends Component {
    render() {
        return (
            <div>
                hai
            </div>
        );
    }
}

export default AddToCard;