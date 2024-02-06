import { Box, Button, HStack, Heading, Stack, VStack ,Input,Text } from '@chakra-ui/react';
import React from 'react'
import {AiOutlineSend} from "react-icons/ai"

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.800"} minH={'40'} color={"white"} size={'md'} p={'16'}>
<Stack direction={['column','row']} >
    <VStack alignItems={'stretch'}  w={'full'}>
        <Heading size={'md'} textTransform={'uppercase'}>
            Subscribe to get updates
        </Heading>
        <HStack borderBottom={'2px solid white'} py={'2'} px={'6'}>
        <Input placeholder={'Enter Email here....'} borderRadius={'none'} border={'none'} outline={'none '}
            focusBorderColor='none'
        />
            <Button  p={'0'} colorScheme='facebook' variant={'outline'} borderRadius={'0 29px 29px 0'}>
                <AiOutlineSend size={'12'} color='purple' />
            </Button>
        </HStack>
    </VStack>
    <VStack w={'full'} 
    borderLeft={['none' ,'2px solid white']}
    borderRight={['none', '2px solid white']}
    >
        <Heading   textTransform={'uppercase'}>
            Video Hub
        </Heading>
        
<Text>@all copyright</Text>
    </VStack>
    <VStack w={'full'} 


    >
        
<Heading size={'md'} textTransform={'uppercase'}>
    Social Media
</Heading>
<Button variant={'link'} colorScheme='purple'>
    <a target='black'  href="https://youtube.com">Youtube</a>
</Button>
<Button variant={'link'} colorScheme='purple'>
    <a  target='black' href="https://www.instagram.com/its_prince_.088/">Instagram</a>
</Button>
<Button variant={'link'} colorScheme='purple'>
    <a  target='black' href="https://github.com/princepal9120">Github</a>
</Button>
    </VStack>
</Stack>
    </Box>
  )
}

export default Footer;