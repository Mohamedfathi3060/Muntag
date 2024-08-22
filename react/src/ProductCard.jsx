import React, { Component } from 'react'

export default class ProductCard extends Component {
    render() {
    return (
        <div className="card border-0 position-relative">
            <div className="cardimg d-flex justify-content-center py-5 rounded-1 position-relative">
                <img src="imgs/explore_product_1.png" alt="Product"/>
                <button type="button" className="btn bg-black text-white opacity-0 w-100 position-absolute bottom-0 fs-5 rounded-top-0">Add To Cart</button>
            </div>
            <div className="cardtext my-3">
                <p className="fw-bold my-1">{this.props.name}</p>
                <div className="productdetails d-flex flex-column">
                    <div className="price">
                        <span className="price fw-bold text-danger me-2">${this.props.price}</span>
                        {
                            this.props.whitePrice !== this.props.price ? <span className="price fw-bold text-secondary opacity-75 text-decoration-line-through">${this.props.whitePrice}</span> : ""
                        }
                    </div>
                    <div className="ratingandraters">
                        <span className="ratingstars align-items-center">
                            {
                                this.props.rating
                            }
                        </span>
                        <span className="raters ms-2 text-secondary fw-bold">(50)</span>
                    </div>
                </div>
                <div className="icons">
                    <svg key={`heart-${this.props.index}`} width="34" height="34" className="mb-1" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="17" cy="17" r="17" fill="white"/>
                        <path d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <svg key={`eye-${this.props.index}`} width="34" height="34" className="mb-0" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="17" cy="17" r="17" fill="white"/>
                        <path d="M26.257 15.962C26.731 16.582 26.731 17.419 26.257 18.038C24.764 19.987 21.182 24 17 24C12.818 24 9.23601 19.987 7.74301 18.038C7.51239 17.7411 7.38721 17.3759 7.38721 17C7.38721 16.6241 7.51239 16.2589 7.74301 15.962C9.23601 14.013 12.818 10 17 10C21.182 10 24.764 14.013 26.257 15.962V15.962Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            {
                this.props.sale === true ? <div className="sale bg-danger text-white rounded-2 px-3 py-1 position-absolute m-2">
                    - {(this.props.price/this.props.whitePrice).toFixed(2)*100}%
                </div> : ""
            }
        </div>
    )
  }
}
