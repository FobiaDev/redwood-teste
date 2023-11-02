import { Box, Flex } from '@chakra-ui/react'

import Header from 'src/components/Header'
import Sidebar from 'src/components/Sidebar'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />
        {children}
      </Flex>
    </Box>
  )
}

export default DefaultLayout
