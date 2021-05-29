import React, { useEffect } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from './redux/actions/productsActions';

const Productlist = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log(products)

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("err", err)
            });
        console.log(response.data);
        dispatch(setProducts(response.data))
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    console.log('products', products)
    return (
        <div>
            <h2>Product list</h2>
            <ProductComponent/>
        </div>
    );
};

export default Productlist;