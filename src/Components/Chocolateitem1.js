import React from "react";
import '../style/card.css'
export default function Chocolateitem1() {
    return (
        <>
            <div className="card">
                <img src="../images/Chocolateitem1.jpeg" alt="Engraved Chocolates" width="300px" />
                <h1>Engraved Chocolates</h1>
                <p className="price">$100.00</p>
                <p>Some text about this chocolate..</p>
                <p><button>Add to Cart</button></p>
            </div>
        </>
    )
}
