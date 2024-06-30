import React from "react"

import './index.css'

const Description =()=>{
    return(
        <div className="description-container">
           <div className="description-content">
            <h2>Lorem Ipsum </h2>
            <p>Lorem Ipsum available, but the majority have suffered alteration in some form,  making this the first true generator on the Internet. but the majority have suffered alteration in some form, making this the first true generator on the Internet.</p>
            <button className="btn-2">Know More<i class="fa-solid fa-caret-right"></i></button>
           </div>
           <img className="description-image" alt='description' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkmCPIVkrKn0PqMwVjMXmaelcqslN5pzMLJA&s' />
        </div>
    )

}
export default Description