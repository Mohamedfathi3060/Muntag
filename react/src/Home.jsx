import React, { Component } from 'react'
import CategoryCard from "./CategoryCard"
import ProductCard from "./ProductCard"
import ".//home.css"
import ".//borders.css"
export default class Home extends Component {
    componentDidMount(){
        let icons = document.querySelectorAll(".cards .col-md-3 .card .cardtext .icons svg");
        for (let index = 0; index < icons.length; index++) {
            icons[index].addEventListener("click",()=>{
                icons[index].classList.toggle("clickedIcon");
            });
        }
    }

    getRatingStars(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
        const stars = [];
    
        for (let i = 0; i < fullStars; i++) {
            stars.push(<svg width="16" key={`full-${i}`} className="me-1" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" fill="#FFAD33"/>
            </svg>);
        }
    
        if (halfStar) {
            stars.push(<svg width="16" key="half" className="me-1" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="half-fill" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="50%" stopColor="#FFAD33"/>
                    <stop offset="50%" stopColor="white"/>
                  </linearGradient>
                </defs>
                <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" 
                      fill="url(#half-fill)" 
                      stroke="#FFAD33" 
                      strokeWidth="1" />
            </svg>);
        }
    
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<svg width="16" key={`empty-${i}`} className="me-1" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.25" d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" fill="black"/>
            </svg>);
        }
    
        return stars;
    }
    render() {
        return (
            <main>
                <section className='cover-section'>
                    <div className="container-fluid px-lg-5 px-4">
                        <div className="row ps-lg-5 mx-lg-5 px-4">
                            <div className="col-lg-3 col-12 ps-0 border-lg-right">
                                <div className="categories">
                                    <ul className="d-flex flex-column g-2 w-100 mt-4 list-unstyled">
                                        <li className="d-flex justify-content-between">
                                            <a href="#" className="link-dark link-underline-opacity-0" title="Women's Fashion">
                                                <p className="fw-bold">Women's Fashion</p> 
                                            </a>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <a href="#" className="link-dark link-underline-opacity-0" title="Women's Fashion">
                                                <p className="fw-bold">Men's Fashion</p> 
                                            </a>
                                        </li>
                                        <li className="">
                                            <a href="#" className="link-dark link-underline-opacity-0" title="Electronics">
                                                <p className="fw-bold">Electronics</p> 
                                            </a>
                                        </li>
                                        <li className="">
                                            <a href="#" className="link-dark link-underline-opacity-0" title="Home & Lifestyle">
                                                <p className="fw-bold">Home & Lifestyle</p> 
                                            </a>
                                        </li>
                                        <li className="">
                                            <a href="#" className="link-dark link-underline-opacity-0" title="Medicine">
                                                <p className="fw-bold">Medicine</p> 
                                            </a>
                                        </li>
                                        <li className="">
                                            <a href="#" className="link-dark link-underline-opacity-0" title="Sports & Outdoor">
                                                <p className="fw-bold">Sports & Outdoor</p> 
                                            </a>
                                        </li>
                                        <li className="">
                                            <a href="#" className="link-dark link-underline-opacity-0" title="Baby & Toys">
                                                <p className="fw-bold">Baby & Toys</p> 
                                            </a>
                                        </li>
                                        <li className="">
                                            <a href="#" className="link-dark link-underline-opacity-0" title="Groceries & Pets">
                                                <p className="fw-bold">Groceries & Pets</p> 
                                            </a>
                                        </li>
                                        <li className="">
                                            <a href="#" className="link-dark link-underline-opacity-0" title="Health & Beauty">
                                                <p className="fw-bold">Health & Beauty</p> 
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-9 col-12 px-lg-5 px-0">
                                <div className="layout d-flex col-12 bg-black px-lg-0 mt-lg-4 position-relative">
                                    <div className="layouttext col-md-4 py-5 ps-5">
                                        <p className="text-white productname">iPhone 14 Series</p>
                                        <h1 className="text-white marketingline my-2">Up to 10% off Voucher</h1>
                                        <div>
                                            <a href="#" className="text-white text-decoration-none border-bottom border-light">Shop Now</a>
                                            <a href="#" title="Shop Now" className="text-white">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="layoutimg col-md-6 offset-1 pt-5 pe-lg-5 pe-2">
                                        <img src="imgs/cover-product-1.jpeg" alt="" className="w-100"/>
                                    </div>
                                    <div className="layouttrackers">
                                        <ul className="d-flex w-100 justify-content-center w-100 m-0 list-unstyled">
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="divider d-flex justify-content-center my-5">
                    <svg width="1170" height="1" viewBox="0 0 1170 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line opacity="0.3" x1="1170" y1="0.25" y2="0.25" stroke="black" strokeWidth="0.5"/>
                    </svg>
                </div>
                <section className="flash-sales-section">
                    <div className="container-fluid px-lg-5 px-4">
                        <div className="row ps-md-4 mx-md-5">
                            <div className="title m-0 d-flex align-items-center">
                                <img src="./imgs/headerIcon.svg" alt="Section Title Icon" className="m-2"/>
                                <p className="fw-bold text-danger m-0">Today's</p>
                            </div>
                            <div className="d-flex flex-wrap justify-content-md-between justify-content-center ps-3 my-3">
                                <div className="text">
                                    <h1 className="fw-bold">Flash Sales</h1>
                                </div>
                                <div className="timer d-flex flex-wrap justify-content-between col-xl-3 col-lg-4 col-md-5 col-12">
                                        <div className="unit d-flex flex-column align-items-center">
                                            <span className="fw-bold">Days</span>
                                            <span className="fs-2 fw-bold">03</span>
                                        </div>
                                        <div className="seperator my-4">
                                            <h2 className='text-danger'>:</h2>
                                        </div>
                                        <div className="unit d-flex flex-column align-items-center">
                                            <span className="fw-bold">Hours</span>
                                            <span className="fs-2 fw-bold">23</span>
                                        </div>
                                        <div className="seperator my-4">
                                            <h2 className='text-danger'>:</h2>
                                        </div>
                                        <div className="unit d-flex flex-column align-items-center">
                                            <span className="fw-bold">minutes</span>
                                            <span className="fs-2 fw-bold">19</span>
                                        </div>
                                        <div className="seperator my-4">
                                            <h2 className='text-danger'>:</h2>
                                        </div>
                                        <div className="unit d-flex flex-column align-items-center">
                                            <span className="fw-bold">Seconds</span>
                                            <span className="fs-2 fw-bold">56</span>
                                        </div>
                                </div>
                                <div className="controlicons">
                                    <span className="leftarrow">
                                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="23" cy="23" r="23" fill="#F5F5F5"/>
                                        <path d="M22 16L15 23L22 30M15 23H31" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="rightarrow">
                                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="23" cy="23" r="23" fill="#F5F5F5"/>
                                            <path d="M14.5 23H31M31 23L24 16M31 23L24 30" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg> 
                                    </span>
                                </div>
                            </div>
                            <div className="cards col-12 d-flex flex-wrap g-4 my-5">
                                {/* {
                                    this.props.saleProducts.map((product,i)=>(
                                        <ProductCard name={product.name} price={product.price.value} sale={product.sale} image={product.allArticleBaseImages[0]} index={i}/>
                                    ))
                                } */}
                            </div>
                        </div>
                    </div>
                </section>
                <div className="divider d-flex justify-content-center my-5">
                    <svg width="1170" height="1" viewBox="0 0 1170 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line opacity="0.3" x1="1170" y1="0.25" y2="0.25" stroke="black" strokeWidth="0.5"/>
                    </svg>
                </div>
                <section className="browse-by-category-section">
                    <div className="container-fluid px-lg-5 px-4">
                        <div className="row ps-md-4 mx-md-5">
                            <div className="title m-0 d-flex align-items-center">
                                <img src="./imgs/headerIcon.svg" alt="Section Title Icon" className="m-2"/>
                                <p className="fw-bold text-danger m-0">Categories</p>
                            </div>
                            <div className="d-flex justify-content-between ps-3 my-3">
                                <div className="text">
                                    <h1 className="fw-bold">Browse By Catrgory</h1>
                                </div>
                                <div className="controlicons">
                                    <span className="leftarrow">
                                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="23" cy="23" r="23" fill="#F5F5F5"/>
                                        <path d="M22 16L15 23L22 30M15 23H31" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="rightarrow">
                                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="23" cy="23" r="23" fill="#F5F5F5"/>
                                            <path d="M14.5 23H31M31 23L24 16M31 23L24 30" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg> 
                                    </span>
                                </div>
                            </div>
                            <div className="cards d-flex flex-wrap g-4 justify-content-center my-5">
                                
                            </div>
                        </div>
                    </div>
                </section>
                <div className="divider d-flex justify-content-center my-5">
                    <svg width="1170" height="1" viewBox="0 0 1170 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line opacity="0.3" x1="1170" y1="0.25" y2="0.25" stroke="black" strokeWidth="0.5"/>
                    </svg>
                </div>
                <section className="best-selling-products-section">
                    <div className="container-fluid px-lg-5 px-4">
                        <div className="row ps-md-4 mx-md-5">
                            <div className="title m-0 d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <img src="./imgs/headerIcon.svg" alt="Section Title Icon" className="m-2"/>
                                    <p className="fw-bold text-danger m-0">This Months</p>
                                </div>
                                <button type='button' className='btn btn-danger'>View All</button>
                            </div>
                            <div className="d-flex justify-content-between ps-3 my-3">
                                <div className="text">
                                    <h1 className="fw-bold">Best Selling Products</h1>
                                </div>
                            </div>
                            <div className="cards d-flex flex-wrap g-4 my-5">
                                {/* {
                                    this.props.exploreProducts.map((product,i)=>(
                                        <ProductCard name={product.name} price={product.price.value} sale={product.sale} image={product.allArticleBaseImages[0]} index={i}/>
                                    ))
                                } */}
                            </div>
                        </div>
                    </div>
                </section>
                <div className="divider d-flex justify-content-center my-5">
                    <svg width="1170" height="1" viewBox="0 0 1170 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line opacity="0.3" x1="1170" y1="0.25" y2="0.25" stroke="black" strokeWidth="0.5"/>
                    </svg>
                </div>
                <section className="explore-products-section">
                    <div className="container-fluid px-lg-5 px-4">
                        <div className="row ps-md-4 mx-md-5">
                            <div className="title m-0 d-flex align-items-center">
                                <img src="./imgs/headerIcon.svg" alt="Section Title Icon" className="m-2"/>
                                <p className="fw-bold text-danger m-0">Our Products</p>
                            </div>
                            <div className="d-flex justify-content-between ps-3 my-3">
                                <div className="text">
                                    <h1 className="fw-bold">Explore Our Products</h1>
                                </div>
                                <div className="controlicons">
                                    <span className="leftarrow">
                                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="23" cy="23" r="23" fill="#F5F5F5"/>
                                        <path d="M22 16L15 23L22 30M15 23H31" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="rightarrow">
                                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="23" cy="23" r="23" fill="#F5F5F5"/>
                                            <path d="M14.5 23H31M31 23L24 16M31 23L24 30" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg> 
                                    </span>
                                </div>
                            </div>
                            <div className="cards d-flex flex-wrap g-4 my-5">
                                {
                                    this.props.exploreProducts.map((product,i)=>(
                                        console.log(product),
                                        <div className="col-md-3 col-12 px-3" key={product.code}>
                                            <ProductCard name={product.name} price={product.price.value} whitePrice={product.whitePrice.value} sale={product.sale} image={product.allArticleBaseImages[0]} index={i} rating={this.getRatingStars(Math.random()*5)}/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
                <div className="divider d-flex justify-content-center my-5">
                    <svg width="1170" height="1" viewBox="0 0 1170 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line opacity="0.3" x1="1170" y1="0.25" y2="0.25" stroke="black" strokeWidth="0.5"/>
                    </svg>
                </div>
                <section className="new-arrival-products-section">
                    <div className="container-fluid px-lg-5 px-4">
                        <div className="row ps-md-4 mx-md-5">
                            <div className="title m-0 d-flex align-items-center">
                                <img src="./imgs/headerIcon.svg" alt="Section Title Icon" className="m-2"/>
                                <p className="fw-bold text-danger m-0">Featured</p>
                            </div>
                            <div className="d-flex justify-content-between ps-3 my-3">
                                <div className="text">
                                    <h1 className="fw-bold">New Arrival</h1>
                                </div>
                                <div className="controlicons">
                                    <span className="leftarrow">
                                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="23" cy="23" r="23" fill="#F5F5F5"/>
                                        <path d="M22 16L15 23L22 30M15 23H31" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="rightarrow">
                                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="23" cy="23" r="23" fill="#F5F5F5"/>
                                            <path d="M14.5 23H31M31 23L24 16M31 23L24 30" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg> 
                                    </span>
                                </div>
                            </div>
                            <div className="cards d-flex flex-wrap">
                                <div className="col-md-5 col-12 me-lg-5">
                                    <div className="productcard position-relative m-2 py-5">
                                        <img src="./imgs/ps5-slim-goedkope-playstation_large 1.png" alt="playstation_large" className='w-100 pt-3'/>
                                        <div className="position-absolute z-2 text-white m-4 bottom-0">
                                            <div className="title">PlayStation 5</div>
                                            <div className="description my-2">Black and White version of the PS5 <br/> coming out on sale.</div>
                                            <a href="" className="link-light">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="productcard position-relative m-2">
                                        <img src="./imgs/attractive-woman-wearing-hat-posing-black-background 1.png" alt="attractive-woman-wearing-hat" className='w-100'/>
                                        <div className="position-absolute z-2 text-white m-4 bottom-0">
                                            <div className="title">Women’s Collections</div>
                                            <div className="description my-2">Featured woman collections that <br/> give you another vibe.</div>
                                            <a href="" className="link-light">Shop Now</a>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                        <div className="col-md-6 col-12">
                                            <div className="productcard position-relative d-flex justify-content-around m-2">
                                                <img src="./imgs/speakers.png" alt="speakers" className='w-50'/>
                                                <div className="position-absolute z-2 text-white m-4 bottom-0 start-0">
                                                    <div className="title">Speakers</div>
                                                    <div className="description my-1">Amazon wireless speakers</div>
                                                    <a href="" className="link-light">Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="productcard position-relative d-flex justify-content-around m-2">
                                                    <img src="./imgs/Perfume.png" alt="Perfume" className='w-50'/>
                                                    <div className="position-absolute z-2 text-white m-4 bottom-0 start-0">
                                                        <div className="title">Perfume</div>
                                                        <div className="description my-1">GUCCI INTENSE OUD EDP</div>
                                                        <a href="" className="link-light">Shop Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="divider d-flex justify-content-center my-5">
                    <svg width="1170" height="1" viewBox="0 0 1170 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line opacity="0.3" x1="1170" y1="0.25" y2="0.25" stroke="black" strokeWidth="0.5"/>
                    </svg>
                </div>
                <section className='features-section'>
                    <div className="container-fluid px-lg-5 px-4">
                        <div className="row ps-md-4 mx-md-5">
                            <div className="col-md-4">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="./imgs/Services.png" alt="Delivery Service"/>
                                    <h4 className='fw-bold my-2'>FREE AND FAST DELIVERY</h4>
                                    <p>Free delivery for all orders over $140</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="./imgs/Services2.png" alt="Delivery Service"/>
                                    <h4 className='fw-bold my-2'>24/7 CUSTOMER SERVICE</h4>
                                    <p>Friendly 24/7 customer support</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="./imgs/Services3.png" alt="Delivery Service"/>
                                    <h4 className='fw-bold my-2'>MONEY BACK GUARANTEE</h4>
                                    <p>We reurn money within 30 days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
