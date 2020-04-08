import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props) {

    const productList = useSelector(state => state.productList);
    const { products, loading, error} = productList;
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(listProducts());
      
        return () => {
            //
        };
        

    }, [dispatch])
    
 
    

    return loading ? <div>Loading...</div> :
    error ? <div>{error}</div> :
    
    <ul className="products">
    {
        products.map(product => 
            <li key={product.id}>
        <div className="product">

        <Link to={'/products/' + product.id}> 
            <img src={product.image} alt="Product" className="product-image"/>
        </Link>
            

            <div className="product-name">
                <Link to={'/products/' + product.id}> {product.name}</Link>
            </div>

            <div className="product-brand">{product.brand}</div>

            <div className="product-price">{product.price}</div>
            <div className="product-rating">{product.rating} Stars ({product.numReviews})</div>
        </div>
    </li>
            )
    }
</ul>
}
    

export default HomeScreen;