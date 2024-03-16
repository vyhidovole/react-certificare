import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Navigation.module.css";


/* пункты меню в шапке */
const navItems = [
  { name: "Акции", path: "/S"},
  { name: "Наши работы", path: "/" },
  { name: "Контакты", path: "/contact"},
  { name: "Components", path: "/Components" },
  
];

const Navigation = () => {
  // состояние (стейт) для активного пункта меню
  const [activeLink, setActiveLink] = useState("");

  const router = useRouter();

  // клик по активному пункту меню
  const onClickHandler = (path) => {
    if (path !== activeLink) {
      router.push(path);
      setActiveLink(path);
    }
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="container inline-flex items-center gap-5">
         
            <a href="#" >
            Сборка
            </a>
            <a href="#" >
            Оплата
            </a>
            <a href="#" >
           Доставка
            </a>
            </div>
          <nav className="inline-flex items-center gap-5">
            {navItems.map((item) => (
              <a
                onClick={() => onClickHandler(item.path)}
                className={`cursor-pointer  ${
                  item.path === router.pathname ? "text-sky-500" : ""
                }`}
                key={item.path}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
