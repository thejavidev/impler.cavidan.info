
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { navbarCards } from '../fakeData/LocalData';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='absolute top-0 left-0 right-0 z-50 w-[100%]'>
        <Container>
          <Row>
            <Nav>
              <ul className='flex'>
                {
                  navbarCards && navbarCards.map((item,index)=>(
                    <li key={index}>
                      <a href={`#${item.href}`} className='text-white'>
                          {item.name}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </Nav>
          </Row>
        </Container>
      </header>
    </>
  )
}

export default Header
