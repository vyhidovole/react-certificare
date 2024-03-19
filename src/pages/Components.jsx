import React, { useState } from "react";
import { Modal } from "../components/Modal/Modal";

const Components = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <section className="components">
                <div className="container">
                    {/* <h3>This is components page</h3> */}

                    <button className="bg-lime-500 rounded-full py-2 px-7" onClick={() => setShowModal(true)}>Login</button>
                </div>
            </section>
            <Modal
            
             isOpen ={showModal}
              onClose = {() => setShowModal(false)}>
           
            </Modal>
           
        </>
    )
}
export default Components