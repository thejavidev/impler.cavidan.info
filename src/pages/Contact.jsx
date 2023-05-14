import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getMultiLang as ml } from '../components/MultiLang';
import { implerLogo } from '../assets';
import { useTranslation } from 'react-i18next';
import { useState, useRef } from "react";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Contact = ({contactData}) => {
  const [t] = useTranslation("translation");
  const key ='6LeszNQlAAAAAPjJO_JnfezVolnEkbliz8jk_FMm';
  const apidata = contactData;
  const myapi =apidata;
  const [chapchaisDone,setChapcaIsDone]=useState(false)
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    job: "",
    phone:"",
    email:"",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value, job, message,phone,email } = e.target;
    setForm({ ...form, [name]: value, [job]: value, [message]: value,[phone]:value,[email]:value  })
  }
  function onChange(){
    setChapcaIsDone(true);
    const contactBtn =document.querySelector('.contactBtn');
    contactBtn.disabled = false;
    contactBtn.classList.remove('opacityBtn');
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_tngae58', 'template_bjstxyo',
      {
        form_name: form.name,
        to_name: 'İmpler',
        form_email: form.email,
        to_email: 'info@im.co.az',
        message: 'Müstərinin adı: ' + form.name + ' \n' + ' Müştərinin şirkət adı : ' + form.job +  ' \n' + ' Müştərinin email adresi : ' + form.email + ' \n' + ' Müştərinin telefon nömrəsi : ' + form.phone + ' \n' + ' Müştərinin tam ismarıcı : ' + form.message
      },
      'rgbb3VuoJA5nxVuWb',
    )
      .then(() => {
        setLoading(false);
        Swal.fire({
          title: `${t('swal1')}`,
          text: `${t('swal2')}`,
          type: 'success',
        });
       
        
        setForm({
          name: '',
          phone:'',
          job:'',
          email: '',
          message: ''
        }, (error) => {
          setLoading(false)
          console.log(error)
          alert('xeta bas verdi')
        })
      })
  }

  return (
    <>
      <div  className='bg-[#34a08d] pt-[150px] sm:pt-[50px] pb-[150px] sm:pb-[50px] xs:pb-[30px] pl-0 pr-0 md:pl-6 md:pr-6' id='contact'>
        <Container>
          <Row>
            <div className='block'>
              <h2 className='text-white uppercase text-[50px] sm:text-[25px] mb-4 font-bold'>{t("contact")}</h2>
              <div className="mb-10 sm:mb-5">
                <LazyLoadImage src={implerLogo} alt="" className='max-w-[100%] h-auto w-[160px] sm:w-[100px]' />
              </div>
            </div>
            <Col lg='6' md='12'>
              <form className='w-[100%]' 
                 ref={formRef}
                onSubmit={handleSubmit}
              >
                <Row>
                  <Col lg={6} md={6} >
                    <div className="form-group">
                      <label htmlFor='name' className='text-white w-[100%] mb-[22px]'>
                        <input
                          value={form.name} required
                          onChange={handleChange}
                          autoComplete="off"
                          type='text' placeholder={t("input_name")} name='name' id='name'
                          className='placeholder:text-white placeholder:capitalize placeholder:opacity-60
                                    shadow-none outline-none
                                    w-[100%] h-[55px] pt-0 pb-0 pl-[15px] pr-[15px] text-white borderInp bg-[#34a08d] text-[16px]'
                        />
                      </label>
                    </div>
                  </Col>
                  <Col lg={6} md={6} >
                    <div className="form-group">
                      <label htmlFor='job' className='text-white w-[100%] mb-[22px]'>
                        <input
                           value={form.job} required
                           onChange={handleChange}
                           autoComplete="off"
                          type='text' placeholder={t("input_job")} name='job' id='job'
                          className='placeholder:text-white placeholder:capitalize placeholder:opacity-60
                                    shadow-none outline-none
                                    w-[100%] h-[55px] pt-0 pb-0 pl-[15px] pr-[15px] text-white borderInp bg-[#34a08d] text-[16px]'
                        />
                      </label>
                    </div>
                  </Col>
                  <Col lg={6} md={6} >
                    <div className="form-group">
                      <label htmlFor='email' className='text-white w-[100%] mb-[22px]'>
                        <input
                          value={form.email} required
                          onChange={handleChange}
                          autoComplete="off"
                          type='email' placeholder={t("input_email")} name='email' id='email'
                          className='placeholder:text-white placeholder:capitalize placeholder:opacity-60
                                    shadow-none outline-none
                                    w-[100%] h-[55px] pt-0 pb-0 pl-[15px] pr-[15px] text-white borderInp bg-[#34a08d] text-[16px]'
                        />
                      </label>
                    </div>
                  </Col>
                  <Col lg={6} md={6} >
                    <div className="form-group">
                      <label htmlFor='number' className='text-white w-[100%] mb-[22px]'>
                        <input
                          value={form.phone} required
                          onChange={handleChange}
                          autoComplete="off"
                          type='tel' placeholder={t("input_number")} name='phone' id='phone'
                          className='placeholder:text-white placeholder:capitalize placeholder:opacity-60
                                    shadow-none outline-none
                                    w-[100%] h-[55px] pt-0 pb-0 pl-[15px] pr-[15px] text-white borderInp bg-[#34a08d] text-[16px]'
                        />
                      </label>
                    </div>
                  </Col>
                  
                </Row>
                <Col lg='12' md='12' >
                  <div className="form-group w-[100%]">
                    <label htmlFor="message" className='text-white w-[100%] mb-[22px]'>
                      <textarea 
                        value={form.message} required
                        onChange={handleChange}
                      className="w-[100%] h-[150px] resize-none max-h-[150px] shadow-none outline-none
                               placeholder:text-white placeholder:capitalize placeholder:opacity-60 p-[15px] text-white borderInp bg-[#34a08d] text-[16px]
                              
                              "
                        name="message" placeholder={t("input_message")} id="message" ></textarea>
                    </label>
                  </div>
                </Col>
                <Col lg='12' md='12'>
                  <ReCAPTCHA sitekey='6LeszNQlAAAAAPjJO_JnfezVolnEkbliz8jk_FMm' onChange={onChange} />
                  <button  className='bg-[#fff] font-bold rounded-sm text-[#3ba8b2] mt-3 pl-3 pr-3 contactBtn opacityBtn
                   text-[16px] border-none h-[40px] w-auto text-center block transition-all hover:bg-[#F6C300]'
                    name="submit" type="submit" > {loading ? (t('sending')) : (t('send'))}</button>
                </Col>
              </form>
            </Col>
            <Col lg='6' md='12' className='lg:mt-8'>
              <div className="text-white xl:pl-8 lg:pl-0 text-[18px]">
                <p className='mb-3 md:text-[15px]'>{ml(myapi?.contact_text_az,myapi?.contact_text_ru,myapi?.contact_text_en)}
                </p>
                <p className='flex items-center mb-2 md:text-[15px]'>
                  {t('email')} :
                  <a href={`mailto:${myapi?.email}`} className='pl-2 md:text-[15px]'>
                    {myapi?.email}
                  </a>
                </p>
                <p className='flex items-center md:text-[15px]'>
                  {t('phone')} :
                  <a href={`tel:${myapi?.phone}`} className='pl-2 md:text-[15px]'>
                   {myapi?.phone}
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Contact
