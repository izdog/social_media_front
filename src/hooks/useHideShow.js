import { useState, useEffect } from 'react'

export const useHideShow = (el, initialState) => {
    const [isShow, setIsShow] = useState(initialState)
    useEffect(() => {
        const domClickEvent = (e) => {
            if(el.current !== null && !el.current.contains(e.target)){
                setIsShow(!isShow)
            }
        }
        if(isShow){
            window.addEventListener('click', domClickEvent)
        }

        return () => {
            window.removeEventListener('click', domClickEvent)
        }
    }, [el, isShow])

    return [isShow, setIsShow]
}