import React from "react";
import '../style/card.css'
export default function Chocolateitem8() {
    return (
        <>
            <div className="card">
                <img src="../images/Chocolateitem8.jpeg" alt="Chocolate Bars with Crisp " width="300px" />
                <h1>Chocolate Bars with Crisp </h1>
                <p className="price">$120.00</p>
                <p>Some text about this chocolate..</p>
                <p> <a href="Chocolateitem1"><button>Add to Cart</button></a> </p>
            </div>
        </>
    )
}