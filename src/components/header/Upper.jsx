import React, { useEffect } from 'react';

const Upper =({toggle, switchLang})=>{

    useEffect(()=>{
        if(localStorage.getItem("i18nextLng") ==='tr-TR'  ){
            localStorage.setItem('i18nextLng', 'azerbaycan');
        }else if(localStorage.getItem("i18nextLng") ==='ru-RU'){
            localStorage.setItem('i18nextLng', 'russian');
        }else if(localStorage.getItem("i18nextLng") ==='en-GB'){
            localStorage.setItem('i18nextLng', 'english');
        }else if(localStorage.getItem("i18nextLng") ==='az-AZ'){
            localStorage.setItem('i18nextLng', 'azerbaycan');
        }else if(localStorage.getItem("i18nextLng") ==='en-AZ'){
            localStorage.setItem('i18nextLng', 'azerbaycan');
        }
    })

    return(
        <div className='relative  text-white px-2 ml-5'>
            <div onClick={toggle}>
                <button className='uppercase text-[12px] xs:text-[10px]'>{localStorage.getItem("i18nextLng") ? localStorage.getItem("i18nextLng") : "azerbaycan"}</button>
            </div>
            {switchLang}
        </div>
    )
}

export default Upper