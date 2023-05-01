import React from 'react';
import Container from 'react-bootstrap/Container';
import { loaderContent } from '../../assets';

const LoaderContent = () => {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] overflow-hidden bg-[#1b5e75] z-[-1] flex items-center justify-center transition-all '>
        <Container >
            <div className="flex items-center justify-center">
                <img src={loaderContent} alt="" />
            </div>
        </Container>
    </div>
  )
}

export default LoaderContent
