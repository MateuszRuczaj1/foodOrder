import React from 'react'
const Input = function Input({ label, ...props }) {
    return (
        <p className='control'>
            <label htmlFor={props.id}>{label}</label>
            <input {...props} />
        </p>
    )
}
export default Input
