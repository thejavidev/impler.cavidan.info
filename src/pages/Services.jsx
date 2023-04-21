import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { servicesPng, servivesGif,implerLogo } from '../assets';
import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/Ai';
import Tab from 'react-bootstrap/Tab';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const Services = () => {

  const services =[
    {
      id:1,
      img1:servicesPng,
      img2:servivesGif,
      alt:"test 1",
      titleh3:"Social Media Marketing"
    },
    {
      id:2,
      img1:servicesPng,
      img2:servivesGif,
      alt:"test 2",
      titleh3:"Social Media Marketing"
    },
    {
      id:3,
      img1:servicesPng,
      img2:servivesGif,
      alt:"test 3",
      titleh3:"Social Media Marketing"
    },
    {
      id:3,
      img1:servicesPng,
      img2:servivesGif,
      alt:"test 3",
      titleh3:"Social Media Marketing"
    },
    {
      id:4,
      img1:servicesPng,
      img2:servivesGif,
      alt:"test 3",
      titleh3:"Social Media Marketing"
    },
    {
      id:5,
      img1:servicesPng,
      img2:servivesGif,
      alt:"test 3",
      titleh3:"Social Media Marketing"
    },
    {
      id:6,
      img1:servicesPng,
      img2:servivesGif,
      alt:"test 3",
      titleh3:"Social Media Marketing"
    },
    {
      id:7,
      img1:servicesPng,
      img2:servivesGif,
      alt:"test 3",
      titleh3:"Social Media Marketing"
    },
    {
      id:8,
      img1:servicesPng,
      img2:servivesGif,
      alt:"test 3",
      titleh3:"Social Media Marketing"
    },
    {
      id:9,
      img1:servicesPng,
      img2:servivesGif,
      alt:"test 3",
      titleh3:"Social Media Marketing"
    },
  ]

  const tabsIcon =[
    {
      id:1,
      img1:servicesPng,
      img2:servivesGif,
      eventKey:"first",
      name:"Home 1"
    },
    {
      id:2,
      img1:servicesPng,
      img2:servivesGif,
      eventKey:"second",
      name:"Home 2"
    },
  ]
  const tabsContent =[
    {
      id:1,
      eventKey:"first",
      titleLeft:"1-Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio id assumenda sunt ab, modi vitae architecto aperiam, quaerat veniam earum illo veritatis provident libero eveniet doloremque minus sit rem.",
      titleRight:"2-Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio id assumenda sunt ab, modi vitae architecto aperiam, quaerat veniam earum illo veritatis provident libero eveniet doloremque minus sit rem."
    },
    {
      id:2,
      eventKey:"second",
      titleLeft:"3-Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio id assumenda sunt ab, modi vitae architecto aperiam, quaerat veniam earum illo veritatis provident libero eveniet doloremque minus sit rem.",
      titleRight:"4-Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio id assumenda sunt ab, modi vitae architecto aperiam, quaerat veniam earum illo veritatis provident libero eveniet doloremque minus sit rem."
    },
  ]

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

  return (
    <>
     <section className='bg-[#B9553A] pt-[150px] pb-[150px] pl-0 pr-0'>
      <Container>
        <Row>
          <div className="service_text">
            <h2 className='text-white leading-3 uppercase text-[50px] pb-20 font-bold'>Services</h2>
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
