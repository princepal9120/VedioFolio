
import { Box, Container, Heading, Img, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel} from "react-responsive-carousel"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import  img1  from  '../assets/1.jpg';
import  img2  from '../assets/2.jpg'
import  img3  from '../assets/3.jpg'
import  img4  from '../assets/4.jpg'
import  img5 from '../assets/5.png'


const headingOptions ={
  pos:'absolute',
  left: '50%',
  top: '50%',
  transform: "translate(-50%,-50%)",
  textTransform:"uppercase",
  padding:"4",
  size:'4xl'




};

const Home = () => {
  return (
   <Box>
   <MyCarousel/>
   <Container maxW={'container.xl'} minH={'100vh'} p="4">
    <Heading textTransform={"uppercase"} py={"2"} width={"fit-content"}
    borderBottom={'2px solid'} margin={'auto'}>
      Services
    </Heading>
    <Stack h="full" p={'4'} alignItems={"center"} direction={['column','row']}>
<Img src={img5} h={['40','400']} filter={'hue-rotate(-920deg)'}></Img>
<Text letterSpacing={"widest"} lineHeight={'130%'} p={['4','18']} textAlign={'center'}>"In the realm of gaming,
 a diverse array of services has emerged to cater to the needs and desires of players, spanning from traditional 
 gaming platforms to cutting-edge technologies. These services encompass online multiplayer gaming, cloud gaming, 
 virtual reality (VR), augmented reality (AR), esports, and more. As we look to the future, the gaming industry is 
 poised to witness remarkable advancements, including improved graphics and gameplay, seamless integration of AI for
  enhanced gaming experiences, immersive VR/AR environments, expanded esports opportunities, and a growing emphasis on 
  sustainability and inclusivity."</Text>
    </Stack>
   </Container> 
   </Box> 
  )
}

const MyCarousel =()=>(
  <Carousel autoPlay 
  infiniteLoop 
  interval={1000}
   showArrows={false} showStatus={false}
  showThumbs={false}>
  <Box
  w={"full"} h={"100vh"}
  >
    <Img src={img1}/>
<Heading bgColor={"blackAlpha.100"} color={"whiteAlpha.700"} {...headingOptions}>
  Lets enjoy with coming future
</Heading>
  </Box>
 
  <Box
  w={"full"} h={"100vh"}
  >
    <Img src={img2}/>
<Heading bgColor={"blackAlpha.400"} color={"whiteAlpha.400"}  {...headingOptions}>
 Esport is future
</Heading>
  </Box>
  <Box
  w={"full"} h={"100vh"}
  >
    <Img src={img3}/>
<Heading bgColor={"blackAlpha.400"} color={"whiteAlpha.400"}  {...headingOptions}>
 
 Gaming give the fame
</Heading>
  </Box>
  <Box
  w={"full"} h={"100vh"}
  >
    <Img src={img4}/>
<Heading bgColor={"blackAlpha.100"} color={"whiteAlpha.400"}   {...headingOptions}>
Enjoy your life
</Heading>
  </Box>

 


  </Carousel>
);

export default Home