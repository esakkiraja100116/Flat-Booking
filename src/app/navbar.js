'use client'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Contact us', href: '#', current: false },
  { name: 'New to flatsharing', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Navbar() {
  return (
    <>
    
     <Disclosure as="nav" className="bg-white-800">
     {({ open }) => (
       <>
         <div className="mx-auto max-w-7xl p-3 sm:px-6 lg:px-8">
           <div className="relative flex h-16 items-center justify-between">
             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
               {/* Mobile menu button*/}
               <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                 <span className="sr-only">Open main menu</span>
                 {open ? (
                   <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                 ) : (
                   <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                 )}
               </Disclosure.Button>
             </div>
             <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
               <div className="flex flex-shrink-0 items-center">
                 <img
                   className="block h-8 w-auto lg:hidden"
                   src="/logo.png"
                   alt="Your Company"
                 />
                 <img
                   className="hidden h-8 w-auto lg:block"
                   src="/logo.png"
                   alt="Your Company"
                 />
               </div>
               <div className="hidden sm:ml-72 sm:block">
                 <div className="flex space-x-4">
                   {navigation.map((item) => (
                     <a
                       key={item.name}
                       href={item.href}
                       className={classNames(
                         item.current ? ' underline uppercase decoration-2 decoration-green-500 underline-offset-8  text-black' : 'uppercase text-gray-600 hover:underline hover:decoration-2 hover:decoration-green-500 hover:underline-offset-8',
                         'rounded-md px-3 py-2 text-sm font-medium'
                       )}
                       aria-current={item.current ? 'page' : undefined}
                     >
                       {item.name}
                     </a>
                   ))}
                 </div>
               </div>
             </div>
             <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               <button
                 type="button"
                 className="rounded-md uppercase p-2 m-2 tracking-wide text-yellow-400 font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800
                 hover:text-white hover:bg-yellow-400"
               >
                 <span className="sr-only">View notifications</span>
                 Sign up
               </button>
               <button
                 type="button"
                 className="rounded-lg bg-yellow-400 p-2 m-2 text-gray-400 text-md font-semibold text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                 <span className="sr-only">View notifications</span>
                 
                 <span className='flex items-center'>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 text-yellow-500 font-semibold h-5 bg-white p-1 rounded-full">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                   </svg>
                   <span className='ml-3 uppercase'>Login</span>
                 </span>


               </button>

               
             </div>
           </div>
         </div>

         <Disclosure.Panel className="sm:hidden">
           <div className="space-y-1 px-2 pb-3 pt-2">
             {navigation.map((item) => (
               <Disclosure.Button
                 key={item.name}
                 as="a"
                 href={item.href}
                 className={classNames(
                   item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                   'block rounded-md px-3 py-2 text-base font-medium'
                 )}
                 aria-current={item.current ? 'page' : undefined}
               >
                 {item.name}
               </Disclosure.Button>
             ))}
           </div>
         </Disclosure.Panel>
       </>
     )}
   </Disclosure>
   </>
  )
}
