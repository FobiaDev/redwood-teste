import { db } from 'src/lib/db'

export const products = ({ take, page, title }) => {
  return db.product.findMany({
    where: { title: { contains: title } },
    take,
    skip: page * take,
  })
}

export const createProduct = ({ input }) => {
  return db.product.create({
    data: input,
  })
}
