import React from 'react'

const FormFieldDatePicker = ( {assignment, label}) => {
    return (
        <>
        <label for={assignment}>{label}</label>
        <input type="date" id={assignment}></input>
        </>
    )
}

export default FormFieldDatePicker