import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/Fi';
import { implerLogo } from '../assets';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';


const Partners = () => {
  const [t] = useTranslation("translation");
  const data = useSelector((state) => state.list);
  const apidata = data.data?.partners;
  const STEP = 18;
  const myapiData =apidata;
  const [items, setItems] = useState(myapiData?.slice(0, STEP));
  const loadMore = () => {
    setItems([...items, ...myapiData?.slice(items?.length, items?.length + STEP)]);
  }

 
  return (
    <>
      <div className='bg-[#EEC542] pt-[150px] sm:pt-[50px] pb-[150px] sm:pb-[50px] pr-0 pl-0 md:pl-10 md:pr-10' id='partners'>
          <Container>
            <Col lg='12' md='12' className='pb-[40px]'>
                <h2 className='text-[#fff] uppercase text-[50px] sm:text-[35px] pt-0 pl-0 pr-0 pb-10 font-bold '>{t("partners")}</h2>
                <div className="w-[160px] mb-10">
                    <img src={implerLogo} alt="" className='max-w-[100%] h-auto myfilter' />
                  </div>
              </Col>
            <Row className='justify-start xl:gap-[40px] md:gap-0 '>
                {
                  items && items?.map((item,index)=>(
                    <Col lg='2' md='3'  sm='4' xs='4' key={index} >
                      <div className="img">
                        <img className='grayscale hover:grayscale-0 transition-all cursor-pointer' src={item.src} alt="" />
                      </div>
                    </Col>
                  ))
                }
            </Row>
            {(items?.length < myapiData?.length) &&  <button onClick={()=>loadMore()} className='flex mt-5 items-center text-white uppercase font-bold text-[20px]'>
               <FiChevronDown className='mr-2 font-bold text-[30px] text-[#0a0a0a]' /> {t("more")}
            </button>  }
           
          </Container>
      </div>
    </>
  )
}

export default Partners
