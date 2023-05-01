import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useEffect } from "react";
import { getMultiLang as ml } from '../components/MultiLang';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { loadposts } from "../components/store/posts";
import LoaderContent from '../components/loader/loaderContent';
import { useState } from 'react';
const Slider = () => {

  const [t] = useTranslation("translation");
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const data = useSelector((state) => state.list);
  const apidata =data.data?.home_section;
  useEffect(() => {
      dispatch(loadposts());
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1500);
  }, [dispatch]);
  return (
    <>
      <section className="relative w-[100%] h-[100%]" id="home">
        <Row>
          <div className="video-inner h-[100vh] w-[100%] relative">
            {
              loading ? 
              <LoaderContent />
              :
              <video autoPlay muted loop className="fixed top-0 left-0 right-0 w-[100%] z-[-1] h-[100%] object-cover align-middle first-letter" 
              src={apidata && apidata.video}>
                
              </video>
            }
           
          </div>
          <div className="flex flex-col z-10 absolute top-48 sm:top-[20rem] ">
            <Container >
              <div className="text-[80px] sm:text-[40px] text-white" 
              
              dangerouslySetInnerHTML={{ __html: apidata && ml(apidata.home_text_az, apidata.home_text_ru, apidata.home_text_en)}}>
              
              </div>
              <div className="bottom-text flex items-center ">
                <FaMapMarkerAlt className="text-[#f6c300] xl:text-[35px] sm:tex-[25px] " />
                <h6 className="xl:text-[45px] sm:text-[30px] text-[#f6c300] leading-[90px] pl-3 font-bold"> {apidata && ml(apidata.home_loc_text_az,apidata.home_loc_text_ru,apidata.home_loc_text_en)}</h6>
              </div>
            </Container>
          </div>
        </Row>
      </section>
    </>
  )
}

export default Slider
