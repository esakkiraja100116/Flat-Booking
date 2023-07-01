'use client'

export function Note() {
  
  return (
  <>
     <div className="container md:flex rounded grid mx-auto mt-40 h-30 mb-16">
         <div className=" order-2 md:order-1 w-full md:w-1/2 bg-red-400 p-5">
             <span className="mt-40">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia voluptatibus commodi quos a
              impedit provident odio adipisci, blanditiis tempore consectetur accusantium. Eligendi in, 
              voluptatem molestias at magnam ab. Quos quae nihil quo fugit omnis tenetur illum reprehenderit 
              vitae tempore, vel aliquam! Dolorum praesentium unde ducimus ullam beatae, veniam provident labore.

             </span>
         </div>

         <div className="order-1 md:order-2 w-full md:w-1/2 bg-red-400 p-6 grid grid-cols-2 md:flex relative">
           {/* hello */}
           <img src="/note_1.png" alt="note_1"  className="w-auto h-96 md:w-1/2 -mt-20"  />
           <img  src="/note_2.png" alt="note_2 " className="w-auto h-96 md:w-1/2 ml-3 -mt-11"  />

         </div>
       </div> 
  </>
  )
}
