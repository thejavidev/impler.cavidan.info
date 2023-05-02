import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { implerLogo } from '../assets';
import Container from 'react-bootstrap/Container';
import { useTranslation } from 'react-i18next';
import React, { useEffect } from "react";
import { getMultiLang as ml } from '../components/MultiLang';
import { useDispatch, useSelector } from 'react-redux';
import { loadposts } from "../components/store/posts";
import { useState } from 'react';
import LoaderContent from '../components/loader/loaderContent';
const About = () => {

  const [t] = useTranslation("translation");
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const data = useSelector((state) => state.list);
  const apidata = data.data?.about_section;

  useEffect(() => {
    dispatch(loadposts());
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 400);
  }, [dispatch]);


  return (
    <>
      <div className='block bg-[#89a225] pt-[150px] sm:pt-[50px] pb-[150px] sm:pb-[50px] pl-0 pr-0 md:pl-10 md:pr-10' id='about'>
        <Container>
          <Row>
            <Col lg='12' md='12' className='mb-10 order-[-2]'>
              <h2 className='text-white text-[50px] sm:text-[35px] font-bold uppercase pt-0 pl-0 pb-10 pr-0 '>
                {t("about")}
              </h2>
              <div className="w-[160px]">
                {
                  loading ? <LoaderContent />
                    :
                    <img src={implerLogo} alt="" className='max-w-[100%] h-auto' />
                }
              </div>
            </Col>
            <Col lg='8' md='12' sm='12' >
              <div className="aboutText">
                {
                  loading ? <LoaderContent />
                    :
                    <div className='text-white text-[18px] pt-[30px] pb-[30px] pl-0 pr-0 columns-2 sm:columns-1'
                      dangerouslySetInnerHTML={{ __html: apidata && ml(apidata?.about_text_az, apidata?.about_text_ru, apidata?.about_text_en) }}></div>
                }
              </div>

            </Col>
            <Col lg='4' md='12' sm='12' className='orderBy'>
              <div className="aboutImg justify-center flex">
                <img src={apidata && apidata?.about_img_img_responsive} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}

export default About
