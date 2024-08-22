import React, { Component } from 'react'
import ".//signup.css"

export default class Signup extends Component {
  render() {
    return (
        <main>
            <div className="container-fluid my-5 px-0">
                <div className="row justify-content-between mt-4 ms-0">
                    <div className="col-md-6 p-0">
                        <div className="">
                            <img src="imgs/Signup.jpeg" alt="SignUp Wallpaper" className="w-100"></img>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="form accountform w-50">
                            <h1>Create an account</h1>
                            <h6 className="text-secondary my-3">Enter your details below</h6>
                            <div className="errorscontainer bg-danger rounded-1 d-none">
                                <ul className="errorslist">
                                </ul>
                            </div>
                            <div className="inputcontainer my-4">
                                <input type="text" className="form-control border-0 border-bottom inputfield empty" id="name" title="Enter Your Name" placeholder="" required/>
                                <label htmlFor="name" className="floatinglabel px-2">Name</label>
                            </div>
                            <div className="inputcontainer my-4">
                                <input type="text" className="form-control border-0 border-bottom inputfield empty" id="identifier" title="Enter Your Email or Phone Number" placeholder="" required/>
                                <label htmlFor="identifier" className="floatinglabel px-2">Email or Phone Number</label>
                            </div>
                            <div className="inputcontainer my-4">
                                <input type="password" className="form-control border-0 border-bottom inputfield empty" id="password" title="Enter Your Password" placeholder="" required/>
                                <label htmlFor="password" className="floatinglabel px-2">Password</label>
                            </div>
                            <div className="inputcontainer mt-4">
                                <input type="password" className="form-control border-0 border-bottom inputfield empty" id="confirmPassword" title="Enter Your Password Again" placeholder="" required/>
                                <label htmlFor="confirmPassword" className="floatinglabel px-2">Confirm Password</label>
                            </div>
                            <button type="submit" className="btn btn-danger w-100 px-2 py-3 mt-4 mb-2 fw-bold createAccountBtn">Create Account</button>
                            <div className="googlesignup">
                                <button type="submit" className="btn btn-outline-success outlinehover text-black w-100 px-2 py-3 fw-bold">Sign Up with Google</button>
                                <span className="googleicon">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_858_3336)">
                                            <path d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z" fill="#4285F4"/>
                                            <path d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z" fill="#34A853"/>
                                            <path d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z" fill="#FBBC04"/>
                                            <path d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z" fill="#EA4335"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_858_3336">
                                                <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                            </div>
                            <div className="d-flex w-100 justify-content-center my-3">
                                <p className="text-secondary d-inline-block me-2">already have account?</p>
                                <a href="#" className="link-dark text-decoration-underline fw-bold loginlink" onClick={
                                    ()=>{this.props.updatecurrentPage("Login")}
                                }>login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
  }
}
