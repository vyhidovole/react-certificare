import Head from "next/head";
import React, {useState}from "react";
import Link from "next/link";
import Image from "next/image";
import Dropdown from "../components/dropdown/dropdown";
import "../components/Dropdown/Dropdown.module.css"



/* Домашнаяя страница */

const Home = () => (

  <>
  
    <Head>
      <title>My first template</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main >
      <div className="container flex justify-between">
        <Image src={"/images/logo.jpg"} alt="арко" width={180} height={30} priority={true} />

        <div>
          <p>ул.Московская 144 корп.-1</p>
          <Link className="text-red-500 underline" href="/route">
            Схема проезда
          </Link>
        </div>
        <div className="flex"><svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path>
        </svg>
          <div><h4 className="">8(961)5259191</h4>
            <button className="border-red-500 border-2 text-red-500 rounded pl-2 pr-2 hover:">Заказать звонок</button>
          </div>

        </div>
        <div className="flex gap-5"><a href=""><div><svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>
        </svg>
          <p className="hover:underline">Войти</p>
        </div>
        </a>
          <a className="" href=""><div><svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path>
          </svg>
            <p className="hover:underline">Избранное</p>
          </div>
          </a>
          <a href=""> <div>
            <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
            </svg>
            <p className="hover:underline">Корзина</p>
          </div>
          </a>
        </div>
      </div>
      <div className=" flex justify-around w-full h-14 bg-teal-500 py-4 my-2 font-bold relative mb-6">
        <div className=" flex justify-around w-3/4">
          <button className="menu-button" ><h3>КУХНИ</h3></button>
          <button className="menu-button"><h3>ГОСТИННЫЕ</h3></button>
          <button className="menu-button"><h3>СПАЛЬНИ</h3></button>
          <button className="menu-button"><h3>ПРИХОЖИЕ</h3></button>
          <button className="menu-button"><h3>ШКАФЫ-КУПЕ</h3></button>
          <button className="menu-button"><h3>ДЕТСКИЕ</h3></button>
          <button className="menu-button"><h3>ДИВАНЫ</h3></button>
        </div>
        <a className="text-white bg-slate-500 w-48 h-14 p-2 pt-4 absolute right-2 top-0" href="/catalog">ГДЕ ПОСМОТРЕТЬ</a>
      </div>
      <h2 className="font-bold mb-6">НАШИ РАБОТЫ</h2>
      <Dropdown></Dropdown>
      <div className="inline-grid grid-cols-3 gap-4 w-full h-1/4 ">
        <div><Image src={"/images/glecher.png"} alt="img" width={468} height={374} priority={true} /></div>
        <div><Image src={"/images/denever.png"} alt="img" width={468} height={374} priority={true} /></div>
        <div><Image src={"/images/london.png"} alt="img" width={488} height={833} priority={true} /></div>
      </div>
      <div className="justify-self-start"><Image src={"/images/amely.png"} alt="img" width={993} height={430} priority={true} /></div>


      <Link href="/about"> About us</Link>
    </main>
  </>
);

export default Home;
