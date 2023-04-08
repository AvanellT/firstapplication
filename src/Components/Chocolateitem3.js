import React from "react";
import '../style/card.css'
export default function Chocolateitem3() {
    return (
        <>
            <div className="card">
                <img src="../images/Chocolateitem3.jpeg" alt="Chocolate with fruits and Nuts" width="300px" />
                <h1>Chocolate with fruits and Nuts</h1>
                <p className="price">$100.00</p>
                <p>Some text about this chocolate..</p>
                <p><button>Add to Cart</button></p>
            </div>
        </>
    )
}