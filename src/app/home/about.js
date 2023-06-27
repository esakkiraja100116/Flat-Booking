'use client'

export function About() {
  
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
