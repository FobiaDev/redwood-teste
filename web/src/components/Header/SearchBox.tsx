import { Flex, Box, Icon, Input } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'

import { useForm } from '@redwoodjs/forms'
import { navigate } from '@redwoodjs/router'

const SearchBox = (): JSX.Element => {
  const { handleSubmit, register } = useForm()

  function handleSearch({ search }) {
    navigate(`/?search=${search}`)
  }

  return (
    <Box
      as="form"
      w="100%"
      ml="6"
      maxW="400px"
      onSubmit={handleSubmit(handleSearch)}
    >
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'gray.400' }}
          {...register('search')}
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>
    </Box>
  )
}

export default SearchBox
