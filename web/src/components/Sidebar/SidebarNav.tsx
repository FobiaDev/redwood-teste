import { Stack } from '@chakra-ui/react'
import { AiOutlineUnorderedList, AiOutlineAppstoreAdd } from 'react-icons/ai'
import { RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'

import { routes } from '@redwoodjs/router'

import NavLink from './NavLink'
import NavSection from './NavSection'

const SidebarNav = (): JSX.Element => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="PRODUTOS">
        <NavLink to={routes.home()} icon={AiOutlineUnorderedList}>
          Produtos
        </NavLink>
        <NavLink to={routes.newProduct()} icon={AiOutlineAppstoreAdd}>
          Adicionar produto
        </NavLink>
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink to={routes.home()} icon={RiInputMethodLine}>
          Formulários
        </NavLink>
        <NavLink to={routes.home()} icon={RiGitMergeLine}>
          Automação
        </NavLink>
      </NavSection>
    </Stack>
  )
}

export default SidebarNav
