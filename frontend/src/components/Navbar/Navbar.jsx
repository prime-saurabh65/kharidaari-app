import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className=' '>
          <nav className='flex justify-between items-center h-14 mx-4 px-2 py-2'>
            <h1 className=''>kharidaari</h1>
            <input className='border border-gray-700 w-md' type="search" name="search" id="" />
            <ul className='flex gap-3'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/service">Service</Link>
                <Link to="/helpers">Helpers</Link>
                <Link to="/cart">Cart</Link>
            </ul>
          </nav>
        </div>
    </>
  )
}

export default Navbar