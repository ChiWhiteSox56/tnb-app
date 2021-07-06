import React from 'react'

const FormFieldNumeric = ({assignment, label, minValue}) => {
    return (
        <>
        <label for={assignment}>{label}</label>
            <input type="number" id={assignment} min={minValue}></input>
        </>
    )
}

export default FormFieldNumeric