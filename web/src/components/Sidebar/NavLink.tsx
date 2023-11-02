import { ComponentType } from 'react'

import {
  Icon,
  Text,
  Link as LinkChakra,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'
import { IconBaseProps } from 'react-icons'

import { AvailableRoutes, Link } from '@redwoodjs/router'

interface NavLinkProps extends ChakraLinkProps {
  children: string
  icon: ComponentType<IconBaseProps>
  to: AvailableRoutes
}

const NavLink = ({
  children,
  icon,
  to,
  ...rest
}: NavLinkProps): JSX.Element => {
  return (
    <LinkChakra as={Link} display="flex" align="center" to={to} {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </LinkChakra>
  )
}

export default NavLink
