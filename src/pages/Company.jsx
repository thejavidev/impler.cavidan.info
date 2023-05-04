import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { implerLogo } from '../assets';
import { useTranslation } from 'react-i18next';
import { getMultiLang as ml } from '../components/MultiLang';

const Company = ({companyData}) => {
  const [t] = useTranslation("translation");
  const apidata = companyData;
  return (
    <>
      <div className='bg-[#cc67a0] pt-[150px] sm:pt-[50px] pb-[150px] sm:pb-[50px] pl-0 pr-0 md:pl-6 md:pr-6' id='company'>
        <Container >
          <Row>
            <div className='block'>
              <h2 className='text-white uppercase text-[50px] sm:text-[25px] mb-4 font-bold'>{t("company")}</h2>
              <div className="mb-10 sm:mb-2">
                <img src={implerLogo} alt="" className='max-w-[100%] h-auto w-[160px] sm:w-[100px]' />
              </div>
            </div>
            <div className="pt-[40px] pl-0 pr-0 flex justify-center flex-wrap">
              {
                apidata && apidata?.map((item, index) => (
                  <Col lg='2' md='3' sm='4' xs='6' className='flex justify-center' key={index}>
                    <div className="companyItem w-[170px] h-[170px] overflow-hidden block relative p-[10px] cursor-pointer">
                      <div className="overflow-hidden w-[100%] z-0 relative rounded-full">
                        <img className='max-w-[100%] overflow-hidden' src={item.source} alt={item.alt} />
                        <div className="companyBox absolute w-[100%] h-[100%] block  top-0 lef-0 rounded-full right-0 bottom-0 text-[#f2f2f2] overflow-hidden z-10 ">
                          <div className="text-center p-[5px] relative top-[50%] left-[50%] float-left block transform50">
                            <div dangerouslySetInnerHTML={{ __html: ml(item.text_az, item.text_ru, item.text_en) }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))
              }
            </div>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Company
