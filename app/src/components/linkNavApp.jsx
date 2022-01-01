import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export const LinkNavApp = ({ path, name, icon }) => {
  return (
    <NavLink exact to={path} activeStyle={{ color: '#1f6987', fontWeight: 'bold' }}>
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        {icon}
        <Text fontSize='xs' paddingTop='.3rem'>{name}</Text>
      </Box>
    </NavLink>
  )
}
