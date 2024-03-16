import React, { useState } from "react";
import styles from "./Dropdown.module.css"


const Dropdown = () => {
    const [isOpen, setOpen] = useState(false)
    const showMenu=() =>{ setOpen(!isOpen)}
    
    return (

        <div className={styles.header}>
            <button className="menu-button" onClick={showMenu}></button>
            <nav className={`menu ${isOpen ? "active" : ""}`}>
                <ul className="menu-list">
                    <li className="menu-item">Модульные кухни</li>
                    <li className="menu-item">Готовые комплекты</li>
                    <li className="menu-item">Маленькие кухни</li>
                    <li className="menu-item">Угловые кухни</li>
                    <li className="menu-item">Кухонные уголки</li>
                    <li className="menu-item">Столы Кухонные</li>
                    <li className="menu-item">Стулья для кухни</li>
                    <li className="menu-item">Комплектующие</li>
                </ul>
            </nav>

        </div>


    )
}

export default Dropdown