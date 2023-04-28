import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { implerLogo } from '../assets';
import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/Ai';
import Tab from 'react-bootstrap/Tab';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { services,tabsIcon,tabsContent } from '../components/fakeData/LocalData';
import { useTranslation } from 'react-i18next';

const Services = () => {

  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened(wasOpened => !wasOpened);
    var elms = document.querySelectorAll('.list');
    [].forEach.call(elms, function(el) {
      el.classList.add("closeDiv");
    });
   
  }
  function toggle2() {
    setIsOpened(wasOpened => !wasOpened);
    var elms2 = document.querySelector('.close');
    elms2.classList.add("closeDiv");

    var elms = document.querySelectorAll('.list');
    [].forEach.call(elms, function(el) {
      el.classList.remove("closeDiv");
    });
    
  }
  const [t] = useTranslation("translation");
  return (
    <>
     <section className='bg-[#B9553A] pt-[150px] pb-[150px] pl-0 pr-0' id='services'>
      <Container>
        <Row>
          <div className="service_text">
            <h2 className='text-white leading-3 uppercase text-[50px] pb-20 font-bold'>{t("service")}</h2>
            <Link to='#home' >
                <div className="w-[160px] mb-10">
                    <img src={implerLogo} alt="" className='max-w-[100%] h-auto' />
                </div>
            </Link>
          </div>
          <div className="services-lists" >
            <Row >
              {
                services && services?.map((item,index)=>(
                  <Col xl='3' lg='4' md='6' sm='12' key={index} className='list p-[25px] cursor-pointer' onClick={toggle}>
                    <div className="image">
                            <img className='first w-[70px]' src={item.img1} alt={item.alt} />
                            <img className='second w-[70px] hidden' src={item.img2} alt={item.alt} />
                        </div>
                        <div className="title mt-10">
                          <h3 className='w-[50%] text-[20px] text-white'>{item.titleh3}</h3>
                        </div>
                  </Col>
                ))
              }
              {isOpened && (
                  <div className='relative bg-[#AE4D36] border-none1 p-10' >
                      <div className="close absolute right-4 top-2 cursor-pointer ">
                        <AiFillCloseCircle onClick={toggle2} className='text-[#301710] text-[25px]' />
                      </div>
                      <div className="nav-tabs border-none1">
                      <Tab.Container id="left-tabs-example" defaultActiveKey="first" className=''> 
                          <Row>
                            <Col lg={12}>
                              <Nav  className="flex bg-[#B9553A] w-[100%] pr-5 pl-5">
                                
                                {tabsIcon && tabsIcon?.map((item)=>(
                                  <Nav.Item key={item.id} >
                                    <Nav.Link eventKey={item.eventKey} className='flex items-center outline-none border-none1 border-radius-none'>
                                        
                                        <img src={item.img1} className='w-[70px]' alt="" />
                                    </Nav.Link>
                                  </Nav.Item>
                                ))}
                              </Nav>
                            </Col>
                            <Col lg={12} className='mt-10'>
                              <Tab.Content>
                                {tabsContent && tabsContent?.map((item)=>(
                                  <Tab.Pane eventKey={item.eventKey} key={item.id}>
                                      <Row>
                                        <Col lg='8'>
                                          {item.titleLeft}
                                        </Col>
                                        <Col lg='4'>
                                          {item.titleRight}
                                        </Col>
                                      </Row>
                                  </Tab.Pane>
                                ))}
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                      </div>
                  </div>
                )}
              
            </Row>
          </div>
        </Row>
      </Container>
    </section> 
    </>
  )
}

export default Services
