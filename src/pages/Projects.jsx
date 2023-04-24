import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { implerLogo } from '../assets';
import { Link } from "react-router-dom";
import { FiChevronDown } from 'react-icons/Fi';
import SwiperCards from '../components/UI/SwiperCards';
import { swiperCard } from '../components/fakeData/LocalData';




const Projects = () => {

    const [nonElement,setNonELement] =useState(9);
    const slice =swiperCard.myDatas.slice(0,nonElement)

    const loadMore  =()=>{
      setNonELement(nonElement+nonElement)
    }
  return (
    <>


      <section className='bg-[#234656] pt-[150px] pb-[150px] pr-0 pl-0 relative w-[100%] h-[100%]' id='projects'>
        <Container>
          <Row>
          
            <Col lg='12' md='12' className='pb-[40px]'>
              <h2 className='text-[#fff] uppercase text-[50px] pt-0 pl-0 pr-0 pb-10 '>Works</h2>
              <Link to='/' >
                <div className="w-[160px] mb-10">
                  <img src={implerLogo} alt="" className='max-w-[100%] h-auto' />
                </div>
              </Link>
            </Col>
            {slice && slice?.map((item, index) => (
                <SwiperCards img1={item.image} imgHvr={item.imageOnHover} clientNm={item.clientName} idP={item.id} key={index} lngText={item.longText} prd={item.period}  />
              ))}
            
          </Row>
          <button onClick={()=>loadMore()} className='flex items-center text-white uppercase font-bold text-[20px]'>
               <FiChevronDown className='mr-2 font-bold text-[30px] text-[#EFC643]' /> daha cox
        </button> 
        </Container>
       
      </section>

     


    </>



  )
}

export default Projects
