import React from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { loadposts } from '../store/posts';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { AiFillCloseCircle } from 'react-icons/Ai';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getMultiLang as ml } from '../MultiLang';
import LoaderContent from '../loader/loaderContent';

const ServiceModal3 = ({ idP, altText, srcPic, srcPicHover, titleAll, eventKey }) => {
    const [loading, setLoading] = useState(false)
    const [isOpened, setIsOpened] = useState(false);
    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
        var elms = document.querySelectorAll('.list');
        [].forEach.call(elms, function (el) {
            el.classList.add("closeDiv");
        });

    }
    function toggle2() {
        setIsOpened(wasOpened => !wasOpened);
        var elms2 = document.querySelector('.close');
        elms2.classList.add("closeDiv");

        var elms = document.querySelectorAll('.list');
        [].forEach.call(elms, function (el) {
            el.classList.remove("closeDiv");
        });

    }
    const [t] = useTranslation("translation");
    const dispatch = useDispatch();
    const data = useSelector((state) => state.list);
    const apidata = data.data?.services_section.serviceslists;
    useEffect(() => {
        dispatch(loadposts());
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 100);
    }, [dispatch]);
    return (
        <>
            <Col xl='3' lg='4' md='6' sm='12'  className='list p-[25px] flex sm:items-center flex-col cursor-pointer' id={idP} onClick={toggle}>
                <div className="image">
                    {
                        loading ? <LoaderContent /> :
                            <>
                                <img className='first w-[70px]' src={srcPic} alt={altText} />
                                <img className='second w-[70px] hidden' src={srcPicHover} alt={altText} />
                            </>
                    }
                </div>
                <div className="title mt-10">
                    <h3 className='xl:w-[50%] sm:w-[100%] text-[20px] text-white'>{titleAll}</h3>
                </div>
            </Col>
            {isOpened && (
                <div className='relative bg-[#AE4D36] border-none1 p-10 sm:p-4' >
                    <div className="close absolute right-4 top-2 cursor-pointer ">
                        <AiFillCloseCircle onClick={toggle2} className='text-[#301710] text-[25px]' />
                    </div>
                    <div className="nav-tabs border-none1">
                        <Tab.Container id="left-tabs-example" defaultActiveKey={eventKey} className=''>
                            <Row>
                                <Col lg={12}>
                                    <Nav className="flex bg-[#B9553A] w-[100%] pr-5 pl-5 justify-start sm:mt-6">

                                        {apidata && apidata.map((item) => (

                                            <Nav.Item key={item.id} className='list2'>
                                                <Nav.Link to={item.eventKey} eventKey={item.eventKey} className='flex items-center outline-none border-none1 border-radius-none image'>

                                                    <img src={item.src} className='first w-[70px] sm:w-[40px]' alt="" />
                                                    <img className='second w-[70px] sm:w-[40px] hidden' src={item.src_hover} alt={item.alt} />
                                                </Nav.Link>
                                            </Nav.Item>
                                        ))}
                                    </Nav>
                                </Col>
                                <Col lg={12} className='mt-6'>
                                    <Tab.Content>
                                        {apidata && apidata.map((item) => (
                                            <Tab.Pane eventKey={item.eventKey} key={item.id}>
                                                <Row>
                                                    <Col lg='8' className='text-white sm:mb-6'>
                                                        <p className='text-white text-[24px] md:text-[18px] pt-[0px] pl-0 pr-0 pb-[10px] font-bold'> {ml(item.title_az, item.title_ru, item.title_en)}</p>
                                                        <div className='sm:text-start' dangerouslySetInnerHTML={{ __html: ml(item.desc_left_az, item.desc_left_ru, item.desc_left_en) }}></div>
                                                    </Col>
                                                    <Col lg='4' className='text-white'>
                                                        <div dangerouslySetInnerHTML={{ __html: ml(item.desc_right_az, item.desc_right_ru, item.desc_right_en) }}></div>

                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                        ))}
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </div>
            )}
        </>
    )
}

export default ServiceModal3