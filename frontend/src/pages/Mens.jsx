import React from 'react';
import { useNavigate } from 'react-router-dom';

const Mens = () => {
    const navigate = useNavigate();

    const redirectToBuy = (imgSrc, title, price) => {
        // Saving to localStorage as per original logic, but also could use state
        localStorage.setItem("img_src", imgSrc);
        localStorage.setItem("title", title);
        navigate('/buy');
    };

    const products = [
        { id: 1, img: '/mentsimg1.png', title: "Men's Dress", price: "$20.00", category: "tshirts" },
        { id: 2, img: '/mentsimg2.png', title: "Men's Dress", price: "$20.00", category: "tshirts" },
        { id: 3, img: '/mentsimg3.png', title: "Men's Dress", price: "$20.00", category: "tshirts" },
        { id: 4, img: '/mentsimg4.png', title: "Men's Dress", price: "$20.00", category: "tshirts" },
        { id: 5, img: '/mentsimg5.png', title: "Men's Dress", price: "$20.00", category: "tshirts" },
        { id: 6, img: '/mentsimg6.png', title: "Men's Dress", price: "$20.00", category: "tshirts" },
        { id: 7, img: '/mentsimg7.png', title: "Men's Dress", price: "$20.00", category: "tshirts" },
        { id: 8, img: '/mentsimg8.png', title: "Men's Dress", price: "$20.00", category: "tshirts" },
    ];

    const sports = [
        { id: 9, img: '/sdming1.png', title: "Men's Dress", price: "$20.00" },
        { id: 10, img: '/sdming2.png', title: "Men's Dress", price: "$20.00" },
        { id: 11, img: '/sdming3.png', title: "Men's Dress", price: "$20.00" },
        { id: 12, img: '/sdming4.png', title: "Men's Dress", price: "$20.00" },
        { id: 13, img: '/sdming5.png', title: "Men's Dress", price: "$20.00" },
        { id: 14, img: '/sdming6.png', title: "Men's Dress", price: "$20.00" },
        { id: 15, img: '/sdming7.png', title: "Men's Dress", price: "$20.00" },
        { id: 16, img: '/sdming8.png', title: "Men's Dress", price: "$20.00" },
    ];

    const jeans = [
        { id: 17, img: '/jming1.png', title: "Men's Dress", price: "$20.00" },
        { id: 18, img: '/jming2.png', title: "Men's Dress", price: "$20.00" },
        { id: 19, img: '/jming3.png', title: "Men's Dress", price: "$20.00" },
        { id: 20, img: '/jming4.png', title: "Men's Dress", price: "$20.00" },
        { id: 21, img: '/jming5.png', title: "Men's Dress", price: "$20.00" },
        { id: 22, img: '/jming6.png', title: "Men's Dress", price: "$20.00" },
        { id: 23, img: '/jming7.png', title: "Men's Dress", price: "$20.00" },
        { id: 24, img: '/jming8.png', title: "Men's Dress", price: "$20.00" },
    ]

    return (
        <div>
            <section className="filter" id="filter">
                <h1>Men's Clothing</h1>
                <li><a href="#tshirts1">T-Shirts</a></li>
                <li><a href="#tops">Sports Dress</a></li>
                <li><a href="#jeans">Jeans</a></li>
            </section>

            <div className="tshirts1" id="tshirts1">
                <h1 style={{ textAlign: 'center', marginTop: '100px', height: '100px' }}>T-Shirts</h1>
            </div>

            <div className="tshirts" id="tshirts">
                <div className="itemstuff">
                    {products.map((item) => (
                        <div className="box1" key={item.id}>
                            <img src={item.img} alt={item.title} />
                            <div className="tester">
                                <h4>{item.title}</h4>
                                <h5>{item.price}</h5>
                                <div className="cart">
                                    <a href="#" onClick={(e) => { e.preventDefault(); redirectToBuy(item.img, item.title, item.price); }}>
                                        <i className='bx bx-cart-add'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="tshirts1" id="tops">
                <h1 style={{ textAlign: 'center', padding: '50px', marginTop: '40px', backgroundColor: '#f7f6f6' }}>Sports Dress</h1>
            </div>

            <div className="tshirts" id="tops">
                <div className="itemstuff">
                    {sports.map((item) => (
                        <div className="box1" key={item.id}>
                            <img src={item.img} alt={item.title} />
                            <div className="tester">
                                <h4>{item.title}</h4>
                                <h5>{item.price}</h5>
                                <div className="cart">
                                    <a href="#" onClick={(e) => { e.preventDefault(); redirectToBuy(item.img, item.title, item.price); }}>
                                        <i className='bx bx-cart-add'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="tshirts1" id="jeans">
                <h1 style={{ textAlign: 'center', padding: '50px', marginTop: '40px', backgroundColor: '#f7f6f6' }}>Jeans</h1>
            </div>

            <div className="tshirts" id="jeans">
                <div className="itemstuff">
                    {jeans.map((item) => (
                        <div className="box1" key={item.id}>
                            <img src={item.img} alt={item.title} />
                            <div className="tester">
                                <h4>{item.title}</h4>
                                <h5>{item.price}</h5>
                                <div className="cart">
                                    <a href="#" onClick={(e) => { e.preventDefault(); redirectToBuy(item.img, item.title, item.price); }}>
                                        <i className='bx bx-cart-add'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Mens;
