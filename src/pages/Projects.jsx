import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { implerLogo, worksHover, worksImg } from '../assets';
import { Link } from "react-router-dom";
import { FiChevronDown } from 'react-icons/Fi';
import SwiperCards from '../components/UI/SwiperCards';



const swiperCard = {
  myDatas:[
    {
      id: 1,
      clientName: "Tefal",
      image: worksImg,
      imageOnHover: worksHover,
      period:"2020-2021",
      longText:"1-Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo dolorem dolore ex explicabo ducimus facilis modi nulla blanditiis et rem, itaque aut ut repudiandae distinctio quisquam cupiditate quo libero. Corporis ipsum fugiat cupiditate ipsa facere voluptate laudantium? Tempora repellendus molestiae corrupti facere? Voluptates natus molestiae, velit atque quidem dolorum at autem commodi enim aliquam illo architecto voluptas ut consequuntur numquam ratione suscipit qui corporis blanditiis alias veritatis nemo culpa pariatur. Velit ab blanditiis cupiditate voluptatibus assumenda laudantium consectetur quod ipsa vel reprehenderit porro facere omnis aperiam ratione, dolores accusamus praesentium maiores voluptatum doloremque, et distinctio perspiciatis odio neque consequuntur!"
    },
  
    {
      id: 2,
      clientName: "Tefal 2",
      image: worksImg,
      imageOnHover: worksHover,
      period:"2020-2022",
      longText:"2-Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo dolorem dolore ex explicabo ducimus facilis modi nulla blanditiis et rem, itaque aut ut repudiandae distinctio quisquam cupiditate quo libero. Corporis ipsum fugiat cupiditate ipsa facere voluptate laudantium? Tempora repellendus molestiae corrupti facere? Voluptates natus molestiae, velit atque quidem dolorum at autem commodi enim aliquam illo architecto voluptas ut consequuntur numquam ratione suscipit qui corporis blanditiis alias veritatis nemo culpa pariatur. Velit ab blanditiis cupiditate voluptatibus assumenda laudantium consectetur quod ipsa vel reprehenderit porro facere omnis aperiam ratione, dolores accusamus praesentium maiores voluptatum doloremque, et distinctio perspiciatis odio neque consequuntur!"
    },
    {
      id: 3,
      clientName: "Tefal 3",
      image: worksImg,
      imageOnHover: worksHover,
      period:"2020-2023",
      longText:"3-Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo dolorem dolore ex explicabo ducimus facilis modi nulla blanditiis et rem, itaque aut ut repudiandae distinctio quisquam cupiditate quo libero. Corporis ipsum fugiat cupiditate ipsa facere voluptate laudantium? Tempora repellendus molestiae corrupti facere? Voluptates natus molestiae, velit atque quidem dolorum at autem commodi enim aliquam illo architecto voluptas ut consequuntur numquam ratione suscipit qui corporis blanditiis alias veritatis nemo culpa pariatur. Velit ab blanditiis cupiditate voluptatibus assumenda laudantium consectetur quod ipsa vel reprehenderit porro facere omnis aperiam ratione, dolores accusamus praesentium maiores voluptatum doloremque, et distinctio perspiciatis odio neque consequuntur!"
    },
    {
      id: 4,
      clientName: "Tefal 4",
      image: worksImg,
      imageOnHover: worksHover,
      period:"2020-2024",
      longText:"4-Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo dolorem dolore ex explicabo ducimus facilis modi nulla blanditiis et rem, itaque aut ut repudiandae distinctio quisquam cupiditate quo libero. Corporis ipsum fugiat cupiditate ipsa facere voluptate laudantium? Tempora repellendus molestiae corrupti facere? Voluptates natus molestiae, velit atque quidem dolorum at autem commodi enim aliquam illo architecto voluptas ut consequuntur numquam ratione suscipit qui corporis blanditiis alias veritatis nemo culpa pariatur. Velit ab blanditiis cupiditate voluptatibus assumenda laudantium consectetur quod ipsa vel reprehenderit porro facere omnis aperiam ratione, dolores accusamus praesentium maiores voluptatum doloremque, et distinctio perspiciatis odio neque consequuntur!"
    },
    {
      id: 5,
      clientName: "Tefal 5",
      image: worksImg,
      imageOnHover: worksHover,
      period:"2020-2025",
      longText:"5-Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo dolorem dolore ex explicabo ducimus facilis modi nulla blanditiis et rem, itaque aut ut repudiandae distinctio quisquam cupiditate quo libero. Corporis ipsum fugiat cupiditate ipsa facere voluptate laudantium? Tempora repellendus molestiae corrupti facere? Voluptates natus molestiae, velit atque quidem dolorum at autem commodi enim aliquam illo architecto voluptas ut consequuntur numquam ratione suscipit qui corporis blanditiis alias veritatis nemo culpa pariatur. Velit ab blanditiis cupiditate voluptatibus assumenda laudantium consectetur quod ipsa vel reprehenderit porro facere omnis aperiam ratione, dolores accusamus praesentium maiores voluptatum doloremque, et distinctio perspiciatis odio neque consequuntur!"
    },
    {
      id: 6,
      clientName: "Tefal 6",
      image: worksImg,
      imageOnHover: worksHover,
      period:"2020-2026",
      longText:"6-Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo dolorem dolore ex explicabo ducimus facilis modi nulla blanditiis et rem, itaque aut ut repudiandae distinctio quisquam cupiditate quo libero. Corporis ipsum fugiat cupiditate ipsa facere voluptate laudantium? Tempora repellendus molestiae corrupti facere? Voluptates natus molestiae, velit atque quidem dolorum at autem commodi enim aliquam illo architecto voluptas ut consequuntur numquam ratione suscipit qui corporis blanditiis alias veritatis nemo culpa pariatur. Velit ab blanditiis cupiditate voluptatibus assumenda laudantium consectetur quod ipsa vel reprehenderit porro facere omnis aperiam ratione, dolores accusamus praesentium maiores voluptatum doloremque, et distinctio perspiciatis odio neque consequuntur!"
    },
    {
      id: 7,
      clientName: "Tefal 7",
      image: worksImg,
      imageOnHover: worksHover,
      period:"2020-2027",
      longText:"7-Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo dolorem dolore ex explicabo ducimus facilis modi nulla blanditiis et rem, itaque aut ut repudiandae distinctio quisquam cupiditate quo libero. Corporis ipsum fugiat cupiditate ipsa facere voluptate laudantium? Tempora repellendus molestiae corrupti facere? Voluptates natus molestiae, velit atque quidem dolorum at autem commodi enim aliquam illo architecto voluptas ut consequuntur numquam ratione suscipit qui corporis blanditiis alias veritatis nemo culpa pariatur. Velit ab blanditiis cupiditate voluptatibus assumenda laudantium consectetur quod ipsa vel reprehenderit porro facere omnis aperiam ratione, dolores accusamus praesentium maiores voluptatum doloremque, et distinctio perspiciatis odio neque consequuntur!"
    },
    {
      id: 8,
      clientName: "Tefal 8",
      image: worksImg,
      imageOnHover: worksHover,
      period:"2020-2028",
      longText:"8-Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo dolorem dolore ex explicabo ducimus facilis modi nulla blanditiis et rem, itaque aut ut repudiandae distinctio quisquam cupiditate quo libero. Corporis ipsum fugiat cupiditate ipsa facere voluptate laudantium? Tempora repellendus molestiae corrupti facere? Voluptates natus molestiae, velit atque quidem dolorum at autem commodi enim aliquam illo architecto voluptas ut consequuntur numquam ratione suscipit qui corporis blanditiis alias veritatis nemo culpa pariatur. Velit ab blanditiis cupiditate voluptatibus assumenda laudantium consectetur quod ipsa vel reprehenderit porro facere omnis aperiam ratione, dolores accusamus praesentium maiores voluptatum doloremque, et distinctio perspiciatis odio neque consequuntur!"
    },
    {
      id: 9,
      clientName: "Tefal 9",
      image: worksImg,
      imageOnHover: worksHover,
      period:"2020-2029",
      longText:"9-Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo dolorem dolore ex explicabo ducimus facilis modi nulla blanditiis et rem, itaque aut ut repudiandae distinctio quisquam cupiditate quo libero. Corporis ipsum fugiat cupiditate ipsa facere voluptate laudantium? Tempora repellendus molestiae corrupti facere? Voluptates natus molestiae, velit atque quidem dolorum at autem commodi enim aliquam illo architecto voluptas ut consequuntur numquam ratione suscipit qui corporis blanditiis alias veritatis nemo culpa pariatur. Velit ab blanditiis cupiditate voluptatibus assumenda laudantium consectetur quod ipsa vel reprehenderit porro facere omnis aperiam ratione, dolores accusamus praesentium maiores voluptatum doloremque, et distinctio perspiciatis odio neque consequuntur!"
    },
    {
      id: 10,
      clientName: "Tefal 10",
      image: worksImg,
      imageOnHover: worksHover,
      period:"2020-2030",
      longText:"10-Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo dolorem dolore ex explicabo ducimus facilis modi nulla blanditiis et rem, itaque aut ut repudiandae distinctio quisquam cupiditate quo libero. Corporis ipsum fugiat cupiditate ipsa facere voluptate laudantium? Tempora repellendus molestiae corrupti facere? Voluptates natus molestiae, velit atque quidem dolorum at autem commodi enim aliquam illo architecto voluptas ut consequuntur numquam ratione suscipit qui corporis blanditiis alias veritatis nemo culpa pariatur. Velit ab blanditiis cupiditate voluptatibus assumenda laudantium consectetur quod ipsa vel reprehenderit porro facere omnis aperiam ratione, dolores accusamus praesentium maiores voluptatum doloremque, et distinctio perspiciatis odio neque consequuntur!"
    },
    {
      id: 11,
      clientName: "Tefal 11",
      image: worksImg,
      imageOnHover: worksHover,
      period:"2020-2031",
      longText:"11-Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo dolorem dolore ex explicabo ducimus facilis modi nulla blanditiis et rem, itaque aut ut repudiandae distinctio quisquam cupiditate quo libero. Corporis ipsum fugiat cupiditate ipsa facere voluptate laudantium? Tempora repellendus molestiae corrupti facere? Voluptates natus molestiae, velit atque quidem dolorum at autem commodi enim aliquam illo architecto voluptas ut consequuntur numquam ratione suscipit qui corporis blanditiis alias veritatis nemo culpa pariatur. Velit ab blanditiis cupiditate voluptatibus assumenda laudantium consectetur quod ipsa vel reprehenderit porro facere omnis aperiam ratione, dolores accusamus praesentium maiores voluptatum doloremque, et distinctio perspiciatis odio neque consequuntur!"
    },
    {
      id: 12,
      clientName: "Tefal 12",
      image: worksImg,
      imageOnHover: worksHover,
      period:"2020-2032",
      longText:"12-Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo dolorem dolore ex explicabo ducimus facilis modi nulla blanditiis et rem, itaque aut ut repudiandae distinctio quisquam cupiditate quo libero. Corporis ipsum fugiat cupiditate ipsa facere voluptate laudantium? Tempora repellendus molestiae corrupti facere? Voluptates natus molestiae, velit atque quidem dolorum at autem commodi enim aliquam illo architecto voluptas ut consequuntur numquam ratione suscipit qui corporis blanditiis alias veritatis nemo culpa pariatur. Velit ab blanditiis cupiditate voluptatibus assumenda laudantium consectetur quod ipsa vel reprehenderit porro facere omnis aperiam ratione, dolores accusamus praesentium maiores voluptatum doloremque, et distinctio perspiciatis odio neque consequuntur!"
    },
    {
      id: 13,
      clientName: "Tefal 13",
      image: worksImg,
      imageOnHover: worksHover,
      period:"2020-2033",
      longText:"13-Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo dolorem dolore ex explicabo ducimus facilis modi nulla blanditiis et rem, itaque aut ut repudiandae distinctio quisquam cupiditate quo libero. Corporis ipsum fugiat cupiditate ipsa facere voluptate laudantium? Tempora repellendus molestiae corrupti facere? Voluptates natus molestiae, velit atque quidem dolorum at autem commodi enim aliquam illo architecto voluptas ut consequuntur numquam ratione suscipit qui corporis blanditiis alias veritatis nemo culpa pariatur. Velit ab blanditiis cupiditate voluptatibus assumenda laudantium consectetur quod ipsa vel reprehenderit porro facere omnis aperiam ratione, dolores accusamus praesentium maiores voluptatum doloremque, et distinctio perspiciatis odio neque consequuntur!"
    },
  ]
}

