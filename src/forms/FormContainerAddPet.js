import React from 'react'
import FormFieldAddImage from '../components/FormFieldAddImage'
import FormFieldNumeric from '../components/FormFieldNumeric'
import FormFieldText from '../components/FormFieldText'
import FormFieldDatePicker from '../components/FormFieldDatePicker'

const FormContainerAddPet = () => {
    return (
        <div className="FormContainerAddPet">
            <FormFieldText assignment={"name"} label={"Pet's name"}></FormFieldText>
            <FormFieldDatePicker assignment={"birthdate"} label={"Pet's birthdate"}/>
            <FormFieldNumeric assignment={"age"} label={"Pet's age"} minValue={"0"}/>
            <FormFieldNumeric assignment={"weight"} label={"Pet's current weight"} minValue={"0"}/>
            <FormFieldAddImage/>
    </div>
        )
}

export default FormContainerAddPet