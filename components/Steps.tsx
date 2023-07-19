import { useRouter } from 'next/router'
import { STEPS } from '@/constants'

const Steps = () => {
  const router = useRouter()

  const calulateProgress = () => {
    const PROGRESS_BAR: {[key: string]: number } = {
      '/': 2,
      '/orderSummary': 50,
    }

    const DEFAULT_PROGRESS_BAR = 100
    const progressValue = PROGRESS_BAR[router.pathname] || DEFAULT_PROGRESS_BAR
    return progressValue
  }

  return (
    <>
      <div className='flex justify-between mb-5'>
        {
          STEPS.map( step => (
            <button 
              onClick={() => {
                router.push(step.url)
              }}
              key={step.step}
              className='text-2xl font-bold'
             >{ step.name }</button>
          ))
        }
      </div>

      <div className='bg-gray-100 mb-10'>
        <div 
          className='rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white'
          style={{ width: `${calulateProgress()}%` }}
        ></div>
      </div>
    </>
  )
}

export default Steps