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
        <header className='bg-[#163959] w-[100%] h-auto text-[30px] mobilemenu-popup fixed top-24 pb-4  z-20'>
            <ul className='flex items-start w-[100%] justify-start flex-col pl-20'>
                {
                    navbarCards && navbarCards.map((item, index) => (
                        <li key={index} onClick={MobileHandler}>
                            <a href={`#${item.href}`} className='text-white pr-0 pl-0 font-bold pt-[15px] pb-[15px] text-[16px] uppercase relative transition-all colorHover'>
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
