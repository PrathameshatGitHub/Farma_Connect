import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/cartSlice';
import { fireDB } from '../../fireabase/FirebaseConfig';

function ProductInfo() {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [products, setProducts] = useState('')
    const params = useParams()
    // console.log(products.title)

    const getProductData = async () => {
        setLoading(true)
        try {
            const productTemp = await getDoc(doc(fireDB, "products", params.id))
            // console.log(productTemp)
            setProducts(productTemp.data());
            // console.log(productTemp.data())
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    useEffect(() => {
        getProductData()

    }, [])



    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    // console.log(cartItems)

    // add to cart
    const addCart = (products) => {
        dispatch(addToCart(products))
        toast.success('add to cart');
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])




    return (
        <Layout>
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-10 mx-auto">
                {products && 
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img
                            alt="ecommerce"
                            className="lg:w-1/3 w-full lg:h-auto object-cover object-center rounded"
                            src={products.imageUrl}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                Variety
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-bold mb-6">
                                {products.title}
                            </h1>
                            <h1 className="text-sm title-font text-black-600 tracking-widest  font-bold">
                            Contact:
                            </h1>
                            <p className='font-bold'> 
                                 {products.category}
                            </p>
                            <h1 className="text-sm title-font text-black-600 tracking-widest  font-bold">
                                Address
                            </h1>
                            <p className="leading-relaxed border-b-3 mb-2 pb-4 font-medium">
                                {products.description}
                            </p>
                            <p className="leading-relaxed border-b-2 mb-6 pb-5 font-bold">
                                No of trees: {products.trees}
                            </p>
                            <div className="flex">
                                <span className="title-font font-bold text-2xl text-black-900">
                                    ₹{products.price}/box
                                </span>
                                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                    Message
                                </button>
                                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                    Revisit
                                </button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </section>
    </Layout>
    
    )
}

export default ProductInfo