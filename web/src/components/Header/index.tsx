import { Flex } from '@chakra-ui/react'

import Logo from './Logo'
import NotificationsNav from './NotificationsNav'
import Profile from './Profile'
import SearchBox from './SearchBox'

const Header = (): JSX.Element => {
  return (
    <Flex
      w="100%"
      as="header"
      maxW="1480px"
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      <SearchBox />

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  )
}

export default Header
