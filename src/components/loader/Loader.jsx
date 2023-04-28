import React from 'react';
import Container from 'react-bootstrap/Container';
import { loaderGif } from '../../assets';

const Loader = () => {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 w-[100%] h-[100vh] overflow-hidden bg-[#1b5e75] z-[999] flex items-center justify-center transition-all '>
        <Container >
            <div className="flex items-center justify-center">
                <img src={loaderGif} alt="" />
            </div>
        </Container>
    </div>
  )
}

export default Loader
