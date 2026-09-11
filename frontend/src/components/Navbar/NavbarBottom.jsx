import React from 'react'

const navLinks = [
  'Fresh',
  'Prime Video',
  'Sell',
  'Bestsellers',
  "Today's Deals",
  'Mobiles',
  'Customer Service',
  'New Releases',
  'Prime',
  'Amazon Pay',
  'Electronics',
  'Home & Kitchen',
  'Fashion',
  'Gift Cards',
]

const NavbarBottom = () => {
  return (
    <nav className="bg-[#232f3e] h-10 flex items-center px-4 gap-5 overflow-hidden">

      {/* All Menu */}
      <button
        type="button"
        className="flex items-center gap-1 font-bold whitespace-nowrap"
      >
        <span className="text-xl">☰</span>
        <span>All</span>
      </button>

      {/* Navigation Links */}
      {navLinks.map((link) => (
        <button
          key={link}
          type="button"
          className="text-sm whitespace-nowrap"
        >
          {link}
        </button>
      ))}

    </nav>
  )
}

export default NavbarBottom