import React, { Component } from 'react'
import ".//Loading.css";

export default class Loading extends Component {
  render() {
    return (
      <div>
        <div className="containter">
            <div className="row justify-content-center align-items-center">
                <span className='circle'></span>
            </div>
        </div>
      </div>
    )
  }
}
