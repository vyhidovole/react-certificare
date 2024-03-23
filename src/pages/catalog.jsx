import Image from "next/image";
import Footer from "../components/Footer/Footer"

const Catalog = () => {
    return (
        <>
            <h2 className="font-bold mb-6">
                КАТАЛОГ
            </h2>
            <div className=" flex w-full mb-6">
                <div className="container  w-full relative">
                    <Image
                        className=""
                        src={"/images/catalog1.jpg"}
                        width={357}
                        height={238}
                        alt="img"
                        property="true" />
                    <button className="text-white bg-sky-800 absolute bottom-0 left-0  px-6 py-1 rounded-sm">
                        КУХНИ
                    </button>
                </div>
                <div className="container  w-full relative">
                    <Image
                        className="" src={"/images/catalog3.jpg"}
                        width={357}
                        height={238}
                        alt="img"
                        property="true" />
                    <button className="text-white bg-sky-800 absolute bottom-0 left-0  px-6 py-1 rounded-sm">
                        СПАЛЬНИ
                    </button>
                </div>
                <div className="container  w-full relative">
                    <Image className="" src={"/images/catalog4.jpg"}
                        width={357}
                        height={238}
                        alt="img"
                        property="true" />
                    <button className="text-white bg-sky-800 absolute bottom-0 left-0  px-6 py-1 rounded-sm">
                        ПРИХОЖИЕ
                    </button>
                </div>
                <div className="container  w-full relative">
                    <Image className="" src={"/images/catalog5.jpg"}
                        width={357}
                        height={238}
                        alt="img"
                        property="true" />
                    <button className="text-white bg-sky-800 absolute bottom-0 left-0  px-6 py-1 rounded-sm">
                        ШКАФЫ-КУПЕ
                    </button>
                </div>
            </div>
            <div className=" flex w-full">
                <div className="container  w-full relative">
                    <Image className="" src={"/images/catalog7.jpg"}
                        width={357}
                        height={238}
                        alt="img"
                        property="true" />
                    <button className="text-white bg-sky-800 absolute bottom-0 left-0  px-6 py-1 rounded-sm">
                        ДИВАНЫ
                    </button>
                </div>
                <div className="container  w-full relative">
                    <Image className="" src={"/images/catalog8.jpg"}
                        width={357}
                        height={238}
                        alt="img"
                        property="true" />
                    <button className="text-white bg-sky-800 absolute bottom-0 left-0  px-6 py-1 rounded-sm">
                        СТОЛЫ И СТУЛЬЯ
                    </button>
                </div>
                <div className="container  w-full relative">
                    <Image className="" src={"/images/catalog5.jpg"}
                        width={357} height={238}
                        alt="img"
                        property="true" />
                    <button className="text-white bg-sky-800 absolute bottom-0 left-0  px-6 py-1 rounded-sm"
                    >ШКАФЫ-КУПЕ
                    </button>
                </div>
                <div className="container  w-full relative">
                    <Image className="" src={"/images/catalog5.jpg"}
                        width={357}
                        height={238}
                        alt="img"
                        property="true" />
                    <button className="text-white bg-sky-800 absolute bottom-0 left-0  px-6 py-1 rounded-sm">
                        ШКАФЫ-КУПЕ
                    </button>
                </div>
            </div>
            <Footer></Footer>


        </>
    )
}

export default Catalog