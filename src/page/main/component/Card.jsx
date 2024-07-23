import React from 'react';

const Card = ({ product }) => {
    const { price, name, description } = product
    return (
        <div className="card">
            <h2>{name}</h2>
            <p><strong>Price:</strong> ${price}</p>
            <p>{description}</p>
        </div>
    );
};

export default Card;
