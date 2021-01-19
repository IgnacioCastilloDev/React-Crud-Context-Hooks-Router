import React, { useState } from 'react'

export const useModal = (initialState={}) => {
     
    const [modalValues, setModalValues] = useState(initialState)


    const handleModalInput = ({target}) => {
        

        setModalValues({

            ...modalValues,
            [target.name]:target.value
           
        })

        console.log(target.value)
       
      
    }
    return [modalValues,handleModalInput ,setModalValues]

}



