import React from "react";
import PropTypes from 'prop-types'

const defaultClass = 'animate-spin mr-2'

const spinnerSizes = {
    md: 'w-5 h-5',
    lg: 'w-7 h-7'
}

const Spinner = (props) => {
    const { size, color } = props
    const sizeClass = spinnerSizes[size]
    return (
       <svg className={`${defaultClass} ${sizeClass}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
       </svg>
    )
}

export default Spinner

Spinner.defaultProps = {
    size: 'md',
    color: 'gray'
}

Spinner.propTypes = {
    size: PropTypes.oneOf(['md', 'lg']),
    color: PropTypes.oneOf(['gray', 'blue', 'green'])
}