import React from 'react';
import Product from './Product';
import './Home.css';


function Home() {
    return (
      <div className="home">
        <img 
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_jpg" 
        alt=""/> 

        {/* Product id, title, price, rating, image */}
        <div className="home__row">
          <Product
            id='12321341'
            title="You Don't Know JS Yet: Drives deep into the core mechanisim of JavaScript"
            price={10.99}
            rating={5}
            image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457542606l/25136217._SY475_.jpg"
          />
          <Product
            id='12376947'
            title=" IPhone 11 pro max 256GB.Shoot amazing videos and photos with the Ultra Wide, Wide, and Telephoto cameras."
            price={1900}
            rating={4}
            image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/W/153608_1569283611.jpg "
          />
        </div>
        <div className="home__row">
          <Product
            id='12321391'
            title="Beats Studio3 Wireless Over-ear Headphones.Put the world on hold with a pair of Beats"
            price={15.99}
            rating={2}
            image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/M/169248_1584100940.jpg"
          />
          <Product
            id='12321741'
            title="This Team Football Backpack features a large main zipped compartment."
            price={25.99}
            rating={5}
            image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/a/Barcelona-Team-Backpack-7590502.jpg"
          />
          <Product
            id='12321841'
            title="Apple Macbook Pro 2019 13 inches Intel Core I5 16gb Ram 1tb Hdd"
            price={2500}
            rating={5}
            image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/K/R/153608_1573476341.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id='12301341'
            title="Sony Playstation 4 Pro 1tb Console - Black Sony Playing Station 4 - 500GB.Prepare yourself for the greatest gaming console to ever grace the world of gaming. The PlayStation 4 returns again to provide you with the next generation in gaming and in entertainment."
            price={698.99}
            rating={3}
            image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/A/N/3650_1585764288.jpg"
          />
        </div>
      </div>
    );
}

export default Home;
