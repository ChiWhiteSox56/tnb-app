import React from 'react'

const FormFieldText = ({assignment, label}) => {
    return (
        <>
        <label for={assignment}>{label}</label>
        <input type="text" id={assignment} required></input>
        </>
    )
}

export default FormFieldText