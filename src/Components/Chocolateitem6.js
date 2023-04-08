import React from "react";
import '../style/card.css'
export default function Chocolateitem6() {
    return (
        <>
            <div className="card">
                <img src="../images/Chocolateitem6.jpeg" alt="White Chocolate Bars with filling " width="300px" />
                <h1>White Chocolate Bars with filling </h1>
                <p className="price">$110.00</p>
                <p>Some text about this chocolate..</p>
                <p><button>Add to Cart</button></p>
            </div>
        </>
    )
}