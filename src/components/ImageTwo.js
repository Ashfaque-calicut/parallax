import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import satellite from '../images/satellite.jpeg'

// import image from '../images/image.jpg'

const ImageTwo = () => (
    <Parallax className='image' blur={0} bgImage={satellite} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">a trip to Space</span>
        </div>
       </Parallax>
 
  
);


export default ImageTwo