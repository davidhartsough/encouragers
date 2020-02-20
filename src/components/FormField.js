import React from 'react'
import "./FormField.css"

export default function FormField({ label, placeholder, type = "text", value, setValue }) {
    const onChange = ({ target }) => setValue(target.value);
    return (
        <div>
            <label>
                {label}
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange} />
            </label>
        </div>
    )
}
