import React from 'react'
import FetctApi from './FetctApi'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            {/* ========== Hero ========== */}
            <section className='bg-slate-600 bg-cover bg-center h-[80vh]'>
                <div className='bg-black/30 w-full h-full flex flex-col justify-center px-3 md:px-20 transition-all duration-100'>
                    <h1 className='text-white mb-3 font-bold text-6xl uppercase'>
                        Discover Amazing Products
                    </h1>
                    <p className='text-white mb-3 max-w-xl'>
                        Browse our collection of high-quality products with affordable prices
                        and fast delivery. Find exactly what you need today.
                    </p>
                    <div className='mt-4'>
                        <button className='px-5 py-2 rounded bg-white text-black font-semibold cursor-pointer'>
                            Shop Now
                        </button>
                    </div>
                </div>
            </section>

            {/* ========== Featured Fetch from api ========== */}
            <section>
                <FetctApi />
            </section>

            <section className='mt-30'>
                <Footer />
            </section>
        </>
    )
}

export default Home