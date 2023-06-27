'use client'

export function Note() {
  
  return (
  <>
  <div className="">
      <div className="pt-6 my-10 ">
        <div class="rounded-4xl p-10 bg-yellow-300 bg-clip-content grid md:grid-cols-2 mx-auto flex items-center space-x-1 lg:max-w-7xl">
        
            <div className='p-12'>

                <h2 className=' mb-8 font-medium text-4xl'> New to Flatsharing ? </h2>
                <p className='text-lg'>
                At Flatpulse, our mission is to make the process of finding a flat or a flatmate as simple and stress-free as possible. Whether you're a student, a young professional, or a seasoned traveler, we have the perfect solution for you. Join our community today and start exploring the endless possibilities of flat sharing!
                </p>

                <button className='hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-50 border rounded-full p-3 font-semibold mt-8 px-6 bg-black text-yellow-400' > Find out more ! </button>
            </div>

            <div className='flex gap-3 p-5'>
           
                <img src="/note_1.png" alt="/note_1.png" className="hidden md:block rounded-xl h-83 w-80 object-cover object-center mt-7" />
                <img src="/note_1.png" alt="/note_1.png" className="md:hidden rounded-xl h-80 w-25 object-cover object-center mt-7" />
                <img src="/note_2.png" alt="/note_2.png" className="hidden md:block rounded-xl h-83 w-80 object-cover object-center mb-7" />
                <img src="/note_2.png" alt="/note_2.png" className="md:hidden rounded-xl h-80 w-25 object-cover object-center mb-7" />
            </div>
        </div>
                
      </div>
  </div>
</>
  )
}
