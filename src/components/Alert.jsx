import React from "react";
import PropTypes from 'prop-types'

const Alert = (props) => {
    const { children } = props

    return (
        <div className="alert-danger">
            {children}
        </div>
    )
}

Alert.defaultProps = {

}

Alert.propTypes = {
    type: PropTypes.oneOf(['success', 'warning', 'danger'])
}

export default Alert
