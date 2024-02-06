import { Container, VStack ,Text, Heading, Input, Button, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
<Container maxW={'container.xl'} h={'100vh'} p={'16'}>
<form>
  <VStack alignItems={'stretch'} spacing={'8'} w={['full', "96"]} m={'auto'} 
  my={'16'}
  >
<Heading>
Video Hub
</Heading>
<Avatar alignSelf={'center'}  boxSize={'90'}  />

<Input placeholder='Name' 
type='text' 
required focusBorderColor='grey'></Input>

<Input placeholder='Email' 
type='email' 
required focusBorderColor='grey'></Input>
<Input placeholder='Password' 
type='password' 
required focusBorderColor='grey'></Input>

<Button colorScheme='purple' type='submit'>
  Sign Up
</Button>
<Text textAlign={'right'} spacing={'8'} >Already Sign Up? {"    "}
<Button variant={'link'} colorScheme={'purple'}>
  <Link to={"/login"}>
    Log In
  </Link>
</Button>
</Text>
  </VStack>
</form>
</Container>
  )
}

export default Signup;