import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { implerLogo } from '../assets';
import { useTranslation } from 'react-i18next';
import { getMultiLang as ml } from '../components/MultiLang';
import ServiceModal from '../components/UI/ServiceModal';

const Services = ({servicesData}) => {
  const [t] = useTranslation("translation");
  const apidata =servicesData;
  return (
    <>
     <div className='bg-[#B9553A] pt-[150px] sm:pt-[50px] pb-[150px] sm:pb-[50px] pl-0 pr-0 md:pl-10 md:pr-10 sm:pl-6 sm:pr-6' id='services'>
      <Container>
        <Row>
          <div className="service_text">
            <h2 className='text-white leading-3 uppercase text-[50px] sm:text-[30px] pb-20 sm:pb-10 font-bold'>{t("servis")}</h2>
            <div className=" mb-10 sm:mb-5">
                    <img src={implerLogo} alt="" className='max-w-[100%] h-auto w-[160px] sm:w-[100px]' />
                </div>
          </div>
          <div className="services-lists" >
            <Row >
            <Row >
                {
                  apidata && apidata.map((item, index) => (
                    <ServiceModal
                      key={index}
                      idP={item.id}
                      altText={item.alt}
                      srcPic={item.src}
                      srcPicHover={item.src_hover}
                      titleAll={ml(item.title_az, item.title_ru, item.title_en)}
                      eventKey={item.eventKey}
                    />
                  ))
                }
              </Row>
              
            </Row>
          </div>
        </Row>
      </Container>
    </div> 
    </>
  )
}

export default Services
