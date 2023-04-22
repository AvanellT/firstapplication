import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export default function Details(props) {
    //useLocation is used in url tracking, creating a variable like below
    //would save the details of the current page, including, pathname, keys,
    //state/andy data passed onto the page by a previous page
    const location = useLocation();
    console.log(location);//view the details passe to this page by previous page in console log
    const item = location.state;//retrieve the data from state passed from Link in previous page
    //useNavigate allows to navigate within the html to another page that is set in the router
    const navigate = useNavigate();//create an instance of the method to allow use in file
    const handleClick = () => navigate('/checkout');//navigate to the checkout page

    const [price, setPrice] = useState('');///variable to store current item's price

    const addToCart = () => {
        var PriceArray = JSON.parse(localStorage.getItem('Checkout Prices') || '[]');
        PriceArray.push(item.price);//add the current price to the array
        //add the array to the local storage
        localStorage.setItem('Checkout Prices', JSON.stringify(PriceArray));
    }

    return (
        <div>
            <h1>Details
                {/* to prevent a blank or error page, use conditional rendering
                this is identified by the logical && operator. we will first identify
                if there is data within the item variable, if there is not then everything 
                else on the page will render, if there is then we can continue to display our
                data found within the ()*/}
            </h1>
            {item && (
                <div className="card">
                    {/* don't place "" (quotes) after src or any other argument that requires 
                    data to be read from props */}
                    <img src={item.src} alt={item.name} width='300px' />
                    <h1>{item.name}</h1>
                    <p class="price">${item.price}</p>
                    <p><button onClick={addToCart}>Add to Cart</button>
                        <button onClick={handleClick}>Checkout</button ></p>
                </div>
                /* <div className="App">
                    <img src={item.src} alt={item.name} width="300px" />
                    <p>ID: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Price: {item.price}</p>
                </div> */
            )}
        </div>
    );
}