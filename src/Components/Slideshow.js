import React from 'react'
import './Style.css'

export default function Slideshow() {
    return (
        <div>
            <div className='imageSlideshow'>
                <img src='https://www.renderhub.com/zyed/container-coffee-shop/container-coffee-shop-01.jpg' width={1600}></img>
                {/* <img src='https://scontent-maa2-1.xx.fbcdn.net/v/t31.18172-8/18209248_1527773350575274_1162458339152440873_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=wA0qT65bAMEAX8Ky5qZ&_nc_ht=scontent-maa2-1.xx&oh=00_AT-g1TlV3r3Fo45BeVDaQg0o6rOjtVt4SW9MUQsmC9n55A&oe=63776CD8'></img> */}
            </div>
            <div className='contactInfoContainer'>
                <div className='headingContainer'>
                    <h1 className='headingSlideshow'>WELCOME TO <br></br>CAFE</h1>
                    <br></br>
                    <button type="button" class="btn btn-outline-dark btn-lg">Order Now</button>
                </div>
                <div className='pt-5'>
                    <div className='contactInfo'>
                        <p><i class="fas fa-phone-alt"></i></p>
                        <p>+91 9876543210</p>
                    </div>
                    <div className='contactInfo'>
                        <p> <i class="fas fa-envelope"></i></p>
                        <p>xyz@yahoo.comm</p>
                    </div>
                    <div className='contactInfo'>
                        <p><i class="fas fa-map-marker-alt"></i></p>
                        <p>Marathahalli, Bangalore, Karnataka</p>
                    </div>
                </div>
                <div className='mediaInfo p-3'>
                    <a href=''><i class="fab fa-facebook-square"></i></a>
                    <a href=''><i class="fab fa-instagram"></i></a>
                    <a href=''><i class="fab fa-twitter"></i></a>
                </div>
                <div className='reserveInfo'>
                    <h4>RESERVE A TABLE</h4>
                    <button className='btn btn-outline-danger' type='button'>+91 8975640132</button>
                </div>
            </div>
        </div>

    )
}
