import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { implerLogo } from '../assets';
import { FiChevronDown } from 'react-icons/Fi';
import SwiperCards from '../components/UI/SwiperCards';
import { swiperCard } from '../components/fakeData/LocalData';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import axios from 'axios';



const Projects = () => {
  const [t] = useTranslation("translation");
  const STEP = 9;
  const myapiData =swiperCard.myDatas;
  const [items, setItems] = useState(myapiData.slice(0, STEP));
  const loadMore = () => {
    setItems([...items, ...myapiData.slice(items.length, items.length + STEP)]);
  }
  // const url ='http://api.im.co.az/works-loader'
  // useEffect(() => {
  //   fetch(url,{
  //     method:'POST',
  //     mode: 'no-cors',
  //     headers:{
  //       'Content-type':'application/json',
  //       'Access-Control-Allow-Origin':'*'
  //     },
  //     body: JSON.stringify({
  //       limit: '6',
  //       start: '0',
  //       type: 'api',
  //     })
  //   })
  //   .then(response =>response.json())
  //   .then(response =>{
  //     console.log('response',response)

  //   }).catch(e=>{
  //     console.log('e',e)
  //   })

  //   const newPost={
  //     limit:6,
  //     start:0,
  //     type:"api"
  //   }
  //   fetch(url,{
  //     method:'POST',
  //     mode: 'no-cors',
  //     body:JSON.stringify(newPost),
  //     headers:{
  //       'Content-type':'application/json',
  //       'Access-Control-Allow-Origin':'*'
  //     },
  //   })
  //   .then(response=>response.json())
  //   .then(json =>console.log(json))
  //   .catch(err=>console.log('err',err))

  // }, [])

  return (
    <>


      <section className='bg-[#234656] pt-[150px] sm:pt-[50px] pb-[150px] sm:pb-[50px] pr-0 pl-0 relative w-[100%] h-[100%] md:pl-10 md:pr-10' id='projects'>
        <Container>
          <Row>

            <Col lg='12' md='12' className='pb-[40px]'>
              <h2 className='text-[#fff] uppercase text-[50px] sm:text-[35px] pt-0 pl-0 pr-0 pb-10 font-bold'>{t("works")}</h2>
              <div className="w-[160px] mb-10">
                <img src={implerLogo} alt="" className='max-w-[100%] h-auto' />
              </div>
            </Col>
            {items && items?.map((item, index) => (
                <SwiperCards img1={item.image} imgHvr={item.imageOnHover} clientNm={item.clientName} idP={item.id} key={index} lngText={item.longText} prd={item.period} />
            ))}
              
            {(items.length < myapiData.length) && <button onClick={()=>loadMore()} className='flex mt-5 items-center text-white uppercase font-bold text-[20px]'>
               <FiChevronDown className='mr-2 font-bold text-[30px] text-[#F6C300]' /> {t("more")}
            </button> }
          </Row>

        </Container>

      </section>




    </>



  )
}

export default Projects
