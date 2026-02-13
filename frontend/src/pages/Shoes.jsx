import React from 'react';
import { useNavigate } from 'react-router-dom';

const Shoes = () => {
    const navigate = useNavigate();

    const redirectToBuy = (imgSrc, title, price) => {
        localStorage.setItem("img_src", imgSrc);
        localStorage.setItem("title", title);
        navigate('/buy');
    };

    const athletic = [
        { id: 1, img: '/athsimg1.png', title: "Shoes1", price: "$20.00" },
        { id: 2, img: '/athsimg2.png', title: "Athletic Shoes", price: "$20.00" },
        { id: 3, img: '/athsimg3.png', title: "Athletic Shoes", price: "$20.00" },
        { id: 4, img: '/athsimg4.png', title: "Athletic Shoes", price: "$20.00" },
        { id: 5, img: '/athsimg5.png', title: "Athletic Shoes", price: "$20.00" },
        { id: 6, img: '/athsimg6.png', title: "Athletic Shoe", price: "$20.00" },
        { id: 7, img: '/athsimg7.png', title: "Athletic Shoe", price: "$20.00" },
        { id: 8, img: '/athsimg8.png', title: "Athletic Shoes", price: "$20.00" },
    ];

    const formals = [
        { id: 9, img: '/formshoesimg1.png', title: "Formal Shoes", price: "$20.00" },
        { id: 10, img: '/formshoesimg2.png', title: "Formal Shoes", price: "$20.00" },
        { id: 11, img: '/formshoesimg3.png', title: "Formal Shoes", price: "$20.00" },
        { id: 12, img: '/formshoesimg4.png', title: "Formal Shoes", price: "$20.00" },
        { id: 13, img: '/formshoesimg5.png', title: "Formal Shoes", price: "$20.00" },
        { id: 14, img: '/formshoesimg6.png', title: "Formal Shoes", price: "$20.00" },
        { id: 15, img: '/formshoesimg7.png', title: "Formal Shoes", price: "$20.00" },
        { id: 16, img: '/formshoesimg8.png', title: "Formal Shoes", price: "$20.00" },
    ];

    const heels = [
        { id: 17, img: '/heelshimg1.png', title: "Heels", price: "$20.00" },
        { id: 18, img: '/heelshimg2.png', title: "Heels", price: "$20.00" },
        { id: 19, img: '/heelshimg3.png', title: "Heels", price: "$20.00" },
        { id: 20, img: '/heelshimg4.png', title: "Heels", price: "$20.00" },
        { id: 21, img: '/heelshimg5.png', title: "Heels", price: "$20.00" },
        { id: 22, img: '/heelshimg6.png', title: "Heels", price: "$20.00" },
        { id: 23, img: '/heelshimg7.png', title: "Heels", price: "$20.00" },
        { id: 24, img: '/heelshimg8.png', title: "Heels", price: "$20.00" },
    ]

    return (
        <div>
            <section className="filter" id="filter">
                <h1>Shoes</h1>
                <li><a href="#athleticshoes">Athletic Shoes</a></li>
                <li><a href="#formals">Formals</a></li>
                <li><a href="#heels">Heels</a></li>
            </section>

            <div className="athleticshoes1" id="athleticshoes">
                <h1 style={{ textAlign: 'center', marginTop: '100px', height: '100px' }}>Athletic Shoes</h1>
            </div>

            <div className="athleticshoes" id="athleticshoes">
                <div className="itemstuff">
                    {athletic.map((item) => (
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

            <div className="athleticshoes1" id="formals">
                <h1 style={{ textAlign: 'center', padding: '50px', marginTop: '40px', backgroundColor: '#f7f6f6' }}>Formals</h1>
            </div>

            <div className="tShoess" id="formals">
                <div className="itemstuff">
                    {formals.map((item) => (
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

            <div className="tShoess1" id="heels">
                <h1 style={{ textAlign: 'center', padding: '50px', marginTop: '40px', backgroundColor: '#f7f6f6' }}>Heels</h1>
            </div>

            <div className="tShoess" id="tShoess">
                <div className="itemstuff">
                    {heels.map((item) => (
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

export default Shoes;
