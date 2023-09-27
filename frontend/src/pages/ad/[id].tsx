import Layout from '@/components/Layout';
import { useRouter } from 'next/router'
import React from 'react'

const AdDetails = () => {

    const router = useRouter();
    console.log(router);
    
  return (
    <>
    <Layout title={`ANNONCE N°${router.query.id}`}>
    <p>Voici les détails de l'annonce n°{router.query.id}</p>
    </Layout>
    
    </>
  )
}

export default AdDetails