import React, { useState } from "react";
import { Modal } from "../components/Modal/Modal";

const Components = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <section className="components">
                <div className="container">
                    <h3>This is components page</h3>

                    <button onClick={() => setShowModal(true)}> Show modal </button>
                </div>
            </section>
            <Modal
            titleModal="New Modal Title"
             isOpen ={showModal}
              onClose = {() => setShowModal(false)}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            </Modal>
           
        </>
    )
}
export default Components