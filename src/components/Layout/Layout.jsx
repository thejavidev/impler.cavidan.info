import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer';
import { Helmet,HelmetProvider  } from 'react-helmet-async';;
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import { getMultiLang as ml } from '../MultiLang';
import { useDispatch, useSelector } from 'react-redux';
import { loadposts } from "../store/posts";
const Layout = ({children}) => {

  const [t] = useTranslation("translation");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.list);
  const apidata =data.data?.home_section.seodata;
  useEffect(() => {
      dispatch(loadposts());
  }, [dispatch]);
  return (
    <>
    <HelmetProvider >
      <Helmet >
        <title>{ml(apidata && apidata?.seo_title_az,apidata?.seo_title_ru,apidata?.seo_title_en)}</title>
        <meta property="og:locale" content={apidata?.seo_locale} />
        <meta property="og:type" content={apidata?.seo_type} />
        <meta property="og:title" content={apidata?.seo_title} />
        <meta property="og:description" content={apidata?.seo_description}  />
        <meta property="og:url" content={apidata?.seo_url} />
        <meta property="og:site_name" content={apidata?.seo_sitename} />
        <meta property="og:image" content={apidata?.seo_image}/>
      </Helmet>
    </HelmetProvider>
    
     <Header />
     {children} 
     <Footer />  
    </>
  )
}

export default Layout
