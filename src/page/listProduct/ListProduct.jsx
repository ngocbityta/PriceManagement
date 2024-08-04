import React from "react";
import "./style.scss"
import { FaCaretDown } from "react-icons/fa";

class ListProduct extends React.Component {

    filters_btn_clicked = () => {
        console.log("filters button clicked!!!")
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
                    </div>
                    <div className="products box-shadow">
                        <div className="sort-by-option">
                            Sort by:
                            <select>
                                <option value="">Popularity</option>
                                <option value="">Price: Low to High</option>
                                <option value="">Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}

export default ListProduct;