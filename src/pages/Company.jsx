import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { implerLogo} from '../assets';
import { companyCard } from '../components/fakeData/LocalData';


const Company = () => {
  return (
    <>
      <section className='bg-[#cc67a0] pt-[150px] pb-[150px] pl-0 pr-0'>
        <Container >
          <Row>
            <div className='block'>
              <h2 className='text-white uppercase text-[50px] mb-4 font-bold'>Komandamiz</h2>
              <Link>
                <div className="w-[160px] mb-10">
                  <img src={implerLogo} alt="" className='max-w-[100%] h-auto' />
                </div>
              </Link>
            </div>
            <div className="pt-[40px] flex justify-center flex-wrap">
              {
                companyCard && companyCard?.map((item, index) => (
                  <Col lg='2' className='flex justify-center' key={index}>
                    <div className="companyItem w-[170px] h-[170px] overflow-hidden block relative p-[10px] cursor-pointer">
                      <div className="overflow-hidden w-[100%] z-0 relative rounded-full">
                        <img className='max-w-[100%] overflow-hidden' src={item.pciture} alt="" />
                        <div className="companyBox absolute w-[100%] h-[100%] block  top-0 lef-0 rounded-full right-0 bottom-0 text-[#f2f2f2] overflow-hidden z-10 ">
                          <div className="text-center p-[5px] relative top-[50%] left-[50%] float-left block transform50">
                              <h3>{item.name}</h3>
                              <p className='text-[14px]'>{item.position}</p>
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
      </section>
    </>
  )
}

export default Company
