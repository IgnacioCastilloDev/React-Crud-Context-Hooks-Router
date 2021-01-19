import React, { useReducer } from 'react'
import { AppRouter } from './AppRouter'
import { contactReducer } from './contactReducer'
import { Form } from './Form'
import { NavBar } from './NavBar'
import { Table } from './Table'

export const Main = () => {


    
    const [datos, dispatch] = useReducer(contactReducer, [])


    const handleAdd = (newDato) => {
        
        dispatch({

            type:'add',
            payLoad:newDato
        })

    }

    const handleDelete = (id) => {
        
        dispatch({
            type:'delete',
            payLoad:id
        })
    }

    const handleEdit = (newValues) => {
        
        dispatch({
            type:'edit',
            payLoad:newValues
        })
    }

    return (
        <>
        
            <Form  handleAdd={handleAdd}/>
            <Table datos = {datos} handleDelete={handleDelete} handleEdit={handleEdit}/> 
       </>
    )
}
