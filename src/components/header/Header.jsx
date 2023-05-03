import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import { implerLogo } from '../../assets';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Upper from './Upper';
import MobileMenu from './MobileMenu';
import { AiOutlineMenu ,AiOutlineClose} from 'react-icons/Ai';


const Header = () => {
  const [sticky, setSticky] = useState("");
  const [t,i18n] =useTranslation("translation");
 
  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
    setSticky(stickyClass);
  };
  
  const navbarCards =[
    {
      id:1,
      href:"about",
      name: `${t('about')}`,
    },
    {
      id:2,
      href:"services",
      name: `${t('servis')}`,
    },
    {
      id:3,
      href:"projects",
      name: `${t('projects')}`,
    },
    {
      id:4,
      href:"company",
      name: `${t('company')}`,
      
    },
    {
      id:5,
      href:"partners",
      name: `${t('partners')}`,
    },
    {
      id:6,
      href:"contact",
      name: `${t('contact')}`,
    },
  ]
  const classes = `${sticky}`;

  const [open, setOpen] = useState(false);

  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang);
    setOpen(false);
  }
  const langChecker = (lang = "azerbaycan") => {
		return lang !== localStorage.getItem("i18nextLng");
	};
  const langs = ["azerbaycan", "russian", "english"];
  const myLang = langs.filter(langChecker);

  const MobileMenuHandler = () => {
    document.querySelector('.mobilemenu-popup').classList.toggle("show");
  }
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  return (
    <>
      <header id={classes} className={` absolute top-0 left-0 right-0 z-[50] w-[100%] pt-[1.5rem] md:pt-1`}>
        <Container fluid='lg' className='lg:pl-10 lg:pr-10 md:pl-6 md:pr-4 xs:pl-6 xs:pr-2'>
          <Row>
            <Nav className='items-center justify-between p-0'>
              <div className="logo cursor-pointer">
                <a href={`#home`}>
                  <img src={implerLogo} alt="" className='w-[150px] sm:w-[100px] xs:w-[80px]' />
                </a>
              </div>
              <div className="nav-menu relative flex navMenu">
                <div className="menu-list">
                  <ul className='flex items-center w-[100%] justify-end lg:hidden'>
                    {
                      navbarCards && navbarCards.map((item, index) => (
                        <li key={index} className='pr-[15px] '>
                          <a href={`#${item.href}`} className='text-white pr-0 pl-0 font-bold pt-[15px] pb-[15px] text-[16px] uppercase relative transition-all colorHover'>
                            {item.name}
                          </a>
                        </li>
                      ))
                    }
                  </ul>
                  <div className="btn hidden lg:block outline-none border-none shadow-none">
                      <button className='outline-none border-none shadow-none btnOpen' onClick={MobileMenuHandler}><AiOutlineMenu className='text-white text-[30px] outline-none border-none shadow-none' /></button>
                  </div>
                </div>
                <div className="langs">
                  <div className="languages absolute top-[50px] lg:top-[10px] right-[10px] lg:right-20">
                    <Upper
                     toggle={() => setOpen(!open)}
                      switchLang={
                        open && (
                          <div className="absolute  mt-6 right-[7px] top-1 h-[50px] flex flex-col text-left items-end">
                            {myLang.map((lang, index) => (
                              <button className='uppercase text-[12px] text-white mt-2 hoverIcon' key={index} onClick={()=>clickHandle(lang)} >
                                {lang}
                              </button>
                            ))}
                          </div>
                        )}
                    />
                  </div>
                </div>
              </div>
            </Nav>
          </Row>
        </Container>
      </header>
      <MobileMenu MobileHandler={MobileMenuHandler}  />
    </>
  )
}
export default Header
