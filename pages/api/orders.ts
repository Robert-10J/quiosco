import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient()

  const orders = await prisma.order.findMany({
    where: {
      status: false
    }
  })

  res.status(200).json(orders)
  
  if (req.method === 'POST') {
    const order = await prisma.order.create({
      data: {
        name: req.body.name,
        total: req.body.total,
        order: req.body.order,
        date: req.body.date
      }
    })
    res.status(200).json(order)
  }
}