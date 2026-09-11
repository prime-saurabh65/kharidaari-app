import React from 'react'
import LanguageSelector from './LanguageSelector'
import CountrySelector from './CountrySelector'
import amazonLogo from '../../assets/images/amazon-logo.png'

const FooterPreferences = () => {
  return (
    <div className="border-t border-gray-700 bg-gray-800 py-6">

      <div className="flex items-center justify-center gap-8">

        {/* Logo */}
        <img
          src={amazonLogo}
          alt="Amazon"
          className="w-24"
        />

        {/* Preferences */}
        <div className="flex gap-2">
            <LanguageSelector />
            <CountrySelector />
        </div>

      </div>

    </div>

  )
}

export default FooterPreferences