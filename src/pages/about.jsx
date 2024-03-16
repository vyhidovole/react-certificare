import Image from "next/image";

const About = () => {
  return (
  <>
  <div>
  <h1>О нас</h1>
  <p>Мы здесь, чтобы рассказать вам о нас.</p>
</div>
 <Image src={"/images/blue-master-bedroom.png"} alt="img" width={713} height={480} priority={true} />
 <h3>МЫ В INSTAGRAM</h3>
 <Image src={"/images/image_inst.png"} alt="imgо" width={1173} height={769} priority={true} />
 </>
  
    
  );
};

export default About;
