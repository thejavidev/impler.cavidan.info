import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineInstagram,AiFillLinkedin } from 'react-icons/Ai';
import { BsFacebook } from 'react-icons/Bs';
import { FaTiktok } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';


const Footer = () => {
  const year = new Date().getFullYear();
  const [t] = useTranslation("translation");
  const data = useSelector((state) => state.list);
  const apidata = data.data?.socials;
  return (
    <>
      <footer className='bg-[#34a08d] pt-[20px] pb-[20px] pl-0 pr-0'>
        <Container>
          <Row className='justify-between lg:justify-center'>
            <Col className="text-white text-[16px] lg:text-center lg:mb-6" lg='6' md='12'>
              {year}. {t("footer")} © .
            </Col>
            <Col className="flex justify-end lg:justify-center lg:mb-4" lg='6' md='12'>
              <ul className='flex m-0 p-0 list-none gap-3'>
                <li>
                  <a href={`https://www.facebook.com/${apidata?.facebook_link}`} target='_blank'>
                    <BsFacebook className='text-white text-[25px] transition-all hoverIcon' />
                  </a>
                </li>
                <li>
                  <a href={`https://www.instagram.com/${apidata?.instagram_link}`}  target='_blank'>
                    <AiOutlineInstagram className='text-white text-[25px] transition-all hoverIcon' />
                  </a>
                </li>
                <li>
                  <a href={`https://www.linkedin.com/${apidata?.linkedin_link}`}  target='_blank'>
                    <AiFillLinkedin className='text-white text-[25px] transition-all hoverIcon' />
                  </a>
                </li>
                <li>
                  <a href={`https://www.tiktok.com/${apidata?.tiktok_link}`} target='_blank'>
                    <FaTiktok className='text-white text-[25px] transition-all hoverIcon' />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
