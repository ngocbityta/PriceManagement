import React from 'react'
import "./styles.scss"
import ProductList from '../component/ProductList'
import Line from '../component/Line'

const Homepage = () => {
    const data = [
        {
            title: "Apple",
            dataProduct: [
                { name: "Iphone", picture: "https://phucanhcdn.com/media/product/48754_iphone_14_blue_5.jpg" },
                { name: "Ipad", picture: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-10-2-inch-2021_1.png" },
                { name: "Airpod", picture: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000" },
                { name: "Apple Watch", picture: "https://cdn.tgdd.vn/Products/Images/7077/314714/s16/apple-watch-ultra-lte-49mm-vien-titanium-day-trail-size-s-m-3-1-2-1-650x650.png" },
                { name: "Macbook", picture: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034" },
                { name: "Vision Pro", picture: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/apple_vision_pro_hero.png" },
                { name: "Speaker", picture: "https://product.hstatic.net/1000353777/product/homepod-select-202210_fmt_whh_d3d9584226db40a8a5779ad7cb8e1bf8.jpg" },
            ]
        },
        {
            title: "Samsung",
            dataProduct: [
                { name: "Phone", picture: "https://images.samsung.com/is/image/samsung/p6pim/vn/sm-a556elbdxxv/gallery/vn-galaxy-a55-5g-sm-a556-sm-a556elbdxxv-540189574?$650_519_PNG$" },
                { name: "TV", picture: "https://dienmayplus.com/wp-content/uploads/2023/05/smart-tivi-qled-4k-85-inch-samsung-qa85q80c-2.png" },
                { name: "Monitor", picture: "https://pchouse.com.pk/wp-content/uploads/2022/12/SAMSUNG-S22A330NHM-22-Inch-Incredibly-Defined-FHD-monitor.jpg" },
                { name: "Speaker", picture: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/streams/2013/October/131003/8C9264909-samsung-wireless-audio-multiroom-black.jpg" },
            ],
        },
        {
            title: "Xiaomi",
            dataProduct: [
                { name: "Phone", picture: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-14-pre-xanh-la.png" },
                { name: "TV", picture: "https://cdn.hoanghamobile.com/i/content/Uploads/2023/07/27/tv-xiaomi-a-1.png" },
                { name: "Speaker", picture: "https://product.hstatic.net/200000594885/product/loa_085d05465ca8414aa7277eb92d4da3ae_master.jpg" },
                { name: "Monitor", picture: "https://bizweb.dktcdn.net/100/446/096/products/fyszioo1asxm2t4ujbmuhihnowzzk13t4jl0i4v9.jpg?v=1689842857487" },
                { name: "Pad Pro 5", picture: "https://cdn.mobilecity.vn/mobilecity-vn/images/2023/03/w300/xiaomi-mi-pad-5-pro-dai-dien-trang.jpg.webp" },
            ],
        },
        {
            title: "Oppo",
            dataProduct: [
                { name: "Phone", picture: "https://opsg-img-cdn-gl.heytapimg.com/epb/202402/20/VYh23XynbefcMeYT.png" },
                { name: "TV", picture: "https://cdn.tgdd.vn/Files/2020/10/19/1300338/untitled4_800x526.png" },
                { name: "Oppo Watch", picture: "https://assorted.downloads.oppo.com/static/assets/products/oppo-watch-2/images/1920/sec4-img2-165d0e746d71680275794cd4101eb0ac.png" },
                { name: "Enco Air", picture: "https://img.websosanh.vn/v2/users/root_product/images/tai-nghe-bluetooth-oppo-enco-a/8ojr14i1zx7zr.jpg" },
                { name: "Pad Neo", picture: "https://cdn.tgdd.vn/Products/Images/522/320992/oppo-pad-neo-grey-thumb-600x600.jpg" },
            ],
        },
        {
            title: "Huawei",
            dataProduct: [
                { name: "Phone", picture: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/phones-20230509/nova-series/nova12-i.png" },
                { name: "TV", picture: "https://dienmayplus.com/wp-content/uploads/2023/05/smart-tivi-qled-4k-85-inch-samsung-qa85q80c-2.png" },
                { name: "Monitor", picture: "https://pchouse.com.pk/wp-content/uploads/2022/12/SAMSUNG-S22A330NHM-22-Inch-Incredibly-Defined-FHD-monitor.jpg" },
                { name: "Speaker", picture: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/streams/2013/October/131003/8C9264909-samsung-wireless-audio-multiroom-black.jpg" },
            ],
        },
    ]
    return (
        <div>
            <div className="home-page">
                <h2>Technology Price History & Tracker</h2>
                <p>Price Tracker, Price History Charts and Price Drop Alerts for Technology products.</p>
            </div >
            <Line />
            <Line />
            <div>
                <ProductList data={data} />
                <div className='introduction'>
                    <h4>Frequently Asked Questions</h4>
                    <h4>What is a Price Tracker?</h4>
                    <p>A price tracker is a website or app that allows you to monitor the prices of products over time. It can track prices on various e-commerce platforms, such as Amazon or Flipkart, and notify you when the price drops below a certain threshold. Price trackers can also provide historical data on pricing trends, which can be useful for making informed purchasing decisions.</p>
                    <h4>What is a Price History?</h4>
                    <p>A price history is a record of the changes in the price of a particular product over time. It can be represented in various forms such as a graph, table, or chart. It shows the past prices of a product, the date the price was changed, and the current price. Price history can be useful in determining price trends, whether it's going up or down, and if it's a good time to buy a certain product based on past prices. Using it can also help find the best deals and discounts on a product.</p>
                    <h4>What is the use of Price History?</h4>
                    <p>The main use of price history is to understand the pricing trends of a product over time. It allows you to see how the price has changed in the past and can help you predict how it may change in the future. This information can be useful in making informed purchasing decisions, such as deciding whether to buy a product now or wait for the price to drop. Price history can also help you identify patterns in pricing, such as whether prices are lower at certain times of the year, or whether prices tend to increase or decrease over time. Businesses can also use it to track their competitors' prices and adjust their own accordingly. Overall, price history is a valuable tool for anyone looking to make the most of their money when shopping online or offline.</p>
                    <h4>What is a Price Drop Alert?</h4>
                    <p>A price drop alert is a notification that is sent to a user when the price of a specific product drops below the target price. These alerts can be set up on the product pages and received via email. Price drop alerts can be useful for finding deals and discounts on products that you are interested in purchasing.</p>
                </div>
                <Line />
                <footer className='footer'>
                    <p>Price Tracker, Price History Charts / Graphs and Price Drop Alerts for Mobiles, Laptops, Appliances, Watches, etc from Amazon, Flipkart, Snapdeal & more for free.</p>
                </footer>
            </div>
        </div>
    )
}

export default Homepage