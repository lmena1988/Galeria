import React, { Component, keys } from 'react';
import NavBarInicio from '../NavBarInicio';
//import ListarProductos from "./contenido/ListarProductos";

export default function Inicio () {

  var we;
  const[img1,setImg1]=React.useState('')
  const[img2,setImg2]=React.useState('')
  const[img3,setImg3]=React.useState('')

  React.useEffect(()=>{
    fetch(`http://localhost:8080/busc`)
    .then(res=>res.json())
    .then((result)=>{
      setImg1(result);
      
      
    }
  )
  },[])



 

  /* */

  console.log(we)

    return (
      <div>
  <NavBarInicio/>
  <section className="header-feahion">
    <img src="dist/img/header-image.jpg" alt />
    <div className="header-text">
      <h4>FREE SHIPPING ON ORDERS OVER $100!</h4>
      <h3>HOT NEW RANGE <br /> IN STOCK!</h3>
    </div>
  </section>
  <section className="product-s-display">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
        
        <div>
          
        </div>

        

        </div>
        
        <div className="col-md-4">
          <div className="s_display">
            <img src="dist/img/s-display1.jpg" alt />
            <h2>RUNNING SHOES</h2>
          </div>
        </div>

        <div className="col-md-4">
        
          <div className="s_display">
            <img ></img>
            <h2>MEN’S SHIRTS</h2>
          </div>
          
        </div>
 
      </div>
    </div>
  </section>
  <div className="related-products">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="bar">
            <h2 id="section1">PRODUCTOS PARA TI</h2>
            <img alt src="dist/img/bar.jpg" />
          </div>
        </div>
      </div>
      <div className="product">
        <div className="row">
          <div className="col-md-3">
            <div className="s_product">
              <img alt src="dist/img/t-shart.jpg" />
              <div className="s_overlay" />
              <h2>SALE!</h2>
              <h3>T-SHIRT</h3>
              <h4><a className="color" href="/ProductoUnico" aria-hidden="true"><i className="fa fa-cart-arrow-down" />IR AL CARRO</a></h4>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="rate">
                  <h3>Pocket Tee</h3>
                  <p><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><span><i aria-hidden="true" className="fa fa-star" /></span></p>
                  <h5>$250</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="s_product">
              <img alt src="dist/img/t-shart1.jpg" />
              <div className="s_overlay" />
              <h3>T-SHIRT</h3>
              <h4><a className="color" href="/ProductoUnico" aria-hidden="true"><i className="fa fa-cart-arrow-down" />IR AL CARRO</a></h4>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="rate">
                  <h3>Pocket Tee</h3>
                  <p><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><span><i aria-hidden="true" className="fa fa-star" /></span></p>
                  <h5>$250</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="s_product">
              <img alt src="dist/img/t-shart2.jpg" />
              <div className="s_overlay" />
              <h3>T-SHIRT</h3>
              <h4><a className="color" href="/ProductoUnico" aria-hidden="true"><i aria-hidden="true" className="fa fa-cart-arrow-down" />IR AL CARRO</a></h4>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="rate">
                  <h3>Pocket Tee</h3>
                  <p><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /></p>
                  <h5>$250</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="s_product">
              <img alt src="dist/img/t-shart3.jpg" />
              <div className="s_overlay" />
              <h2>NEW!</h2>
              <h3>JACKET</h3>
              <h4><a className="color" href="/ProductoUnico" aria-hidden="true"><i aria-hidden="true" className="fa fa-cart-arrow-down" />IR AL CARRO</a></h4>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="rate">
                  <h3>Pocket Tee</h3>
                  <p><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /></p>
                  <h5>$250</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="season">
    <img src="dist/img/season.jpg" alt />
    <div className="ovearlay" />
    <div className="text">
      <h2>End of season sale </h2>
      <h3>Up to 35% off Women’s Denim </h3>
    </div>
  </section>
  <section className="latest-product">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="bar">
            <h2 id="section2">Artistas Asociados</h2>
            <img src="dist/img/bar.jpg" alt />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="product-single">
            <div className="single-overlay" />
            <img src="dist/img/product-single1.jpg" alt />
            <a href="dist/img/product-single1.jpg"><i className="fa fa-search-plus" aria-hidden="true" /></a>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="prodact-s-text">
                <h3>Pocket Tee</h3>
                <p><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><span><i className="fa fa-star" aria-hidden="true" /></span></p>
                <h5>$250</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="product-single">
            <div className="single-overlay" />
            <img src="dist/img/product-single2.jpg" alt />
            <a href="dist/img/product-single2.jpg"><i className="fa fa-search-plus" aria-hidden="true" /></a>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="prodact-s-text">
                <h3>Pocket Tee</h3>
                <p><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><span><i className="fa fa-star" aria-hidden="true" /></span></p>
                <h5>$250</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="product-single">
            <div className="single-overlay" />
            <img src="dist/img/product-single3.jpg" alt />
            <a href="dist/img/product-single3.jpg"><i className="fa fa-search-plus" aria-hidden="true" /></a>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="prodact-s-text">
                <h3>Pocket Tee</h3>
                <p><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /></p>
                <h5>$250</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="product-single">
            <div className="single-overlay" />
            <img src="dist/img/product-single4.jpg" alt />
            <a href="dist/img/product-single4.jpg"><i className="fa fa-search-plus" aria-hidden="true" /></a>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="prodact-s-text">
                <h3>Pocket Tee</h3>
                <p><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /></p>
                <h5>$250</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="t-shart-brand">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="t_shart">
            <div className="row">
              <div className="col-md-5">
                <div className="t_shart_img">
                  <img src="dist/img/t-shart-brand1.jpg" alt />
                </div>
              </div>
              <div className="col-md-7">
                <div className="t_shart_text">
                  <h2>All Brand T-sharts</h2>
                  <a href="#"><p>See More</p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="t_shart">
            <div className="row">
              <div className="col-md-5">
                <div className="t_shart_img">
                  <img src="dist/img/s-bag.jpg" alt />
                </div>
              </div>
              <div className="col-md-7">
                <div className="t_shart_text">
                  <h2>All Brand T-sharts</h2>
                  <a href="#"><p>See More</p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="t_shart">
            <div className="row">
              <div className="col-md-5">
                <div className="t_shart_img">
                  <img src="dist/img/w-bag.jpg" alt />
                </div>
              </div>
              <div className="col-md-7">
                <div className="t_shart_text">
                  <h2>All Brand T-sharts</h2>
                  <a href="#"><p>See More</p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="best-seller">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="bar">
            <h2>BEST SELLERS</h2>
            <img alt src="dist/img/bar.jpg" />
          </div>
        </div>
      </div>
      <div className="best-seller-part">
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-4">
                <div className="best-sell-part">
                  <img src="dist/img/best-sell-img.jpg" alt />
                  <p><i className="fa fa-heart" aria-hidden="true" /></p>
                  <h4>QUICK VIEW</h4>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="prodact-s-text">
                      <h3>Pocket Tee</h3>
                      <p><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><span><i aria-hidden="true" className="fa fa-star" /></span></p>
                      <h5>$250</h5>
                      <p className="cart">ADD TO CART</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="best-sell-part">
                  <img src="dist/img/best-sell-img1.jpg" alt />
                  <p><i className="fa fa-heart" aria-hidden="true" /></p>
                  <h4>QUICK VIEW</h4>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="prodact-s-text">
                      <h3>Pocket Tee</h3>
                      <p><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><span><i aria-hidden="true" className="fa fa-star" /></span></p>
                      <h5>$250</h5>
                      <p className="cart">ADD TO CART</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="best-sell-part">
                  <img src="dist/img/best-sell-img2.jpg" alt />
                  <p><i className="fa fa-heart" aria-hidden="true" /></p>
                  <h4>QUICK VIEW</h4>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="prodact-s-text">
                      <h3>Pocket Tee</h3>
                      <p><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><i aria-hidden="true" className="fa fa-star" /><span><i aria-hidden="true" className="fa fa-star" /></span></p>
                      <h5>$250</h5>
                      <p className="cart">ADD TO CART</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="winter-cloth">
              <div className="big-cloth">
                <img src="dist/img/big-cloth.jpg" alt />
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="s-cloth">
                    <img src="dist/img/s-cloth.jpg" alt />
                  </div>
                  <div className="s-cloth">
                    <img src="dist/img/s-cloth.jpg" alt />
                  </div>
                  <div className="s-cloth">
                    <img src="dist/img/s-cloth.jpg" alt />
                  </div>
                  <div className="s-cloth">
                    <img src="dist/img/s-cloth.jpg" alt />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="w_text">
                    <h4>LOREM IPSU, DOLOR SITE EMIT</h4>
                    <h5>Lorem</h5>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="dollar">
                    <p>$399.99</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="option">
                    <button>SELECT OPTION</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="brands">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="bar">
            <h2>BRANDS WE STOCK</h2>
            <img src="dist/img/bar.jpg" alt />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="yyyy">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="slider-container">
            <ul id="slider">
              <li><a href="#"><img src="dist/img/brand-img1.jpg" /></a></li>
              <li><a href="#"><img src="dist/img/brand-img2.jpg" /></a></li>
              <li><a href="#"><img src="dist/img/brand-img3.jpg" /></a></li>
              <li><a href="#"><img src="dist/img/brand-img4.jpg" /></a></li>
              <li><a href="#"><img src="dist/img/brand-img5.jpg" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="featured">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="f-images-text">
            <h2>Best Selling</h2>
            <div className="row">
              <div className="col-md-12">
                <div className="img-text">
                  <img src="dist/img/slide.jpg" alt />
                  <div className="text">
                    <h4>Lorem ipsum dolor</h4>
                    <h5>$200.00</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="img-text">
                  <img src="dist/img/slide1.jpg" alt />
                  <div className="text">
                    <h4>Lorem ipsum dolor</h4>
                    <h5>$200.00</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="img-text">
                  <img src="dist/img/slide2.jpg" alt />
                  <div className="text">
                    <h4>Lorem ipsum dolor</h4>
                    <h5>$200.00</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="f-images-text-two">
            <h2>Top Rated</h2>
            <div className="row">
              <div className="col-md-12">
                <div className="img-text">
                  <img src="dist/img/slide.jpg" alt />
                  <div className="text">
                    <h4>Lorem ipsum dolor</h4>
                    <p><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><span><i className="fa fa-star" aria-hidden="true" /></span></p>
                    <h5>$200.00</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="img-text">
                  <img src="dist/img/slide1.jpg" alt />
                  <div className="text">
                    <h4>Lorem ipsum dolor</h4>
                    <p><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><span><i className="fa fa-star" aria-hidden="true" /></span></p>
                    <h5>$200.00</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="img-text">
                  <img src="dist/img/slide2.jpg" alt />
                  <div className="text">
                    <h4>Lorem ipsum dolor</h4>
                    <p><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><span><i className="fa fa-star" aria-hidden="true" /></span></p>
                    <h5>$200.00</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="f-images-text">
            <h2>Featured</h2>
            <div className="row">
              <div className="col-md-12">
                <div className="img-text">
                  <img src="dist/img/slide.jpg" alt />
                  <div className="text">
                    <h4>Lorem ipsum dolor</h4>
                    <h5>$200.00</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="img-text">
                  <img src="dist/img/slide1.jpg" alt />
                  <div className="text">
                    <h4>Lorem ipsum dolor</h4>
                    <h5>$200.00</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="img-text">
                  <img src="dist/img/slide2.jpg" alt />
                  <div className="text">
                    <h4>Lorem ipsum dolor</h4>
                    <h5>$200.00</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="fashion">
    <div className="f-overlay" />
    <img src="dist/img/footer-top-images.jpg" alt />
    <h2>FASHION NEW</h2>
  </section>
  <footer>
    <div className="footer_top">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 id="section3">INFORMATION</h2>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Best sellers</p></a>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Best sellers</p></a>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Best sellers</p></a>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Best sellers</p></a>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Best sellers</p></a>
          </div>
          <div className="col-md-4 center">
            <h2>INFORMATION</h2>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Best sellers</p></a>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Best sellers</p></a>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Best sellers</p></a>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Best sellers</p></a>
            <a href="#"><p><i className="fa fa-circle" aria-hidden="true" />Best sellers</p></a>
          </div>
          <div className="col-md-4">
            <div className="footer-contact">
              <h2>CONTACT US</h2>
              <a href="#"><p><i className="fa fa-map-marker" aria-hidden="true" />Rangpur , Bangladesh</p></a>
              <a href="#"><p><i className="fa fa-phone" aria-hidden="true" />+88 01761070282</p></a>
              <a href="#"><p><i className="fa fa-envelope" aria-hidden="true" />sshahriar458@gmail.com</p></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer_bottom">
      <div className="footer_overlay" />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="copy_txt">
              <p>Copyright © 2014  Designed by <span>shawon</span></p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="footer_logo">
              <img src="dist/img/fedex.png" />
              <img src="dist/img/master-card.png" />
              <img src="dist/img/paypal.png" />
              <img src="dist/img/visa.png" />
              <img src="dist/img/american-express.png" />
              <img src="dist/img/dhl.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>


    );
  }
