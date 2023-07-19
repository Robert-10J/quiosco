import { QuioscoProvider } from '@/context/QuioscoProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QuioscoProvider>
      <Component {...pageProps} />
    </QuioscoProvider>
   )
}
