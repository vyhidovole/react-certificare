// import React from "react";
import Image from 'next/image';

const Route=()=> {
    return (
        <>  
        <h2 className='font-bold'>СХЕМА ПРОЕЗДА</h2>
        <Image src={"/images/route.jpg"}width={808} height={488} alt="map" priority={true}
        />
        
        </>
      
   
        )
}

export default Route