const Projects = () => {

    const [nonElement,setNonELement] =useState(9);
    const slice =swiperCard.myDatas.slice(0,nonElement)

    const loadMore  =()=>{
      setNonELement(nonElement+nonElement)
    }
  return (
    <>


      <section className='bg-[#234656] pt-[150px] pb-[150px] pr-0 pl-0 relative w-[100%] h-[100%]'>
        <Container>
          <Row>
          
            <Col lg='12' md='12' className='pb-[40px]'>
              <h2 className='text-[#fff] uppercase text-[50px] pt-0 pl-0 pr-0 pb-10 '>Works</h2>
              <Link to='/' >
                <div className="w-[160px] mb-10">
                  <img src={implerLogo} alt="" className='max-w-[100%] h-auto' />
                </div>
              </Link>
            </Col>
            {slice && slice?.map((item, index) => (
                <SwiperCards img1={item.image} imgHvr={item.imageOnHover} clientNm={item.clientName} idP={item.id} key={index} lngText={item.longText} prd={item.period}  />
              ))}
            
          </Row>
          <button onClick={()=>loadMore()} className='flex items-center text-white uppercase font-bold text-[20px]'>
               <FiChevronDown className='mr-2 font-bold text-[30px] text-[#EFC643]' /> daha cox
        </button> 
        </Container>
       
      </section>

     


    </>



  )
}

export default Projects
