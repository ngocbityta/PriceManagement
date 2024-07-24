import React from 'react'
import Card from './Card'
import "./styles.css"
import Line from './Line'
const ProductList = ({ data }) => {
    return (
        <div>
            {data.map((item, index) => (
                <div key={index} id={item.title}>
                    <div className="product">
                        <h2>{item.title}</h2>
                        <div className="product-list">
                            {item.dataProduct.map((product, idx) => (
                                <Card key={idx} product={product} />
                            ))}
                        </div>
                    </div>
                    <Line />
                </div>
            ))}
        </div>
    )
}

export default ProductList