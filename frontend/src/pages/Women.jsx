import React from 'react';
import { useNavigate } from 'react-router-dom';

const Women = () => {
    const navigate = useNavigate();

    const redirectToBuy = (imgSrc, title, price) => {
        localStorage.setItem("img_src", imgSrc);
        localStorage.setItem("title", title);
        navigate('/buy');
    };

    const tshirts = [
        { id: 1, img: '/womtshimg1.png', title: "Women's Dress", price: "$20.00" },
        { id: 2, img: '/womtshimg2.png', title: "Women's Dress", price: "$20.00" },
        { id: 3, img: '/womtshimg3.png', title: "Women's Dress", price: "$20.00" },
        { id: 4, img: '/womtshimg4.png', title: "Women's Dress", price: "$20.00" },
        { id: 5, img: '/womtshimg5.png', title: "Women's Dress", price: "$20.00" },
        { id: 6, img: '/womtshimg6.png', title: "Women's Dress", price: "$20.00" },
        { id: 7, img: '/womtshimg7.png', title: "Women's Dress", price: "$20.00" },
        { id: 8, img: '/womtshimg8.png', title: "Women's Dress", price: "$20.00" },
    ];

    const tops = [
        { id: 9, img: '/topwomimg1.png', title: "Women's Dress", price: "$20.00" },
        { id: 10, img: '/topwomimg2.png', title: "Women's Dress", price: "$20.00" },
        { id: 11, img: '/topwomimg3.png', title: "Women's Dress", price: "$20.00" },
        { id: 12, img: '/topwomimg4.png', title: "Women's Dress", price: "$20.00" },
        { id: 13, img: '/topwomimg5.png', title: "Women's Dress", price: "$20.00" },
        { id: 14, img: '/topwomimg6.png', title: "Women's Dress", price: "$20.00" },
        { id: 15, img: '/topwomimg7.png', title: "Women's Dress", price: "$20.00" },
        { id: 16, img: '/topwomimg8.png', title: "Women's Dress", price: "$20.00" },
    ];

    const jeans = [
        { id: 17, img: '/womjenimg1.png', title: "Women's Dress", price: "$20.00" },
        { id: 18, img: '/womjenimg2.png', title: "Women's Dress", price: "$20.00" },
        { id: 19, img: '/womjenimg3.png', title: "Women's Dress", price: "$20.00" },
        { id: 20, img: '/womjenimg4.png', title: "Women's Dress", price: "$20.00" },
        { id: 21, img: '/womjenimg5.png', title: "Women's Dress", price: "$20.00" },
        { id: 22, img: '/womjenimg6.png', title: "Women's Dress", price: "$20.00" },
        { id: 23, img: '/womjenimg7.png', title: "Women's Dress", price: "$20.00" },
        { id: 24, img: '/womjenimg8.png', title: "Women's Dress", price: "$20.00" },
    ]

    return (
        <div>
            <section className="filter" id="filter">
                <h1>Women's Clothing</h1>
                <li><a href="#tshirts1">T-Shirts</a></li>
                <li><a href="#tops">Tops</a></li>
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
                <h1 style={{ textAlign: 'center', padding: '50px', marginTop: '40px', backgroundColor: '#f7f6f6' }}>Tops</h1>
            </div>

            <div className="tshirts" id="tops">
                <div className="itemstuff">
                    {tops.map((item) => (
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

export default Women;
