import React from 'react'
import { Box } from './ui/Box'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
const Hero = () => {
  return (
    <><div >
      <Box />
    </div>
    <div>
        <TextGenerateEffect
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
          words="Transforming Concepts into Seamless Experiences" />
    </div></>
    
  )
}

export default Hero