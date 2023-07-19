import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient()

  if (req.method === 'POST') {
    const { id } = req.query
    const orderUpdated = await prisma.order.update({
      where: {
        idOrder: parseInt(id)
      },
      data: {
        status: true
      }
    })
    res.status(200).json(orderUpdated)
  }
}