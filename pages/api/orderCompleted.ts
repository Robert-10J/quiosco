import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient()

  const orders = await prisma.order.findMany({
    where: {
      status: true
    }
  })

  res.status(200).json(orders)
}