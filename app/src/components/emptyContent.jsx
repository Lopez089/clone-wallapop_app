import React from 'react'
import { Box, Heading, Text, Image, Button } from '@chakra-ui/react'

export const EmptyContent = ({ img, header, copy }) => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Image src={img} htmlWidth='75%' marginY='2rem' />
      <Heading align='center' size='md' marginTop='2rem'>{header} </Heading>
      <Text fontSize='sm' marginY='1rem' align='center'>{copy}</Text>
      <Button colorScheme='blue'>Buscar en Wallapop</Button>
    </Box>
  )
}
