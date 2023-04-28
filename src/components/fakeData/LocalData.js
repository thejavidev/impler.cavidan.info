import { partner1, partner2, servicesPng, servivesGif, team1, team2, worksHover, worksImg, you } from "../../assets";
import { AiOutlineInstagram,AiFillLinkedin } from 'react-icons/Ai';
import { BsFacebook } from 'react-icons/Bs';
import { FaTiktok } from 'react-icons/fa';


const companyCard = [
  
    {
      id: 1,
      name: "Ilqar Mirza",
      position: "SEO",
      pciture: team1
    },
    {
      id: 2,
      name: "Gulnar Qurbanova",
      position: "Social Media",
      pciture: team2
    },
    {
      id: 3,
      name: "Vuqar Abbasov",
      position: "SMM",
      pciture: team1
    },
    {
      id: 4,
      name: "Vuqar Abbasov",
      position: "SMM",
      pciture: team2
    },
    {
      id: 5,
      name: "Vuqar Abbasov",
      position: "SMM",
      pciture: team1
    },
    {
      id: 6,
      name: "Vuqar Abbasov",
      position: "SMM",
      pciture: team2
    },
    {
      id: 7,
      name: "Vuqar Abbasov",
      position: "SMM",
      pciture: team1
    },
    {
      id: 8,
      name: "Vuqar Abbasov",
      position: "SMM",
      pciture: team2
    },
    {
      id: 9,
      name: "Vuqar Abbasov",
      position: "SMM",
      pciture: team1
    },
    {
      id: 10,
      name: "Vuqar Abbasov",
      position: "SMM",
      pciture: team2
    },
    {
      id: 11,
      name: "Bize qosul",
      position: "test@test.az",
      pciture: you
    },
]
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
const services =[
  {
    id:1,
    img1:servicesPng,
    img2:servivesGif,
    alt:"test 1",
    titleh3:"Social Media Marketing"
  },
  {
    id:2,
    img1:servicesPng,
    img2:servivesGif,
    alt:"test 2",
    titleh3:"Social Media Marketing"
  },
  {
    id:3,
    img1:servicesPng,
    img2:servivesGif,
    alt:"test 3",
    titleh3:"Social Media Marketing"
  },
  {
    id:3,
    img1:servicesPng,
    img2:servivesGif,
    alt:"test 3",
    titleh3:"Social Media Marketing"
  },
  {
    id:4,
    img1:servicesPng,
    img2:servivesGif,
    alt:"test 3",
    titleh3:"Social Media Marketing"
  },
  {
    id:5,
    img1:servicesPng,
    img2:servivesGif,
    alt:"test 3",
    titleh3:"Social Media Marketing"
  },
  {
    id:6,
    img1:servicesPng,
    img2:servivesGif,
    alt:"test 3",
    titleh3:"Social Media Marketing"
  },
  {
    id:7,
    img1:servicesPng,
    img2:servivesGif,
    alt:"test 3",
    titleh3:"Social Media Marketing"
  },
  {
    id:8,
    img1:servicesPng,
    img2:servivesGif,
    alt:"test 3",
    titleh3:"Social Media Marketing"
  },
  {
    id:9,
    img1:servicesPng,
    img2:servivesGif,
    alt:"test 3",
    titleh3:"Social Media Marketing"
  },
]
const tabsIcon =[
  {
    id:1,
    img1:servicesPng,
    img2:servivesGif,
    eventKey:"first",
    name:"Home 1"
  },
  {
    id:2,
    img1:servicesPng,
    img2:servivesGif,
    eventKey:"second",
    name:"Home 2"
  },
]
const tabsContent =[
  {
    id:1,
    eventKey:"first",
    titleLeft:"1-Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio id assumenda sunt ab, modi vitae architecto aperiam, quaerat veniam earum illo veritatis provident libero eveniet doloremque minus sit rem.",
    titleRight:"2-Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio id assumenda sunt ab, modi vitae architecto aperiam, quaerat veniam earum illo veritatis provident libero eveniet doloremque minus sit rem."
  },
  {
    id:2,
    eventKey:"second",
    titleLeft:"3-Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio id assumenda sunt ab, modi vitae architecto aperiam, quaerat veniam earum illo veritatis provident libero eveniet doloremque minus sit rem.",
    titleRight:"4-Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio id assumenda sunt ab, modi vitae architecto aperiam, quaerat veniam earum illo veritatis provident libero eveniet doloremque minus sit rem."
  },
]
const partnersData=[
  {
    id:1,
    logo:partner1
  },
  {
    id:2,
    logo:partner2
  },
  {
    id:3,
    logo:partner1
  },
  {
    id:4,
    logo:partner2
  },
  {
    id:5,
    logo:partner1
  },
  {
    id:6,
    logo:partner2
  },
  {
    id:7,
    logo:partner1
  },
  {
    id:8,
    logo:partner2
  },
  {
    id:9,
    logo:partner1
  },
  {
    id:10,
    logo:partner2
  },
  {
    id:11,
    logo:partner1
  },
  {
    id:12,
    logo:partner2
  },
  {
    id:13,
    logo:partner1
  },
  {
    id:14,
    logo:partner2
  },
  {
    id:15,
    logo:partner1
  },
  {
    id:16,
    logo:partner2
  },
  {
    id:17,
    logo:partner1
  },
  {
    id:18,
    logo:partner2
  },
  {
    id:19,
    logo:partner1
  },
  {
    id:20,
    logo:partner2
  },
]

const socials=[
  {
    id:1,
    href:"https://www.instagram.com/Instagram",
    Icon:AiOutlineInstagram,
  },
  {
    id:2,
    href:"https://www.facebook.com/impler",
    Icon:BsFacebook,
  },
  {
    id:3,
    href:"https://www.linkedin.com/Linkedin",
    Icon:AiFillLinkedin,
  },
  {
    id:4,
    href:"https://facebook.com/impler",
    Icon:FaTiktok,
  },
]


export {
  companyCard,
  swiperCard,
  services,
  tabsIcon,
  tabsContent,
  partnersData,

  socials,
}
  