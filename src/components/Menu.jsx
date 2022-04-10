import React, { useRef } from "react";
import { useHideShow } from "../hooks/useHideShow";
import Pictogram from "./Pictogram";

export function Menu(props){
    const {children} = props
    const menuRef = useRef(null)
    const [isShow, setIsShow] = useHideShow(menuRef, false)
    const handleClickMenu = () => setIsShow(!isShow)

    return (
        <div ref={menuRef}>
            <MenuButton onClick={handleClickMenu}><Pictogram name="dot-h" size={8}/></MenuButton>
            {isShow && children}
        </div>
    )
}


export function MenuButton(props){
    const {children, onClick} = props
    const defaultClasse = 'rounded-full inline-block shadow-inherit	 text-center whitespace-nowrap align-middle font-medium rounded border-2 leading-relaxed text-base transition duration-300 p-3'
    return (
        <button 
            onClick={onClick}
            className={defaultClasse} 
            type='button'>
            {children}
        </button>
    )
}