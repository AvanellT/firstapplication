import React from "react";
import '../style/card.css'
export default function Chocolateitem7() {
    return (
        <>
            <div className="card">
                <img src="../images/Chocolateitem7.jpeg" alt="Dark Chocolate Vegan Bars " width="300px" />
                <h1>Dark Chocolate Vegan Bars </h1>
                <p className="price">$150.00</p>
                <p>Some text about this chocolate..</p>
                <p><button>Add to Cart</button></p>
            </div>
        </>
    )
}