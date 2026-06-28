import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-slate-800 text-white px-6 md:px-20 pt-10 pb-6">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold">MyStore</h2>
                        <p className="mt-3 text-gray-400">
                            Best products with affordable prices.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Home</li>
                            <li>Products</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-3">Contact Us</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Email: info@mystore.com</li>
                            <li>Phone: +855 12 345 678</li>
                            <li>Location: Phnom Penh</li>
                        </ul>
                    </div>
                </div>

                <hr className="my-6 border-gray-700" />

                <p className="text-center text-gray-400">
                    © 2026 MyStore. All rights reserved.
                </p>
            </footer>
        </div>
    )
}

export default Footer