import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { implerLogo } from '../assets';
import { FiChevronDown } from 'react-icons/Fi';
import SwiperCards from '../components/UI/SwiperCards';
import { useTranslation } from 'react-i18next';
import { getMultiLang as ml } from '../components/MultiLang';
import { useSelector } from 'react-redux';
import LoaderWorks from '../components/loader/LoaderWorks';




const Projects = () => {
  const [t] = useTranslation("translation");
  const [loading, setLoading] = useState(false)
  const data = useSelector((state) => state.list);
  const apidata = data.data?.works;
  const STEP = 9;
  const myapiData = apidata;
  const [items, setItems] = useState(myapiData?.slice(0, STEP));
  const loadMore = () => {
    setItems([...items, ...myapiData?.slice(items?.length, items?.length + STEP)]);
  }
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }, []);
  return (
    <>


      <div className='bg-[#234656] pt-[150px] sm:pt-[50px] pb-[150px] sm:pb-[50px] pr-0 pl-0 relative w-[100%] h-[100%] md:pl-10 md:pr-10' id='projects'>
        <Container>
          <Row>

            <Col lg='12' md='12' className='pb-[40px]'>
              <h2 className='text-[#fff] uppercase text-[50px] sm:text-[35px] pt-0 pl-0 pr-0 pb-10 font-bold'>{t("works")}</h2>
              <div className="w-[160px] mb-10">
                <img src={implerLogo} alt="" className='max-w-[100%] h-auto' />
              </div>
            </Col>
            {
              loading ? <LoaderWorks /> :
                <>
                  {items && items?.map((item, index) => (
                    <SwiperCards img1={item.src} imagesAll={item.images} item={item.src} imgHvr={item.logo} imgModal={item.src} clientNm={item.client_name} dataId={item.id} idP={item.id} key={index} titleProject={ml(item.title_az, item.title_ru, item.title_en)} lngText={ml(item.text_az, item.text_ru, item.text_en)} prd={item.period} />
                  ))}
                </>
            }

            {(items?.length < myapiData?.length) && <button onClick={() => loadMore()} className='flex mt-5 items-center text-white uppercase font-bold text-[20px]'>
              <FiChevronDown className='mr-2 font-bold text-[30px] text-[#F6C300]' /> {t("more")}
            </button>}
          </Row>

        </Container>

      </div>




    </>



  )
}

export default Projects
