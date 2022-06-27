import React, {SelectHTMLAttributes} from 'react'

import './style.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string;
    label: string;
    options: Array<{
        value:string
        label:string
    }>;
    placeholder?: string;
}

const Select: React.FC<SelectProps> = ({label, name,options, placeholder, ...rest}) => {
    return(

        <div className="select-block">
            
            <label htmlFor={label}> {label} </label>
            <select value="" placeholder={placeholder} id={name} {...rest}>
            <option value="" disabled   hidden>Selecione</option>
                {options.map(options =>{
                    return <option key={options.value} value={options.value}>{options.label}</option>
                })}
            </select>
                    
        </div>

    )
}

export default Select;