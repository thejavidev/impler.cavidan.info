import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import { aboutImg, implerLogo } from '../assets';
import Container from 'react-bootstrap/Container';
import { useTranslation } from 'react-i18next';



const About = () => {
  
  const [t,i18n] =useTranslation("translation")

  return (
    <>
      <section className='bg-[#89a225] pt-[150px] pb-[150px] pl-0 pr-0' id='about'>
        <Container>
          <Row>
            <Col lg='12' md='12' className='mb-10'> 
                <h2 className='text-white text-[50px] font-bold uppercase pt-0 pl-0 pb-10 pr-0 '>
                  Haqqımızda
                </h2>
                <Link to='#home' >
                    <div className="w-[160px]">
                        <img src={implerLogo} alt="" className='max-w-[100%] h-auto' />
                        {t("cavid.text")}
                    </div>
                </Link>
            </Col>
            <Col lg='8' md='8' sm='12'>
              <div className="aboutText">
                <p className='text-white text-[18px] pt-[30px] pb-[30px] pl-0 pr-0 columns-2'>
                    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nihil quis iusto adipisci, placeat perferendis optio, nulla animi laboriosam unde voluptate ab sapiente nemo exercitationem reiciendis quos. Quas rerum suscipit ducimus repellendus vel accusantium quidem eveniet ipsam magni vero fugit officia nam hic possimus tempora et, iusto at dolor consequatur! Voluptates sunt dolor dolore dolores voluptate laboriosam consectetur non impedit ex fuga quia dolorem eaque sint officia commodi, distinctio veniam nulla enim provident corrupti repudiandae velit illum ducimus odio? Cupiditate tenetur tempora natus dolor, excepturi illum itaque nobis eius nihil fuga non impedit ratione facere, quam voluptatum perspiciatis sed consequatur vitae quidem dolore veniam dignissimos. Debitis dolorum facere consequatur provident nisi dicta quas magnam. Fugiat, excepturi nihil expedita modi obcaecati eum! Molestias repellat consectetur eos voluptas. Fuga iure perspiciatis voluptatum corporis eaque nam necessitatibus, ipsam, repudiandae dignissimos nesciunt magni magnam tempora quaerat. Dolorem ipsam accusantium iusto ea neque, quisquam incidunt mollitia dignissimos maiores dolor at tempora pariatur dolorum nihil perferendis corrupti laborum nobis et dicta temporibus minus voluptate repudiandae cupiditate. Perferendis ipsa inventore reiciendis deleniti dolorem ducimus maiores quidem possimus consequuntur eius minus temporibus facere accusamus delectus, necessitatibus enim quae. Laudantium officia quod, ab recusandae optio velit illum vel id!
                  </p>
              </div>
            </Col>
            <Col lg='4' md='4' sm='12'>
              <div className="aboutImg">
                <img src={aboutImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default About
