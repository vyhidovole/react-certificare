import Image from 'next/image';
import Footer from "../components/Footer/Footer"


const Stock = () => {
  return (
    <>
      <h2 className='font-bold mb-6 ml-40' >ТОВАРЫ ПО АКЦИИ</h2>
      <div className='container flex justify-around w-full '>
        <div className=" w-70 min-h-110 ">
          <Image className='mb-3' src={"/images/KPP.jpg"} width={284} height={252} alt="bed" priority={true}
          />
          <p className='mb-3'>Ронда КРР 1600.1</p>
          <div className='w-72 h-0.5 bg-zinc-100 mb-1'></div>
          <h3 className='font-bold'>5017 руб.</h3>
          <div className='w-72 h-0.5 bg-zinc-100 mb-3'></div>
          <div className="flex  gap-10 w-full">
            <button className="font-bold px-12 py-0.5 border-2 border-gray-400 rounded-sm">КУПИТЬ</button>
            <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 " aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path>
            </svg>
          </div>

        </div>
        <div className=" w-70 min-h-110">
          <Image className='mb-3' src={"/images/KPP.jpg"} width={284} height={252} alt="bed" priority={true}
          />
          <p className='mb-3'>Ронда КРР 1600.1</p>
          <div className='w-72 h-0.5 bg-zinc-100 mb-1'></div>
          <h3 className='font-bold'>5017 руб.</h3>
          <div className='w-72 h-0.5 bg-zinc-100 mb-3'></div>
          <div className="flex  gap-10 w-full">
            <button className="font-bold px-12 py-0.5 border-2 border-gray-400 rounded-sm">КУПИТЬ</button>
            <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 " aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path>
            </svg>
          </div>
        </div>

        <div className=" w-70 min-h-110">
          <Image className='mb-3' src={"/images/KPP.jpg"} width={284} height={252} alt="bed" priority={true}
          />
          <p className='mb-3'>Ронда КРР 1600.1</p>
          <div className='w-72 h-0.5 bg-zinc-100 mb-1'></div>
          <h3 className='font-bold'>5017 руб.</h3>
          <div className='w-72 h-0.5 bg-zinc-100 mb-3'></div>
          <div className="flex  gap-10 w-full">
            <button className="font-bold px-12 py-0.5 border-2 border-gray-400 rounded-sm">КУПИТЬ</button>
            <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 " aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path>
            </svg>
          </div>
          <div className=" w-70 min-h-110">
            <Image className='mb-3' src={"/images/KPP.jpg"} width={284} height={252} alt="bed" priority={true}
            />
            <p className='mb-3'>Ронда КРР 1600.1</p>
            <div className='w-72 h-0.5 bg-zinc-100 mb-1'></div>
            <h3 className='font-bold'>5017 руб.</h3>
            <div className='w-72 h-0.5 bg-zinc-100 mb-3'></div>
            <div className="flex  gap-10 w-full">
              <button className="font-bold px-12 py-0.5 border-2 border-gray-400 rounded-sm">КУПИТЬ</button>
              <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 " aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path>
              </svg>
            </div>
          </div>
        </div>


      </div>
      <Footer></Footer>
    </>


  )
}
export default Stock

