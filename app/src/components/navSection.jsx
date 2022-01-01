import React from 'react'
import { Box, Tab, Tabs, TabList, TabPanels, TabPanel } from '@chakra-ui/react'
import likeProduct from 'images/likeProduct.svg'
import likeProfile from 'images/likeProfile.svg'
import likeSearch from 'images/likeSearch.svg'
import { favoriteEmptyContent } from 'constants/favorite'
import { EmptyContent } from 'components/emptyContent'

export const NavSection = () => {
  const { product, search, profile } = favoriteEmptyContent

  return (
    <Box paddingY='1rem'>
      <Tabs variant='soft-rounded'>
        <TabList display='flex' justifyContent='space-around'>
          <Tab>Productos</Tab>
          <Tab>Búsquedas</Tab>
          <Tab>Perfiles</Tab>
        </TabList>
        <TabPanels>
          <TabPanel><EmptyContent img={likeProduct} header={product.header} copy={product.copy} /></TabPanel>
          <TabPanel><EmptyContent img={likeSearch} header={search.header} copy={search.copy} /></TabPanel>
          <TabPanel><EmptyContent img={likeProfile} header={profile.header} copy={profile.copy} /></TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
