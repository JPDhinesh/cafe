import React from 'react'
import myImage2 from '../Pictures/3.avif'
import myImage3 from '../Pictures/4.jpg'
import myImage4 from '../Pictures/5.webp'
import myImage5 from '../Pictures/6.jpeg'
import myImage6 from '../Pictures/7.webp'
import myImage7 from '../Pictures/8.jpg'
import myImage8 from '../Pictures/9.jpg'
import myImage9 from '../Pictures/10.jpg'
import myImage10 from '../Pictures/11.webp'
import myImage11 from '../Pictures/12.jfif'
import myImage12 from '../Pictures/13.jpg'
import myImage13 from '../Pictures/14.jpg'

export default function ImageGallerys() {
    return (
        <div className='galleryContainer'>
            <h2>GALLERY</h2>
            <div className='galleryImages'>
                <img src={myImage2} className='img-thumbnail'></img>
                <img src={myImage3} className='img-thumbnail'></img>
                <img src={myImage4} className='img-thumbnail'></img>
                <img src={myImage5} className='img-thumbnail'></img>
                <img src={myImage11} className='img-thumbnail'></img>
                <img src={myImage8} className='img-thumbnail'></img>
                <img src={myImage7} className='img-thumbnail'></img>
                <img src={myImage9} className='img-thumbnail'></img>
                <img src={myImage10} className='img-thumbnail'></img>
                <img src={myImage6} className='img-thumbnail'></img>
                <img src={myImage12} className='img-thumbnail'></img>
                <img src={myImage13} className='img-thumbnail'></img>
            </div>
        </div>
    )
}
