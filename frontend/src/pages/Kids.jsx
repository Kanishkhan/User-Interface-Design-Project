import React from 'react';
import { useNavigate } from 'react-router-dom';

const Kids = () => {
    const navigate = useNavigate();

    const redirectToBuy = (imgSrc, title, price) => {
        localStorage.setItem("img_src", imgSrc);
        localStorage.setItem("title", title);
        navigate('/buy');
    };

    const tshirts = [
        { id: 1, img: '/tshimg1.png', title: "Kids Dress", price: "$20.00" },
        { id: 2, img: '/tshimg2.png', title: "Kids Dress", price: "$20.00" },
        { id: 3, img: '/tshimg3.png', title: "Kids Dress", price: "$20.00" },
        { id: 4, img: '/tshimg4.png', title: "Kids Dress", price: "$20.00" },
        { id: 5, img: '/tshimg5.png', title: "Kids Dress", price: "$20.00" },
        { id: 6, img: '/tshimg6.png', title: "Kids Dress", price: "$20.00" },
        { id: 7, img: '/tshimg7.png', title: "Kids Dress", price: "$20.00" },
        { id: 8, img: '/tshimg8.png', title: "Kids Dress", price: "$20.00" },
    ];

    const sports = [
        { id: 9, img: '/sdimg1.png', title: "Kids Dress", price: "$20.00" },
        { id: 10, img: '/sdimg2.png', title: "Kids Dress", price: "$20.00" },
        { id: 11, img: '/sdimg3.png', title: "Kids Dress", price: "$20.00" },
        { id: 12, img: '/sdimg4.png', title: "Kids Dress", price: "$20.00" },
        { id: 13, img: '/sdimg5.png', title: "Kids Dress", price: "$20.00" },
        { id: 14, img: '/sdimg6.png', title: "Kids Dress", price: "$20.00" },
        { id: 15, img: '/sdimg7.png', title: "Kids Dress", price: "$20.00" },
        { id: 16, img: '/sdimg8.png', title: "Kids Dress", price: "$20.00" },
    ];

    const jeans = [
        { id: 17, img: '/jeimg1.png', title: "Kids Dress", price: "$20.00" },
        { id: 18, img: '/jeimg2.png', title: "Kids Dress", price: "$20.00" },
        { id: 19, img: '/jeimg3.png', title: "Kids Dress", price: "$20.00" },
        { id: 20, img: '/jemig4.png', title: "Kids Dress", price: "$20.00" }, // Note: jemig4.png in HTML
        { id: 21, img: '/jeimg5.png', title: "Kids Dress", price: "$20.00" },
        { id: 22, img: '/jeimg6.png', title: "Kids Dress", price: "$20.00" },
        { id: 23, img: '/jeimg7.png', title: "Kids Dress", price: "$20.00" },
        { id: 24, img: '/jeimg8.png', title: "Kids Dress", price: "$20.00" },
    ]

    return (
        <div>
            <section className="filter" id="filter">
                <h1>Kid's Clothing</h1>
                <li><a href="#tshirts1">T-Shirts</a></li>
                <li><a href="#tops">Sports Dress</a></li>
                <li><a href="#jeans">Jeans</a></li>
            </section>

            <div className="tshirts1" id="tshirts1">
                <h1 style={{ textAlign: 'center', marginTop: '100px', height: '100px' }}>T-Shirts</h1>
            </div>

            <div className="tshirts" id="tshirts">
                <div className="itemstuff">
                    {tshirts.map((item) => (
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

export default Kids;
