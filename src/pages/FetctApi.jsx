import { useEffect, useState } from 'react'
import axios from 'axios'
import p1 from '../assets/p1.png'

const FetctApi = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    // fetch data from api
    useEffect(() => {
        const FetchApi = async () => {
            try {
                setLoading(true)
                let response = await axios.get("https://fakestoreapi.com/products")
                setData(response.data)
                setError("");
            } catch (err) {
                setError("Something went wrong!")
            } finally {
                setLoading(false)
            }
        }

        FetchApi()
    }, [])

    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center gap-3">
                <div className="animate-spin rounded-full h-7 w-7 border-b-2"></div>
                <span>Loading...</span>
            </div>
        )
    }

    if (error) {
        return (
            <div className="h-[50vh] flex justify-center items-center gap-3">
                <h1 className='text-red-600 text-3xl'>{error}</h1>
            </div>
        )
    }

    return (
        <div className='bg-gray-100 px-3 md:px-20 py-5 md:py-10'>
            <h1 className='text-center font-bold text-4xl mb-3'>Featured Items</h1>
            {/* <div className="h-screen flex justify-center items-center gap-3">
                <div className="border-b-2 w-7 h-7 rounded-full animate-spin"></div>
                <span>Loading</span>
            </div> */}
            <section className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {data.map((item, index) => {
                    return (
                        <div className="bg-white shadow rounded-[6px] overflow-hidden">
                            <div className='p-4'>
                                <img className='rounded border border-slate-900 p-3 w-full h-[250px] object-contain' src={item.image} alt="" />
                            </div>
                            <div className='p-3 rounded text-center'>
                                <h3 className='font-bold uppercase'>{item.title}</h3>
                                <p className='mt-3 text-red-600 font-bold'>${item.price}</p>
                            </div>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default FetctApi