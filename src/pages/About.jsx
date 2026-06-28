import React from 'react'
import p1 from "../assets/p1.png"
import Footer from '../components/Footer'

const About = () => {

    const cards = [
        {
            title: "High Quality",
            des: "We carefully select products that meet quality standards and customer expectations.",
        },
        {
            title: "Fast Delivery",
            des: "Enjoy quick and reliable shipping services with secure packaging.",
        },
        {
            title: "Customer Support",
            des: "Our support team is always ready to assist you whenever you need help.",
        },
    ]

    return (
        <>
            {/* Our Story */}
            <section className="py-20 px-5 md:px-20">
                <div className="grid md:grid-cols-2 gap-15 items-center">

                    <div className='text-center md:text-left'>
                        <h2 className="text-4xl font-bold mb-5">
                            Our Story
                        </h2>

                        <p className="text-gray-600 mb-4">
                            Our store was founded with a simple goal: to make
                            quality products accessible to everyone. We believe
                            that shopping should be easy, enjoyable, and affordable.
                        </p>

                        <p className="text-gray-600">
                            Over the years, we have expanded our collection and
                            improved our services to ensure customer satisfaction.
                            Today, we continue to serve customers with dedication,
                            reliability, and innovation.
                        </p>
                    </div>

                    <div>
                        <img
                            src={p1}
                            alt="Our Story"
                            className="w-full rounded-lg h-[400px] object-cover"
                        />
                    </div>

                </div>
            </section>
           
            {/* Footer */}
            <Footer />
        </>
    )
}

export default About