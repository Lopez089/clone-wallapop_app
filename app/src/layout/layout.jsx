import React from 'react'
import { Box } from '@chakra-ui/react'

export const Layout = ({ children }) => {
  return (
    <Box as='main' w='100vw' h='100vh' bgGradient='linear(to-l, #1F6987, #27314d)' display='flex' alignItems='center' justifyContent='center'>
      <Box
        as='section'
        w={{ base: '100vw', sm: '100vw', md: '100vw', lg: '375px' }}
        h={{ base: '100vh', sm: '100vh', md: '100vh', lg: '90vh', xl: '667px' }}
        bg='white'
        borderRadius={{ sm: '0', md: '0', lg: '1rem' }}
        overflow='overlay'
        css={{
          '&::-webkit-scrollbar': {
            width: '0'
          }
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
