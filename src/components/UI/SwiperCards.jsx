import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AiOutlineClose } from 'react-icons/Ai';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import LoaderWorks from '../loader/LoaderWorks';


export default function SwiperCards({ img1, imgHvr, idP, clientNm, imagesAll, lngText, titleProject, prd }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [loading, setLoading] = useState(false)
    const [t] = useTranslation("translation");
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, []);
    return (
        <>
            <Col lg='4' className="flex flex-col gap-20 mb-10 pr-10">
                {
                    loading ? <LoaderWorks /> :
                        <div className="hoverWorks">
                            <Link className='w-[100%] cursor-pointer' to='/' onClick={handleShow} type="button" data-bs-toggle="modal" data-bs-target={'#mymodal' + idP} >
                                <div className="image imageWorks relative overflow-hidden">
                                    <img className='w-[100%]' src={img1} alt="" />
                                    <div className="hover-img w-[100%] absolute  transformWorks " >
                                        <img src={imgHvr} alt="" />
                                    </div>
                                </div>
                                <div className="flex items-center pt-[15px] ">
                                    <span className='block w-[10px] h-[10px] bg-[#EFC643] rounded-full mr-2' ></span>
                                    <div className=" flex items-center">
                                        <h3 className="text-white text-[14px] capitalize">{t("client")} :</h3>
                                        <h3 className="text-white text-[14px] pl-2 capitalize">{clientNm}</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                }
            </Col>
            <Modal
                show={show}
                size="lg"
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                id={'mymodal' + idP}


            >

                <Modal.Body className='relative bg-[#234656] p-[40px] md:p-[15px]'>
                    <Button onClick={handleClose} className='absolute right-1 top-1 border-none1 text-[25px] btn'>
                        <AiOutlineClose />
                    </Button>
                    <Row>
                        <Col lg='6' md='12' className='flex flex-col'>
                            <h3 className='text-white text-[27px] md:text-[18px] font-bold'>{titleProject} </h3>
                            <div className="flex items-center pt-3 md:flex-col md:items-start">
                                <div className="flex items-center">
                                    <span className='block w-[10px] h-[10px] bg-[#EFC643] rounded-full mr-[10px]'></span>
                                    <div className="flex items-center">
                                        <h3 className='text-white opacity-70 text-[14px] capitalize'>{t("client")} : </h3>
                                        <h3 className='pl-[12px] text-white opacity-70 text-[14px] capitalize'>{clientNm}</h3>
                                    </div>
                                </div>
                                <div className="flex items-center ml-[20px] md:ml-0 md:mt-3">
                                    <span className='block w-[10px] h-[10px] bg-[#EFC643] rounded-full mr-[10px]'></span>
                                    <div className="flex items-center">
                                        <h3 className='text-white opacity-70 text-[14px] capitalize'>{t("period")} :</h3>
                                        <h3 className='pl-[12px] text-white opacity-70 text-[14px] capitalize'>{prd}</h3>
                                    </div>
                                </div>

                            </div>
                            <div className="text-white pt-3 md:text-[14px] ">
                                {lngText}
                            </div>
                        </Col>
                        <Col lg='6' md='12' className='md:pt-6 pt-767 h-[100%]'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                {
                                    imagesAll && imagesAll.map((item,index)=>(
                                        <SwiperSlide key={index}>
                                           {
                                            loading ? <LoaderWorks /> :
                                            <img src={item.src} className='w-[100%] h-[400px] md:h-auto object-cover' alt="" />
                                           }
                                        </SwiperSlide>
                                    ))
                                }
                               

                            </Swiper>

                        </Col>
                    </Row>
                </Modal.Body>

            </Modal>
        </>
    )
}


