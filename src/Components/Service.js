import React from 'react'
import './Style.css'

export default function Service() {
    return (
        <div className='serviceContainer'>
            <h2><span>OUR SERVICE</span></h2>
            <div className='serviceContent'>
                <div>
                    <img src='https://media.istockphoto.com/photos/grilled-chicken-breast-fried-chicken-fillet-and-fresh-vegetable-salad-picture-id928823336?b=1&k=20&m=928823336&s=170667a&w=0&h=B9Z4xlY_-GEBMoQ4AXsajEImBia5g65_4i7TNWc6nwo=' width={450} className='rounded img-thumbnail p-1'></img>
                </div>
                <div className='diningContent p-5'>
                    <h2>DINING IN AND TAKE AWAY</h2>
                    <p>Enjoy The Experience</p>
                    <div className='deliveryContent'>
                        <h5 style={{ backgroundColor: "rgb(204,32,46)" }}>ZOMATO</h5>
                        <h5 style={{ backgroundColor: "rgb(239,132,30)" }}>SWIGGY</h5>
                    </div>
                </div>
            </div>
        </div >
    )
}
