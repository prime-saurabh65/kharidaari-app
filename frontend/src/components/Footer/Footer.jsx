import React from 'react'
import FooterLinks from './FooterLinks'
import BackToTop from './BackToTop'
import FooterPreferences from './FooterPreferences'
import FooterResources from './FooterResources'

const Footer = () => {
  return (
    <>
      <BackToTop />
      <FooterLinks />
      <FooterPreferences />
      <FooterResources />
    </>
  )
}

export default Footer