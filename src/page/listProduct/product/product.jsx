import React from 'react'
import './style.scss'

class Product extends React.Component {
    view_info = (productUrl) => {
        console.log(productUrl);
    }
    render() {
        let { imageUrl, productName, currentPrice, minPrice, maxPrice, productUrl } = this.props;

        return <>
            <div className='product-wrapper'>
                <a className='product-image' href="#">
                    <img src={imageUrl} alt={productName} onClick={() => this.view_info(productUrl)} />
                </a>
                <div className="info-wrapper">
                    <div className="product-title">
                        <a href="#" onClick={() => this.view_info(productUrl)}>{productName}</a>
                    </div>
                    <div className="product-price">
                        {currentPrice}
                    </div>
                    <div className="min-price">
                        Min Price: {minPrice}
                    </div>
                    <div className="max-price">
                        Max Price: {maxPrice}
                    </div>
                    <div className="view-price">
                        <button className='view-price-btn' onClick={() => this.view_info(productUrl)}>View Price History</button>
                    </div>
                </div>
                <div className="box"></div>
                <div className="after-line"></div>
            </div>
        </>

    }
}

export default Product;