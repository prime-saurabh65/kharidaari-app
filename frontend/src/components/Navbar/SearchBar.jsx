import React, { useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'

const categories = [
  'All Categories',
  'Alexa Skills',
  'Amazon Devices',
  'Amazon Fashion',
  'Amazon Pharmacy',
  'Appliances',
  'Apps & Games',
  'Audible Audiobooks',
  'Baby',
  'Beauty',
  'Books',
  'Car & Motorbike',
  'Clothing & Accessories',
  'Collectibles',
  'Computers & Accessories',
  'Deals',
  'Electronics',
  'Furniture',
  'Garden & Outdoors',
  'Gift Cards',
  'Grocery & Gourmet Foods',
  'Health & Personal Care',
  'Home & Kitchen',
  'Industrial & Scientific',
  'Jewellery',
  'Kindle Store',
  'Luggage & Bags',
  'Luxury Beauty',
  'Movies & TV Shows',
  'MP3 Music',
  'Music',
  'Musical Instruments',
  'Office Products',
  'Pet Supplies',
]

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [category, setCategory] = useState('All')

  const handleSubmit = (event) => {
    event.preventDefault()

    const query = searchQuery.trim()

    if (!query) return

    console.log({
      query,
      category,
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-10 flex-1 min-w-0"
    >
      {/* Category Selector */}
      <div className="relative">
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          aria-label="Search category"
          className="
            w-16
            h-full
            appearance-none
            rounded-l-md
            border-r
            border-gray-300
            bg-gray-100
            pl-3
            pr-8
            text-sm
            text-gray-700
            outline-none
            cursor-pointer
            hover:bg-gray-200
          "
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <ChevronDown
          size={14}
          className="
            pointer-events-none
            absolute
            right-2
            top-1/2
            -translate-y-1/2
            text-gray-600
          "
        />
      </div>

      {/* Search Input */}
      <input
        type="search"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Search Amazon.in"
        aria-label="Search products"
        className="
          min-w-0
          flex-1
          bg-white
          px-4
          text-sm
          text-gray-900
          outline-none
          placeholder:text-gray-500
        "
      />

      {/* Search Button */}
      <button
        type="submit"
        aria-label="Search"
        className="
          flex
          w-12
          shrink-0
          items-center
          justify-center
          rounded-r-md
          bg-[#febd69]
          text-gray-900
          transition-colors
          hover:bg-[#f3a847]
          focus:outline-none
          focus:ring-2
          focus:ring-[#febd69]
          focus:ring-offset-1
        "
      >
        <Search size={22} strokeWidth={2.5} />
      </button>
    </form>
  )
}

export default SearchBar