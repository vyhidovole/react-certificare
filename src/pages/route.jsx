// import React from "react";
import Image from 'next/image';
import Footer from "../components/Footer/Footer"

const Route = () => {
    return (
        <>
            <div className='ml-60'>
                <h2 className='font-bold mb-6'>
                    СХЕМА ПРОЕЗДА
                </h2>
                <Image
                    src={"/images/route.jpg"}
                    width={808} height={488}
                    alt="map"
                    priority={true}
                />
            </div>


            <Footer></Footer>
        </>


    )
}

export default Route