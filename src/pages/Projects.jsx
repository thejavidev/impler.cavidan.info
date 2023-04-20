import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {implerLogo, worksHover, worksImg } from '../assets';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

const swiperCard =[
  {
    id:1,
    clientName:"Tefal",
    image:worksImg,
    imageOnHover:worksHover,
  },
  {
    id:2,
    clientName:"Tefal",
    image:worksImg,
    imageOnHover:worksHover,
  },
  {
    id:3,
    clientName:"Tefal",
    image:worksImg,
    imageOnHover:worksHover,
  },
  {
    id:4,
    clientName:"Tefal",
    image:worksImg,
    imageOnHover:worksHover,
  },
  {
    id:5,
    clientName:"Tefal",
    image:worksImg,
    imageOnHover:worksHover,
  }
]

const Projects = () => {
  return (
    <section className='bg-[#234656] pt-[150px] pb-[150px] pr-0 pl-0 relative w-[100%] h-[100%]'>
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
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              pagination={{ clickable: true }}
              loop={true}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {swiperCard && swiperCard?.map((item,index)=>(
                <SwiperSlide key={index}>
                  <div className="flex flex-col gap-4">
                    <div className="hoverWorks">
                      <Link className='w-[100%] cursor-pointer'>
                        <div className="image imageWorks relative overflow-hidden">
                            <img className='w-[100%]' src={item.image} alt="" />
                            <div className="hover-img w-[100%] absolute  transformWorks " >
                              <img src={item.imageOnHover} alt="" />
                            </div>
                        </div>
                        <div className=" flex items-center pt-[15px] ">
                          <span className='block w-[10px] h-[10px] bg-[#EFC643] rounded-full mr-2' ></span>
                          <div className=" flex items-center">
                            <h3 className="text-white text-[14px] ">Client :</h3>
                            <h3 className="text-white text-[14px] pl-2">{item.clientName}</h3>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="hoverWorks">
                      <Link className='w-[100%] cursor-pointer'>
                        <div className="image imageWorks relative overflow-hidden">
                            <img className='w-[100%]' src={item.image} alt="" />
                            <div className="hover-img w-[100%] absolute  transformWorks " >
                              <img src={item.imageOnHover} alt="" />
                            </div>
                        </div>
                        <div className=" flex items-center pt-[15px] ">
                          <span className='block w-[10px] h-[10px] bg-[#EFC643] rounded-full mr-2' ></span>
                          <div className=" flex items-center">
                            <h3 className="text-white text-[14px] ">Client :</h3>
                            <h3 className="text-white text-[14px] pl-2">{item.clientName}</h3>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="hoverWorks">
                      <Link className='w-[100%] cursor-pointer'>
                        <div className="image imageWorks relative overflow-hidden">
                            <img className='w-[100%]' src={item.image} alt="" />
                            <div className="hover-img w-[100%] absolute  transformWorks " >
                              <img src={item.imageOnHover} alt="" />
                            </div>
                        </div>
                        <div className=" flex items-center pt-[15px] ">
                          <span className='block w-[10px] h-[10px] bg-[#EFC643] rounded-full mr-2' ></span>
                          <div className=" flex items-center">
                            <h3 className="text-white text-[14px] ">Client :</h3>
                            <h3 className="text-white text-[14px] pl-2">{item.clientName}</h3>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Row>
        </Container>
    </section>
  )
}

export default Projects
