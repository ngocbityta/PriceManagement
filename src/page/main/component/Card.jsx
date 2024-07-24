import React from 'react';
import "./styles.css"
const Card = ({ product }) => {
    const { name, picture } = product
    return (
        <div className="card">
            <img className="picture" src={picture} />
            <h4>{name}</h4>
        </div>
    );
};

export default Card;
