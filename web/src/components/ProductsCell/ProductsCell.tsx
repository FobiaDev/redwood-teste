import { Flex } from '@chakra-ui/react'
import type { ProductsQuery } from 'types/graphql'

import { useQuery } from '@redwoodjs/web'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { ProductCard } from '../ProductCard'

export const QUERY = gql`
  query ProductsQuery($page: Int!, $title: String!) {
    products: products(page: $page, take: 18, title: $title) {
      id
      title
      imageUrl
      priceInCents
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ products }: CellSuccessProps<ProductsQuery>) => {
  return (
    <Flex flexWrap="wrap" gap="8">
      {products.map((item) => {
        return (
          <ProductCard
            key={item.id}
            price={(item.priceInCents / 100).toFixed(2)}
            imageUrl={item.imageUrl}
            title={item.title}
          />
        )
      })}
    </Flex>
  )
}
