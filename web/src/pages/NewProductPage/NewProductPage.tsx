import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { MetaTags, useMutation } from '@redwoodjs/web'

import CurrencyInput from 'src/components/Form/CurrencyInput'
import Input from 'src/components/Form/Input'

const CREATE_PRODUCT = gql`
  mutation CreateProductMutation($input: CreateProductInput!) {
    createProduct(input: $input) {
      id
    }
  }
`

const createProductFormSchema = z.object({
  title: z.string().min(3, 'Digite um nome para o produto'),
  imageUrl: z.string().url('Informe a URL que contem a imagem do produto'),
  priceInCents: z
    .string()
    .transform(
      (toPriceInCents) => Number(toPriceInCents.replace(',', '.')) * 100
    ),
})

type CreateProductFormData = z.infer<typeof createProductFormSchema>

const NewProductPage = () => {
  const [create] = useMutation(CREATE_PRODUCT)

  const { register, handleSubmit, formState, reset } =
    useForm<CreateProductFormData>({
      resolver: zodResolver(createProductFormSchema),
    })

  function handleCreateProduct({
    title,
    imageUrl,
    priceInCents,
  }: CreateProductFormData) {
    create({
      variables: {
        input: {
          title,
          imageUrl,
          priceInCents,
        },
      },
    })

    reset()
  }

  return (
    <>
      <MetaTags title="NewProduct" description="NewProduct page" />

      <Box flex="1" borderRadius={8} bg="gray.800" p="8" as="main">
        <Heading size="lg" fontWeight="normal">
          Cadastrar produto
        </Heading>

        <Divider my="6" borderColor="gray.700" />

        <Box as="form" onSubmit={handleSubmit(handleCreateProduct)}>
          <VStack spacing="8" mb="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input
                label="Nome do produto"
                {...register('title')}
                error={formState.errors.title}
              />
              <CurrencyInput
                label="Valor do produto"
                {...register('priceInCents')}
                error={formState.errors.priceInCents}
              />
            </SimpleGrid>
          </VStack>

          <Input
            label="Link da imagem"
            {...register('imageUrl')}
            error={formState.errors.imageUrl}
          />

          <Flex mt="8" justify="flex-end">
            <Button
              colorScheme="pink"
              type="submit"
              size="lg"
              px="10"
              isLoading={formState.isSubmitting}
            >
              Cadastrar
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  )
}

export default NewProductPage
