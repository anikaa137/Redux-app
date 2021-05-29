import React from 'react';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

const ProductComponent = () => {
    // const product = useSelector((state) => state.allProducts.product);
    // console.log(product)
    const products = useSelector((state) => state.allProducts.products);
  // console.log(products)
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div class="container" key={id}>
        <Link to={`/product/${id}`}  style={{textDecoration:'none', color:"black"}}>
        <div class="row">
           <div class="col-md-3">
              <div class="card" style={{ width: '18rem', padding:"22px" }}>
          <img src={image} class="card-img-top" alt={title} />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">Price:  {price}$</p>
            <p class="card-text">Cetegory:  {category}</p>
            <h6  class="card-text">Product id:  {id}</h6>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
        </div>

      </div>

        </Link>

      </div >

    );
  });
  return (


    <div>
       { renderList}
       </div>
  )
};

export default ProductComponent;

{/* <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>

</div> */}