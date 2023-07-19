import Product from '@/components/Product'
import useQuiosco from '@/hooks/useQuiosco'
import Layout from '@/layout/Layout'

const Home = () => {
  const { categorySelected } = useQuiosco()
  return (
    <Layout page={`Menú ${categorySelected?.nameCategory}`}>
      <h1 className='text-4xl font-black'>{categorySelected?.nameCategory}</h1>
      <p className='text-2xl my-10'>Elige y personaliza tu pedido a continuación</p>

      <div className='grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {categorySelected?.products?.map(product => (
          <Product
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Home