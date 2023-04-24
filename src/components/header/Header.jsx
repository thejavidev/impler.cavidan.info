import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import { navbarCards } from '../fakeData/LocalData';
import { implerLogo } from '../../assets';
import { useEffect, useState } from 'react';

const Header = () => {
  const [sticky, setSticky] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
    setSticky(stickyClass);
  };
  const classes = `${sticky}`;
  return (
    <>
      <header id={classes} className={` absolute top-0 left-0 right-0 z-50 w-[100%] pt-4`}>
        <Container>
          <Row>  
            <Nav className='items-center justify-between'>
              <div className="logo cursor-pointer">
                <a href={`#home`}>
                  <img src={implerLogo} alt="" className='w-[150px]' />
                </a>
              </div>
              <div className="nav-menu">
                <div className="menu-list">
                  <ul className='flex items-center w-[100%] justify-end'>
                    {
                      navbarCards && navbarCards.map((item,index)=>(
                        <li key={index} className='pr-[15px]'>
                          <a href={`#${item.href}`} className='text-white pr-0 pl-0 font-bold pt-[15px] pb-[15px] text-[16px] uppercase relative transition-all colorHover'>
                              {item.name}
                          </a>
                        </li>
                      ))
                    }
                  </ul>
                </div>
               
              </div>
            </Nav>
          </Row>
        </Container>
      </header>
    </>
  )
}
export default Header
