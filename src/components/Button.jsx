import React from "react";
import PropTypes from 'prop-types'
import Spinner from "./Spinner";

const buttonSizes = {
    lg: 'py-2 px-4 text-lg',
    sm: '',
    md: 'py-1.5 px-3',
    xl: 'py-3 px-5 text-xl'
}

const buttonColors = {
    success: '',
    danger: '',
    secondary: '',
    primary: 'hover:bg-blue-900 hover:text-white border-blue-900 text-blue-900'
}

const buttonTypes = {
    loading: '',
    disabled: 'bg-gray-300 text-white shadow-none border-none cursor-not-allowed'
}

const defaultClass = 'inline-block shadow text-center whitespace-nowrap align-middle font-medium rounded border-2 leading-relaxed text-base transition duration-300'

const Button = (props) => {
    const { children, size, disabled, color, loading } = props
    let classes = 'btn'
    classes += size ? ` btn-${size}` : ''
    classes += disabled ? ' disabled' : ''
    classes += color ? ` btn-${color}` : ''
    classes += loading ? ` btn-loading` : ''

    if(loading){
        return (
            <button disabled={disabled} className={classes}>
                <Spinner color="blue" size={5}/>
                {children}
            </button>
        )
    }

    return (
        <button disabled={disabled} className={classes}>
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
    size: PropTypes.oneOf(['lg', 'sm', 'md', 'xl']),
    disabled: PropTypes.bool,
    color: PropTypes.oneOf(['success','warning','danger','primary','secondary']),
    loading: PropTypes.bool
}

export default Button