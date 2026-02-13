import React from 'react';

const Home = () => {
    return (
        <div>
            <div id="slideshow">
                <figure>
                    <img src="/img/brown.jpg" style={{ width: '1490px', height: '530px' }} alt="Slideshow 1" />
                    <img src="/img/HURR.png" style={{ width: '1450px', height: '530px' }} alt="Slideshow 2" />
                </figure>
            </div>

            <section className="about" id="about">
                <div className="content">
                    <h2>About</h2>
                    <p>
                        "NRGK stands at the intersection of style and substance. Beyond mere clothing, we celebrate the artistry of self-expression, the confidence that comes from wearing something extraordinary, and the refinement that defines true elegance. Our journey began with a fervor for luxury and an unwavering commitment to craftsmanship. Today, NRGK curates a collection that marries timeless classics with avant-garde creations, appealing to the discerning tastes of global fashion connoisseurs. With personalized service and an unwavering pursuit of excellence, we invite you to explore the pinnacle of sartorial opulence and elevate your wardrobe to new heights." 🌟👕🌟
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
