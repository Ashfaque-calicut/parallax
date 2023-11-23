import React from 'react'
import ImageOne from './components/ImageOne';
import ImageTwo from './components/ImageTwo';
import ImageThree from './components/ImageThree';
import Text from './components/Text'
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div >
       <ParallaxProvider>
      <ImageOne/>
      <Text/>
      {/* <ImageTwo/>
      <Text/> */}
      <ImageThree/>
      </ParallaxProvider>
      </div>
  );
}

export default App;
