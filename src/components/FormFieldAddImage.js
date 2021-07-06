import React from 'react'
import FormFieldText from './FormFieldText'

const FormFieldAddImage = () => {
    return (
        <>
        <label>Choose a profile picture:</label>
        <input type="file" id="pet-image" accept="image/png, image/jpeg"/>
        </>
    )
}

export default FormFieldAddImage
