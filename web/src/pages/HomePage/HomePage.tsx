import { Box, Divider, Heading } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ProductsList from 'src/components/ProductsCell'

const HomePage = ({ search = '', page = 0 }) => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Box flex="1" borderRadius={8} bg="gray.800" p="8" as="main">
        <Heading size="lg" fontWeight="normal">
          Produtos
        </Heading>

        <Divider my="6" borderColor="gray.700" />

        <ProductsList title={search} page={page} />
      </Box>
    </>
  )
}

export default HomePage
