import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { socials } from '../fakeData/LocalData';
import { Link } from 'react-router-dom';
const Footer = () => {
  const year =new Date().getFullYear();
 
  return (
    <>
     <footer className='bg-[#34a08d] pt-[20px] pb-[20px] pl-0 pr-0'>
        <Container>
          <Row className='justify-between'>
            <Col className="text-white text-[16px] " lg='6' md='12'>
            {year}. Bütün hüquqlar Impler MMC tərəfindən qorunur © . 
            </Col>
            <Col className="flex justify-end" lg='6' md='12'>
              <ul className='flex m-0 p-0 list-none '>
              {socials && socials?.map(menuItem => {
                  const { id, href, Icon } = menuItem
                  return (
                    <li key={id} className='ml-[15px]'>
                      <Link to={href} target='_blank' className=''>
                        <Icon className='text-white text-[25px] transition-all hoverIcon' />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </Col>
          </Row>

        </Container>
    </footer>   
    </>
  )
}

export default Footer
