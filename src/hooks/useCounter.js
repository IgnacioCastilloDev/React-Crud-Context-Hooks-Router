import React, { useState } from 'react'

export const useCounter = (initialState     ) => {

    const [counter, setCounter] = useState(initialState)

    
    const handleAddCounter  = () => {
        setCounter(c=>counter+1)
    }


    

    return [counter,handleAddCounter]
}
