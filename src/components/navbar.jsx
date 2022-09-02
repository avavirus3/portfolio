
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Menu from "../assets/menu";
function NavBar() {
    const {t} = useTranslation()
    const [drop,setDrop]=useState(false);
    const handleMenu=()=>{setDrop(current=>!current)}
  return (
    <>
      <div className="bg-slate-900 fixed overflow-y w-full z-50 text-gray-100 text-2xl flex flex-col md:justify-between md:flex-row md:justify-around py-3 md:px-6 md:items-center ">
        <div className=" flex justify-between px-3">
          <a className="text-4xl  cursor-pointer   text-emerald-300">
           {t('navbar.title')}
          </a>

          <a
            id="drop"
            
            className={
              " md:hidden block text-2xl rounded-full p-1 " +
              (drop ? "hidden" : "")
            }
            onClick={handleMenu}
          >
            <Menu />
          </a>
          <a
            className={!drop ? " hidden " : "" + " md:hidden p-1"}
            onClick={handleMenu}
          >
            X
          </a>
        </div>
        <ul
          id="mBtn"
          className={
            (!drop ? "hidden  " : "") +
            "  md:flex md:w-2/5 justify-around z-50 md:ml-0 ml-auto px-5 text-right md:block  "
          }
        >
          <li className={"hover:text-emerald-200 "}>
            <a href="#home" onClick={handleMenu}>
              {t("navbar.home")}
            </a>
          </li>
          <li className={"  hover:text-emerald-200 "}>
            <a href="#about" onClick={handleMenu}>
               {t("navbar.about")} 
            </a>
          </li>
          <li className={"  hover:text-emerald-200 "}>
            <a href="#services" onClick={handleMenu}>
              {t("navbar.services")}
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className={
            (!drop ? " hidden " : " ") +
            " md:block cursor-pointer md:bg-emerald-700 md:p-2 rounded-full border-2 border-slate-900 md:hover:border-2 md:hover:border-gray-100 md:hover:text-gray-100 hover:text-emerald-200 md:ml-0 ml-auto px-5"
          }
          onClick={handleMenu}
        >
          {t("navbar.contact")}
        </a>
      </div>
    </>
  );
}

export default NavBar;
