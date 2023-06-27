'use client'

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function About() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <div className="bg-white">
      <div className="pt-6 my-5">
        <h2 className='md:hidden  mt-5 text-center font-medium text-4xl'>About Flatpulse </h2>
        <div class="grid md:grid-cols-2 mx-auto flex items-center space-x-1 lg:max-w-7xl">
        
            <div className='flex gap-3 p-5'>
           
                <img src="/about_1.png" alt="/about_1.png" className="hidden md:block rounded-xl h-100 w-60 object-cover object-center mb-7" />
                <img src="/about_1.png" alt="/about_1.png" className="md:hidden rounded-xl h-80 w-25 object-cover object-center mb-7" />
                <img src="/about_2.png" alt="/about_2.png" className="hidden md:block rounded-xl h-100 w-60 object-cover object-center mt-7" />
                <img src="/about_2.png" alt="/about_2.png" className="md:hidden rounded-xl h-80 w-25 object-cover object-center mt-7" />
            </div>

            <div className='p-5'>

                <h2 className='hidden md:block mb-8 font-medium text-4xl'>About Flatpulse </h2>
                <p className='text-lg'>
                Welcome to Flatpulse, the premier online platform for finding and sharing flats with like-minded individuals. Our website is dedicated to providing you with the best possible experience in your search for the perfect flatmate or roommate.
                </p>
                <p className='text-lg mt-8'>
                At Flatpulse, we understand that finding a suitable living arrangement can be a daunting task. That's why we have created a platform that is both easy to use and highly effective. Our user-friendly interface allows you to browse through a wide selection of flats, filtering by location, price range, and other preferences.
                </p>

                <button className='hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 border-2 border-yellow-400 rounded-full p-3 text-yellow-400 font-semibold mt-8 px-6 hover:bg-black hover:text-yellow-400' > Find out more ! </button>
            </div>
        </div>
                
      </div>
    </div>
  )
}
