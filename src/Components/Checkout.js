import React, { useState } from "react";
import '../style/checkout.css';

export default function Checkout() {

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
        }
        return (<p>Total <span class="price" color="black"><b>{total}</b></span></p>);
    }

    const prices = JSON.parse(localStorage.getItem('Checkout Prices') || '[]');

    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <form action="">
                            <table class="table">
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
                                        <div class="">
                                            <label for="expyear">Exp Year</label>
                                            <input type="text" id="expyear" name="expyear" placeholder="2018" />
                                        </div>
                                        <div class="">
                                            <label for="cvv">CVV</label>
                                            <input type="text" id="cvv" name="cvv" placeholder="352" />
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <label>
                                <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
                            </label>
                            <input type="submit" value="Continue to checkout" class="btn" />
                        </form>
                    </div>

                    <div class="col-lg-4">
                        <h4>Cart <span class="price" color="black"><i class="fa fa-shopping-cart"></i> <b>{getCartTotal()}</b></span></h4>
                        {prices.map((price) => {
                            return (<p>Product 1<span class="price">{price}</span></p>);
                        })}

                        <hr />
                        {/* <p>Total <span class="price" color="black"><b>{getTotal}</b></span></p> */}
                        {getTotal()}
                    </div>
                </div>
            </div>
        </>
    );
}