import Layout from "./components/Layout/Layout"
import About from "./pages/About"
import Company from "./pages/Company"
import Contact from "./pages/Contact"
import Partners from "./pages/Partners"
import Projects from "./pages/Projects"
import Services from "./pages/Services"
import Slider from "./pages/Slider";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
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
  )
}

export default App
