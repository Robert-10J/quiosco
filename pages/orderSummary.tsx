import SummaryProduct from '@/components/SummaryProduct';
import useQuiosco from '@/hooks/useQuiosco';
import Layout from '@/layout/Layout';

export default function OrderSummary() {
  const { order } = useQuiosco()

  return (
    <Layout page='Resumen'>
      <h1 className='text-4xl font-black'>Resumen del Pedido</h1>
      <p className='text-2xl my-10'>Revisa tu pedido</p>

      {order.length === 0 ? (
          <p className='text-center text-2xl'>No hay elementos en tu pedido</p>
        ) : (
          order.map( product => (
            <SummaryProduct 
              key={product.id}
              product={product}
            />
          ))
        )
      }
    </Layout>
  )
}