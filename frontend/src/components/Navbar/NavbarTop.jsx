import React from 'react'
import SearchBar from './SearchBar'
import LanguageSelector from './LanguageSelector'
import Logo from './Logo'
import LocationSelector from './LocationSelector'
import AccountMenu from './AccountMenu'
import Cart from './Cart'

const NavbarTop = () => {
  return (
    <>
        {/* ================= TOP NAVBAR ================= */}
      <div className="bg-[#131921] h-[60px] flex items-center px-3 gap-2">

        <Logo />

        <LocationSelector />

        {/* Search Bar */}
        <div className="flex-1">
          <SearchBar />
        </div>


        {/* Language */}
        <LanguageSelector />

        <AccountMenu />


        {/* Returns & Orders */}
        <div className="px-2 py-1 cursor-pointer whitespace-nowrap">
          <p className="text-xs">
            Returns
          </p>

          <p className="text-sm font-bold">
            & Orders
          </p>
        </div>

        <Cart />

      </div>
    </>
  )
}

export default NavbarTop