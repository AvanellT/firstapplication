import React from "react";
import '../style/card.css'
export default function Chocolateitem5() {
    return (
        <>
            <div className="card">
                <img src="../images/Chocolateitem5.jpeg" alt="Heart Shaped Chocolate Bars" width="300px" />
                <h1>Heart Shaped Chocolate Bars</h1>
                <p className="price">$100.00</p>
                <p>Some text about this chocolate..</p>
                <p><button>Add to Cart</button></p>
            </div>
        </>
    )
}