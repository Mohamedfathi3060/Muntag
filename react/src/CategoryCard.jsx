import React, { Component } from 'react'

export default class CategoryCard extends Component {
  render() {
    return (
        this.props.categories.map((category,i) => {
            return (
            <div className="col-md-2 px-3" key={i}>
                <div className="card d-flex flex-column align-items-center py-5">
                    <div className="categoryicon">
                        {category.name}
                    </div>
                    <div className="categoryname">
                        <p className="m-0 fw-bold">{category.alpha2code}</p>
                    </div>
                </div>
            </div>
            )
        })
    )
  }
}
