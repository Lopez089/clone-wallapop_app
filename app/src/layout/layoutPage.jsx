import React from 'react'
import { Box, } from '@chakra-ui/react'
import { NavContainer } from 'container/navContainer'

export const LayoutPage = ({ children }) => {
	return (
		<Box h='100%' position='relative'  >
			<Box p='.5rem' minH='100%'>
				{children}
			</Box >
			<NavContainer />
		</Box>
	)
}