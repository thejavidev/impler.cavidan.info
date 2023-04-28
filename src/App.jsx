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


function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500);

  }, [])
  return (
    <>
    {
      loading ? 
      <Loader />
      :
      < >
         <Layout >
          <Slider />
          <About />
          <Services />
          <Projects />
          <Company />
          <Partners />
          <Contact />
        </Layout>
      </>
    }
       
    </>
  )
}

export default App
