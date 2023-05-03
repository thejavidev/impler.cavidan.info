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


export default function ProjectCard({ img1, imgHvr, idP, clientNm, imagesAll, lngText, titleProject, prd }) {
    const [isOpened, setIsOpened] = useState(false);
    const [loading, setLoading] = useState(false)
    const [t] = useTranslation("translation");
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, []);
    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
        let elms = document.querySelectorAll('.projectList');
        [].forEach.call(elms, function (el) {
            el.classList.add("closeDivPorject");
        });

    }
    function toggle2() {
        setIsOpened(wasOpened => !wasOpened);
        let elms2 = document.querySelector('.closeProject');
        elms2.classList.add("closeDivPorject");

        let elms = document.querySelectorAll('.projectList');
        [].forEach.call(elms, function (el) {
            el.classList.remove("closeDivPorject");
        })
    }
    return (
        <>
            <Col lg='4' className="flex flex-col gap-20 mb-10 ">
                {
                    loading ? <LoaderWorks /> :
                        <div className="hoverWorks projectList" onClick={toggle} id={idP}>
                            <Link className='w-[100%] cursor-pointer' to='/'  >
                                <div className="image imageWorks relative overflow-hidden">
                                    <img className='w-[100%] h-[200px] object-cover' src={img1} alt="" />
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
            {
                isOpened && (
                    <div className='relative bg-[#234656] p-[40px] md:p-[15px]' id={idP}>
                        <Button onClick={toggle2} className='absolute closeProject right-[-20px] top-[-20px] border-none1 text-[25px] btn'>
                            <AiOutlineClose />
                        </Button>
                        <Row>
                            <Col lg='6' md='12' className='flex flex-col lg:mb-10'>
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
                                        imagesAll && imagesAll.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                {
                                                    loading ? <LoaderWorks /> :
                                                        <img src={item.src} className='w-[100%] h-[400px] md:h-[200px] object-cover' alt="" />
                                                }
                                            </SwiperSlide>
                                        ))
                                    }


                                </Swiper>

                            </Col>
                        </Row>
                    </div>
                )
            }
        </>
    )
}


