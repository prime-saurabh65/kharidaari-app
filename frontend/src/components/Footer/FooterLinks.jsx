import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  const footerSections = [
  {
    title: "Get to Know Us",
    links: [
      "About Amazon",
      "Careers",
      "Press Release",
      "Amazon Science",
    ],
  },
  {
    title: "Connect With Us",
    links: [
      "Facebook",
      "Twitter",
      "Instagram",
    ],
  },
  {
    title: "Make Money With Us",
    links: [
      "Sell on Amazon",
      "Sell under Amazon Accelerator",
      "Protect and Build Your Brand",
      "Amazon Global Selling",
      "Supply to Amazon",
      "Become an Affiliate",
      "Fulfilment by Amazon",
      "Advertise Your Products",
      "Amazon Pay on Merchants",
    ],
  },
  {
    title: "Let Us Help You",
    links: [
      "Your Account",
      "Returns Centre",
      "Recalls and Product Safety Alerts",
      "100% Purchase Protection",
      "Amazon App Download",
      "Help"
    ],
  },
];
  return (
    <div className='bg-gray-800'>
      <div className='mx-auto grid max-w-5xl grid-cols-4 gap-16 px-8 py-10 text-white'>
        
        {footerSections.map((section) => (
          <div key={section.title}>
            <h2 className='mb-3 text-md font-bold'>
              {section.title}
            </h2>
            <ul>
              {section.links.map((link) => (
                <li key={link} className='text-sm p-1'>
                  <Link
                    to="#"
                    className="block hover:underline"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroSection