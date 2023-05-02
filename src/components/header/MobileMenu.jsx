import React from 'react';
import { useTranslation } from 'react-i18next';



const MobileMenu = ({MobileHandler}) => {
    const [t] = useTranslation("translation");

   

    const navbarCards = [
        {
            id: 1,
            href: "about",
            name: `${t('about')}`,
        },
        {
            id: 2,
            href: "services",
            name: `${t('servis')}`,
        },
        {
            id: 3,
            href: "projects",
            name: `${t('projects')}`,
        },
        {
            id: 4,
            href: "company",
            name: `${t('company')}`,

        },
        {
            id: 5,
            href: "partners",
            name: `${t('partners')}`,
        },
        {
            id: 6,
            href: "contact",
            name: `${t('contact')}`,
        },
    ]
    return (
        <header className='bg-[#163959] w-[100%] h-auto text-[30px] mobilemenu-popup fixed top-[4.5rem] pb-[1.5rem] md:pb-0  z-20'>
            <ul className='flex items-start w-[100%] justify-start flex-col pl-20 md:pl-5'>
                {
                    navbarCards && navbarCards.map((item, index) => (
                        <li key={index} onClick={MobileHandler} className='flex '>
                            <a href={`#${item.href}`} className='text-white pr-0 pl-0 font-bold pt-[15px]  pb-[15px] xs:pb-[8px] xs:pt-[8px] text-[16px] md:text-[14px] uppercase relative transition-all colorHover'>
                                {item.name}
                            </a>
                        </li>
                    ))
                }
            </ul>
            
        </header>
    )
}

export default MobileMenu
