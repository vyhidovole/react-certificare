import Image from "next/image";
import Footer from "../components/Footer/Footer"

const About = () => {
  return (
  <>
  <div className="ml-44 mt-16">
     
  <h1 className="font-bold ">О НАС</h1>
  

 <Image className="mt-6"
 src={"/images/blue-master-bedroom.png"} 
 alt="img"
  width={713} 
  height={480} 
  priority={true} />
  
 <h3 className="font-bold mt-6 ">МЫ В INSTAGRAM</h3>
 <Image className="mt-6"
 src={"/images/image_inst.png"} 
 alt="imgо" width={1173}
  height={769}
   priority={true} />
   </div>
 <Footer></Footer>
 </>
  
    
  );
};

export default About;
