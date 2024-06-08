import React from 'react'
import Nav from './Nav'

const ViewAll = () => {
    return (
        <div>
            <Nav/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h1>BOOK DETAILS</h1>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Book Title</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Publish Year</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>My half GirlFriend</td>
                                    <td>Ottomon</td>
                                    <td>2019</td>
                                    <td>600</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>My half GirlFriend</td>
                                    <td>Ottomon</td>
                                    <td>2019</td>
                                    <td>600</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>My half GirlFriend</td>
                                    <td>Ottomon</td>
                                    <td>2019</td>
                                    <td>600</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>My half GirlFriend</td>
                                    <td>Ottomon</td>
                                    <td>2019</td>
                                    <td>600</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>My half GirlFriend</td>
                                    <td>Ottomon</td>
                                    <td>2019</td>
                                    <td>600</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>My half GirlFriend</td>
                                    <td>Ottomon</td>
                                    <td>2019</td>
                                    <td>600</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>My half GirlFriend</td>
                                    <td>Ottomon</td>
                                    <td>2019</td>
                                    <td>600</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>My half GirlFriend</td>
                                    <td>Ottomon</td>
                                    <td>2019</td>
                                    <td>600</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll