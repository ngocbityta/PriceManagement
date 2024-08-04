import React from "react";
import "./style.scss"
import { FaCaretDown } from "react-icons/fa";
import Product from './product/product.jsx'

class ListProduct extends React.Component {

    state = {
        isFiltersOn: true
    }

    filters_btn_clicked = () => {
        this.setState({
            isFiltersOn: !this.state.isFiltersOn
        })
    }

    clearAll_btn_clicked = () => {
        console.log("clear All Btn Clicked!!!")
    }

    render() {
        return <>
            <div className="list-product">
                <div className="title">
                    <div className="title-text">{this.props.productName} Price History</div>
                </div>
                <div className="body">
                    {this.state.isFiltersOn ?
                        <div className="filters box-shadow">
                            <div className="top-btn">
                                <div className="top-button">
                                    <b className="filters-btn" onClick={() => this.filters_btn_clicked()}>Filters<FaCaretDown /></b>
                                </div>
                                <div className="top-button right">
                                    <div className="clear-all-btn" onClick={() => this.clearAll_btn_clicked()}>Clear All</div>
                                </div>

                            </div>

                            <div className="price-dropped">
                                <div className="title">Price Dropped</div>
                                <ul>
                                    <li>
                                        <input type="checkbox"></input>
                                        <span>Today (Dropped to Lowest)</span>
                                    </li>
                                    <li>
                                        <input type="checkbox"></input>
                                        <span>Today (Dropped)</span>
                                    </li>
                                    <li>
                                        <input type="checkbox"></input>
                                        <span>This Week</span>
                                    </li>
                                    <li>
                                        <input type="checkbox"></input>
                                        <span>This Month</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="price-filter">
                                <div className="title">Price</div>
                                <div>
                                    <ul>
                                        <li>
                                            <input type="number" min={0} max={9999999999} placeholder="Min Price" step={100} />
                                        </li>
                                        <li>
                                            <input type="number" min={0} max={9999999999} placeholder="Max Price" step={100} />
                                        </li>
                                        <li>
                                            <button type="submit">Go</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="brand-filter">
                                <div className="title">Brand</div>
                                <div>
                                    <input type="text" placeholder="Search Brand" />
                                    <button type="submit">Go</button>
                                </div>
                            </div>
                        </div> :
                        <div>
                            <div className="filters box-shadow">
                                <div className="top-btn">
                                    <div className="top-button">
                                        <b className="filters-btn" onClick={() => this.filters_btn_clicked()}>Filters<FaCaretDown /></b>
                                    </div>
                                    <div className="top-button right">
                                        <div className="clear-all-btn" onClick={() => this.clearAll_btn_clicked()}>Clear All</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="products box-shadow">
                        <div className="sort-by-option">
                            Sort by:
                            <select>
                                <option value="">Popularity</option>
                                <option value="">Price: Low to High</option>
                                <option value="">Price: High to Low</option>
                            </select>
                        </div>
                        <Product imageUrl="https://i.ebayimg.com/images/g/P6MAAOSwshdkiEZJ/s-l225.jpg" productName="Samsung Galaxy A52S(8GB/128GB)" currentPrice="500,000$" minPrice="425,000$" maxPrice="650,000$" productUrl="/samsung-galaxy-a52s-8gb-128gb"></Product>
                        <Product imageUrl="https://www.duchuymobile.com/images/variant_image/54/galaxy-watch-4-classic-46mm-den.jpg" productName="Samsung Galaxy Watch 4 Classic" currentPrice="600,000$" minPrice="325,000$" maxPrice="850,000$" productUrl="/samsung-galaxy-watch-4-classic"></Product>
                        <Product imageUrl="https://www.duchuymobile.com/images/variant_image/54/galaxy-watch-4-classic-46mm-den.jpg" productName="Samsung Galaxy Watch 4 Classic" currentPrice="600,000$" minPrice="325,000$" maxPrice="850,000$" productUrl="/samsung-galaxy-watch-4-classic"></Product>
                        <Product imageUrl="https://www.duchuymobile.com/images/variant_image/54/galaxy-watch-4-classic-46mm-den.jpg" productName="Samsung Galaxy Watch 4 Classic" currentPrice="600,000$" minPrice="325,000$" maxPrice="850,000$" productUrl="/samsung-galaxy-watch-4-classic"></Product>
                        <Product imageUrl="https://www.duchuymobile.com/images/variant_image/54/galaxy-watch-4-classic-46mm-den.jpg" productName="Samsung Galaxy Watch 4 Classic" currentPrice="600,000$" minPrice="325,000$" maxPrice="850,000$" productUrl="/samsung-galaxy-watch-4-classic"></Product>
                        <Product imageUrl="https://www.duchuymobile.com/images/variant_image/54/galaxy-watch-4-classic-46mm-den.jpg" productName="Samsung Galaxy Watch 4 Classic" currentPrice="600,000$" minPrice="325,000$" maxPrice="850,000$" productUrl="/samsung-galaxy-watch-4-classic"></Product>
                        <Product imageUrl="https://www.duchuymobile.com/images/variant_image/54/galaxy-watch-4-classic-46mm-den.jpg" productName="Samsung Galaxy Watch 4 Classic" currentPrice="600,000$" minPrice="325,000$" maxPrice="850,000$" productUrl="/samsung-galaxy-watch-4-classic"></Product>
                        <Product imageUrl="https://www.duchuymobile.com/images/variant_image/54/galaxy-watch-4-classic-46mm-den.jpg" productName="Samsung Galaxy Watch 4 Classic" currentPrice="600,000$" minPrice="325,000$" maxPrice="850,000$" productUrl="/samsung-galaxy-watch-4-classic"></Product>
                        <Product imageUrl="https://www.duchuymobile.com/images/variant_image/54/galaxy-watch-4-classic-46mm-den.jpg" productName="Samsung Galaxy Watch 4 Classic" currentPrice="600,000$" minPrice="325,000$" maxPrice="850,000$" productUrl="/samsung-galaxy-watch-4-classic"></Product>
                    </div>
                </div>
            </div>
        </>
    }
}

export default ListProduct;