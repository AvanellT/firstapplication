import React, { useState, useEffect } from "react";
import '../style/checkout.css';

export default function Checkout() {
    const [PriceArray, setPriceArray] = useState([]);

    const getCartTotal = () => {
        var PriceArray = JSON.parse(localStorage.getItem('Checkout Prices') || '[]');
        return (PriceArray.length)
    }
    const getTotal = () => {
        var PriceArray = JSON.parse(localStorage.getItem('Checkout Prices') || '[]');
        var total = 0;
        var i = 0;

        for (i in PriceArray) {
            total += PriceArray[i];
            //total = total + PriceArray[i];
        }
        return (<p>Total <span className="price" color="black"><b>{total}</b></span></p>);
    }

    const prices = JSON.parse(localStorage.getItem('Checkout Prices') || '[]');

    const removeAll = () => {
        localStorage.removeItem('Checkout Prices')
    }

    const removeItem = price => {
        //get the array from localstorage and save to local array PricesArray
       /*  var PA = JSON.parse(localStorage.getItem('Checkout Prices') || '[]');
        setPriceArray(PA);
 */
        //filter value to be removed from local array
        /* console.log(PA);
        console.log(PriceArray);
        console.log(price);
         console.log(PriceArray.filter((priceA) => priceA !== price)); */
        //setPriceArray(PriceArray.filter((priceA) => priceA !== price));

        //save new array to local storage
        localStorage.setItem('Checkout Prices', JSON.stringify(PriceArray.filter((priceA) => priceA !== price)));
    }

    useEffect(() => {
        var PA = JSON.parse(localStorage.getItem('Checkout Prices') || '[]');
        setPriceArray(PA);
    }, [PriceArray]);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <form action="">
                            <table className="table">
                                <tr>
                                    <td>
                                        <h3>Billing Address</h3>
                                        <label for="fname">Full Name</label>
                                        <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                                        <label for="email"> Email</label>
                                        <input type="text" id="email" name="email" placeholder="john@example.com" />
                                        <label for="adr"> Address</label>
                                        <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                                        <label for="city"> City</label>
                                        <input type="text" id="city" name="city" placeholder="New York" />
                                        <h3>Payment</h3>
                                        <label for="cname">Name on Card</label>
                                        <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                                        <label for="ccnum">Credit card number</label>
                                        <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                                        <label for="expmonth">Exp Month</label>
                                        <input type="text" id="expmonth" name="expmonth" placeholder="September" />
                                        <div className="">
                                            <label for="expyear">Exp Year</label>
                                            <input type="text" id="expyear" name="expyear" placeholder="2018" />
                                        </div>
                                        <div className="">
                                            <label for="cvv">CVV</label>
                                            <input type="text" id="cvv" name="cvv" placeholder="352" />
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <label>
                                <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
                            </label>
                            
                        </form>
                    </div>

                    <div className="col-lg-4">
                        <h4>Cart Items </h4>
                        {prices.map((price) => {
                            return (
                                <div>
                                    <p>Item
                                        <span className="price">{price}
                                        </span>
                                    </p>
                                    <button onClick={() => removeItem(price)}>X</button>

                                </div>
                            );
                        })}
                        <button onClick={() => removeAll()}>Remove All</button>


                    </div>
                    <div className="col-lg-2">

                    </div>
                    <div className="col-lg-6">
                        <h4>Order Summary</h4>
                        <p><b>{getCartTotal()}</b> Item(s)</p>
                        <hr />
                        {/* <p>Total <span className="price" color="black"><b>{getTotal}</b></span></p> */}
                        {getTotal()}
                    </div>
                    <input type="submit" value="Place Order" className="btn" onClick={() => alert("Order made. Info Sent")}/>
                </div>
            </div>
        </>
    );
}