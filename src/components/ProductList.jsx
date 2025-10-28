import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ category = null }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        let url = 'https://fakestoreapi.com/products';
        //let url = 'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1';
        if (category) {
            url = `https://fakestoreapi.com/products/category/${category}`;
        }

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [category]);


    const handleAgregarAlCarrito = (product) => {
        alert(`Producto ${product.title} agregado al carrito`);
    };



    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <Row>
            {products.map((product) => (
                <Col md={4} key={product.id} className="mb-4">
                    <ProductCard product={product} agregarAlCarrito={handleAgregarAlCarrito} />
                </Col>
            ))}
        </Row>
    );
};

export default ProductList;