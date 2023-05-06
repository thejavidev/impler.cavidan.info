import React, { memo } from 'react'
import { useCallback } from 'react';
import Col from 'react-bootstrap/Col';
import { LazyLoadImage } from "react-lazy-load-image-component";
const PartnersItem = ({ partnerSrc }) => {
   
    return (
        <Col lg='2' md='3' sm='4' xs='4' className='h-full'>
            <div className="img h-[100px] flex justify-center items-center" >
                <LazyLoadImage className='grayscale hover:grayscale-0 transition-all cursor-pointer' src={partnerSrc} alt="" />
            </div>
        </Col>
    )
}

export default memo(PartnersItem)
