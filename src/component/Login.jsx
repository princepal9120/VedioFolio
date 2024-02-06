import { Container, VStack ,Text, Heading, Input, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
<Container maxW={'container.xl'} h={'100vh'} p={'16'}>
<form>
  <VStack alignItems={'stretch'} spacing={'8'} w={['full', "96"]} m={'auto'} 
  my={'16'}
  >
<Heading>
Hi, Login Your Account for better experience
</Heading>
<Input placeholder='Email' 
type='email' 
required focusBorderColor='grey'></Input>
<Input placeholder='Password' 
type='password' 
required focusBorderColor='grey'></Input>

<Button  variant={'link'} alignSelf={'flex-end'}>
<Link to={"/signup"}>forget Password</Link>
</Button>

<Button colorScheme='facebook' type='submit'>
  Log In
</Button>
<Text textAlign={'right'} spacing={'8'} >New User? {'  '}
<Button variant={'link'} colorScheme={'purple'}>
<Link to={'/signup'}>Sign Up</Link>

</Button>
</Text>
  </VStack>
</form>
</Container>
  )
}

export default Login