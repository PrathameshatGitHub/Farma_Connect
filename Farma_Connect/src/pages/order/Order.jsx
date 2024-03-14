import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import Layout from '../../components/layout/Layout'
import Loader from '../../components/loader/Loader'
import ProductCard from '../../components/productCard/ProductCard'
function Order() {
  const userid = JSON.parse(localStorage.getItem('user')).user.uid
  const context = useContext(myContext)
  const { mode, loading, order } = context
  return (
    <Layout>
      
      <ProductCard/>
      
        (
          <h2 className=' text-center tex-2xl text-white'>Not Order</h2>
        )

      
    </Layout>
  )
}

export default Order