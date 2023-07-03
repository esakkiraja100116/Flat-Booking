'use client'

export function Note() {
  
  return (
  <>
      <div className="mx-auto max-w-xs lg:max-w-7xl">
        <div className="container md:flex rounded-xl grid mx-auto mt-40 h-30 mb-16 bg-yellow-300">
         <div className=" order-2 md:order-1 w-full md:w-1/2 lg:p-16 text-center md:text-left">
            <h1 className="font-medium text-3xl">New to <span className="block mt-2"> flat sharing ? </span></h1>
             <p className="mt-5 text-lg p-5 lg:p-0">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia voluptatibus commodi quos a
              impedit provident odio adipisci, blanditiis tempore consectetur accusantium. Eligendi in, 
              voluptatem molestias at magnam ab. Quos quae nihil quo fugit omnis tenetur illum reprehenderit 
              vitae tempore, vel aliquam! Dolorum praesentium unde ducimus ullam beatae, veniam provident labore.
             </p>
             <button className='hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-50 border border-black rounded-full p-3 font-semibold my-5 px-5 bg-transparent text-black-400' > Find out more ! </button>

         </div>

         <div className="order-1 md:order-2 w-full md:w-1/2 p-6 grid grid-cols-2 md:flex relative">
           {/* hello */}
           <img src="/note_1.png" alt="note_1"  className="w-auto order-2 lg:order-1 h-50 md:w-1/2 ml-3 lg:ml-0 -mt-12 lg:mt-0"  />
           <img  src="/note_2.png" alt="note_2 " className="w-auto order-1 lg:order-2 h-50 md:w-1/2 lg:ml-3 -mt-16 lg:-mt-14 mb-5"  />

         </div>
        </div> 
      </div>
  </>
  )
}
