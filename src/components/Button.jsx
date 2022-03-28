import React from "react";
import PropTypes from 'prop-types'
import Spinner from "./Spinner";

const defaultClass = 'inline-block shadow text-center whitespace-nowrap align-middle font-medium rounded border-2 leading-relaxed text-base transition duration-300'

const buttonSizes = {
    lg: 'py-2 px-4 text-lg',
    sm: '',
    md: 'py-1.5 px-3',
    xl: 'py-3 px-5 text-xl',
    full: 'py-2 px-4 text-lg w-full'
}

const buttonColors = {
    success: 'border-green-500 hover:bg-green-500 hover:text-gray-100',
    danger: 'border-red-500 hover:bg-red-500 text-red-500 hover:text-gray-100',
    secondary: '',
    primary: 'hover:bg-blue-900 hover:text-white border-blue-900 text-blue-900',
    disabled: 'bg-gray-300 text-white shadow-none border-none cursor-not-allowed'
}

const buttonTypes = {
    default: 'inline-block shadow text-center whitespace-nowrap align-middle font-medium rounded border-2 leading-relaxed text-base transition duration-300',
    loading: 'inline-flex justify-center items-center shadow text-center whitespace-nowrap align-middle font-medium rounded border-2 leading-relaxed text-base transition duration-300',
}


const Button = (props) => {
    const { children, size, disabled, color, loading} = props
    const colorClass = buttonColors[color]
    const sizeClass = buttonSizes[size]
    

    if(loading){
        return (
            <button disabled={disabled} className={`${buttonTypes.loading} ${sizeClass} ${colorClass}`}>
                <Spinner color="blue" />
                {children}
            </button>
        )
    }

    return (
        <button disabled={disabled} className={`${buttonTypes.default} ${sizeClass} ${colorClass}`}>
            {children}
        </button>
    )

}

Button.defaultProps = {
    disabled: false,
    color: 'primary',
    size: 'md',
    loading: false
}

Button.propTypes = {
    children: PropTypes.string,
    size: PropTypes.oneOf(['lg', 'sm', 'md', 'xl', 'full']),
    disabled: PropTypes.bool,
    color: PropTypes.oneOf(['success','warning','danger','primary','secondary', 'disabled']),
    loading: PropTypes.bool
}

export default Button