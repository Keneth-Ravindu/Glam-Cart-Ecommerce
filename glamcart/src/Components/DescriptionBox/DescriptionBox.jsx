import React from 'react'
import './DescriptionBox.css';


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
              </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
          </div>
        <div className="descriptionbox-description">
              <p>
                  Glam Cart is your premier online destination for the latest trends in clothing and fashion.
                  We curate a wide range of stylish outfits for men, women, and kids— from everyday essentials to exclusive,
                  statement pieces—ensuring there’s something for every style and occasion. With a seamless shopping experience,
                  exclusive deals, and a focus on quality and affordability, Glam Cart empowers you to express your unique style
                  and elevate your wardrobe effortlessly.
              </p>
        </div>
    </div>
  )
}

export default DescriptionBox
