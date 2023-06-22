'use client'

import { useState } from 'react'
import {Input} from './home/input.js'

export function Body() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const bgImg = {
    backgroundImage: "url('/background.png')",
  }
  return (
    <div className='relative isolatelg:px-8 bg-cover bg-center ' style={bgImg}>
     h-32 w-32 p-4 border-4
        <div className="box-border h-20 w-30 sm:py-50 lg:py-60">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Find your next flatmate in a heartbeat!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Input/>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create a room listing for free
              </a>
              <a href="#" className="text-sm outline outline-yellow-400 bg-zinc-600 rounded-md px-3.5 py-2.5 font-semibold leading-6 text-yellow-400">
              Create a room listing for free <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
 
    </div>
  )
}
