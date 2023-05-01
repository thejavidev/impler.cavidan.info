import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { partnersData } from '../components/fakeData/LocalData';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/Fi';
import { implerLogo } from '../assets';
import { useTranslation } from 'react-i18next';


const Partners = () => {
  const [nonElement,setNonELement] =useState(15);
  const slice =partnersData.slice(0,nonElement)

  const loadMore  =()=>{
    setNonELement(nonElement+nonElement)
  }
  const [t] = useTranslation("translation");
  return (
    <>
      <section className='bg-[#EEC542] xl:pt-[150px] sm:pt-[50px] xl:pb-[150px] sm:pb-[50px] pr-0 pl-0' id='partners'>
          <Container>
            <Col lg='12' md='12' className='pb-[40px]'>
                <h2 className='text-[#fff] uppercase xl:text-[50px] sm:text-[35px] pt-0 pl-0 pr-0 pb-10 font-bold '>{t("partners")}</h2>
                <div className="w-[160px] mb-10">
                    <img src={implerLogo} alt="" className='max-w-[100%] h-auto myfilter' />
                  </div>
              </Col>
            <Row className='justify-start xl:gap-[40px]'>
                {
                  slice && slice?.map((item,index)=>(
                    <Col lg='2' md='3' sm='4' key={index} >
                      <div className="img">
                        <img className='grayscale hover:grayscale-0 transition-all cursor-pointer' src={item.logo} alt="" />
                      </div>
                    </Col>
                  ))
                }
            </Row>
            <button onClick={()=>loadMore()} className='flex mt-5 items-center text-white uppercase font-bold text-[20px]'>
               <FiChevronDown className='mr-2 font-bold text-[30px] text-[#0a0a0a]' /> {t("more")}
            </button> 
          </Container>
      </section>
    </>
  )
}

export default Partners
