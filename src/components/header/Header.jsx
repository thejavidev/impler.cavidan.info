import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import { implerLogo } from '../../assets';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Upper from './Upper';



const Header = () => {
  const [sticky, setSticky] = useState("");
  const [t,i18n] =useTranslation("translation");
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
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
              <div className="nav-menu relative flex">
                <div className="menu-list">
                  <ul className='flex items-center w-[100%] justify-end'>
                    {
                      navbarCards && navbarCards.map((item, index) => (
                        <li key={index} className='pr-[15px]'>
                          <a href={`#${item.href}`} className='text-white pr-0 pl-0 font-bold pt-[15px] pb-[15px] text-[16px] uppercase relative transition-all colorHover'>
                            {item.name}
                          </a>
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div className="langs">
                  <div className="languages absolute top-[50px] right-[10px]">
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
    </>
  )
}
export default Header
