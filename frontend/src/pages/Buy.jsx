import React, { useEffect, useState } from 'react';

const Buy = () => {
    const [product, setProduct] = useState({ img: '', title: '' });

    useEffect(() => {
        const img = localStorage.getItem("img_src");
        const title = localStorage.getItem("title");
        if (img && title) {
            setProduct({ img, title });
        }
    }, []);

    return (
        <div style={{ padding: '100px', textAlign: 'center' }}>
            <h1>Buy Product</h1>
            {product.img && <img src={product.img} alt={product.title} style={{ width: '300px', borderRadius: '20px' }} />}
            <h2>{product.title}</h2>
            <p>Proceed to checkout integration...</p>
        </div>
    );
};

export default Buy;
