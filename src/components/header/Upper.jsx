import React from 'react';

const Upper =({toggle, switchLang})=>{
    return(
        <div className='relative  text-white px-2 ml-5'>
            <div onClick={toggle}>
                <button className='uppercase font-[18px]'>{localStorage.getItem("i18nextLng") ? localStorage.getItem("i18nextLng") : "az"}</button>
            </div>
            {switchLang}
        </div>
    )
}

export default Upper