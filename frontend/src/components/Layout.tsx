import Head from 'next/head'
import { ReactNode } from 'react'
import Header from './Header'

type LayoutProps = {
    children : ReactNode,
    title : string
}

const Layout = ({children, title} : LayoutProps) => {
  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name='description' content='petites annonces' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className='main-content'>{children}</main>
    </>
  
  )
}

export default Layout