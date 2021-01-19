import React, { useState } from 'react'

export const useForm = (initialState = {}) => {
   

    
    const [formValues, setFormState] = useState(initialState)


    const handleInputChange = ({target}) => {
        

        setFormState({

            ...formValues,
            [target.name]:target.value
           
        })
        console.log(target.value)
      
    }


    return [formValues,handleInputChange]
}
