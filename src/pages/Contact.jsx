import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { implerLogo } from '../assets';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [t] = useTranslation("translation");
  const inputCards=[
    {
      ref:"myName",
      htmlFor:"name",
      type:"text",
      placeholder:`${t('name')}`,
      name:"name",
      id:"name",
      lg:6,
      md:6
    },
    {
      ref:"myCompany",
      htmlFor:"company",
      type:"text",
      placeholder:`${t('jobtitle')}`,
      name:"company",
      id:"company",
      lg:6,
      md:6
    },
    {
      ref:"myEmail",
      htmlFor:"email",
      type:"email",
      placeholder:`${t('email')}`,
      name:"email",
      id:"email",
      lg:6,
      md:6
    },
    {
      ref:"myPhone",
      htmlFor:"phone",
      type:"tel",
      placeholder:`${t('phone')}`,
      name:"phone",
      id:"phone",
      lg:6,
      md:6
    },
   
  ]
  return (
    <>
      <section className='bg-[#34a08d] pt-[150px] sm:pt-[50px] pb-[150px] sm:pb-[50px] pl-0 pr-0 md:pl-10 md:pr-10' id='contact'>
        <Container>
          <Row>
            <div className='block'>
              <h2 className='text-white uppercase text-[50px] sm:text-[35px] mb-4 font-bold'>{t("contact")}</h2>
              <div className="w-[160px] mb-10">
                  <img src={implerLogo} alt="" className='max-w-[100%] h-auto' />
                </div>
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
                              
                              "
                        name="message"  placeholder="Message" id="message" ></textarea>
                    </label>
                  </div>
                </Col>
                <Col lg='12' md='12'>
                  <button className='bg-[#fff] font-bold rounded-sm text-[#3ba8b2] pl-3 pr-3
                   text-[16px] border-none h-[40px] w-auto text-center block transition-all hover:bg-[#F6C300]'
                    name="submit" type="submit" >{t("send")}</button>
                </Col>
              </form>
            </Col>
            <Col lg='6' md='12' className='sm:mt-8'>
              <div className="text-white xl:pl-8 md:pl-0 text-[18px]">
                <p className='mb-3'>We’re always happy to hear you whether you’re interested in our services or working with
                  us. Please fill the form and give us info how we can assist you, or reach us by
                  following contacts.
                </p>
                <p className='flex items-center mb-2'>
                  {t('email')} :
                  <Link to='mailto:info@impler.com' className='pl-2'>
                    info@impler.com
                  </Link>
                </p>
                <p className='flex items-center'>
                {t('phone')} :
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
