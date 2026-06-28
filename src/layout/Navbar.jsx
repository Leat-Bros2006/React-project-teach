import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { BellPlus, CloudSnow, Heart, Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {

    const [isActive, setIsActive] = useState(false)
    const openNavbar = () => {
        setIsActive(true)
    }

    const closeNavbar = () => {
        setIsActive(false)
    }

    return (
        <>
            <nav className='bg-white z-20 flex justify-between items-center py-3 md:py-2 px-4 md:px-20 shadow broder border-b-gray-500 sticky top-0'>
                <div className='flex gap-2 items-center'>
                    {/* icon-responsive */}
                    <div onClick={openNavbar} className='md:hidden cursor-pointer'>
                        <Menu />
                    </div>
                    <div className='w-10 h-10 rounded-full overflow-hidden shadow-lg hidden md:block'>
                        <img className='w-full h-full object-cover' src={logo} alt="" />
                    </div>
                </div>

                <div className='flex hidden md:block gap-8'>
                    <NavLink to="/" className={({ isActive }) => `${isActive ? "underline decoration-slate-800 px-3 py-1.5" : ""} px-3 py-1.5`}>Home</NavLink>
                    <NavLink to="/about" className={({isActive}) => `${isActive ? "underline decoration-slate-800 px-3 py-1.5" : ""} px-3 py-1.5`}>About</NavLink>
                    <NavLink to="/contact" className={({isActive}) => `${isActive ? "underline decoration-slate-800 px-3 py-1.5" : ""} px-3 py-1.5`}>Contact</NavLink>
                </div>
                <div className='flex items-center gap-3'>
                    <BellPlus />
                    <Heart />
                </div>
            </nav>

            <div className={`${isActive ? "left-0" : "-left-full"} bg-slate-800 w-[260px] min-h-screen fixed top-0 md:hidden transition-all duration-300 z-100`}>
                <div className='flex items-center justify-end text-white border-b border-b-gray-200 p-4'>
                    <button onClick={closeNavbar} className='p-3 rounded-full cursor-pointer border border-dashed border-white
                        hover:bg-white/10'>
                        <X />
                    </button>
                </div>

                <div className='flex flex-col p-4'>
                    <NavLink to="/" className="py-2 px-4 text-white rounded w-full hover:bg-white/10">Home</NavLink>
                    <NavLink to="/about" className="py-2 px-4 text-white rounded w-full hover:bg-white/10">About</NavLink>
                    <NavLink to="/contact" className="py-2 px-4 text-white rounded w-full hover:bg-white/10">Contact</NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar