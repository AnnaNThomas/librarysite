import React from 'react'
import Nav from './Nav'

const SearchBook = () => {
  return (
    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xx-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Book Title</label>
                    <input type="text" className="form-contol" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button class="btn btn-success">Search</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBook