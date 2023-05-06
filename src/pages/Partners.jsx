import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/Fi';
import { implerLogo } from '../assets';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { memo } from 'react';
import PartnersItem from '../components/UI/PartnersItem';
import { useCallback } from 'react';

const Partners = ({partnersData}) => {
  const [t] = useTranslation("translation");
  const apidata = partnersData;
  const STEP = 18;
  const [items, setItems] = useState(apidata?.slice(0, STEP));
  const loadMore = useCallback(() => {
    setItems([...items, ...apidata?.slice(items?.length, items?.length + STEP)]);
  },[])
  console.log('partners render oldu')
  
 
  return (
    <>
      <div className='bg-[#EEC542] pt-[150px] sm:pt-[50px] pb-[150px] sm:pb-[50px] pr-0 pl-0 md:pl-6 md:pr-6' id='partners'>
          <Container>
            <Col lg='12' md='12' className='pb-[40px]'>
                <h2 className='text-[#fff] uppercase text-[50px] sm:text-[25px] pt-0 pl-0 pr-0 pb-10 sm:pb-4 font-bold '>{t("partners")}</h2>
                <div className="mb-10 sm:mb-2">
                    <LazyLoadImage src={implerLogo} alt="" className='max-w-[100%] w-[160px]  sm:w-[100px] h-auto myfilter' />
                  </div>
              </Col>
            <Row className=' gap-[40px] md:gap-0'>
                {
                  items && items?.map((item,index)=>(
                    <PartnersItem key={index} partnerSrc={item.src} />
                  ))
                }
            </Row>
            {(items?.length < apidata?.length) &&  <button onClick={()=>loadMore()} className='flex mt-5 items-center text-white uppercase font-bold text-[20px]'>
               <FiChevronDown className='mr-2 font-bold text-[30px] text-[#0a0a0a]' /> {t("more")}
            </button>  }
           
          </Container>
      </div>
    </>
  )
}

export default memo(Partners)
