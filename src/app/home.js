import { InputField, SelectRoom } from './home/select'
import { Team } from './home/team'
import { Service } from './home/service'

const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];

const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

export function ExploreBtn({id}){
  var btn;

  if( id.count == 1){
      btn = <>
      <button
              type="submit"
              className="mt-5 flex-none rounded-full border-2 border-yellow-300 bg-yellow-400 p-4 tracking-wider font-medium font-sans sm:text-sm font-lg shadow-sm hover:border-2 hover:border-yellow-300 hover:text-yellow-400 hover:bg-black hover:bg-opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Create a listing room for free
      </button>
    </>
  }else{
      btn = <>
    <button
              type="submit"
              className="mt-5 flex-none rounded-full bg-black bg-opacity-80 p-4 tracking-wider font-medium font-sans sm:text-sm font-lg text-yellow-400 border-2 border-yellow-300 shadow-sm hover:text-black hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Create a roommate profile for free
      </button>
    </>
  }
  return btn;
}

export function SearchBtn(){
  return (
    <>
    <p className='text-center'>
    <button type="submit" className="flex items-center justify-center rounded-full text-semibold bg-green-400 p-3 pr-10 text-xl mx-auto w-full sm:text-md font-lg text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
    Search
  </button>

    </p>
      
    </>
    
  );
}
  
export function Home() {
  return (
  <>
  
      <div className="relative  isolate overflow-hidden bg-black bg-opacity-100 py-24" >

      {/* <div className="relative mix-blend-overlay">
        <img src="/background.png" alt="BannerImage" className="absolute h-[70vh] lg:h-[80vh] w-full object-cover object-right opacity-0 " />
        <div className="absolute -z-10 bg-gradient-to-t from-white via-black to-black h-[70vh] lg:h-[80vh] w-full" />
      </div> */} 

      <div className=''>
        <img
            src="/background.png"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-20"
          />
        
      </div>


        <div className="text-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-7xl lg:mx-0">
                  <h1 className="text-1xl font-normal tracking-tight text-white sm:text-5xl">
                  Find your next flatmate in a heartbeat!
                  </h1>
                  
              </div>

              <div className="rounded-3xl mt-10 p-10 bg-rose-50 ">
                  <div className=' grid sm:grid-cols-3 gap-x-14 gap-y-3'>
                  <div>
                      <SelectRoom/> 
                  </div>
                  <div>
                      <InputField/> 
                  </div>
                  <div className='mt-7'>
                      <SearchBtn/> 
                  </div>
                  </div>

              </div> 
              <p className="mt-10 text-lg leading-8 text-gray-300">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                      lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                      fugiat aliqua em cupidatat commodo. Elit sunt amet fugiat veniam Esakkiraja.
              </p>

              <div className="sm:grid sm:grid-cols-2 gap-x-3 mt-5 gap-y-1">
                  <div className='sm:text-right' >
                      <ExploreBtn id = {{count : 1}}/>  
                  </div>
                  <div className='sm:text-left'>
                      <ExploreBtn id = {{count : 2}}/> 
                  </div>
              </div> 
                  
          </div>
        </div>
        
      </div>
      {/* <Service/> */}
  </>
  );
}
  