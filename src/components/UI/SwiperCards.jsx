import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AiOutlineClose } from 'react-icons/Ai';


export default function SwiperCards({ img1, imgHvr, idP, clientNm,lngText ,prd}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [t] =useTranslation("translation");

    return (
        <>
            <Col lg='4' className="flex flex-col gap-20 mb-10 pr-10">
                <div className="hoverWorks">
                    <Link className='w-[100%] cursor-pointer' onClick={handleShow} type="button" data-bs-toggle="modal" data-bs-target={'#mymodal' + idP} >
                        <div className="image imageWorks relative overflow-hidden">
                            <img className='w-[100%]' src={img1} alt="" />
                            <div className="hover-img w-[100%] absolute  transformWorks " >
                                <img src={imgHvr} alt="" />
                            </div>
                        </div>
                        <div className="flex items-center pt-[15px] ">
                            <span className='block w-[10px] h-[10px] bg-[#EFC643] rounded-full mr-2' ></span>
                            <div className=" flex items-center">
                                <h3 className="text-white text-[14px] ">Client :</h3>
                                <h3 className="text-white text-[14px] pl-2">{clientNm}</h3>
                            </div>
                        </div>
                    </Link>
                </div>
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

                <Modal.Body className='relative bg-[#234656] p-[40px]'>
                    <Button onClick={handleClose} className='absolute right-1 top-1 border-none1 text-[25px] btn'>
                        <AiOutlineClose   /> 
                    </Button>
                    <Row>
                        <Col lg='6' md='6' className='flex flex-col'>
                            <h3 className='text-white text-[27px] font-bold'>Social Media service for {clientNm} </h3>
                            <div className="flex items-center pt-3">
                                <div className="flex items-center">
                                    <span className='block w-[10px] h-[10px] bg-[#EFC643] rounded-full mr-[10px]'></span>
                                    <div className="flex items-center">
                                        <h3 className='text-white opacity-70 text-[14px]'>Client : </h3>
                                        <h3 className='pl-[12px] text-white opacity-70 text-[14px]'>{clientNm}</h3>
                                    </div>
                                </div>
                                <div className="flex items-center ml-[20px]">
                                    <span className='block w-[10px] h-[10px] bg-[#EFC643] rounded-full mr-[10px]'></span>
                                    <div className="flex items-center">
                                        <h3 className='text-white opacity-70 text-[14px]'>Period :</h3>
                                        <h3 className='pl-[12px] text-white opacity-70 text-[14px]'>{prd}</h3>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="text-white pt-3">
                                {lngText}
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <img src={img1} className='w-[100%] h-[100%] object-cover' alt="" />
                        </Col>
                    </Row>
                </Modal.Body>

            </Modal>
        </>
    )
}


