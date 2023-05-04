import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { implerLogo } from '../assets';
import Container from 'react-bootstrap/Container';
import { useTranslation } from 'react-i18next';
import React, { useEffect } from "react";
import { getMultiLang as ml } from '../components/MultiLang';
import { useState } from 'react';
import LoaderContent from '../components/loader/loaderContent';
const About = ({aboutData}) => {
  const apidata =aboutData;
  const [t] = useTranslation("translation");
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 400);
  }, []);


  return (
    <>
      <div className='bg-[#89a225] pt-[150px] sm:pt-[50px] pb-[150px] sm:pb-[50px] pl-0 pr-0 md:pl-10 md:pr-10 sm:pl-6 sm:pr-6' id='about'>
        <Container>
          <Row>
            <Col lg='12' md='12' className='mb-10 order-[-2] p-0 sm:mb-0'>
              <h2 className='text-white text-[50px] sm:text-[25px] font-bold uppercase pt-0 pl-0 pb-10 pr-0 '>
                {t("about")}
              </h2>
              <div className="w-[160px] sm:w-[100px]">
                {
                  loading ? <LoaderContent />
                    :
                    <img src={implerLogo} alt="" className='max-w-[100%] h-auto ' />
                }
              </div>
            </Col>
            <Col lg='8' md='12' sm='12' className='p-0'>
              <div className="aboutText">
                {
                  loading ? <LoaderContent />
                    :
                    <div className='text-white text-[18px] sm:text-[15px] pt-[30px] pb-[30px] pl-0 pr-0 columns-2 sm:columns-1 sm:text-start'
                      dangerouslySetInnerHTML={{ __html: apidata && ml(apidata?.about_text_az, apidata?.about_text_ru, apidata?.about_text_en) }}></div>
                }
              </div>

            </Col>
            <Col lg='4' md='12' sm='12' className='orderBy p-0'>
              <div className="aboutImg justify-center flex">
                <img src={apidata && apidata?.about_img_img_responsive} className='sm:w-[250px]' alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}

export default About
