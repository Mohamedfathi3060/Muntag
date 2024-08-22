import React, { Component } from 'react'
import ".//Header.css"

export default class Header extends Component {
    componentDidUpdate = ()=>{
        let links = document.querySelectorAll("header .nav li a");
        for (let i = 0; i < links.length; i++) {
          if (links[i].innerHTML === this.props.currentPage) {
            links[i].classList.add("active");
          }
          else {
            links[i].classList.remove("active");
          }
        }
      }
    render() {
        return (
            <>
                <nav className="py-3 bg-black border-bottom">
                <div className="container-fluid d-flex flex-wrap">
                <div className="row w-100 justify-content-between">
                    <div className="col-md-10">
                        <div className="d-flex w-100 h-100 justify-content-center align-items-center">
                            <p className="text-white m-0">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                            <a href="#" className="text-decoration-underline text-white fw-bold ms-2">Shop Now</a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div>
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown" aria-expanded="false">English</a>
                                    <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">English</a></li>
                                    <li><a className="dropdown-item" href="#">Arabic</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                </nav>
                <header className="py-3 border-bottom">
                <div className="container-fluid px-lg-5 px-4">
                    <div className="row ps-lg-5 mx-lg-5 px-4">
                            <div className="col-md-2 col-6 p-0">
                                <div className="align-self-start">
                                    <a href="#" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none" onClick={()=>{
                                        this.props.updatecurrentPage("Home");
                                    }}>
                                    <span className="fs-4 fw-bold">Muntag</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 d-md-block d-flex col-6">
                                <div className="d-flex justify-content-center">
                                    <ul className="nav col-12 col-md-auto d-flex mb-2 justify-content-center mb-md-0">
                                        <li><a href="#" className="nav-link px-4 text-black fw-bold" onClick={()=>{
                                            this.props.updatecurrentPage("Home");

                                        }}>Home</a></li>
                                        <li><a href="#" className="nav-link px-4 text-black fw-bold"onClick={()=>{
                                            this.props.updatecurrentPage("Contact")
                                        }}>Contact</a></li>
                                        <li><a href="#" className="nav-link px-4 text-black fw-bold"onClick={()=>{
                                            this.props.updatecurrentPage("About")
                                        }}>About</a></li>
                                        <li><a href="#" className="nav-link px-4 text-black fw-bold"onClick={()=>{
                                            this.props.updatecurrentPage("Signup")
                                        }}>Signup</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="d-flex justify-content-around">
                                    <form className="col-md-7 searchform" role="search">
                                        <input type="search" className="searchinput form-control" placeholder="What are you looking for?" aria-label="Search"/>
                                        <button type="submit" className="fa fa-search searchbutton" title="searchButton"></button>
                                    </form>
                                    <div className="col-md-3">
                                        <div className="d-flex justify-content-around">
                                            <a href="#" title="favorites"><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </a>
                                            <a href="#" title="favorites"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M3 5H7L10 22H26" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                                
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}
