import { sliderVideo } from "../assets"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Slider = () => {
  return (
    <>
      <section className="relative w-[100%] h-[100%]" id="home">
        <Row>
          <div className="video-inner h-[100vh] w-[100%] relative">
            <video autoPlay muted loop className="fixed top-0 left-0 right-0 w-[100%] z-[-1] h-[100%] object-cover align-middle">
              <source src={sliderVideo} />
            </video>
          </div>
          <div className="flex flex-col z-10 absolute top-40">
            <Container >
              <div className="top-text">
                <h1 className="text-[80px] text-white">SOCIAL MEDIA& <br />
                  DIGITAL <br />
                  COMMUNICATION <br />
                  AGENCY
                </h1>
              </div>
              <div className="bottom-text flex items-center ">
                <FaMapMarkerAlt className="text-[#f6c300] text-[35px] " />
                <h6 className="text-[45px] text-[#f6c300] leading-[90px] pl-3 font-bold"> BAKU & TBILISI</h6>
              </div>
            </Container>
          </div>
        </Row>
      </section>
    </>
  )
}

export default Slider
