import { Box } from '@chakra-ui/react'

import SidebarNav from './SidebarNav'

const Sidebar = (): JSX.Element => {
  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  )
}

export default Sidebar
