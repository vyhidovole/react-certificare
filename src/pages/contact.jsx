// import React from "react";
import Image from "next/image";
import Footer from "../components/Footer/Footer"


const Contact = () => {
    return (
        <>  <div >
        <div className="relative" ><Image className=" opacity-55 inline " src={"/images/blue-master-bedroom.png"} alt="img" width={713} height={480} priority={true} />
    <div className="absolute  top-12 left-12"><h2 className="font-bold">НАШИ КОНТАКТЫ</h2><br/><br/><br/><br/><p className="font-bold ">Краснодар,Московская 144 корпус-1<br/><br/>+7 961-525-92-91</p></div>
    <a className="absolute border-solid " href=""></a>
    <a className="absolute bottom-12 left-12 border-solid rounded-sm bg-blue-800 text-white p-3" href="">ЗАДАТЬ ВОПРОС</a>
    </div>
    
    </div>
    <Footer></Footer>
    </>
      
        
    )

}

export default Contact