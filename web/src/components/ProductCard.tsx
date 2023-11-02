import { Box, Text } from '@chakra-ui/react'

interface ProductCardProps {
  title: string
  imageUrl: string
  price: string
}

export const ProductCard = ({ title, imageUrl, price }: ProductCardProps) => {
  return (
    <Box w="32" h="48" borderRadius="md" overflow="hidden" bg="gray.700">
      <img src={imageUrl} alt="" />
      <Text mt="2.5" mx="auto" w="13" textAlign="center">
        {title}
      </Text>
      <Text mt="2.5" mx="auto" w="13" textAlign="center">
        R${price}
      </Text>
    </Box>
  )
}
