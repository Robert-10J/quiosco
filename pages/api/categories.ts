import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const categories = await prisma.category.findMany({
    include: {
      products: true
    }
  })
  res.status(200).json(categories)
}