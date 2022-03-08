import React from "react";
import PropTypes from 'prop-types'
import Spinner from "./Spinner";

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
    size: null,
    loading: false
}

Button.propTypes = {
    children: PropTypes.string,
    size: PropTypes.oneOf(['lg', 'sm']),
    disabled: PropTypes.bool,
    color: PropTypes.oneOf(['success','warning','danger','primary','secondary']),
    loading: PropTypes.bool
}

export default Button