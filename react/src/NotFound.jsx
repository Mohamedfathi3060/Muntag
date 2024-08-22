import React, { Component } from 'react'
import ".//notfound.css"

export default class NotFound extends Component {
  render() {
    return (
        <main className='bg-dark py-5 notfound'>
            <div className="container my-5 py-5">
                <div className="row text-center align-items-center py-5">
                    <h1 className="fw-bolder text-uppercase text-white">
                        404
                    </h1>
                    <h2 className='fw-bolder text-uppercase text-white'>
                        Page Not FOund
                    </h2>
                </div>
            </div>
        </main>
    )
  }
}
