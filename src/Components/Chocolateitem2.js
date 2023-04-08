import React from "react";
import '../style/card.css'
export default function Chocolateitem2() {
    return (
        <>
            <div className="card">
                <img src="../images/Chocolateitem2.jpeg" alt="Chocolate with Strawberry Filling" width="300px" />
                <h1>Chocolate with Strawberry Filling</h1>
                <p className="price">$100.00</p>
                <p>Some text about this chocolate..</p>
                <p><button>Add to Cart</button></p>
            </div>
        </>
    )
}
