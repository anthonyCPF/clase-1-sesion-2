import React from 'react'
import './index.css'

const Card = ({ data }) => {
    const { name, price, stock, image } = data;

    return (
        <div className="card">
            <div>
                <img className="image" src={image.url} alt={image.alt} />
            </div>
            <div>
                <div className="name"><b>Product:</b> {name}</div>
                <div className="price"><b>Price:</b> {price}</div>
                <div className="stock"><b>Stock:</b> {stock}</div>
            </div>
        </div>
    )
}

export default Card;
