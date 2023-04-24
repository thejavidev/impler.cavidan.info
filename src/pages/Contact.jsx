import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { inputCards } from '../components/fakeData/LocalData';
import { Link } from 'react-router-dom';
import { implerLogo } from '../assets';


const Contact = () => {
 
  return (
    <>
      <section className='bg-[#34a08d] pt-[150px] pb-[150px] pl-0 pr-0' id='contact'>
        <Container>
          <Row>
            <div className='block'>
              <h2 className='text-white uppercase text-[50px] mb-4 font-bold'>Contact</h2>
              <Link>
                <div className="w-[160px] mb-10">
                  <img src={implerLogo} alt="" className='max-w-[100%] h-auto' />
                </div>
              </Link>
            </div>
            <Col lg='6' md='12'>
              <form className='w-[100%]'  >
                <Row>
                  {
                    inputCards && inputCards?.map((item, index) => (
                      <Col lg={item.lg} md={item.md} key={index}>
                        <div className="form-group">
                          <label htmlFor={item.htmlFor} className='text-white w-[100%] mb-[22px]'>
                            <input 

                              type={item.type} placeholder={item.placeholder} name={item.name} id={item.id}
                              className='placeholder:text-white placeholder:capitalize placeholder:opacity-60
                                    shadow-none outline-none
                                    w-[100%] h-[55px] pt-0 pb-0 pl-[15px] pr-[15px] text-white borderInp bg-[#34a08d] text-[16px]'
                               />
                          </label>
                        </div>
                      </Col>
                    ))
                  }
                </Row>
                <Col lg='12' md='12' >
                  <div className="form-group w-[100%]">
                    <label htmlFor="message" className='text-white w-[100%] mb-[22px]'>
                      <textarea className="w-[100%] h-[150px] resize-none max-h-[150px] shadow-none outline-none
                               placeholder:text-white placeholder:capitalize placeholder:opacity-60 p-[15px] text-white borderInp bg-[#34a08d] text-[16px]
                              h
                              "
                        name="message"  placeholder="Message" id="message" ></textarea>
                    </label>
                  </div>
                </Col>
                <Col lg='12' md='12'>
                  <button className='bg-[#fff] font-bold rounded-sm text-[#3ba8b2]
                   text-[16px] border-none h-[40px] w-[100px] text-center block transition-all hover:bg-[#F6C300]'
                    name="submit" type="submit" >Send</button>
                </Col>
              </form>
            </Col>
            <Col lg='6' md='12'>
              <div className="text-white pl-8 text-[18px]">
                <p className='mb-3'>We’re always happy to hear you whether you’re interested in our services or working with
                  us. Please fill the form and give us info how we can assist you, or reach us by
                  following contacts.
                </p>
                <p className='flex items-center mb-2'>
                  Email:
                  <Link to='mailto:info@impler.com' className='pl-2'>
                    info@impler.com
                  </Link>
                </p>
                <p className='flex items-center'>
                  Phone:
                  <Link to='tel:+994552285153' className='pl-2'>
                    +994552285153
                  </Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact
