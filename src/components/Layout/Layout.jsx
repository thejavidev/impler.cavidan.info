import React,{memo} from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer';
import { Helmet,HelmetProvider  } from 'react-helmet-async';;
import { useTranslation } from 'react-i18next';
import { getMultiLang as ml } from '../MultiLang';


const Layout = ({children,helmetData}) => {

  const [t] = useTranslation("translation");
  const apidata =helmetData;
  const sitelang =localStorage.getItem("i18nextLng").slice(0,2);
  return (
    <>
    <HelmetProvider >
      <Helmet >
        <html lang={sitelang} />
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

export default memo(Layout)
