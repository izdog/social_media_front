import React from "react";
import PropTypes from 'prop-types'

const alertTypes = {
    danger: 'bg-red-500 text-gray-50',
    warning: 'bg-amber-400 text-gray-50',
    primary: 'bg-sky-500 text-gray-50',
    success: 'bg-emerald-500 text-gray-50'
}

const Alert = (props) => {
    const { children, type } = props
    const colors = alertTypes[type]

    return (
        <div className={`p-2.5 my-2 ${colors}`}>
            {children}
        </div>
    )
}

Alert.defaultProps = {

}

Alert.propTypes = {
    type: PropTypes.oneOf(['success', 'warning', 'danger', 'primary'])
}

export default Alert
