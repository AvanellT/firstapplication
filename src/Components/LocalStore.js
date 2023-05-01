import React, { useEffect, useState } from "react";
import '../style/card.css';
import { Link } from "react-router-dom";

function LocalStore(props) {
    const [name, setName] = useState('');
    //an array of elements
    const [things, setThings] = useState(
        [
            { id: 1, name: "Customized Engraved Chocolates", src: "../images/Chocolateitem1.jpeg", price: 100 },
            { id: 2, name: "Chocolate with Strawberry Filling", src: "../images/Chocolateitem2.jpeg", price: 100 },
            { id: 3, name: "Chocolate with Fruits and Nuts", src: "../images/Chocolateitem3.jpeg", price: 100 },
            { id: 4, name: "Strawberry Chocolate Bars", src: "../Chocolateitem4.jpeg", price: 100 },
            { id: 5, name: "Heart Shaped Chocolate Bars", src: "../images/Chocolateitem5.jpeg", price: 95 },
            { id: 6, name: "White Chocolate Bars with filling", src: "../images/Chocolateitem6.jpeg", price: 110 },
            { id: 7, name: "Dark Chocolate Vegan Bars", src: "../images/Chocolateitem7.jpeg", price: 150 },
            { id: 8, name: "Chocolate Bars with Crisp", src: "../images/Chocolateitem8.jpeg", price: 120 },
        
        ])

    const handleSubmit = () => {
        localStorage.setItem('Name', name);
    }

    const remove = () => {
        localStorage.removeItem('Name');
        localStorage.removeItem('namesArray')
    }

    const saveAsArray = () => {
        var namesArray = JSON.parse(localStorage.getItem('Array of Names') || '[]');
        namesArray.push(name);
        localStorage.setItem('Array of Names', JSON.stringify(namesArray));
    }


    return (
        <>
            <div className="App">
            {/*    <h1>Setting Local Storage</h1>
                <div className="addTask">
                    <input
                        placeholder="Enter Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                    <br />
                    <button onClick={handleSubmit}>Save Simple</button>
                    <button onClick={saveAsArray}>Save As Array</button>
                </div>
                <div className="list">
                    <p>Name: {localStorage.getItem('Name')}</p>
                    <br />
                    <button onClick={remove}>Remove</button>
    </div>*/}
            </div>
            <div className="container">
                <div className="row">
                    {things.map((thing) => {
                        return (<div className="col-lg-4" >
                            <p>{thing.name}</p>
                            <p>Price: ${thing.price}</p>
                            {/* the Link element allows for naviating to another page, it
                            is basically the react way of implementing and <a> */}
                            <Link
                                to='/details'
                                state={{ id: thing.id, src: thing.src, name: thing.name, price: thing.price }}>
                                <img src={thing.src} width='200px' alt={thing.name} />
                            </Link>

                        </div>
                        )
                    })}
                </div>
            </div >
        </>
    );
}

export default LocalStore;