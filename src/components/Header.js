import React from 'react';
import Productlist from './Productlist';

const Header = () => {
    return (
        <div class="mt-5 container">
            <div class="card" style={{width: '18rem'}}>
  <img src="https://demo1leotheme.b-cdn.net/leo_oobliss_demo/79-home_default/hummingbird-printed-t-shirt.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
    </div>
        <Productlist/>
        </div>
    );
};

export default Header;