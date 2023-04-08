import React from "react";
import '../style/card.css'
export default function Chocolateitem4() {
    return (
        <>
            <div className="card">
                <img src="../images/Chocolateitem4.jpeg" alt="Strawberry Chocolate Bars" width="300px" />
                <h1>Strawberry Chocolate Bars</h1>
                <p className="price">$100.00</p>
                <p>Some text about this chocolate..</p>
                <p><button>Add to Cart</button></p>
            </div>
        </>
    )
}