import { useState } from "react"
import Layout from "./components/Layout/Layout"
import About from "./pages/About"
import Company from "./pages/Company"
import Contact from "./pages/Contact"
import Partners from "./pages/Partners"
import Projects from "./pages/Projects"
import Services from "./pages/Services"
import Slider from "./pages/Slider";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react"
import Loader from "./components/loader/Loader"
import { useDispatch, useSelector } from "react-redux"
import { loadposts } from "./components/store/posts"
import { useCallback } from "react"


function App() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const data = useSelector((state) => state.list);
  const myAPIData =[
    {
      id:1,
      data:data.data?.about_section
    },
    {
      id:2,
      data:data.data?.home_section
    },
    {
      id:3,
      data:data.data?.teams
    },
    {
      id:4,
      data:data.data?.services_section.serviceslists
    },
    {
      id:5,
      data:data.data?.works
    },
    {
      id:6,
      data:data.data?.partners
    },
    {
      id:7,
      data:data.data?.socials
    },
    {
      id:8,
      data:data.data?.home_section.seodata
    },
    {
      id:9,
      data:data.data?.socials
    },
  ]

  useEffect(()=>{
    dispatch(loadposts());
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  },[dispatch])
  return (
    <>
    {
      loading ? 
      <Loader /> :
      <>
         <Layout helmetData={myAPIData[7].data} footerData={myAPIData[[9].data]} >
            <Slider sliderData={myAPIData[1].data} />
            <About aboutData={myAPIData[0].data} />
            <Services servicesData={myAPIData[3].data}  />
            <Projects projectData={myAPIData[4].data} />
            <Company companyData={myAPIData[2].data} />
            <Partners partnersData={myAPIData[5].data} />
            <Contact contactData={myAPIData[6].data} />
        </Layout>
      </>
    }
    </>
  )
}

export default App
